import { Droplets, Feather, Moon, Shield, Leaf, Heart } from "lucide-react";

const benefits = [
  {
    icon: Droplets,
    title: "Leak-Proof",
    description: "Advanced 4-layer technology absorbs up to 4 tampons worth of fluid",
  },
  {
    icon: Feather,
    title: "Ultra-Thin",
    description: "Just 3mm thick — no one will ever know you're wearing protection",
  },
  {
    icon: Moon,
    title: "Day & Night",
    description: "Reliable protection for light days, heavy flows, and overnight",
  },
  {
    icon: Shield,
    title: "Odor Control",
    description: "Antimicrobial layer keeps you fresh and confident all day",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Reusable for 2+ years — saves money and reduces waste",
  },
  {
    icon: Heart,
    title: "Comfort First",
    description: "Soft, breathable fabric that moves with your body",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding bg-blush-light/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Why Desire Comfort™
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-blush-light flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <benefit.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
