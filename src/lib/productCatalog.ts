import { IMAGES, PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK } from "@/lib/media";

/** CSS class for anchor targets under the sticky header — pairs with `--header-scroll-offset` in `index.css`. */
export const HEADER_SCROLL_ANCHOR_CLASS = "scroll-mt-[var(--header-scroll-offset)]";

export type ProductColor = {
  name: string;
  swatchClass: string;
};

/** Only colors with real product photography — do not add swatches without `primaryImage`. */
export const PRODUCT_COLORS: ProductColor[] = [
  { name: "Blush Pink", swatchClass: "bg-[hsl(355,45%,70%)]" },
  { name: "Dusty Rose", swatchClass: "bg-[hsl(355,40%,55%)]" },
  { name: "Cream", swatchClass: "bg-[hsl(40,40%,90%)]" },
  { name: "Black", swatchClass: "bg-[hsl(0,0%,15%)]" },
  { name: "White", swatchClass: "bg-white border border-border" },
];

export const PRIMARY_IMAGE_BY_COLOR: Record<string, string> = {
  "Blush Pink": IMAGES.blushPink,
  "Dusty Rose": IMAGES.dustyRose,
  Cream: IMAGES.cream,
  Black: IMAGES.black,
  White: IMAGES.everdriesWhite,
};

/** Gallery thumbs per color (product page) — first image is the hero for that color. */
export const COLOR_GALLERY_IMAGES: Record<string, string[]> = {
  "Blush Pink": [IMAGES.blushPink, IMAGES.gallery2, IMAGES.gallery3],
  "Dusty Rose": [IMAGES.dustyRose, IMAGES.gallery2, IMAGES.gallery3],
  Cream: [IMAGES.cream, IMAGES.creamBriefs, IMAGES.gallery2],
  Black: [IMAGES.black, IMAGES.blackBriefs, IMAGES.gallery4],
  White: [IMAGES.everdriesWhite, IMAGES.cream, IMAGES.gallery2],
};

export const GALLERY_FALLBACK_BY_COLOR: Record<string, string[]> = {
  "Blush Pink": [PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK, IMAGES.blushPink],
  "Dusty Rose": [PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK, IMAGES.dustyRose],
  Cream: [PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK, IMAGES.cream],
  Black: [PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK, IMAGES.black],
  White: [PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK, IMAGES.everdriesWhite],
};

export const GALLERY_FALLBACK_DEFAULT = [
  PRODUCT_HERO_FALLBACK,
  PRODUCT_VARIANTS_FALLBACK,
  PRODUCT_HERO_FALLBACK,
];

export const PRODUCT_SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;

export const COLOR_QUERY_PARAM = "color";

export function isPurchasableColor(name: string): boolean {
  return name in PRIMARY_IMAGE_BY_COLOR;
}

/** Homepage checkout anchor with optional pre-selected color. */
export function orderHref(color: string) {
  return {
    pathname: "/",
    search: `?${COLOR_QUERY_PARAM}=${encodeURIComponent(color)}`,
    hash: "order",
  } as const;
}
