import { Package, Sparkles, Heart } from "lucide-react";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose your pack & fit",
    description: "Pick your pack size (10, 15, or 20), color, and size — designed for every body.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Wear like regular underwear",
    description: "Four discreet layers absorb and lock fluid in — no shifting bulk like pads.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Rinse, wash, reuse",
    description: "Cold rinse after wear, machine wash gentle, line or low tumble dry — ready for next cycle.",
  },
];

const HowItWorksStepsSection = () => {
  return (
    <section id="how-it-works" className={`section-padding bg-cream-dark ${HEADER_SCROLL_ANCHOR_CLASS}`}>
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Simple &amp; easy</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">How it works</h2>
          <p className="mt-3 text-base font-medium text-foreground/85">
            Three steps — then you&apos;re protected for the school run, work, sleep, and everything in between.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-background shadow-soft">
                <span className="absolute -right-1 -top-1 rounded-full border border-primary/20 bg-background px-2 py-0.5 text-xs font-bold text-primary">
                  {step.number}
                </span>
                <step.icon className="h-9 w-9 text-primary" aria-hidden />
              </div>
              <h3 className="font-serif text-lg font-medium text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-foreground/85 md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksStepsSection;
