# Design Tokens Reference

Source: `doc/design system/variables.css` and `doc/design system/tokens.json`

## Colors

| Name | Hex | CSS Variable | Tailwind Class |
|------|-----|--------------|----------------|
| Warm Parchment | `#ffebd0` | `--color-warm-parchment` | `warm-parchment` |
| Candlelight | `#fff8e9` | `--color-candlelight` | `candlelight` |
| Obsidian | `#000000` | `--color-obsidian` | `obsidian` |
| Walnut Shell | `#2f2116` | `--color-walnut-shell` | `walnut-shell` |
| Aged Bronze | `#4f3622` | `--color-aged-bronze` | `aged-bronze` |
| Amber Glow | `#fee197` | `--color-amber-glow` | `amber-glow` |
| Muted Gold | `#987f61` | `--color-muted-gold` | `muted-gold` |

## Surfaces

| Level | Name | Hex | CSS Variable | Purpose |
|-------|------|-----|--------------|---------|
| 0 | Walnut Shell | `#2f2116` | `--surface-walnut-shell` | Dark sections, footer, photo overlays |
| 1 | Warm Parchment | `#ffebd0` | `--surface-warm-parchment` | Primary page canvas |
| 2 | Candlelight | `#fff8e9` | `--surface-candlelight` | Elevated content blocks |

## Typography

| Role | Size | Line Height | Weight | CSS Variable |
|------|------|-------------|--------|--------------|
| caption | 16px | 1.4 | 400 | `--text-caption` |
| body | 18px | 1.25 | 400 | `--text-body` |
| subheading | 20px | 1.22 | 400 | `--text-subheading` |
| heading-sm | 24px | 1.2 | 500 | `--text-heading-sm` |
| heading | 28px | 1.17 | 500 | `--text-heading` |
| display | 40px | 1.17 | 400 | `--text-display` |

**Font family:** `--font-modernera` → `'ModernEra', ui-sans-serif, system-ui, sans-serif`

**Substitutes (if ModernEra unavailable):** Söhne, Inter, GT America

## Spacing

Base unit: 4px (`--spacing-unit`)

| Token | Value | Tailwind |
|-------|-------|----------|
| `--spacing-8` | 8px | `p-2` / `gap-2` |
| `--spacing-12` | 12px | `p-3` / `gap-3` |
| `--spacing-16` | 16px | `p-4` / `gap-4` |
| `--spacing-20` | 20px | `p-5` / `gap-5` |
| `--spacing-24` | 24px | `p-6` / `gap-6` |
| `--spacing-36` | 36px | custom |
| `--spacing-40` | 40px | `p-10` / `gap-10` |
| `--spacing-60` | 60px | custom |
| `--spacing-64` | 64px | custom |
| `--spacing-100` | 100px | `spacing-100` |
| `--spacing-120` | 120px | `spacing-120` |

## Layout

| Token | Value |
|-------|-------|
| `--page-max-width` | 1200px |
| `--section-gap` | 100px |
| `--card-padding` | 40px |
| `--element-gap` | 12–20px |

## Border Radius

| Element | Value | Token |
|---------|-------|-------|
| cards | 0px | `--radius-cards` |
| images | 0px | `--radius-images` |
| buttons | 8px | `--radius-buttons` |
| links | 8px | `--radius-links` |

## Elevation

No shadows. Depth comes from color contrast (Warm Parchment vs Walnut Shell) and full-bleed photography — never `box-shadow`.
