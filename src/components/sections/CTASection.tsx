import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Shield, Truck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
            Ready to experience <span className="text-primary">true comfort</span>?
          </h2>
          <p className="text-lg text-muted-foreground mt-6 max-w-xl mx-auto">
            Join over 50,000 women who've made the switch to DesireComfort. 
            Your confidence is waiting.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link to="/product">
              <Button variant="hero" size="xl">
                <ShoppingBag className="w-5 h-5" />
                Shop Now
              </Button>
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="w-5 h-5 text-primary" />
              30-Day Guarantee
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Truck className="w-5 h-5 text-primary" />
              Free Shipping Over $50
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
