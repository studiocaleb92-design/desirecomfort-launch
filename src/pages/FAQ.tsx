import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How do I choose the right size?",
    a: "Use our Size Guide on the product page. We recommend measuring your waist and hips and comparing to our chart. If you're between sizes, size up for comfort.",
  },
  {
    q: "What's your return policy?",
    a: "We offer a 30-day comfort guarantee. If you're not satisfied, contact us for a return or exchange. Items must be unworn and in original packaging.",
  },
  {
    q: "How do I care for my period underwear?",
    a: "Rinse in cold water after use, then machine wash at 40°C or below. Use mild detergent and avoid fabric softener. Hang dry or tumble dry on low.",
  },
  {
    q: "Do you ship worldwide?",
    a: "Yes — we offer free shipping worldwide. Delivery typically takes 5–7 business days for standard shipping.",
  },
];

const FAQ = () => {
  useEffect(() => {
    const el = document.getElementById("page-content");
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-28 pt-20 md:pb-32 md:pt-24">
        <PageContent id="page-content" className="max-w-2xl">
          <h1 className="text-heading font-medium text-foreground">Frequently asked questions</h1>
          <p className="mt-4 text-body text-muted-foreground">
            Quick answers to common questions. Can&apos;t find what you need? Contact us.
          </p>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-t-0">
                <AccordionTrigger className="text-body font-medium text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-body text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </PageContent>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
