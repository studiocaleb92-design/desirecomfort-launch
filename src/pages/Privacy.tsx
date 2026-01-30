import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            We respect your privacy. This page will be updated with our full privacy policy.
            For questions, contact us at hello@desirecomfort.com.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
