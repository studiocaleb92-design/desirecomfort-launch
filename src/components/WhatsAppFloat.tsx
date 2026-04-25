import { MessageCircle } from "lucide-react";

/** Nigerian mobile — digits only for wa.me (no +). Replace with your business line when ready. */
const WHATSAPP_E164_LOCAL = "2349035550123";
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164_LOCAL}?text=${encodeURIComponent(
  "Hi Desire Comfort — I have a question about my order.",
)}`;

const WhatsAppFloat = () => {
  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[5.5rem] right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-elevated transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground md:bottom-24 md:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" aria-hidden />
    </a>
  );
};

export default WhatsAppFloat;
