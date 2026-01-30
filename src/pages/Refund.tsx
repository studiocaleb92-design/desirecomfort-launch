import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Refund Policy
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We offer a 30-day comfort guarantee. If you're not satisfied, contact us for a refund
            or exchange. Items must be unworn and in original packaging. Full refund policy details
            will be published here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Refund;
