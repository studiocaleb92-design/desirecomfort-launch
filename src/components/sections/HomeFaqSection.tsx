import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const faqs = [
  {
    q: "What sizes do you offer?",
    a: "XS through 2XL. Between sizes? Size up for a more relaxed fit. Full measurements live on our FAQ page.",
  },
  {
    q: "How much fluid do they hold?",
    a: "Our 4-layer system is designed for everyday to heavy flow — up to about 4 tampons’ worth (40ml) for many wearers, depending on flow and fit.",
  },
  {
    q: "How do I wash them?",
    a: "Rinse cold after use, machine wash at 40°C or below with mild detergent, skip fabric softener, then hang dry or tumble low.",
  },
  {
    q: "What is your return policy?",
    a: "30-day fit guarantee on unworn pairs in original packaging. Reach out and we’ll make it right — exchanges or returns handled simply.",
  },
];

const HomeFaqSection = () => {
  return (
    <section id="faq" className={`section-padding bg-cream-dark ${HEADER_SCROLL_ANCHOR_CLASS}`}>
      <div className="container mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Questions</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">FAQ</h2>
          <p className="mt-3 text-base font-medium text-foreground/85">Quick answers — tap to expand.</p>
        </div>
        <Accordion type="single" collapsible className="rounded-xl border border-border/50 bg-card px-2 shadow-soft md:px-4">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`} className="border-border/60 px-2">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm font-medium leading-relaxed text-foreground/85 md:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          <Link to="/faq" className="font-medium text-primary hover:underline">
            View full FAQ
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HomeFaqSection;
