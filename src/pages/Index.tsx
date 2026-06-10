import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BrandStatementSection from "@/components/sections/BrandStatementSection";
import FeaturedProductSection from "@/components/sections/FeaturedProductSection";
import EditorialGallerySection from "@/components/sections/EditorialGallerySection";
import EditorialBreakSection from "@/components/sections/EditorialBreakSection";
import HowItWorksStepsSection from "@/components/sections/HowItWorksStepsSection";
import ProductVideosSection from "@/components/sections/ProductVideosSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import HomeAboutContactSection from "@/components/sections/HomeAboutContactSections";

const Index = () => {
  const location = useLocation();
  const { hash, pathname } = location;

  useEffect(() => {
    if (pathname !== "/" || !hash) return;
    const id = hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(t);
  }, [hash, pathname, location.search]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="page-bottom-safe">
        <HeroSection />
        <BrandStatementSection />
        <FeaturedProductSection />
        <EditorialGallerySection />
        <EditorialBreakSection />
        <HowItWorksStepsSection />
        <ProductVideosSection />
        <SocialProofSection />
        <HomeFaqSection />
        <HomeAboutContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
