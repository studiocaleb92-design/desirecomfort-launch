import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import productHero from "@/assets/product-hero.jpg";
import { getCompareAtPrice, getSavings } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
const colors = [
  { name: "Blush Pink", class: "bg-[hsl(355,45%,70%)]" },
  { name: "Dusty Rose", class: "bg-[hsl(355,40%,55%)]" },
  { name: "Cream", class: "bg-[hsl(40,40%,90%)]" },
  { name: "Black", class: "bg-[hsl(0,0%,15%)]" },
];

// Per-color image: Everdries (pnpm run download-everdries-images). Fallback: assets.
const COLOR_IMAGE_SRC: Record<string, string> = {
  "Blush Pink": "/images/blush-pink.jpg",
  "Dusty Rose": "/images/dusty-rose.jpg",
  "Cream": "/images/cream.jpg",
  "Black": "/images/black.jpg",
};
const FALLBACK_IMAGE_BY_COLOR: Record<string, string> = {
  "Blush Pink": "/images/blush-pink.jpg",
  "Dusty Rose": "/images/dusty-rose.jpg",
  "Cream": "/images/cream.jpg",
  "Black": "/images/black.jpg",
};
const COLOR_IMAGE = COLOR_IMAGE_SRC;

const FeaturedProductSection = () => {
  const [selectedColor, setSelectedColor] = useState("Blush Pink");
  const [selectedSize, setSelectedSize] = useState("M");
  const { addItem, openCart } = useCart();
  const price = 13.99;
  const compareAt = getCompareAtPrice(price);
  const savings = getSavings(compareAt, price);
  const featuredImage = COLOR_IMAGE[selectedColor] ?? "/images/blush-pink.jpg";
  const featuredFallback = FALLBACK_IMAGE_BY_COLOR[selectedColor] ?? productHero;

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            Featured product
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mt-4">
            4-Layer Leakproof Panties
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto items-center">
          <div className="rounded-2xl overflow-hidden bg-background shadow-soft aspect-square max-h-[400px] md:max-h-none">
            <img
              src={featuredImage}
              alt={`DesireComfort 4-Layer Leakproof Panties — ${selectedColor}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                const el = e.currentTarget;
                if (!el.dataset.fallback) {
                  el.dataset.fallback = "1";
                  el.src = productHero;
                }
              }}
            />
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-2xl md:text-3xl font-medium text-foreground">
                ${price.toFixed(2)}
              </span>
              <span className="text-lg text-muted-foreground line-through">
                ${compareAt.toFixed(2)}
              </span>
              <span className="text-sm font-medium bg-[#C8A24A]/15 text-[#C8A24A] px-2 py-1 rounded">
                30% OFF
              </span>
              <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded">
                Save ${savings.toFixed(2)}
              </span>
            </div>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>👗 Discreet Everyday Fit</li>
              <li>♻️ Reusable & Washable</li>
              <li>🛡️ Leak-proof Security</li>
              <li>🌿 Soft & Breathable</li>
              <li>🤍 All-day Comfort</li>
            </ul>

            {/* Color selector */}
            <div>
              <span className="text-sm font-medium text-foreground block mb-2">Color</span>
              <div className="flex gap-2">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-9 h-9 rounded-full ${color.class} transition-all ${
                      selectedColor === color.name
                        ? "ring-2 ring-primary ring-offset-2"
                        : "hover:scale-110"
                    }`}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div>
              <span className="text-sm font-medium text-foreground block mb-2">Size</span>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-9 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <Button
                variant="hero"
                size="xl"
                onClick={() => {
                  addItem({
                    title: "4-Layer Leakproof Panties",
                    price,
                    quantity: 5,
                    color: selectedColor,
                    size: selectedSize,
                    packLabel: "5-Pack",
                    image: featuredImage,
                  });
                  openCart();
                }}
              >
                <ShoppingBag className="w-5 h-5" />
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductSection;
