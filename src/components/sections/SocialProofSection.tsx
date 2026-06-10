import EditorialSection from "@/components/layout/EditorialSection";
import { useStaggerReveal, staggerChildProps } from "@/hooks/useStaggerReveal";
import { cn } from "@/lib/utils";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Lagos",
    text: "I was skeptical at first, but these have completely changed my period experience. No more midnight panics about leaks. I actually forget I'm on my period!",
  },
  {
    name: "Jessica T.",
    location: "Abuja",
    text: "Finally, underwear that actually works. I've tried other brands but Desire Comfort™ is on another level. So comfortable and the protection is incredible.",
  },
  {
    name: "Michelle K.",
    location: "Port Harcourt",
    text: "As a nurse on 12-hour shifts, I needed something reliable. These are a lifesaver. No more worrying during my busiest days.",
  },
];

const SocialProofSection = () => {
  const { containerRef, isVisible } = useStaggerReveal();

  return (
    <EditorialSection
      id="reviews"
      surface="candlelight"
      reveal
      className={HEADER_SCROLL_ANCHOR_CLASS}
    >
      <div className="max-w-2xl">
        <h2 className="text-heading font-medium text-foreground">Real reviews from real customers</h2>
        <p className="mt-3 text-caption text-muted-gold">4.9/5 from 2,500+ reviews</p>
      </div>

      <div
        ref={containerRef}
        className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-x-12"
      >
        {testimonials.map((testimonial, index) => {
          const stagger = staggerChildProps(
            index,
            isVisible,
            cn(
              "border-t border-obsidian/10 py-8",
              index === 0 && "border-t-0 pt-0 md:border-t",
            ),
          );
          return (
            <blockquote key={testimonial.name} className={stagger.className} style={stagger.style}>
            <p className="text-body text-foreground">&ldquo;{testimonial.text}&rdquo;</p>
            <footer className="mt-4 text-caption text-muted-foreground">
              {testimonial.name} · {testimonial.location}
            </footer>
            </blockquote>
          );
        })}
      </div>
    </EditorialSection>
  );
};

export default SocialProofSection;
