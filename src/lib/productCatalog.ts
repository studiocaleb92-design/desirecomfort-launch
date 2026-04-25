import productHero from "@/assets/product-hero.jpg";
import productVariants from "@/assets/product-variants.jpg";

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
  "Blush Pink": "/images/blush-pink.jpg",
  "Dusty Rose": "/images/dusty-rose.jpg",
  Cream: "/images/cream.jpg",
  Black: "/images/black.jpg",
  White: "/images/everdries-white.jpg",
};

/** Gallery thumbs per color (product page) — first image is the hero for that color. */
export const COLOR_GALLERY_IMAGES: Record<string, string[]> = {
  "Blush Pink": ["/images/blush-pink.jpg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  "Dusty Rose": ["/images/dusty-rose.jpg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  Cream: ["/images/cream.jpg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  Black: ["/images/black.jpg", "/images/everdries-gallery-3.jpg", "/images/everdries-gallery-4.jpg"],
  White: ["/images/everdries-white.jpg", "/images/cream.jpg", "/images/everdries-gallery-2.jpg"],
};

export const GALLERY_FALLBACK_BY_COLOR: Record<string, string[]> = {
  "Blush Pink": [productHero, productVariants, "/images/blush-pink.jpg"],
  "Dusty Rose": [productHero, productVariants, "/images/dusty-rose.jpg"],
  Cream: [productHero, productVariants, "/images/cream.jpg"],
  Black: [productHero, productVariants, "/images/black.jpg"],
  White: [productHero, productVariants, "/images/everdries-white.jpg"],
};

export const GALLERY_FALLBACK_DEFAULT = [productHero, productVariants, productHero];

export const PRODUCT_SIZES = ["XS", "S", "M", "L", "XL", "2XL"] as const;
