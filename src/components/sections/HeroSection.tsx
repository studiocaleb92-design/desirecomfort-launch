import { Button } from "@/components/ui/button";
import { ShoppingBag, Shield, Droplets, Heart } from "lucide-react";
import heroImage from "@/assets/hero-lifestyle.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Woman relaxing comfortably"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blush-light/80 backdrop-blur-sm text-warm-brown text-sm font-medium mb-6 animate-fade-in-up">
            <Shield className="w-4 h-4" />
            Trusted by 50,000+ Women
          </div>

          {/* Hero brand — logo + name that stays on one line */}
          <div className="animate-fade-in-up animation-delay-100">
            <img src="/logo.svg" alt="DesireComfort" className="h-12 md:h-14 w-auto mx-auto mb-4" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium font-serif text-foreground tracking-[0.2em] whitespace-nowrap">
              DESIRE–COMFORT
            </h1>
          </div>

          {/* Slogan */}
          <p className="text-hero-sub mt-4 animate-fade-in-up animation-delay-200">
            Leak-Proof Period Panties That Feel Like Real Underwear
          </p>

          {/* Trust line */}
          <p className="text-sm text-muted-foreground mt-2 animate-fade-in-up animation-delay-300">
            Designed for comfort & leak protection.
          </p>

          {/* CTA */}
          <div className="mt-4 animate-fade-in-up animation-delay-300">
            <a href="#order">
              <Button variant="hero" size="xl">
                <ShoppingBag className="w-5 h-5" />
                BUY NOW
              </Button>
            </a>
          </div>

          {/* Quick Benefits — centered */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Droplets className="w-4 h-4 text-primary" />
              Leak-Proof Protection
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-primary" />
              All-Day Comfort
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-4 h-4 text-primary" />
              Free Shipping
            </div>
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
