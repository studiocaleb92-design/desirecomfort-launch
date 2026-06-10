# Component Patterns

Source: `doc/design system/DESIGN.md` Components section.

## Outlined Navigation Button

**Role:** Primary header interactive element (over dark/hero backgrounds)

```
bg-transparent border border-warm-parchment rounded-button
px-4 py-2 text-base font-normal text-warm-parchment
```

- 1px Warm Parchment border, 8px radius
- 16–18px horizontal padding, 6–8px vertical padding
- ModernEra 400 at 16px
- No fill state — outlined only

## Outlined Action Button (Cream Section)

**Role:** Interactive buttons on cream backgrounds

```
bg-transparent border border-obsidian rounded-button
px-[18px] py-4 text-base font-medium text-obsidian
hover:bg-obsidian hover:text-warm-parchment transition-colors
```

- 1px Obsidian border, 8px radius
- Hover: Obsidian fill, Warm Parchment text

## Ghost Link with Border

**Role:** Text links in content sections

```
border-b border-obsidian pb-2 text-base font-normal text-obsidian
```

On dark sections: `border-muted-gold text-warm-parchment`

- No background; bottom border is the affordance
- 8–12px padding-bottom below border line
- ModernEra 400–500 at 16–18px

## Navigation Item

**Role:** Header menu links

```
text-base font-normal text-warm-parchment mr-5
```

Active state: `border-b border-amber-glow`

- Plain text, no border/background by default
- 20px margin-right between items

## Full-Bleed Editorial Hero

**Role:** Opening section of each major page

```
relative min-h-screen w-full
```

- Photograph fills viewport — no padding, margin, or tint overlay
- Headline: `absolute bottom-10 left-10 text-display font-normal text-warm-parchment leading-[1.17]`
- Header floats transparent over hero: logo top-left, nav top-right

## Portfolio Image Card

**Role:** Project thumbnails in grid

```
<!-- Image -->
<img class="w-full rounded-none shadow-none" />

<!-- Caption below, separated -->
<p class="text-base font-normal text-obsidian p-10">Project name</p>
```

- Sharp corners, no border, no shadow, no card container
- Caption at 16–18px below image with ~40px padding

## Two-Column Project Layout

**Role:** Portfolio detail sections

```
<div class="bg-warm-parchment p-10 flex gap-10">
  <img class="w-[40%] rounded-none" />
  <div class="flex-1">
    <img class="w-full rounded-none" />
    <p class="text-base text-obsidian mt-10">Project name</p>
  </div>
</div>
```

- Warm Parchment background, 40px padding around group
- Left image ~40% width, right fills remainder

## Dark Overlay Section

**Role:** Editorial breaks between cream content

```
relative min-h-[60vh] bg-walnut-shell
```

- Full-bleed warm photograph, or Walnut Shell fallback
- Title: `absolute top-10 left-10 text-heading font-normal text-warm-parchment`
- Optional category label top-right at 16px
- No gradient overlays

## Header Bar

**Role:** Persistent navigation

```
fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-10
bg-transparent
```

- Logo: `text-base font-medium text-warm-parchment tracking-widest` (wordmark)
- Nav items top-right: outlined button + plain text label
- Transparent over hero — no background fill

## Section Heading

**Role:** Content block titles on cream backgrounds

```
text-heading-sm font-medium text-obsidian pl-10 mb-10
```

- ModernEra 500 at 24–28px
- No decorative element or underline
- 40–100px space below before content

## Footer

**Role:** Page bottom

```
bg-walnut-shell text-warm-parchment p-10 text-base font-normal
```

- Single or two-column layout
- Outlined buttons for any footer CTAs (Warm Parchment border)

## Input Field

**Role:** Form inputs (newsletter, contact)

```
bg-transparent border border-obsidian rounded-button p-4
text-base font-normal text-obsidian placeholder:opacity-50
```

On dark: `border-warm-parchment text-warm-parchment`

- Transparent background, 8px radius, 16px padding
- ModernEra 400 at 16px
