import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/sections/HowItWorksSection";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-28 pt-24 md:pb-32 md:pt-28">
        <HowItWorksSection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
