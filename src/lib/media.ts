/** Central public asset paths — single source for photography and brand marks */

import heroLifestyle from "@/assets/hero-lifestyle.jpg";

/** Raster logos kept for favicon/OG fallbacks — UI uses `BrandLogo` text mark. */
export const LOGO_SRC = "/logo.webp";
export const LOGO_PNG_SRC = "/logo.png";

export const HERO_IMAGE = heroLifestyle;
export const EDITORIAL_BREAK_IMAGE = "/images/everdries-black-person.jpg";
export const BRAND_STATEMENT_IMAGE = "/images/everdries-gallery-1.jpg";

export const PRODUCT_HERO_FALLBACK = "/images/everdries-gallery-1.jpg";
export const PRODUCT_VARIANTS_FALLBACK = "/images/everdries-gallery-2.jpg";

export const IMAGES = {
  blushPink: "/images/blush-pink.jpg",
  dustyRose: "/images/dusty-rose.jpg",
  cream: "/images/cream.jpg",
  black: "/images/black.jpg",
  everdriesWhite: "/images/everdries-white.jpg",
  gallery1: "/images/everdries-gallery-1.jpg",
  gallery2: "/images/everdries-gallery-2.jpg",
  gallery3: "/images/everdries-gallery-3.jpg",
  gallery4: "/images/everdries-gallery-4.jpg",
  pinkStack: "/images/everdries-pink-stack.jpg",
  creamBriefs: "/images/everdries-cream-briefs.jpg",
  blackBriefs: "/images/everdries-black-briefs.jpg",
  blueLifestyle: "/images/everdries-blue.jpg",
  oekoTexBadge: "/images/oeko-tex-badge.svg",
} as const;

export const PRODUCT_VIDEO_FILES: { filename: string; title: string }[] = [
  { filename: "hf_20260319_062456_52468f2b-fc9e-4262-a66b-adc0a8b3e825.mp4", title: "How it works" },
  { filename: "hf_20260326_174955_49a25311-fd30-4578-abf0-36a9b0143862.mp4", title: "Comfort & protection" },
];

export const videoSrc = (filename: string) => `/videos/${encodeURIComponent(filename)}`;
