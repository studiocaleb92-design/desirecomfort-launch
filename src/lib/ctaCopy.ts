/** Outlined button label — no urgency */
export const CTA_PRIMARY_LABEL = "Shop now";

/** Top offer strip — seasonal promo line */
export const PROMO_BANNER_TEXT = "SUMMER SALE! Get 5 Pairs for 50% off.";

/** Sticky bar headline — factual product line */
export const CTA_STICKY_HEADLINE = "4-layer leakproof panties";

/** Offer line with optional session countdown (MM:SS). */
export const offerLine = (percent: number, countdown?: string) =>
  countdown ? `${percent}% off · ends in ${countdown}` : `${percent}% off`;

export const promoBannerWithCountdown = (countdown: string) =>
  `${PROMO_BANNER_TEXT} Ends in ${countdown}.`;

/** Trust line reused under CTAs */
export const CTA_TRUST_LINE = "Secure checkout · 30-day guarantee · Fast delivery";
