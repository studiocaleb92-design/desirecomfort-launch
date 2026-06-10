import { Link } from "react-router-dom";
import EditorialSection from "@/components/layout/EditorialSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const faqs = [
  {
    q: "What sizes do you offer?",
    a: "XS through 2XL. Between sizes? Size up for a more relaxed fit. Full measurements live on our FAQ page.",
  },
  {
    q: "How much fluid do they hold?",
    a: "Our 4-layer system is designed for everyday to heavy flow — up to about 4 tampons' worth (40ml) for many wearers, depending on flow and fit.",
  },
  {
    q: "How do I wash them?",
    a: "Rinse cold after use, machine wash at 40°C or below with mild detergent, skip fabric softener, then hang dry or tumble low.",
  },
  {
    q: "What is your return policy?",
    a: "30-day fit guarantee on unworn pairs in original packaging. Reach out and we'll make it right — exchanges or returns handled simply.",
  },
];

const HomeFaqSection = () => (
  <EditorialSection
    id="faq"
    surface="parchment"
    reveal
    className={HEADER_SCROLL_ANCHOR_CLASS}
    innerClassName="max-w-2xl"
  >
    <h2 className="text-heading font-medium text-foreground">FAQ</h2>

    <Accordion type="single" collapsible className="mt-10">
      {faqs.map((item, i) => (
        <AccordionItem
          key={item.q}
          value={`faq-${i}`}
          className="border-b border-obsidian/10 border-t-0"
        >
          <AccordionTrigger className="py-5 text-left text-body font-medium text-foreground hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-body text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>

    <p className="mt-8">
      <Link
        to="/faq"
        className="inline-block border-b border-obsidian pb-2 text-body text-obsidian transition-opacity hover:opacity-80"
      >
        View full FAQ
      </Link>
    </p>
  </EditorialSection>
);

export default HomeFaqSection;
