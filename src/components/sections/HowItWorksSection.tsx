import { Package, Sparkles, Heart } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Choose Your Style",
    description: "Pick from our range of sizes and colors. We have options for every body and every flow.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Wear With Confidence",
    description: "Simply put them on like regular underwear. The 4-layer technology does all the work.",
  },
  {
    number: "03",
    icon: Heart,
    title: "Live Your Life",
    description: "Go about your day worry-free. When you're done, rinse, wash, and reuse.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-cream-dark scroll-mt-[11rem]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Simple & Easy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            It's as simple as 1, 2, 3. No complicated routines, just effortless protection.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              {/* Connector Line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}
              
              {/* Step Number */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-blush-light mb-6">
                <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-background px-2 py-1 rounded-full border border-primary/20">
                  {step.number}
                </span>
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
