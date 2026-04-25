import { Link } from "react-router-dom";
import productHero from "@/assets/product-hero.jpg";
import productVariants from "@/assets/product-variants.jpg";
import heroLifestyle from "@/assets/hero-lifestyle.jpg";

// Product gallery — Desire Comfort™ assets only (no journalist/everdries-branded image)
const galleryImages = [
  { src: "/images/blush-pink.jpg", fallback: productHero, alt: "Desire Comfort™ — 4-layer leakproof panties" },
  { src: "/images/everdries-gallery-1.jpg", fallback: productHero, alt: "4-Layer Leakproof Panties — main" },
  { src: "/images/everdries-gallery-2.jpg", fallback: productVariants, alt: "4-Layer Leakproof Panties — variants" },
  { src: "/images/everdries-gallery-3.jpg", fallback: productHero, alt: "4-Layer Leakproof Panties — detail" },
  { src: "/images/everdries-gallery-4.jpg", fallback: productVariants, alt: "4-Layer Leakproof Panties — fit" },
  { src: "/images/everdries-pink-stack.jpg", fallback: productHero, alt: "4-Layer Leakproof Panties" },
];

const ProductGallerySection = () => {
  return (
    <section className="section-padding bg-background border-t border-border/50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Product gallery
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-4">
            See the difference
          </h2>
          <p className="text-muted-foreground mt-2">
            Different angles and styles of our 4-layer leakproof panties.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin justify-center flex-wrap md:flex-nowrap md:justify-center">
          {galleryImages.map((img, index) => (
            <Link
              key={index}
              to="/#order"
              className="h-64 w-64 flex-shrink-0 overflow-hidden rounded-2xl border border-border/50 shadow-soft transition-colors hover:border-primary/40 hover:shadow-elevated md:h-72 md:w-72"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  if (img.fallback) e.currentTarget.src = img.fallback;
                }}
              />
            </Link>
          ))}
        </div>
        <p className="text-center mt-6">
          <Link to="/#order" className="text-sm font-medium text-primary hover:underline">
            Shop featured pack →
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ProductGallerySection;
