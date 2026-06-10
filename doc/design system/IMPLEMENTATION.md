# Desire Comfort — Design System Implementation

> Runtime wiring for the editorial gallery design system. Pairs with [DESIGN.md](DESIGN.md).

**Status:** Foundation + base layer complete (tokens, fonts, Tailwind, utilities, button variants). Section/page component migration pending.

---

## File Map

| File | Role |
|------|------|
| [DESIGN.md](DESIGN.md) | Design specification (source of truth for aesthetics) |
| [variables.css](variables.css) | Design-source tokens (reference copy) |
| [tokens.json](tokens.json) | Machine-readable tokens (reference) |
| [theme.css](theme.css) | Tailwind v4 `@theme` block — **do not import** (project uses Tailwind v3) |
| [src/styles/design-tokens.css](../../src/styles/design-tokens.css) | Runtime tokens + `@font-face` loaded by the app |
| [src/index.css](../../src/index.css) | shadcn semantic bridge, legacy aliases, component utilities |
| [tailwind.config.ts](../../tailwind.config.ts) | Tailwind class mapping |
| [public/fonts/modernera/](../../public/fonts/modernera/) | ModernEra Regular (400) and Medium (500) woff2 files |

---

## shadcn Semantic Mapping

| shadcn variable | Design token |
|-----------------|--------------|
| `--background` | `--surface-warm-parchment` |
| `--foreground` | `--color-obsidian` |
| `--card` | `--surface-candlelight` |
| `--card-foreground` | `--color-obsidian` |
| `--primary` | `--color-obsidian` |
| `--primary-foreground` | `--color-warm-parchment` |
| `--secondary` | `--color-candlelight` |
| `--muted` | `--color-candlelight` |
| `--muted-foreground` | `--color-muted-gold` |
| `--accent` | `--color-amber-glow` |
| `--border` / `--input` | `--color-obsidian` |
| `--ring` | `--color-amber-glow` |
| `--radius` | `8px` |

Tailwind semantic colors use `var(--background)` form — **not** `hsl(var(--background))` — because tokens are hex-based.

---

## Tailwind Class Reference

### Colors

| Class | Token |
|-------|-------|
| `bg-warm-parchment` | `--color-warm-parchment` |
| `bg-candlelight` | `--color-candlelight` |
| `bg-walnut-shell` | `--color-walnut-shell` |
| `text-obsidian` | `--color-obsidian` |
| `text-warm-parchment` | `--color-warm-parchment` |
| `border-obsidian` | `--color-obsidian` |
| `border-amber-glow` | `--color-amber-glow` |
| `text-muted-gold` | `--color-muted-gold` |

### Typography

| Class | Size |
|-------|------|
| `text-caption` | 16px |
| `text-body` | 18px |
| `text-subheading` | 20px |
| `text-heading-sm` | 24px |
| `text-heading` | 28px |
| `text-display` | 40px (max) |

Font family: `font-sans` or `font-serif` (both map to ModernEra).

### Spacing and layout

| Class | Value |
|-------|-------|
| `p-40` / `py-100` | 40px / 100px via CSS vars |
| `section-padding` | 100px vertical, 40px horizontal (utility) |

### Border radius

| Class | Value |
|-------|-------|
| `rounded-button` | 8px (buttons, links, inputs) |
| `rounded-none` | 0px (images, cards) |

---

## Legacy Aliases (temporary)

These map old class names to new tokens so existing components compile during migration:

| Legacy var / class | Maps to |
|--------------------|---------|
| `--blush` / `bg-blush` | `--color-amber-glow` |
| `--blush-light` | `--color-candlelight` |
| `--cream` / `bg-cream` | `--surface-warm-parchment` |
| `--warm-brown` / `text-warm-brown` | `--color-obsidian` |
| `font-serif` | ModernEra (no separate serif) |

Remove these aliases after section components are migrated.

---

## Component Utilities (index.css)

| Class | Behavior |
|-------|----------|
| `.text-hero` | 40px display, ModernEra 400 |
| `.text-hero-sub` | 18px body, muted foreground |
| `.section-padding` | 100px vertical, 40px horizontal |
| `.card-soft` | Flat card, no shadow, 40px padding |
| `.trust-badge` | Outlined badge, obsidian border |

---

## Button Variants (shadcn)

All variants are outlined per DESIGN.md — no filled CTAs, no shadows.

| Variant | Use |
|---------|-----|
| `default` / `outline` / `hero` | Obsidian border on cream; hover fills obsidian |
| `soft` | Warm parchment border; hover walnut shell |
| `link` / `minimal` | Bottom-border affordance |
| `destructive` | Outlined red for errors |

---

## Migration Status

| Area | Status |
|------|--------|
| Design tokens (`design-tokens.css`) | Done |
| ModernEra fonts | Done |
| shadcn semantic bridge | Done |
| Tailwind config | Done |
| Base typography | Done |
| Button variants | Done |
| shadcn UI primitives (`src/components/ui/`) | Done |
| Section components (Hero, Footer, etc.) | Pending |
| Remove legacy aliases | Pending |
| Remove gradient/shadow classes from components | Pending |

Use `/desirecomfort-design` subagent for section-by-section migration.

---

## Do Not

- Import `doc/design system/theme.css` (Tailwind v4 syntax)
- Load Google Fonts (Cormorant Garamond, Inter)
- Add `box-shadow` or gradient backgrounds
- Use display sizes above 40px or font weights above 500
- Hardcode hex values in JSX — use token classes or CSS vars
