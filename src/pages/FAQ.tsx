import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
      <main className="pt-36 md:pt-44 pb-16 flex justify-center">
        <div id="page-content" className="container mx-auto px-4 py-12 md:py-20 scroll-mt-[11rem] max-w-3xl w-full">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base font-medium text-foreground/90 max-w-2xl">
            Quick answers to common questions. Can&apos;t find what you need? Contact us.
          </p>
          <Accordion type="single" collapsible className="mt-8 max-w-2xl">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/85">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
