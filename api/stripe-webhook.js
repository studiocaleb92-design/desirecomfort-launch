import Stripe from "stripe";
import { createClient } from "@supabase/supabase-js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-11-20.acacia",
});

// Raw body required for Stripe signature verification
export const config = {
  api: { bodyParser: false },
};

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return res.status(500).json({ error: "Webhook not configured" });
  }
  if (!supabaseUrl || !supabaseServiceKey) {
    console.error("SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is not set");
    return res.status(500).json({ error: "Database not configured" });
  }

  const sig = req.headers["stripe-signature"];
  if (!sig) {
    return res.status(400).json({ error: "Missing stripe-signature header" });
  }

  let rawBody;
  try {
    rawBody = await getRawBody(req);
  } catch (e) {
    console.error("Failed to read request body:", e);
    return res.status(400).json({ error: "Invalid body" });
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  if (event.type !== "checkout.session.completed") {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;

  try {
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ["line_items.data.price"],
    });

    const lineItems = (fullSession.line_items?.data || []).map((item) => ({
      name: item.description || item.price?.product_data?.name || "Item",
      quantity: item.quantity,
      unit_amount: item.price?.unit_amount ?? 0,
      amount_total: item.amount_total ?? 0,
      description: item.price?.product_data?.description || null,
    }));

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const customerEmail =
      fullSession.customer_email || fullSession.customer_details?.email || "";
    if (!customerEmail) {
      console.warn("Checkout session missing customer email:", fullSession.id);
    }

    const { error } = await supabase.from("orders").upsert(
      {
        stripe_checkout_session_id: fullSession.id,
        stripe_payment_intent_id: fullSession.payment_intent || null,
        customer_email: customerEmail || "unknown",
        customer_name:
          fullSession.customer_details?.name ||
          [fullSession.customer_details?.address?.line1].filter(Boolean).join(", ") ||
          null,
        amount_total: fullSession.amount_total ?? 0,
        currency: (fullSession.currency || "usd").toLowerCase(),
        status: fullSession.payment_status === "paid" ? "paid" : fullSession.payment_status || "paid",
        line_items: lineItems,
      },
      {
        onConflict: "stripe_checkout_session_id",
        ignoreDuplicates: true,
      }
    );

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ error: "Failed to save order" });
    }
  } catch (err) {
    console.error("Webhook handler error:", err);
    return res.status(500).json({ error: "Webhook handler failed" });
  }

  return res.status(200).json({ received: true });
}
