import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Shield } from "lucide-react";
import heroImage from "@/assets/hero-lifestyle.jpg";
import { CTA_PRIMARY_LABEL } from "@/lib/ctaCopy";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Woman relaxing comfortably"
          className="h-full w-full object-cover object-center opacity-40"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-20 pb-14 md:pt-28 md:pb-20 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-light/80 backdrop-blur-sm text-warm-brown text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" />
            Trusted by 50,000+ Women
          </div>

          {/* Hero brand — logo + name */}
          <div className="animate-fade-in-up animation-delay-100">
            <img src="/logo.svg" alt="Desire Comfort™" className="h-12 md:h-14 w-auto mx-auto mb-4" />
            <p className="text-lg sm:text-xl md:text-2xl font-medium font-serif text-foreground tracking-[0.2em] whitespace-nowrap">
              DESIRE–COMFORT™
            </p>
          </div>

          {/* Benefit headline */}
          <h1 className="mt-4 font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight tracking-tight animate-fade-in-up animation-delay-200">
            Stay Dry, Comfortable, and Confident All Day
          </h1>

          {/* Subtext — leak protection, comfort, confidence */}
          <p className="text-hero-sub mt-4 max-w-xl mx-auto animate-fade-in-up animation-delay-300">
            <span className="font-medium text-foreground/90">Leak-proof protection</span> you can count on,{" "}
            <span className="font-medium text-foreground/90">breathable comfort</span> that never feels bulky, and the{" "}
            <span className="font-medium text-foreground/90">confidence</span> to move through your day without worry.
          </p>

          {/* CTA */}
          <div className="mt-4 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" className="min-h-12 px-8" asChild>
              <Link to="/#order">
                <ShoppingBag className="w-5 h-5" />
                {CTA_PRIMARY_LABEL}
              </Link>
            </Button>
            <p className="mt-3 text-xs font-medium text-muted-foreground">
              Secure checkout · 30-day guarantee · Fast delivery
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
