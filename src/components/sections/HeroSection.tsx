import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HERO_IMAGE } from "@/lib/media";
import { CTA_PRIMARY_LABEL, CTA_TRUST_LINE } from "@/lib/ctaCopy";

const HeroSection = () => {
  return (
    <section className="relative h-svh min-h-svh w-full overflow-hidden">
      <img
        src={HERO_IMAGE}
        alt="Woman relaxing comfortably"
        className="absolute inset-0 z-0 h-full w-full object-cover object-[68%_42%] md:object-center"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      {/* Frosted read zone — fixed to hero background, not the content block */}
      <div
        className="hero-read-panel pointer-events-none absolute bottom-0 left-0 z-[1] h-[min(72vh,680px)] w-full max-w-[100vw] md:h-[min(84vh,900px)] md:w-[min(68vw,920px)]"
        aria-hidden
      />

      {/* Content — editorial gutter only */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto w-full max-w-[1200px] px-3 pb-6 md:pb-8">
          <div className="max-w-2xl">
            <h1 className="text-[clamp(2.25rem,6vw,2.75rem)] font-normal leading-[1.08] text-walnut-shell md:text-[clamp(2.75rem,4.2vw,3.5rem)]">
              Stay dry, comfortable, and confident all day
            </h1>
            <p className="mt-4 text-body text-walnut-shell/85">
              Leak-proof protection you can count on, breathable comfort that never feels bulky, and the
              confidence to move through your day without worry.
            </p>
            <Button variant="solid" size="lg" className="mt-8" asChild>
              <Link to="/#order">{CTA_PRIMARY_LABEL}</Link>
            </Button>
            <p className="mt-3 text-caption text-obsidian/80 md:mt-6 md:text-obsidian/85">
              {CTA_TRUST_LINE}
            </p>
          </div>
        </div>
      </div>

      <div id="hero-sentinel" className="absolute bottom-0 z-10 h-px w-full" />
    </section>
  );
};

export default HeroSection;
