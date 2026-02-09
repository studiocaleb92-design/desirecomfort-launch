import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-lg text-center">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
          <h1 className="font-serif text-2xl md:text-3xl font-medium text-foreground mb-2">
            Thank you for your order
          </h1>
          <p className="text-muted-foreground mb-8">
            We&apos;ve received your payment. You&apos;ll get a confirmation email shortly with shipping details.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/">Continue shopping</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;
