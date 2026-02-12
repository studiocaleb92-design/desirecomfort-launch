# Product images

## New color placeholders (Caramel, Apricot, Khaki, Lava, White)

The files `caramel.svg`, `apricot.svg`, `khaki.svg`, `lava.svg`, and `white.svg` are **placeholder** color swatches. When you have real product photos from your supplier:

1. Add JPG (or WebP) files to this folder, e.g.:
   - `caramel.jpg`
   - `apricot.jpg`
   - `khaki.jpg`
   - `lava.jpg`
   - `white.jpg`
2. In the codebase, update the image paths from `.svg` to `.jpg` in:
   - `src/pages/Product.tsx` (COLOR_IMAGES_SRC and FALLBACK_BY_COLOR)
   - `src/components/sections/FeaturedProductSection.tsx` (COLOR_IMAGE_SRC and FALLBACK_IMAGE_BY_COLOR)

You can then remove the `.svg` placeholders if you no longer need them.

## OEKO-TEX badge

`oeko-tex-badge.svg` is a simple badge linking to [OEKO-TEX® Standard 100](https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex). If you obtain official certification, replace this with the official logo from OEKO-TEX (download from their partner portal or use their labelling guide).
