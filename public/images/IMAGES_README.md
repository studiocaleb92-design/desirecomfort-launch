# Product images

## New colors (Caramel, Apricot, Khaki, Lava, White)

The product and featured sections use **existing product photos** for these 5 colors so the main image is always a real product shot (not a swatch):

- **Caramel, Apricot, Khaki** → `cream.jpg` + everdries gallery images
- **Lava** → `dusty-rose.jpg` + everdries (dark tone)
- **White** → `everdries-white.jpg` + cream

When you have **dedicated product photos** from your supplier for these colors:

1. Add JPG files to this folder: `caramel.jpg`, `apricot.jpg`, `khaki.jpg`, `lava.jpg`, `white.jpg`.
2. In the codebase, set those paths in:
   - `src/pages/Product.tsx` (COLOR_IMAGES_SRC and FALLBACK_BY_COLOR)
   - `src/components/sections/FeaturedProductSection.tsx` (COLOR_IMAGE_SRC and FALLBACK_IMAGE_BY_COLOR)

The optional `.svg` files in this folder (caramel.svg, apricot.svg, etc.) are unused; you can keep or remove them.

## OEKO-TEX badge

`oeko-tex-badge.svg` is a simple badge linking to [OEKO-TEX® Standard 100](https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex). If you obtain official certification, replace this with the official logo from OEKO-TEX (download from their partner portal or use their labelling guide).
