import EditorialSection from "@/components/layout/EditorialSection";

const benefits = [
  {
    title: "Leak-proof",
    description: "Advanced 4-layer technology absorbs up to 4 tampons worth of fluid",
  },
  {
    title: "Ultra-thin",
    description: "Just 3mm thick — discreet protection under any outfit",
  },
  {
    title: "Day & night",
    description: "Reliable protection for light days, heavy flows, and overnight",
  },
  {
    title: "Odor control",
    description: "Antimicrobial layer keeps you fresh and confident all day",
  },
  {
    title: "Eco-friendly",
    description: "Reusable for 2+ years — saves money and reduces waste",
  },
  {
    title: "Comfort first",
    description: "Soft, breathable fabric that moves with your body",
  },
];

const BenefitsSection = () => (
  <EditorialSection surface="candlelight">
    <div className="max-w-2xl">
      <h2 className="text-heading font-medium text-foreground">
        Everything you need. Nothing you don&apos;t.
      </h2>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-16 md:gap-y-12">
      {benefits.map((benefit) => (
        <div key={benefit.title} className="border-t border-obsidian/10 pt-6">
          <h3 className="text-subheading font-medium text-foreground">{benefit.title}</h3>
          <p className="mt-2 text-body text-muted-foreground">{benefit.description}</p>
        </div>
      ))}
    </div>
  </EditorialSection>
);

export default BenefitsSection;
