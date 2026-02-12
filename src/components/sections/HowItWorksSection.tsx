import { Package, Sparkles, Heart, Droplets, Layers, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

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

const layers = [
  {
    step: 1,
    icon: Droplets,
    title: "Quick-drying absorbent layer",
    text: "A specially developed top layer that quickly wicks moisture so you feel dry. Works like regular underwear—only smarter.",
  },
  {
    step: 2,
    icon: Layers,
    title: "Highly absorbent core",
    text: "The middle layer effectively absorbs moisture. Thin, not bulky—with options from light to heavy flow.",
  },
  {
    step: 3,
    icon: Shield,
    title: "Leak-proof barrier",
    text: "The impermeable layer keeps you protected. Capacity of up to 4 tampons’ worth (40ml)—for strong and light days.",
  },
];

const trustBadges = [
  { label: "RECOMMENDED BY", value: "9/10 CUSTOMERS", icon: Heart },
  { label: "LEAK-PROOF", value: "FOR 100 WASHES*", icon: Shield },
  { label: "OEKO-TEX", value: "TESTED & SAFE", icon: CheckCircle2 },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="scroll-mt-[11rem]">
      {/* Anti Leak. Pro You — Modibodi-style repeating banner */}
      <div className="bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 border-y border-border/50 py-6 overflow-hidden">
        <div className="flex w-max animate-marquee">
          <div className="flex gap-8 whitespace-nowrap text-2xl md:text-3xl font-serif font-semibold text-foreground/90 tracking-tight pr-8">
            <span className="text-primary">Anti Leak.</span>
            <span className="text-warm-brown">Pro You.</span>
            <span className="text-primary">Anti Leak.</span>
            <span className="text-warm-brown">Pro You.</span>
            <span className="text-primary">Anti Leak.</span>
            <span className="text-warm-brown">Pro You.</span>
          </div>
          <div className="flex gap-8 whitespace-nowrap text-2xl md:text-3xl font-serif font-semibold text-foreground/90 tracking-tight pr-8">
            <span className="text-primary">Anti Leak.</span>
            <span className="text-warm-brown">Pro You.</span>
            <span className="text-primary">Anti Leak.</span>
            <span className="text-warm-brown">Pro You.</span>
            <span className="text-primary">Anti Leak.</span>
            <span className="text-warm-brown">Pro You.</span>
          </div>
        </div>
      </div>

      <div className="section-padding bg-cream-dark">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-base font-semibold tracking-wider text-primary uppercase">
              Simple & Easy
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
              How It Works
            </h2>
            <p className="text-lg font-medium text-foreground/90 mt-4">
              It&apos;s as simple as 1, 2, 3. No complicated routines—just effortless protection that feels like real underwear.
            </p>
          </div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mb-20">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
                )}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-blush-light mb-6">
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-primary bg-background px-2 py-1 rounded-full border border-primary/20">
                    {step.number}
                  </span>
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-base font-medium text-foreground/90 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technology — Snuggs-style layer explanation */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground text-center mb-4">
              The most advanced technology in period underwear
            </h2>
            <p className="text-center text-foreground/80 font-medium mb-12">
              Developed for comfort and reliability. Super absorbent and at the same time impermeable.
            </p>
            <div className="space-y-8">
              {layers.map(({ step, icon: Icon, title, text }) => (
                <div
                  key={step}
                  className="flex flex-col sm:flex-row gap-6 items-start p-6 rounded-2xl bg-background border border-border/50 shadow-soft"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-blush-light flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {step}. {title}
                    </h3>
                    <p className="text-foreground/85 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Thickness only ~4mm—thin like normal underwear.
            </p>
          </div>

          {/* Trust badges — Modibodi-style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {trustBadges.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center p-6 rounded-2xl bg-background border border-border/50">
                <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">{label}</p>
                <p className="text-lg font-bold text-warm-brown mt-1">{value}</p>
              </div>
            ))}
          </div>

          {/* TRIED. TESTED. TRUE. — Modibodi-style */}
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-warm-brown/20 border border-border/50 p-8 md:p-12 text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
              TESTS? OBSESSED.
            </h3>
            <p className="text-xl font-medium text-foreground/90 mb-4">
              Proven to be leak-proof for 100 washes*
            </p>
            <p className="text-base text-foreground/80 max-w-xl mx-auto">
              We put our underwear through rigorous testing so you can trust every wear. Quality you can feel.
            </p>
            <p className="text-xs text-muted-foreground mt-4">*Care instructions apply. See FAQ.</p>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/product"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
