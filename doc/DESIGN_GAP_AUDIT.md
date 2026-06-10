# Landing Page Design Gap Audit

**Date:** June 2026  
**Scope:** Homepage (`src/pages/Index.tsx`) and global chrome (Header, Footer, StickyCtaBar, WhatsAppFloat)  
**Reference:** Aspelin-inspired editorial gallery — `doc/design system/DESIGN.md`, inspo screenshots in `doc/design system/inspo/`

**Design lenses applied:**

| Lens | Source | Role |
|------|--------|------|
| Desire Comfort design system | `doc/design system/DESIGN.md`, `.cursor/skills/desirecomfort-design/` | Primary authority — warm parchment, ModernEra, outlined UI, photography-led |
| minimalist-ui | `.agents/skills/minimalist-ui/` | Anti-SaaS guardrails — flat surfaces, no Lucide clutter, no gradients |
| emil-design-eng | `.agents/skills/emil-design-eng/` | Polish pass — intentional motion, invisible craft details |

---

## Executive Summary

The **token layer and button primitives** are largely aligned with the design system. The **page composition and section components** are not.

The current homepage reads as a DTC conversion funnel (15+ stacked sections, promo bars, urgency copy, icon grids, card shadows). The target direction — modeled on the Aspelin inspo screenshots — is an **editorial gallery**: full-bleed photography, sparse navigation, flat outlined UI, asymmetric typography, and long vertical breaths between sections.

| Layer | Alignment |
|-------|-----------|
| Design tokens (`design-tokens.css`, `tailwind.config.ts`) | ~80% |
| UI primitives (`button.tsx`) | ~70% |
| Page composition (`Index.tsx` structure) | ~15% |
| Section components | ~10% |
| Global chrome (header, footer, sticky bars) | ~5% |

**Root cause:** Tokens were migrated; section markup and layout patterns were not.

---

## Inspiration Reference (North Star)

The three screenshots in `doc/design system/inspo/` share these traits:

- **Photography leads** — full-bleed images carry visual weight; UI stays transparent and quiet
- **Sparse chrome** — logo left, "Menu" + one outlined accent button right; no promo marquees
- **Typographic restraint** — modest sizes, left-aligned headings, asymmetry (title left / body right)
- **Flat surfaces** — no card shadows; images are sharp-cornered and bleed to edges
- **Section rhythm** — cream canvas ↔ dark photographic breaks ↔ cream again
- **Footer anchor** — deep walnut background with oversized watermark wordmark
- **Editorial grids** — varied image proportions, captions below — not uniform product tiles

`DESIGN.md` encodes this almost verbatim. The landing page largely does not follow it yet.

---

## Cross-System Tensions (Resolve Before Building)

The three design skills do not fully agree. Recommended resolution for Desire Comfort:

| Topic | desirecomfort-design | minimalist-ui | **Decision** |
|-------|---------------------|---------------|--------------|
| CTA style | Outlined only | Solid black fill ok | **Outlined** — matches inspo + existing `button.tsx` |
| Canvas color | Warm Parchment `#ffebd0` | White/bone `#F7F6F3` | **Warm Parchment** — brand identity |
| Serif headings | ModernEra only | Serif for hero | **ModernEra only** — inspo uses one sans throughout |
| Max type size | 40px hard cap | Flexible | **40px cap** — signature restraint |
| Motion | Minimal | Subtle fade-in | **emil-design-eng** — intentional, not decorative |

**Primary authority:** `DESIGN.md` + inspo screenshots. Use minimalist-ui to reject SaaS defaults; use emil-design-eng for the polish pass.

---

## Identified Gaps

### 1. Page DNA — Funnel vs. Gallery

**Current:** 15+ stacked sections on the homepage — Pain, Solution, Gallery, Featured Product, Comparison, Guarantee, How It Works (×2), Daily Routine, Videos, Benefits, Reviews, FAQ, About, Contact, CTA — plus global StickyCtaBar and WhatsAppFloat.

**Target:** Gallery-walk rhythm — hero photograph → one or two cream content blocks → photographic break → sparse grid. Few sections, generous whitespace.

**Gap:** Section density and repetition fight minimalism regardless of palette.

---

### 2. Hero

**Current (`HeroSection.tsx`):**

- Centered text stack over a washed-out image (40% opacity + gradient overlay)
- Trust badge pill with Shield icon
- Headline exceeds 40px (`lg:text-5xl`)
- Scroll indicator animation
- CTA with ShoppingBag icon

**Target (`DESIGN.md` — Full-Bleed Editorial Hero):**

- Full-viewport photograph at full opacity, no tint overlay
- Headline bottom-left in Warm Parchment, ~40px ModernEra 400
- Transparent header floating on the image
- Outlined CTA, no icon

**Gap:** Structurally a SaaS hero template, not an architectural portfolio opener.

---

### 3. Header

**Current (`Header.tsx`):**

- Two promo strips (static "FREE SHIPPING" + scrolling marquee with emojis)
- Frosted opaque bar (`bg-background/80 backdrop-blur-md`)
- Seven nav links + CTA button
- Hardcoded `#C8A24A` gold in marquee

**Target (`DESIGN.md` — Header Bar):**

- Wordmark top-left, "Meny" + one outlined button top-right
- Transparent over hero imagery
- No promo bars

**Gap:** Header alone signals e-commerce funnel, not editorial site.

---

### 4. Shadows, Gradients, and Elevation

**Design system rule:** No shadows. No gradients. Flat surfaces only.

**Current violations:**

| Pattern | Locations |
|---------|-----------|
| `shadow-soft`, `shadow-elevated` | Benefits, Comparison, FAQ, Product Gallery, Featured Product, How It Works, HomeAbout/Contact, Solution — **note: these classes are not defined in `tailwind.config.ts`** |
| `bg-gradient-hero`, `bg-gradient-to-r/br` | Hero, CTA, HowItWorks |
| `hover:-translate-y-1` card lift | BenefitsSection |
| `hover:scale-[1.06]` image zoom | FeaturedProductSection |
| Blur orbs | CTASection |
| Explicit box shadow | StickyCtaBar |

**Gap:** Depth comes from shadows and motion instead of photography and Parchment ↔ Walnut surface contrast.

---

### 5. Border Radius

| Element | Current | Design system |
|---------|---------|---------------|
| Images | `rounded-2xl` throughout | `0px` — sharp, full-bleed |
| Cards / testimonials | `rounded-2xl` | `0px` |
| Videos | `rounded-xl` | `0px` |
| Badges / icon holders | `rounded-full` pills | 8px on buttons/links only |

**Gap:** Product gallery uses uniform 256×256 rounded squares. Inspo uses asymmetric masonry with varied aspect ratios and no containers.

---

### 6. Filled UI vs. Outlined-Only

`button.tsx` is correct (outlined variants). Sections bypass it:

| Component | Violation |
|-----------|-----------|
| FeaturedProductSection | Pack/size selectors use `bg-primary` filled pills |
| SolutionSection | Floating badge `bg-primary text-primary-foreground` |
| Footer | Filled circular social icon buttons |
| Urgency badges | `bg-[#C8A24A]/15`, `bg-success/10` filled chips |

**Design system rule:** Outlined buttons exclusively — no filled CTAs.

---

### 7. Iconography

Lucide icons appear in nearly every section (Pain, Benefits, How It Works, Social Proof, Footer, Header, etc.).

| System | Rule |
|--------|------|
| desirecomfort-design | No icons or graphics over photographs |
| minimalist-ui | Bans Lucide; prefer Phosphor/Radix or typographic affordances |

**Gap:** Icon grids read as SaaS feature sections, not editorial document layout.

---

### 8. Typography

| Issue | Examples |
|-------|----------|
| Exceeds 40px cap | `lg:text-5xl` in Hero, Pain, Benefits, SocialProof, CTA |
| `font-serif` on every heading | Mimics SaaS "serif = premium" convention (technically maps to ModernEra) |
| Eyebrow labels | `uppercase tracking-wider text-primary` on almost every section — absent in inspo |
| Centered layout | Inspo uses left-aligned, asymmetric blocks |

---

### 9. Color Discipline

Chromatic colors outside the warm-neutral palette:

| Color | Usage |
|-------|-------|
| `#B45309` | Urgency orange — Featured Product, CTA |
| `#C8A24A` | Promo gold — Header marquee, StickyCtaBar, discount badges |
| `#25D366` | WhatsApp float button |
| `--success: #3d6b4f` | Check marks, verified badges |
| `--destructive` | shadcn default red |

**Allowed accents per DESIGN.md:** Amber Glow (`#fee197`) and Muted Gold (`#987f61`) only.

---

### 10. Footer

**Current (`Footer.tsx`):** Light cream (`bg-cream-dark`), standard link columns, rounded social pills.

**Target (`DESIGN.md` — Footer):** Walnut Shell (`#2f2116`) background, Warm Parchment text, oversized watermark wordmark.

**Gap:** Reads as a standard Shopify footer, not an editorial anchor.

---

### 11. Conversion Chrome

Global elements in `App.tsx`:

- **StickyCtaBar** — urgency copy, strikethrough pricing, discount badge, box shadow
- **WhatsAppFloat** — bright green pill, shadow, scale hover
- **CartDrawer** — functionally needed; visually loud

**Gap:** Appropriate for conversion; incompatible with Aspelin-level minimalism unless restrained or scoped to product/checkout pages only.

---

### 12. Copy and Tone

| Current | Editorial target |
|---------|------------------|
| "Trusted by 50,000+ women" | Specific, understated claims |
| "Limited stock · Selling fast · Offer ends soon" | No scarcity theater |
| "Flash sale" + Flame icon | Plain product language |
| Emojis in shipping bar | None |
| Centered marketing headlines | Left-aligned, document-style prose |

---

## Section-by-Section Alignment

| Section | Alignment | Main gaps |
|---------|-----------|-----------|
| Hero | Low | Gradient wash, centered layout, badges, oversized type |
| Header | Low | Promo bars, dense nav, frosted background |
| Pain | Low | Icon cards, rounded containers, centered SaaS grid |
| Solution | Medium | Good 2-col idea; wrong image treatment (radius, shadow, filled badge) |
| Product Gallery | Low | Uniform squares vs. editorial masonry; shadows/borders |
| Featured Product | Low | Commerce UI (filled selectors, urgency, zoom hover) |
| Comparison | Medium | Table concept ok; rounded card + shadow |
| Benefits | Low | 6-icon feature grid — classic SaaS |
| Social Proof | Low | Star ratings, quote icons, avatar cards — DTC template |
| FAQ | Medium | Boxed accordion vs. hairline dividers only |
| About / Contact | Medium | Centered + icon circles vs. asymmetric text blocks |
| CTA | Low | Gradient + blur orbs + urgency copy |
| Footer | Low | Wrong surface color, no watermark, social pills |
| Videos (inline in Index) | Medium | `rounded-xl` container; should be sharp full-width |

---

## Recommended Direction

### Visual identity

Treat the site as a **candlelit editorial gallery** for a physical product — not a performance-marketing landing page. Photography carries the brand; UI whispers.

### Composition model

Reduce the homepage to **6–8 editorial blocks**:

1. Full-bleed hero (photograph + bottom-left caption)
2. Brand statement (asymmetric: heading left, prose right)
3. Product spotlight (image + outlined purchase block — one CTA)
4. How it works (3 steps, typographic — no icon grid)
5. Editorial image break (full-bleed lifestyle photo)
6. Social proof (minimal — quotes as text, no star cards)
7. FAQ (hairline dividers, no boxed accordion)
8. Walnut footer with watermark wordmark

Sections that can merge or move off-homepage: Pain + Solution → one "why" block; Benefits + Comparison → fold into product spotlight; duplicate How It Works sections → one; Daily Routine → product page only.

### UI language

- **Surfaces:** Warm Parchment canvas, Walnut Shell breaks — no gradient fills
- **Buttons:** Outlined only, 8px radius, Obsidian border on cream
- **Links:** Bottom-border affordance (ghost links), not color-change underlines
- **Images:** Sharp corners, full-bleed where possible, no hover zoom
- **Type:** ModernEra 400/500, 16–40px scale, left-aligned
- **Motion:** Subtle fade-in on scroll (emil-design-eng); no pulse, marquee, or card lift
- **Icons:** Remove from marketing sections; keep only where functionally required (cart, menu close)

### Commerce vs. editorial balance

E-commerce functionality (variant selectors, cart, sticky CTA) stays — but visually conforms to outlined patterns. Urgency/scarcity copy is replaced with plain product facts. StickyCtaBar and WhatsAppFloat are scoped to post-scroll or product pages, not competing with the hero.

---

## Implementation Gap List

### Tier 1 — Structural (biggest visual shift)

| # | Task | Files | Notes |
|---|------|-------|-------|
| 1.1 | Rebuild hero as full-bleed photo + bottom-left caption | `HeroSection.tsx`, `Header.tsx` | Remove gradient, opacity wash, trust badge, scroll indicator |
| 1.2 | Strip header to wordmark + menu + one outlined CTA | `Header.tsx` | Remove promo bars and marquee; transparent over hero |
| 1.3 | Reduce homepage sections from ~15 to ~6–8 editorial blocks | `Index.tsx`, section components | Merge Pain+Solution; dedupe How It Works; move Daily Routine off-home |
| 1.4 | Rebuild footer on Walnut Shell with watermark wordmark | `Footer.tsx` | Warm Parchment text, outlined social links (no filled pills) |
| 1.5 | Remove all gradients and undefined shadow classes | All sections, `tailwind.config.ts` | Define explicit `shadow-none` policy; delete `bg-gradient-hero` usage |

### Tier 2 — Component language

| # | Task | Files | Notes |
|---|------|-------|-------|
| 2.1 | Sharp-corner all images; remove card wrappers from gallery | `ProductGallerySection.tsx`, `SolutionSection.tsx`, `FeaturedProductSection.tsx`, `Index.tsx` (videos) | `rounded-none` on images |
| 2.2 | Replace icon grids with typographic lists or photography | `PainSection.tsx`, `BenefitsSection.tsx`, `HowItWorksStepsSection.tsx` | No Lucide in marketing sections |
| 2.3 | Enforce 40px type cap; remove uppercase eyebrow labels | All section components | Use `text-display` (40px) max; plain section headings |
| 2.4 | Left-align section headings; adopt asymmetric 2-column layouts | Pain, Solution, About, Benefits | Heading left / body right pattern from inspo |
| 2.5 | Convert filled selectors to outlined hairline pattern | `FeaturedProductSection.tsx` | Pack, color, size — border only, no `bg-primary` fill |
| 2.6 | Unify link treatment to bottom-border ghost links | All sections with `hover:underline` | Use `Button variant="link"` or `border-b` pattern |

### Tier 3 — Polish (emil-design-eng)

| # | Task | Files | Notes |
|---|------|-------|-------|
| 3.1 | Replace marquee/pulse/scale hovers with subtle transitions | `Header.tsx`, `BenefitsSection.tsx`, `FeaturedProductSection.tsx` | Opacity and border-color only |
| 3.2 | Add scroll-entry fades with stagger | Section components | `IntersectionObserver`, 600ms ease, transform+opacity only |
| 3.3 | Scope StickyCtaBar to post-scroll or product page | `App.tsx`, `StickyCtaBar.tsx` | Hide until user passes hero or on `/product` only |
| 3.4 | Restyle or relocate WhatsAppFloat | `WhatsAppFloat.tsx` | Outlined button or footer link; remove bright green pill |
| 3.5 | FAQ accordion → hairline divider list | `HomeFaqSection.tsx`, `accordion.tsx` | No boxed container, no shadow |

### Tier 4 — Content and assets

| # | Task | Files | Notes |
|---|------|-------|-------|
| 4.1 | Replace urgency/scarcity copy with plain product language | `FeaturedProductSection.tsx`, `CTASection.tsx`, `StickyCtaBar.tsx`, `Header.tsx` | Remove "flash sale", flame icon, countdown tone |
| 4.2 | Source warm-toned lifestyle photography | `public/images/`, section components | Full-bleed heroes; no low-opacity washes |
| 4.3 | AS SEEN ON — minimal wordmark strip or remove | `AsSeenOnSection.tsx` | No boxed logo placeholders |
| 4.4 | Remove emojis from promo/shipping copy | `Header.tsx` | Plain text only |

### Tier 5 — Token cleanup

| # | Task | Files | Notes |
|---|------|-------|-------|
| 5.1 | Remove hardcoded hex colors (`#C8A24A`, `#B45309`) | Header, Featured, StickyCtaBar | Map to `amber-glow` / `muted-gold` tokens |
| 5.2 | Audit `--success` / `--destructive` usage on marketing pages | `index.css`, section components | Replace with neutral or token accents |
| 5.3 | Remove legacy aliases once sections migrated | `index.css` (`--blush`, `--cream-dark`, etc.) | Use token classes directly |
| 5.4 | Drop `font-serif` class usage | All sections | Use `font-sans` or default body font (both are ModernEra) |

---

## Suggested Implementation Order

```
Phase A — Global chrome (1–2 days)
  Header → Hero → Footer → kill gradients/shadows globally

Phase B — Section recomposition (2–3 days)
  Collapse Index.tsx sections → recompose 6–8 blocks
  Product Gallery → editorial grid
  Featured Product → outlined commerce block

Phase C — Component pass (1–2 days)
  Remove icon grids, enforce type scale, sharp corners
  FAQ, Social Proof, CTA restyle

Phase D — Polish + scope (1 day)
  Motion pass (emil-design-eng)
  StickyCtaBar / WhatsApp scope
  Copy tone cleanup
```

---

## Pre-Commit Checklist (from design system)

Apply after each phase:

- [ ] Colors use CSS vars or Tailwind token classes — no hardcoded hex in JSX
- [ ] ModernEra is the only font family used
- [ ] Type sizes within 16–40px; weights 400 or 500 only
- [ ] Buttons outlined (transparent fill default); no drop shadows
- [ ] Images and cards `rounded-none`; buttons/links `rounded-button` (8px)
- [ ] Section gaps use `--spacing-100` (100px)
- [ ] No filled CTA buttons, gradients, or decorative overlays on photos
- [ ] Contrast correct: Obsidian on cream, Warm Parchment on Walnut Shell

---

## Related Docs

- `doc/design system/DESIGN.md` — Full style guide and component specs
- `doc/design system/IMPLEMENTATION.md` — Token integration notes
- `doc/IMPLEMENTATION_PLAN.md` — Feature/conversion parity plan (separate from visual rebrand)
- `doc/design system/inspo/` — Aspelin reference screenshots
