# Kungfubuy supplier connection (delivery/fulfillment)

Kungfubuy will handle delivery for Desire Comfort. This guide covers storing your API credentials securely and connecting the site so orders can be sent to them for fulfillment.

---

## 1. Store your credentials securely

**Never commit API keys or secrets to Git.**

- **Local:** Add to `.env` in the project root (same place as Stripe/Supabase vars).
- **Production (Vercel):** Project → Settings → Environment Variables. Add each variable, set to **Production** (and Preview if you use preview deploys). Mark as **Sensitive** if available.

Use the **exact variable names** below so the code can read them:

| Variable name | Description | Example (do not paste real keys) |
|---------------|-------------|----------------------------------|
| `KUNGFUBUY_API_KEY` | API key from Kungfubuy | Your API key value |
| `KUNGFUBUY_SECRET_KEY` | Secret key from Kungfubuy | Your secret value |
| `KUNGFUBUY_API_BASE_URL` | Base URL for Kungfubuy API (if they gave one) | `https://api.kungfubuy.com` or similar |

If Kungfubuy gave different names (e.g. `KUNGFUBUY_APP_KEY`), we can rename these in the code to match what they provided.

---

## 2. Get the API details from Kungfubuy

Their public docs focus on the Shopify app. For a custom site (like yours), you need from **Kungfubuy support** or their developer/help docs:

1. **Base URL**  
   e.g. `https://api.kungfubuy.com` or `https://open.kungfubuy.com`.

2. **Authentication**  
   How they expect the API key and secret:
   - Header: `X-API-Key: <api_key>` and `Authorization: Bearer <secret>`  
   - Or: single header, or query params (less common).  
   Get the **exact header names and format**.

3. **Endpoint to submit an order**  
   e.g. `POST /v1/orders` or `POST /order/create`.  
   So we can send each paid Stripe order to Kungfubuy for fulfillment.

4. **Request body format**  
   Required fields for one order, for example:
   - Customer: email, name, shipping address (address line, city, state, postal code, country).
   - Items: product name/SKU, quantity, unit price (if needed).
   - Order ID (we can send our Stripe session ID or Supabase order id so you can match).

5. **Response**  
   What they return (e.g. `order_id`, `tracking_number` later).  
   We can store their order ID or tracking in your `orders` table if you want.

**Who to ask:** Kungfubuy Help Center → [Connect your store](https://www.kungfubuy.com/index/about/connect.html), or Contact Us / your account manager. Ask for: “API documentation for custom store integration (non-Shopify)” and “order submission endpoint and authentication.”

---

## 3. How it will work on Desire Comfort

Current flow:

1. Customer pays on **Stripe Checkout**.
2. **Stripe** sends a webhook to your site (`/api/stripe-webhook`).
3. Your **webhook** saves the order to **Supabase** `orders` table.

After Kungfubuy is connected:

4. In the same webhook (after saving to Supabase), we **call Kungfubuy’s API** with:
   - customer email, name, shipping address (from Stripe),
   - line items (name, quantity, price),
   - your internal order/session id.
5. Kungfubuy handles procurement and delivery; you can later add tracking to Supabase if they provide it.

So: **one paid order → one row in Supabase + one order sent to Kungfubuy.**

---

## 4. What we need from you

1. **Confirm variable names**  
   Did Kungfubuy give you names like “API Key” and “Secret Key”? We’re using `KUNGFUBUY_API_KEY` and `KUNGFUBUY_SECRET_KEY` in code; if they use different terms, we can align.

2. **Add env vars**  
   - Locally: add to `.env`.  
   - Vercel: add the same names in Environment Variables and redeploy.

3. **Share API details (when you have them)**  
   - Base URL, auth method, order endpoint, and request body format (or a link to their API docs).  
   Then we can implement the exact request in the Stripe webhook and optionally store Kungfubuy order id/tracking in Supabase.

---

## 5. After integration

- **Stripe webhook** will still save every paid order to Supabase.
- Each of those orders will also be sent to Kungfubuy so they can fulfill and deliver.
- If Kungfubuy returns an order id or tracking, we can add columns to `orders` (e.g. `kungfubuy_order_id`, `tracking_number`) and display tracking on an order status page later.

---

## 6. Security checklist

- [ ] API key and secret are only in `.env` (local) and Vercel Environment Variables (production).
- [ ] `.env` is in `.gitignore` (already done).
- [ ] Variable names in Vercel match exactly: `KUNGFUBUY_API_KEY`, `KUNGFUBUY_SECRET_KEY` (and `KUNGFUBUY_API_BASE_URL` if used).
- [ ] After adding vars on Vercel, redeploy so the webhook can use them.

Once you have the API base URL, endpoint path, and auth format from Kungfubuy, share them and we can wire the webhook to send orders to them automatically.
