import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import AsSeenOnSection from "@/components/sections/AsSeenOnSection";
import ProductGallerySection from "@/components/sections/ProductGallerySection";
import FeaturedProductSection from "@/components/sections/FeaturedProductSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <AsSeenOnSection />
        <ProductGallerySection />
        <FeaturedProductSection />
        <BenefitsSection />
        <SocialProofSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
