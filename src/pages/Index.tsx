import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PainSection from "@/components/sections/PainSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProductGallerySection from "@/components/sections/ProductGallerySection";
import FeaturedProductSection from "@/components/sections/FeaturedProductSection";
import GuaranteeSection from "@/components/sections/GuaranteeSection";
import HowItWorksStepsSection from "@/components/sections/HowItWorksStepsSection";
import DailyRoutineSection from "@/components/sections/DailyRoutineSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import { HomeAboutSection, HomeContactSection } from "@/components/sections/HomeAboutContactSections";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import CTASection from "@/components/sections/CTASection";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const HOME_VIDEO_FILES: { filename: string; title: string }[] = [
  { filename: "hf_20260319_062456_52468f2b-fc9e-4262-a66b-adc0a8b3e825.mp4", title: "How it works" },
  { filename: "hf_20260326_174955_49a25311-fd30-4578-abf0-36a9b0143862.mp4", title: "Comfort & protection" },
];

const Index = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/" || !hash) return;
    const id = hash.slice(1);
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => clearTimeout(t);
  }, [hash, pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-28 md:pb-32">
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <ProductGallerySection />
        <FeaturedProductSection />
        <ComparisonSection />
        <GuaranteeSection />
        <HowItWorksStepsSection />
        <DailyRoutineSection />
        <section id="videos" className={`section-padding bg-cream-dark ${HEADER_SCROLL_ANCHOR_CLASS}`} aria-label="Product videos">
          <div className="container mx-auto">
            <h2 className="mb-10 text-center font-serif text-3xl font-medium text-foreground md:text-4xl">See how it works</h2>
            <div className="mx-auto max-w-4xl space-y-10">
              {HOME_VIDEO_FILES.map((video, index) => (
                <div key={video.filename + index}>
                  <h3 className="mb-2 font-serif text-lg font-medium text-foreground">{video.title}</h3>
                  <div className="aspect-video overflow-hidden rounded-xl bg-muted">
                    <video
                      src={`/videos/${encodeURIComponent(video.filename)}`}
                      controls
                      className="h-full w-full object-contain"
                      preload="metadata"
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <BenefitsSection />
        <SocialProofSection />
        <HomeFaqSection />
        <HomeAboutSection />
        <HomeContactSection />
        <HowItWorksSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
