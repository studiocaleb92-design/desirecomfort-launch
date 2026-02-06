import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Shipping & Delivery
          </h1>
          <div className="mt-8 flex items-start gap-4">
            <Truck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">Free shipping worldwide.</strong> We ship
                standard delivery in 5–7 business days. Express shipping may be available at checkout.
              </p>
              <p>
                You'll receive a tracking link once your order ships. If you have questions,
                contact us at Info@desire-comfort.com.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shipping;
