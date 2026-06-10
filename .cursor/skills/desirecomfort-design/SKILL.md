---
name: desirecomfort-design
description: >-
  Applies the Desire Comfort editorial gallery design system (warm parchment,
  ModernEra typography, outlined UI, no shadows). Use when building or
  refactoring UI components, pages, sections, Tailwind styles, shadcn
  primitives, or rebranding visual work in desirecomfort-launch.
---

# Desire Comfort Design System

Candlelit editorial gallery aesthetic — warm cream canvases, full-bleed photography, restrained ModernEra typography, outlined UI only.

## Source Files

Read these before any UI work:

| File | Purpose |
|------|---------|
| `doc/design system/DESIGN.md` | Full style guide, components, do's/don'ts |
| `doc/design system/variables.css` | Hex CSS custom properties (Tailwind v3) |
| `doc/design system/tokens.json` | Machine-readable design tokens |
| `doc/design system/font/` | ModernEra Regular + Bold (woff2) |

**Do not import** `doc/design system/theme.css` — it uses Tailwind v4 `@theme` syntax. This project uses Tailwind v3.

## Non-Negotiable Rules

### Do

- Outlined buttons with 8px radius only — 1px borders in Warm Parchment on dark, Obsidian on cream
- Full-bleed photography carries visual weight; UI chrome stays transparent over images
- Type scale: 16, 18, 20, 24, 28, 40px — never exceed 40px display
- Weights 400 (body) and 500 (emphasis) only; ModernEra sole typeface
- Warm Parchment (`#ffebd0`) dominant canvas; Walnut Shell (`#2f2116`) for dark breaks
- 100px vertical section gaps; 1200px max page width; 40px card/section padding
- Links use visible bottom-border treatment — the line is the affordance
- Body text: 18px / 1.25 in ModernEra 400

### Don't

- No filled CTAs, drop shadows, or gradient backgrounds
- No chromatic colors beyond Amber Glow (`#fee197`) and Muted Gold (`#987f61`)
- No border-radius on images or cards (0px); only buttons/links get 8px
- No white/light text on Warm Parchment backgrounds
- No icons, illustrations, or decorative graphics over photographs
- No Cormorant Garamond, Inter, serifs, or secondary typefaces

## Token Quick Reference

| Role | Token | Hex |
|------|-------|-----|
| Cream canvas | `--color-warm-parchment` | `#ffebd0` |
| Elevated surface | `--color-candlelight` | `#fff8e9` |
| Text on cream | `--color-obsidian` | `#000000` |
| Dark sections | `--color-walnut-shell` | `#2f2116` |
| Text on dark | `--color-warm-parchment` | `#ffebd0` |
| Border on cream | `--color-obsidian` | `#000000` |
| Border on dark | `--color-warm-parchment` | `#ffebd0` |
| Active/accent | `--color-amber-glow` | `#fee197` |
| Link border on dark | `--color-muted-gold` | `#987f61` |

Full token tables: [tokens.md](tokens.md)

## Tailwind v3 Integration

Apply tokens in this order:

1. **`src/index.css`** — Import or inline `doc/design system/variables.css`. Add `@font-face` for ModernEra:

```css
@font-face {
  font-family: 'ModernEra';
  src: url('../doc/design system/font/OnlineWebFonts_COM_2341408072583797775fae0d997f7a83/Modern Era/Web Fonts/74613e9d0612d09be09dd6de7c898d50.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'ModernEra';
  src: url('../doc/design system/font/OnlineWebFonts_COM_678dcba90e12cabb768b9ca2de1ad377/Modern Era Bold/Web Fonts/540ea8ceb19b7b438598461f395f6ca1.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}
```

Bridge shadcn semantic vars to the new palette:

```css
--background: var(--surface-warm-parchment);
--foreground: var(--color-obsidian);
--primary: var(--color-obsidian);
--border: var(--color-obsidian);
```

2. **`tailwind.config.ts`** — Extend `theme.extend`:

```ts
fontFamily: {
  sans: ['ModernEra', 'ui-sans-serif', 'system-ui', 'sans-serif'],
},
colors: {
  'warm-parchment': 'var(--color-warm-parchment)',
  'candlelight': 'var(--color-candlelight)',
  'obsidian': 'var(--color-obsidian)',
  'walnut-shell': 'var(--color-walnut-shell)',
  'aged-bronze': 'var(--color-aged-bronze)',
  'amber-glow': 'var(--color-amber-glow)',
  'muted-gold': 'var(--color-muted-gold)',
},
spacing: {
  '100': '100px',
  '120': '120px',
},
borderRadius: {
  'button': '8px',
},
```

3. **`src/components/ui/`** — Update shadcn primitives (button, input, card) to outlined patterns
4. **`src/components/sections/`** — Migrate section components to new tokens
5. **`src/components/Header.tsx`**, **`Footer.tsx`** — Global chrome

Use CSS vars or Tailwind token classes in JSX — never hardcode hex values.

## Component Patterns

See [components.md](components.md) for full specs. Key patterns:

- **Outlined button (cream):** `border border-obsidian rounded-button bg-transparent px-[18px] py-4 text-base font-medium text-obsidian`
- **Outlined button (dark):** `border border-warm-parchment rounded-button bg-transparent px-4 py-2 text-base text-warm-parchment`
- **Ghost link:** `border-b border-obsidian pb-2 text-base` (use `border-muted-gold` on dark)
- **Section heading:** `text-2xl font-medium text-obsidian pl-10` (24–28px)
- **Hero overlay text:** `text-display font-normal text-warm-parchment absolute bottom-10 left-10`

## Pre-Commit Checklist

Before finishing any UI work, verify:

- [ ] Colors use CSS vars or Tailwind token classes — no hardcoded hex in JSX
- [ ] ModernEra is the only font family used
- [ ] Type sizes are within 16–40px scale; weights are 400 or 500 only
- [ ] Buttons are outlined (transparent fill default); no drop shadows
- [ ] Images and cards have `rounded-none`; buttons/links have 8px radius
- [ ] Section gaps use `--spacing-100` (100px) where applicable
- [ ] No filled CTA buttons, gradients, or decorative overlays on photos
- [ ] Contrast is correct: Obsidian on cream, Warm Parchment on Walnut Shell

## Additional Resources

- Component specs: [components.md](components.md)
- Token lookup: [tokens.md](tokens.md)
- Full design guide: `doc/design system/DESIGN.md`
