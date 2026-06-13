import EditorialSection from "@/components/layout/EditorialSection";
import { useStaggerReveal, staggerChildProps } from "@/hooks/useStaggerReveal";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const steps = [
  {
    number: "01",
    title: "Choose your pack and fit",
    description: "Pick your pack size, color, and size — designed for every body.",
  },
  {
    number: "02",
    title: "Wear like regular underwear",
    description:
      "Four discreet layers absorb and lock fluid in — no shifting bulk like pads.",
  },
  {
    number: "03",
    title: "Rinse, wash, reuse",
    description:
      "Cold rinse after wear, machine wash gentle, line or low tumble dry — ready for next cycle.",
  },
];

const HowItWorksStepsSection = () => {
  const { containerRef, isVisible } = useStaggerReveal();

  return (
    <EditorialSection
      id="how-it-works"
      surface="soft-blush"
      reveal
      className={HEADER_SCROLL_ANCHOR_CLASS}
    >
      <div className="max-w-2xl">
        <h2 className="text-heading font-medium text-foreground">How it works</h2>
        <p className="mt-3 text-body text-muted-foreground">
          Three steps — then you&apos;re protected for the school run, work, sleep, and everything in
          between.
        </p>
      </div>

      <div
        ref={containerRef}
        className="mt-12 grid grid-cols-1 gap-10 border-t border-obsidian/10 pt-10 md:grid-cols-3 md:gap-8"
      >
        {steps.map((step, index) => (
          <div key={step.number} {...staggerChildProps(index, isVisible)}>
            <p className="text-caption text-muted-gold">{step.number}</p>
            <h3 className="mt-2 text-subheading font-medium text-foreground">{step.title}</h3>
            <p className="mt-3 text-body text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </EditorialSection>
  );
};

export default HowItWorksStepsSection;
