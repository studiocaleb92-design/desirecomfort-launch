# Linking Stripe to Desire Comfort

After the cart and other fixes are in place, you can connect Stripe so "Check out →" in the cart drawer takes customers to payment.

## What you need

1. **Stripe account**  
   Sign up at [stripe.com](https://stripe.com) if you don’t have one.

2. **API keys**  
   From the Stripe Dashboard: **Developers → API keys**  
   - **Publishable key** (e.g. `pk_live_...` or `pk_test_...`) — safe to use in the browser.  
   - **Secret key** (e.g. `sk_live_...` or `sk_test_...`) — must **never** be in the frontend; use it only on your backend.

3. **How you want to charge**  
   - **Stripe Checkout**  
     Your backend creates a [Checkout Session](https://stripe.com/docs/api/checkout/sessions) with line items (from the cart), then redirects the customer to Stripe’s hosted payment page. After payment, Stripe redirects back to your success/cancel URLs.  
   - **Payment Element (Stripe Elements)**  
     You host the payment form on your site. The frontend uses the publishable key and your backend creates a [PaymentIntent](https://stripe.com/docs/payments/payment-intents) and returns the client secret so the frontend can confirm the payment.

## Where to plug it in

- **Cart drawer**  
  The "Check out →" button is in `src/components/CartDrawer.tsx`.  
  - For **Checkout**: replace the `onClick` with a call to your backend to create a Checkout Session, then redirect to `session.url`.  
  - For **Payment Element**: redirect to a checkout page (e.g. `/checkout`) that loads the cart, gets a PaymentIntent from your backend, and embeds the Payment Element.

- **Backend**  
  You need a small backend (e.g. Node/Express, Vercel serverless, or similar) that:  
  - Reads the cart (or receives cart data from the frontend).  
  - Uses the **secret key** to create a Checkout Session or PaymentIntent.  
  - For Checkout: returns the session URL (or id) so the frontend can redirect.  
  - For Payment Element: returns the client secret so the frontend can confirm the payment.

- **Environment variables**  
  - Frontend: only the **publishable key** (e.g. `VITE_STRIPE_PUBLISHABLE_KEY`).  
  - Backend: the **secret key** (e.g. `STRIPE_SECRET_KEY`) and optionally webhook signing secret if you use webhooks.

## Summary

| Item | Where |
|------|--------|
| Stripe account & API keys | [Dashboard](https://dashboard.stripe.com) |
| Checkout button | `src/components/CartDrawer.tsx` — wire to your backend and redirect or go to `/checkout` |
| Create Session / PaymentIntent | Your backend (never put the secret key in the frontend) |
| Keys in code | Publishable in frontend env; secret only in backend env |

If you tell me whether you prefer **Checkout** (redirect to Stripe) or **Payment Element** (pay on your site) and which stack your backend uses, I can outline the exact steps and code changes next.
