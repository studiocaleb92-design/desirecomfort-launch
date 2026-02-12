import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "I was skeptical at first, but these have completely changed my period experience. No more midnight panics about leaks. I actually forget I'm on my period!",
    verified: true,
  },
  {
    name: "Jessica T.",
    location: "Austin, TX",
    rating: 5,
    text: "Finally, underwear that actually works. I've tried other brands but Desire Comfort™ is on another level. So comfortable and the protection is incredible.",
    verified: true,
  },
  {
    name: "Michelle K.",
    location: "New York, NY",
    rating: 5,
    text: "As a nurse on 12-hour shifts, I needed something reliable. These are a lifesaver. No more worrying during my busiest days.",
    verified: true,
  },
  {
    name: "Amanda R.",
    location: "Seattle, WA",
    rating: 5,
    text: "I bought these for my heavy flow days and they haven't let me down once. Plus they're so cute I forget they're period underwear!",
    verified: true,
  },
];

const trustBadges = [
  "50,000+ Happy Customers",
  "30-Day Comfort Guarantee",
  "Free Shipping Over $50",
  "Dermatologist Tested",
];

const SocialProofSection = () => {
  return (
    <section id="reviews" className="section-padding bg-background scroll-mt-[11rem]">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-base font-semibold tracking-wider text-primary uppercase">
            Real Stories
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Join thousands of confident women
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-rating fill-rating" />
              ))}
            </div>
            <span className="text-base font-medium text-foreground/90">4.9/5 from 2,500+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-primary/30 transition-colors relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blush-light" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-rating fill-rating" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-base font-medium text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-base font-medium text-foreground/80">{testimonial.location}</p>
                </div>
                {testimonial.verified && (
                  <span className="text-sm font-semibold text-success bg-success/10 px-3 py-1 rounded-full">
                    Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 pt-12 border-t border-border">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-base font-medium text-foreground/90"
            >
              <span className="w-2 h-2 rounded-full bg-success" />
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
