import { MessageCircle } from "lucide-react";

/** Nigerian mobile in E.164 digits-only format for wa.me (converted from 09060427551). */
const WHATSAPP_E164_LOCAL = "2349060427551";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164_LOCAL}?text=${encodeURIComponent(
  "Hi Desire Comfort — I have a question about my order.",
)}`;

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[5.5rem] right-4 z-40 inline-flex min-h-14 items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-elevated transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:bottom-24 md:right-6 md:min-h-16"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
      <span className="text-sm font-semibold leading-none">Chat with us on WhatsApp</span>
    </a>
  );
};

export default WhatsAppFloat;
