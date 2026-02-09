# Stripe setup – step by step

**Do not paste your Stripe secret key in chat or in code.** Add it only in the places below.

---

## Variable names (copy these, add your key after the `=`)

Use these **exact names** when adding your keys.

### Local (`.env` in project root) and Vercel (Settings → Environment Variables)

| Name | You add |
|------|--------|
| `STRIPE_SECRET_KEY` | Stripe **secret** key (Dashboard → Developers → API keys). |
| `STRIPE_WEBHOOK_SECRET` | Webhook **signing secret** (Dashboard → Developers → Webhooks → your endpoint). |
| `SUPABASE_URL` | Supabase **Project URL** (Settings → API). |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase **service_role** key (Settings → API; keep secret). |

For a **full store with order records** (Shopify-style), use all four and follow **STORE_PLAN.md** (webhook + Supabase). For **checkout only** (no order DB), you only need `STRIPE_SECRET_KEY`.

---

## 1. Get your API keys from Stripe

1. Log in at [dashboard.stripe.com](https://dashboard.stripe.com).
2. Click **Developers** → **API keys**.
3. You’ll see:
   - **Publishable key** (`pk_test_...` or `pk_live_...`) – not required for this checkout flow.
   - **Secret key** (`sk_test_...` or `sk_live_...`) – **this is the one you use.** Never put it in the frontend or in chat.

Use **test** keys while developing; switch to **live** keys for real payments.

---

## 2. Local development (your computer)

1. In the project root (same folder as `package.json`), create a file named **`.env`**.
2. Add one line (use the name above, paste your key after `=`):

   ```env
   STRIPE_SECRET_KEY=paste_your_secret_key_from_stripe_dashboard_here
   ```

3. Save the file. (`.env` is in `.gitignore` – don’t commit it.)

To run the API locally, use Vercel Dev:

```bash
pnpm i
npx vercel dev
```

Then open the URL it gives you and test **Check out →**.

---

## 3. Production (Vercel)

1. Go to [vercel.com](https://vercel.com) → your project → **Settings** → **Environment Variables**.
2. Add:
   - **Name:** `STRIPE_SECRET_KEY`
   - **Value:** your Stripe **secret** key (e.g. `sk_live_...` for production).
   - **Environment:** Production (and Preview if you want).
3. Save and **redeploy** the project.

After that, checkout on your live site will use Stripe.

---

## 4. What the site does (already built in the app)

- **Cart → Check out →** sends the cart to `/api/create-checkout-session`.
- The API (using `STRIPE_SECRET_KEY`) creates a Stripe Checkout session and returns a URL.
- The browser redirects to Stripe’s payment page.
- After payment, Stripe redirects to **Order success** (`/order-success`) or, if the user cancels, back to **Product** (`/product`).

The app is already wired for this. You only need to add `STRIPE_SECRET_KEY` (locally and on Vercel) and redeploy.

---

## 5. Products and prices – do you need to create them in Stripe?

**No.** The app uses **dynamic line items**: the API sends the cart (name, price, quantity) to Stripe when the user checks out. Stripe creates the session from that; you do **not** need to create Products or Prices in the Stripe Dashboard or add any Product ID or Price ID. Everything is driven by your site’s cart.

---

## 6. Webhooks and Supabase (full store)

To **keep a record of every order** (like a Shopify store), the app includes:

- **Webhook** – `POST /api/stripe-webhook` – Stripe calls this when payment succeeds; we verify the request and save the order.
- **Supabase** – Orders are stored in a table `orders` (customer email, amount, line items, etc.).

Setup is in **STORE_PLAN.md**: create a Supabase project, run the SQL to create the `orders` table, add the four env vars (Stripe + webhook secret + Supabase URL and service role key), and in Stripe add a webhook endpoint pointing to `https://your-site.vercel.app/api/stripe-webhook` with event `checkout.session.completed`.

---

## 7. Checklist

- [ ] Stripe account created.
- [ ] **Secret** key copied from Dashboard → Developers → API keys.
- [ ] **Local:** `.env` with `STRIPE_SECRET_KEY=` + your key (use `npx vercel dev` for local API).
- [ ] **Vercel:** Environment variable **Name** `STRIPE_SECRET_KEY`, **Value** = your key, **Environment** Production, then redeploy.
- [ ] Never commit `.env` or paste the secret key anywhere.

If something doesn’t work, check the browser console and (on Vercel) the **Functions** logs for your project.
