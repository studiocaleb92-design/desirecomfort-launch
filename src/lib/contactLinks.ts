import { BRAND_NAME } from "@/lib/brand";

/** Nigerian mobile in E.164 digits-only format for wa.me (converted from 09060427551). */
export const WHATSAPP_E164_LOCAL = "2349060427551";

export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164_LOCAL}?text=${encodeURIComponent(
  `Hi ${BRAND_NAME} — I have a question about my order.`,
)}`;
