import { Star, Quote } from "lucide-react";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Lagos",
    rating: 5,
    text: "I was skeptical at first, but these have completely changed my period experience. No more midnight panics about leaks. I actually forget I'm on my period!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face",
  },
  {
    name: "Jessica T.",
    location: "Abuja",
    rating: 5,
    text: "Finally, underwear that actually works. I've tried other brands but Desire Comfort™ is on another level. So comfortable and the protection is incredible.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&h=128&fit=crop&crop=face",
  },
  {
    name: "Michelle K.",
    location: "Port Harcourt",
    rating: 5,
    text: "As a nurse on 12-hour shifts, I needed something reliable. These are a lifesaver. No more worrying during my busiest days.",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&h=128&fit=crop&crop=face",
  },
  {
    name: "Amanda R.",
    location: "Ibadan",
    rating: 5,
    text: "I bought these for my heavy flow days and they haven't let me down once. Plus they're so cute I forget they're period underwear!",
    verified: true,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&fit=crop&crop=face",
  },
];

const trustBadges = [
  "Trusted by 50,000+ women",
  "30-Day fit guarantee",
  "Free Shipping Over $50",
  "Comfort-first design",
];

const SocialProofSection = () => {
  return (
    <section id="reviews" className={`section-padding bg-background ${HEADER_SCROLL_ANCHOR_CLASS}`}>
      <div className="container mx-auto">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="text-base font-semibold uppercase tracking-wider text-primary">Trusted by 50,000+ women</span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl lg:text-5xl">Real reviews from real customers</h2>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-rating text-rating" />
              ))}
            </div>
            <span className="text-base font-medium text-foreground/90">4.9/5 · 2,500+ reviews</span>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border/50 bg-card p-6 transition-colors hover:border-primary/30 md:p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-blush-light" />

              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-rating text-rating" />
                ))}
              </div>

              <p className="mb-6 text-base font-medium leading-relaxed text-foreground">&ldquo;{testimonial.text}&rdquo;</p>

              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt=""
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-border/60"
                    width={48}
                    height={48}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="min-w-0">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="truncate text-base font-medium text-foreground/80">{testimonial.location}</p>
                  </div>
                </div>
                {testimonial.verified && (
                  <span className="shrink-0 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">Verified Buyer</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-border pt-12 md:gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-base font-medium text-foreground/90">
              <span className="h-2 w-2 shrink-0 rounded-full bg-success" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
