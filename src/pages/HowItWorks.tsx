import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="page-top-offset pb-28 md:pb-32">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
