import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import productImage from "@/assets/product-hero.jpg";

const SOLUTION_IMAGE = "/images/everdries-gallery-1.jpg";

const SolutionSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image (Everdries; fallback: assets) */}
          <div className="order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={SOLUTION_IMAGE}
                alt="Desire Comfort™ period underwear"
                onError={(e) => { e.currentTarget.src = productImage; }}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:right-6 bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-elevated">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium text-sm">Ultra-Thin Design</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium tracking-wider text-primary uppercase">
              Introducing Desire Comfort™
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
              Protection that feels like nothing at all
            </h2>
            <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
              Our revolutionary leak-proof underwear combines invisible protection 
              with all-day comfort. No bulk. No bunching. Just confidence you can feel.
            </p>
            
            <ul className="mt-8 space-y-4">
              {[
                "4-layer absorption technology",
                "Breathable, moisture-wicking fabric",
                "Seamless, invisible fit under any outfit",
                "Machine washable & reusable",
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Link to="/product" className="inline-block mt-8">
              <Button variant="hero" size="lg">
                Discover Your Comfort
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
