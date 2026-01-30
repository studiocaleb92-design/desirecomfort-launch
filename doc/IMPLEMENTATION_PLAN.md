# DesireComfort Launch — Implementation Plan

**Goal:** Bring the Lovable-built site to parity with the reference site (desire-comfort.com) and fulfill the original brief (Stripe, conversion UX, trust, content).

**Reference:** [desire-comfort.com](https://desire-comfort.com) (password: `luitwi`)

---

## Todo Plan (Current)

| # | Task | Status |
|---|------|--------|
| 1 | Fix Product page: color selector updates main image & thumbnails | ✅ Done |
| 2 | Add product page video section (How it works / explainer) | ✅ Done |
| 3 | Add announcement bar (FREE SHIPPING WORLDWIDE) | ✅ Done |
| 4 | Stripe Buy Now: backend session + frontend redirect | ⏳ Pending |
| 5 | Nav/Footer: Order Now label, About/Contact/FAQ/Policy pages + routes | ✅ Done |
| 6 | Homepage: AS SEEN ON section + Featured product block | ✅ Done |
| 7 | Product: more images per color / use-case content (placeholders ok) | ✅ Done |

---

## Store images (desire-comfort.com)

To use product images from the reference store, run **on your machine** (network access to desire-comfort.com required):

```bash
pnpm run download-store-images
```

This downloads 10 images from desire-comfort.com into `public/images/` (`store-1.webp` … `store-10.png` and copies for `blush-pink.webp`, `dusty-rose.webp`, `cream.webp`, `black.webp`). The app uses these for the product page color gallery and homepage featured block; if a store image 404s, it falls back to existing assets.

---

## What Remains

1. **Stripe Buy Now** — Backend that creates a Stripe Checkout Session; frontend “Buy Now” (or “Checkout”) that sends variant + quantity and redirects to Stripe; success/cancel return pages.
2. **Replace placeholder images** (optional) — `src/lib/image-urls.ts` currently uses Picsum placeholders. Swap URLs for your own hero, product, and per-color images (or local assets in `src/assets` / `public`).
3. **Replace “AS SEEN ON” placeholders** — `AsSeenOnSection.tsx` uses “Logo 1–4” boxes; replace with real “As seen on” logos or remove the section.
4. **Optional polish** — Testimonials carousel (SocialProofSection), bundle pricing (Buy 2 get 10% off), single variant dropdown (Color + Size), Track Your Order link (external or page), full Privacy/Refund/Shipping copy.

---

## Phase 1 — Critical Fixes (Do First)

### 1.1 Fix Product Page Color Selector (“Other Color Button Not Working”)

**Problem:** Selecting a different color does not change the main product image or thumbnails.

**Tasks:**

1. **Define image sets per color**
   - Add at least one image per color (Blush Pink, Dusty Rose, Cream, Black), or reuse the same image set for all until real assets exist.
   - In code: e.g. `COLOR_IMAGES: Record<string, string[]>` or `variantImages: { [color]: string[] }`.

2. **Wire color selection to images**
   - In `Product.tsx`, when `selectedColor` changes:
     - Set `images` to the image array for that color (or fallback to current `[productHero, productVariants]`).
     - Set `activeImage` to `0` so the main image shows the first image of the selected color.

3. **Optional:** If adding more colors (e.g. Brown, Black, Lava Red, Apricot, etc.), add one image per color to `src/assets` or `public` and map them in the same structure.

**Files:** `src/pages/Product.tsx`, `src/assets/` or `public/` for new images.

**Acceptance:** Clicking each color updates the main image and thumbnail strip to that color’s images (or the same set if only one set exists).

---

### 1.2 Add Product Page Video Section

**Reference:** Product description includes embedded explainer videos (e.g. “How Does it Work”, “Period Underwear”).

**Tasks:**

1. Add a “How it works” or “Learn more” section below the product description (or inside the description block).
2. Embed one primary video:
   - Option A: YouTube iframe (e.g. Knix / Period Factory–style explainer; use a placeholder or real URL).
   - Option B: Hosted MP4 in `public/` and use `<video>` with poster.
3. Use responsive wrapper (e.g. 16:9) and accessible title/aria-label.

**Files:** `src/pages/Product.tsx`, optionally `src/components/ProductVideo.tsx`, `public/` if using MP4.

**Acceptance:** Product page shows at least one embedded video explaining use/benefits.

---

## Phase 2 — High Priority (Conversion & Trust)

### 2.1 Announcement Bar

**Reference:** “✈️ FREE SHIPPING WORLDWIDE ✈️” at top of page.

**Tasks:**

1. Add a slim bar above the header (or inside `Header.tsx` at the top).
2. Copy: “✈️ FREE SHIPPING WORLDWIDE ✈️” (or match brand wording).
3. Optional: dismissible (localStorage) or always visible; mobile-friendly.

**Files:** `src/components/Header.tsx` or new `src/components/AnnouncementBar.tsx`.

---

### 2.2 Stripe Checkout — “Buy Now” Flow

**Brief:** “Integrate Stripe (mandatory)”, “Simple Buy Now checkout flow”, “No complex cart logic”.

**Tasks:**

1. **Backend (required for Stripe)**
   - Create a small backend (e.g. Node/Express, or Vite server middleware) that:
     - Accepts: product/variant id, quantity, success/cancel URLs.
     - Creates a Stripe Checkout Session (or Payment Intent for custom UI).
     - Returns session URL or client secret for redirect.
   - Use Stripe API key from env; never expose secret key to frontend.

2. **Frontend**
   - Replace or supplement “Add to Cart” with “Buy Now” (or “Checkout”) that:
     - Collects: selected variant (color + size), quantity.
     - Calls backend to create Stripe session.
     - Redirects to Stripe Checkout URL.
   - Add success/cancel return routes (e.g. `/order/success`, `/order/cancel`) with simple thank-you or “continue shopping” message.

3. **Optional:** “Add to Cart” that stores selection in context/localStorage and a single “Checkout” that creates one Stripe session for all items (still “simple,” no full cart backend if not needed).

**Files:** New backend (e.g. `server/` or `api/`), `src/pages/Product.tsx`, new `src/pages/OrderSuccess.tsx` (and optional `OrderCancel.tsx`), env for `VITE_STRIPE_PUBLISHABLE_KEY` and server `STRIPE_SECRET_KEY`.

---

### 2.3 Align Nav and Footer with Reference

**Tasks:**

1. **Header:** Rename “Shop” to “Order Now” in nav and CTA; keep route `/product` or rename to `/order` if desired.
2. **Footer:** Add links for:
   - About Us → `/pages/about` (or `/about`)
   - Contact Us → `/pages/contact` (or `/contact`)
   - FAQ → `/pages/faq` or `/faq`
   - Privacy Policy → `/pages/privacy`
   - Refund Policy → `/pages/refund`
   - Shipping & Delivery → `/pages/shipping`
   - Track Your Order → external URL or `/pages/track` (e.g. link to Track123 or internal page)

**Files:** `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/App.tsx` (routes), new pages under `src/pages/` (About, Contact, FAQ, Privacy, Refund, Shipping, Track).

---

## Phase 3 — Content & Parity (Medium Priority)

### 3.1 Images and Use-Case Content

**Reference:** Multiple product images per color, lifestyle/use-case imagery and videos.

**Tasks:**

1. **Asset list:** Define needed images:
   - Hero: optional alternate or additional hero image.
   - Product: at least one image per color (or per variant); multiple angles if available.
   - Sections: Solution/Benefits/How it works — optional photos or illustrations.
2. **Placeholders:** If real assets are not ready, use placeholders (e.g. same image with a “Color: X” overlay or use `placeholder.svg`) so color→image logic works.
3. **Copy:** Align product and section copy with reference (Desire 72™, “Discreet Protection, Powerful Performance,” specifications, etc.) without copying verbatim if there are legal concerns.

**Files:** `src/assets/`, `public/`, section components and `Product.tsx`.

---

### 3.2 Homepage — “AS SEEN ON” and Featured Product

**Reference:** “AS SEEN ON” logos; product gallery; featured product block with variant selector and Add to cart.

**Tasks:**

1. **AS SEEN ON:** Add a section with logo placeholders or real “As seen on” logos; style to match reference.
2. **Featured product block:** Add a section (e.g. after Hero or before CTA) with:
   - One product image (or first variant).
   - Title, price, “Order Now” link to `/product`.
   - Optional: compact color/size selector and “Add to cart” / “Buy Now” that goes to product page or triggers checkout (if Stripe is ready).

**Files:** New `src/components/sections/AsSeenOnSection.tsx`, new `src/components/sections/FeaturedProductSection.tsx`, `src/pages/Index.tsx`.

---

### 3.3 Product Page — Variant UX and Bundle Pricing (Optional)

**Reference:** Single “Color / Size” combobox; “Buy 1”, “Buy 2 get 10% off (Most Popular)”.

**Tasks:**

1. **Variant dropdown (optional):** Replace separate Color + Size with one dropdown “Variant” (e.g. “Brown / M”) and derive color, size, images, and price from selected variant. Keep accessibility (labels, aria).
2. **Bundle pricing:** Add tiers, e.g. “Buy 1 — $34.99”, “Buy 2 — 10% off — $62.98 (Most Popular)”. Update displayed price and Stripe line items when quantity or tier changes.

**Files:** `src/pages/Product.tsx`, product/variant config (constants or API).

---

### 3.4 Static Pages (About, Contact, FAQ, Policies)

**Tasks:**

1. Create simple, responsive pages:
   - **About Us:** Brand story, mission, optional team/values.
   - **Contact Us:** Contact form (email or form service) and/or email/phone.
   - **FAQ:** Accordion or list of Q&As (shipping, returns, sizing, care).
   - **Privacy Policy,** **Refund Policy,** **Shipping & Delivery:** Legal/info text; can be markdown or hardcoded initially.
   - **Track Your Order:** Link to external tracker or embed/link to Track123 (or similar).

2. Add routes in `App.tsx` and link from Header/Footer as in 2.3.

**Files:** `src/pages/About.tsx`, `Contact.tsx`, `FAQ.tsx`, `Privacy.tsx`, `Refund.tsx`, `Shipping.tsx`, `Track.tsx` (or under `pages/pages/`), `App.tsx`.

---

## Phase 4 — Polish (Lower Priority)

### 4.1 Testimonials Carousel

**Reference:** Homepage testimonials in a carousel (e.g. 3 slides).

**Tasks:** Use existing carousel component to display testimonials; keep current copy or align with reference (Sarah M., Kate D., Anna M.). Optional: auto-advance and keyboard/slide controls.

**Files:** `src/components/sections/SocialProofSection.tsx`, `src/components/ui/carousel.tsx`.

---

### 4.2 Expand Colors and Sizes

**Reference:** 10 colors (Brown, Black, Lava Red, Apricot, Orange, Caramel Orange, Grey, Blue, Wine Red, Green), 8 sizes (XS–4XL).

**Tasks:** Add remaining colors and sizes to product config; add one image per new color (or reuse); update Stripe products/prices if backend uses them per variant.

**Files:** `src/pages/Product.tsx`, product config, backend if applicable.

---

### 4.3 SEO and Performance

**Tasks:** Meta titles/descriptions per route; Open Graph image; optional sitemap and structured data for product; lazy-load images below the fold; ensure Core Web Vitals (images, fonts, layout).

**Files:** `index.html`, route-level meta (e.g. React Helmet or similar), `public/robots.txt`, `public/og-image.jpg`.

---

## Implementation Order (Suggested)

| Order | Item | Phase | Est. effort |
|-------|------|--------|-------------|
| 1 | Fix color → image on Product page | 1.1 | Small |
| 2 | Add product page video section | 1.2 | Small |
| 3 | Announcement bar | 2.1 | Small |
| 4 | Stripe “Buy Now” (backend + frontend) | 2.2 | Medium–Large |
| 5 | Nav + footer links + static pages (About, Contact, FAQ, etc.) | 2.3, 3.4 | Medium |
| 6 | AS SEEN ON + Featured product on homepage | 3.2 | Small–Medium |
| 7 | More images per color / use-case content | 3.1 | Medium (depends on assets) |
| 8 | Variant combobox + bundle pricing (optional) | 3.3 | Medium |
| 9 | Testimonials carousel, extra colors/sizes, SEO | 4.x | Small–Medium |

---

## Doc Folder Contents

- **PROJECT_ANALYSIS.md** — Full comparison of current app vs reference site and brief.
- **IMPLEMENTATION_PLAN.md** — This file; phased tasks to complete the app.

Use these together to track progress and prioritize work (e.g. critical first, then high, then medium/polish).
