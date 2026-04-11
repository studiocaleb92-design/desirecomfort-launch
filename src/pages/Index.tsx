import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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

// Same videos as on Product page (public/videos)
const HOME_VIDEO_FILES: { filename: string; title: string }[] = [
  { filename: "hf_20260319_062456_52468f2b-fc9e-4262-a66b-adc0a8b3e825.mp4", title: "How it works" },
  { filename: "hf_20260326_174955_49a25311-fd30-4578-abf0-36a9b0143862.mp4", title: "Comfort & protection" },
];

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    };
    const t = setTimeout(scrollToTarget, 100);
    return () => clearTimeout(t);
  }, [hash]);
  const scrollMarginClass = "scroll-mt-[11rem]";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PainSection />
        <SolutionSection />
        <AsSeenOnSection />
        <ProductGallerySection />
        <div id="order" className={scrollMarginClass}>
          <FeaturedProductSection />
        </div>
        {/* Product videos, visible on homepage */}
        <section id="videos" className={`section-padding bg-cream-dark ${scrollMarginClass}`} aria-label="Product videos">
          <div className="container mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground text-center mb-10">
              See how it works
            </h2>
            <div className="max-w-4xl mx-auto space-y-10">
              {HOME_VIDEO_FILES.map((video, index) => (
                <div key={video.filename + index}>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    {video.title}
                  </h3>
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted">
                    <video
                      src={`/videos/${encodeURIComponent(video.filename)}`}
                      controls
                      className="w-full h-full object-contain"
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
        {/* Content under videos: Daily routine, Reviews preview, FAQ preview */}
        <section className="section-padding bg-background">
          <div className="container mx-auto max-w-4xl">
            <div className="space-y-10">
              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">Daily routine</h2>
                <ol className="list-decimal list-inside space-y-2 text-muted-foreground text-sm">
                  <li>Wear like regular underwear on light to heavy days.</li>
                  <li>Rinse in cold water after use, then machine wash at 40°C or below.</li>
                  <li>Hang dry or tumble dry on low — ready for next use.</li>
                </ol>
              </div>
              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">What customers say</h2>
                <div className="bg-card rounded-lg p-4 border border-border/50">
                  <p className="text-foreground text-sm italic">&ldquo;I actually forget I&apos;m on my period. No more midnight panics about leaks.&rdquo;</p>
                  <p className="text-sm text-muted-foreground mt-2">— Sarah M., verified buyer</p>
                </div>
                <Link to="/#reviews" className="text-sm text-primary hover:underline mt-2 inline-block">
                  Read more reviews →
                </Link>
              </div>
              <div>
                <h2 className="font-serif text-xl font-medium text-foreground mb-4">Quick FAQ</h2>
                <p className="text-muted-foreground text-sm mb-2">
                  <strong className="text-foreground">Size?</strong> Use our Size Guide on the product page. Between sizes? Size up for comfort.
                </p>
                <p className="text-muted-foreground text-sm mb-2">
                  <strong className="text-foreground">Returns?</strong> 30-day comfort guarantee. Unworn, original packaging.
                </p>
                <Link to="/faq" className="text-sm text-primary hover:underline inline-block">
                  Full FAQ →
                </Link>
              </div>
            </div>
          </div>
        </section>
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
