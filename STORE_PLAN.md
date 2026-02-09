# Desire Comfort – Store plan (Shopify-style)

This doc describes how the site works as a full store: **Stripe** for payments, **webhook** to record orders, and **Supabase** as the backend database so you have a permanent record of every order and customer.

---

## 1. Architecture overview

```
Customer adds to cart → Check out → Stripe Checkout (payment)
                                        ↓
                    Stripe sends webhook (checkout.session.completed)
                                        ↓
                    Your API verifies webhook → saves order to Supabase
                                        ↓
                    You see the order in Supabase (and can build an admin later)
```

- **Stripe Checkout** – Customer pays on Stripe’s page; no card data touches your server.
- **Webhook** – Stripe calls your endpoint when payment succeeds; your server then stores the order.
- **Supabase** – Single source of truth for orders (and optionally customers). You can query, export, or build an admin UI on top.

No need to create products or prices in Stripe; the cart is sent at checkout and the webhook stores what was actually paid for.

---

## 2. What gets stored (Supabase)

One main table is enough to start:

### Table: `orders`

| Column | Type | Purpose |
|--------|------|--------|
| `id` | uuid | Primary key (auto). |
| `stripe_checkout_session_id` | text, unique | Stripe session ID (avoids duplicate orders if webhook retries). |
| `stripe_payment_intent_id` | text | Payment reference. |
| `customer_email` | text | From Stripe Checkout. |
| `customer_name` | text | If Stripe collects it. |
| `amount_total` | integer | Total paid, in cents. |
| `currency` | text | e.g. `usd`. |
| `status` | text | e.g. `paid`, `refunded`. |
| `line_items` | jsonb | Array of items: name, quantity, unit price, description (color/size/pack). |
| `created_at` | timestamptz | When the order was saved. |

You can add later: shipping address, phone, internal notes, etc.

---

## 3. Environment variables (all in one place)

Use these **exact names** in `.env` (local) and in **Vercel → Settings → Environment Variables** (production).

### Stripe

| Name | Where to get it | Used for |
|------|------------------|----------|
| `STRIPE_SECRET_KEY` | Stripe Dashboard → Developers → API keys | Checkout session + webhook (retrieve session). |
| `STRIPE_WEBHOOK_SECRET` | Stripe Dashboard → Developers → Webhooks → (your endpoint) → Signing secret | Verifying that webhook requests really come from Stripe. |

### Supabase

| Name | Where to get it | Used for |
|------|------------------|----------|
| `SUPABASE_URL` | Supabase project → Settings → API → Project URL | Backend talking to Supabase. |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project → Settings → API → `service_role` (secret) | Backend inserting orders (bypasses RLS). Never use in frontend. |

So in total you add:

- **Local `.env`:**  
  `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`
- **Vercel:**  
  Same four names; value = your production (or test) keys/secrets.

---

## 4. Step-by-step setup

### A. Stripe

1. **API keys** – Developers → API keys: copy **Secret key** → `STRIPE_SECRET_KEY` (test or live).
2. **Webhook** – Developers → Webhooks → Add endpoint:
   - **URL (production):** `https://your-vercel-domain.vercel.app/api/stripe-webhook`
   - **Events:** `checkout.session.completed`
   - After saving, open the endpoint and copy the **Signing secret** → `STRIPE_WEBHOOK_SECRET`.

For local testing you can use Stripe CLI to forward events and get a temporary signing secret (see Stripe docs).

### B. Supabase

1. Create a project at [supabase.com](https://supabase.com).
2. In **SQL Editor**, run the script from `supabase/migrations/001_orders.sql` (or the SQL in this repo that creates the `orders` table).
3. In **Settings → API**: copy **Project URL** → `SUPABASE_URL`, and **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`.

### C. Vercel

1. **Settings → Environment Variables**: add the four variables above (production values).
2. **Redeploy** so the new webhook and Supabase env vars are used.

### D. This repo (already implemented)

- **Checkout** – Cart → `/api/create-checkout-session` → redirect to Stripe.
- **Webhook** – `/api/stripe-webhook` verifies Stripe’s signature and inserts one row per successful payment into Supabase `orders`.
- **Supabase** – Table schema: `supabase/migrations/001_orders.sql`. Run that SQL in Supabase (Dashboard → SQL Editor) once. The webhook uses `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` to insert orders.

---

## 5. How you use it day to day

- **Orders** – All paid orders appear in Supabase → **Table Editor** → `orders`. You can sort by `created_at`, filter by email, export CSV, etc.
- **Optional later:**  
  - Admin page in the app that reads from `orders` (using a secure API or Supabase with RLS so only you can see it).  
  - Emails: use the webhook to trigger a “thank you” or “order received” email (e.g. Resend, SendGrid) using `customer_email` and `line_items`.

---

## 6. Security notes

- **Webhook** – Always verify the request with `STRIPE_WEBHOOK_SECRET`; the handler in the repo does this.
- **Supabase** – Use `SUPABASE_SERVICE_ROLE_KEY` only in server-side code (Vercel API routes). Never expose it in the frontend.
- **Stripe** – Secret key and webhook secret only in env vars, never in code or chat.

---

## 7. Checklist

- [ ] Stripe: `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` (webhook endpoint added, signing secret copied).
- [ ] Supabase: project created, `orders` table created, `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` copied.
- [ ] Local: `.env` has all four variables; run `npx vercel dev` to test.
- [ ] Vercel: same four env vars set → redeploy.
- [ ] Test: place an order → check Stripe Dashboard and Supabase `orders` table.

This gives you a Shopify-like flow: pay with Stripe, keep every order and customer detail in Supabase, and optionally extend with admin UI or email later.
