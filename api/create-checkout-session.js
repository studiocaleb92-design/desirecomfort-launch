import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: true,
  },
};

function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key, { apiVersion: "2024-11-20.acacia" });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { items, successUrl, cancelUrl } = req.body || {};

  if (!items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: "Cart items are required" });
  }

  const stripe = getStripe();
  if (!stripe) {
    console.error("STRIPE_SECRET_KEY is not set");
    return res.status(500).json({ error: "Server configuration error" });
  }

  const origin = successUrl?.replace(/\/[^/]*$/, "") || req.headers.origin || "http://localhost:5173";
  const success = successUrl || `${origin}/order-success`;
  const cancel = cancelUrl || `${origin}/product`;

  try {
    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          description: [item.color, item.size, item.packLabel].filter(Boolean).join(" · ") || undefined,
          images: item.image && item.image.startsWith("http") ? [item.image] : undefined,
        },
        unit_amount: Math.round(Number(item.price) * 100),
      },
      quantity: Number(item.quantity) || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: success,
      cancel_url: cancel,
      allow_promotion_codes: true,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err.message);
    return res.status(500).json({ error: err.message || "Failed to create checkout session" });
  }
}
