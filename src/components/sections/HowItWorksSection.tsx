import { Heart, Droplets, Layers, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section>
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
            <span className="text-base font-semibold tracking-wider text-primary uppercase">Deep dive</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
              Technology &amp; protection
            </h2>
            <p className="text-lg font-medium text-foreground/90 mt-4">
              Go deeper on fabrics, layers, and how we test — so you know exactly what you&apos;re wearing.
            </p>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
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

          {/* OEKO-TEX® certification badge + link */}
          <div className="flex flex-col items-center justify-center gap-4 mb-16 p-6 rounded-2xl bg-background border border-border/50 max-w-md mx-auto">
            <a
              href="https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-lg"
              aria-label="OEKO-TEX Standard 100 — textiles tested for harmful substances"
            >
              <img
                src="/images/oeko-tex-badge.svg"
                alt="OEKO-TEX® STANDARD 100 — Certified textiles tested for harmful substances"
                className="h-12 w-auto mx-auto"
                width="120"
                height="48"
              />
            </a>
            <p className="text-sm font-semibold text-primary uppercase tracking-wide">OEKO-TEX®</p>
            <p className="text-lg font-bold text-warm-brown">CERTIFIED</p>
            <p className="text-center text-sm text-muted-foreground mt-1">
              Tested for harmful substances.{" "}
              <a
                href="https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Learn more
              </a>
            </p>
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
              to="/#order"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get Yours Now - 30% Off
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
