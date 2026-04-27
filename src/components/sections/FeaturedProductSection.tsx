import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Flame, Check } from "lucide-react";
import { CTA_PRIMARY_LABEL } from "@/lib/ctaCopy";
import productHero from "@/assets/product-hero.jpg";
import { useCart } from "@/context/CartContext";
import { useProductOffer } from "@/context/ProductOfferContext";
import {
  BUNDLE_OPTIONS,
  SITE_DISCOUNT_PERCENT,
} from "@/lib/productPricing";
import {
  HEADER_SCROLL_ANCHOR_CLASS,
  PRIMARY_IMAGE_BY_COLOR,
  PRODUCT_COLORS,
  PRODUCT_SIZES,
} from "@/lib/productCatalog";

const PRODUCT_TITLE = "4-Layer Leakproof Panties";

const FeaturedProductSection = () => {
  const colors = PRODUCT_COLORS.filter((c) => PRIMARY_IMAGE_BY_COLOR[c.name]);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "Blush Pink");
  const [selectedSize, setSelectedSize] = useState<(typeof PRODUCT_SIZES)[number]>("M");
  const { bundleQty, setBundleQty, totals } = useProductOffer();
  const { addItem, openCart } = useCart();

  const featuredImage = PRIMARY_IMAGE_BY_COLOR[selectedColor] ?? "/images/blush-pink.jpg";
  const packLabel = BUNDLE_OPTIONS.find((b) => b.qty === bundleQty)?.label ?? `${bundleQty} Pack`;

  return (
    <section id="order" className={`section-padding bg-cream-dark ${HEADER_SCROLL_ANCHOR_CLASS}`}>
      <div className="container mx-auto">
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <span className="text-base font-semibold uppercase tracking-wider text-primary">Featured product</span>
          <h2 className="mt-4 font-serif text-3xl font-medium text-foreground md:text-4xl">4-Layer Leakproof Panties</h2>
          <p className="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-[#B45309]">
            <Flame className="h-4 w-4 shrink-0" aria-hidden />
            <span>Limited stock — Flash sale {SITE_DISCOUNT_PERCENT}% off</span>
            <span className="hidden sm:inline">·</span>
            <span className="w-full text-center sm:w-auto">Selling fast · Offer ends soon</span>
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
          <div className="group relative mx-auto aspect-square w-full max-h-[400px] overflow-hidden rounded-2xl bg-background shadow-soft md:max-h-none">
            <img
              key={selectedColor}
              src={featuredImage}
              alt={`Desire Comfort™ 4-Layer Leakproof Panties — ${selectedColor}`}
              className="h-full w-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.06]"
              loading="lazy"
              decoding="async"
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
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-2xl font-semibold text-foreground md:text-3xl">${totals.totalSale.toFixed(2)}</span>
              <span className="text-lg text-muted-foreground line-through">${totals.totalCompare.toFixed(2)}</span>
              <span className="rounded bg-[#C8A24A]/15 px-2 py-1 text-sm font-semibold text-[#C8A24A]">
                {SITE_DISCOUNT_PERCENT}% OFF
              </span>
              <span className="rounded bg-success/10 px-2 py-1 text-sm font-semibold text-success">
                Save ${totals.totalSavings.toFixed(2)}
              </span>
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              ${totals.unitSale.toFixed(2)} per pair · {bundleQty} pairs
            </p>
            <p className="text-sm font-semibold text-[#B45309]">Limited stock available · Selling fast · Offer ends soon</p>
            <ul className="space-y-2.5 text-base font-medium text-foreground/90">
              {(
                [
                  "Leak-proof protection",
                  "No bulk under clothing",
                  "Reusable & washable",
                  "Saves money over time",
                ] as const
              ).map((line) => (
                <li key={line} className="flex items-start gap-2.5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div>
              <span className="mb-2 block text-base font-semibold text-foreground">Pack size</span>
              <div className="flex flex-wrap gap-2">
                {BUNDLE_OPTIONS.map(({ label, qty, valueLabel, highlight }) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setBundleQty(qty)}
                    className={`min-h-[48px] min-w-[5.5rem] rounded-lg px-3 py-2 text-left text-sm font-semibold transition-all sm:px-4 ${
                      bundleQty === qty
                        ? highlight
                          ? "bg-primary text-primary-foreground ring-2 ring-[#C8A24A] ring-offset-2 ring-offset-background"
                          : "bg-primary text-primary-foreground"
                        : highlight
                          ? "border-2 border-[#C8A24A]/50 bg-muted text-foreground hover:bg-muted/80"
                          : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                  >
                    <span className="block">{label}</span>
                    <span className="mt-0.5 block text-xs font-medium opacity-90">{valueLabel}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-2 block text-base font-semibold text-foreground">Color</span>
              <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    type="button"
                    onClick={() => setSelectedColor(color.name)}
                    className="flex min-h-[48px] flex-col items-center gap-1.5 transition-all hover:opacity-90"
                    aria-label={color.name}
                  >
                    <span
                      className={`block h-10 w-10 rounded-full ${color.swatchClass} transition-all ${
                        selectedColor === color.name ? "ring-2 ring-primary ring-offset-2" : "hover:scale-110"
                      }`}
                    />
                    <span className="text-sm font-semibold text-foreground">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="mb-2 block text-base font-semibold text-foreground">Size</span>
              <div className="flex flex-wrap gap-2">
                {PRODUCT_SIZES.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`min-h-11 min-w-12 rounded-lg text-sm font-medium transition-all ${
                      selectedSize === size ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
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
                className="min-h-12 w-full sm:w-auto"
                onClick={() => {
                  addItem({
                    title: PRODUCT_TITLE,
                    price: totals.unitSale,
                    quantity: bundleQty,
                    color: selectedColor,
                    size: selectedSize,
                    packLabel,
                    image: featuredImage,
                  });
                  openCart();
                }}
              >
                <ShoppingBag className="h-5 w-5" />
                {CTA_PRIMARY_LABEL}
              </Button>
            </div>
            <p className="mt-3 text-xs font-medium text-muted-foreground">
              Secure checkout · 30-day guarantee · Fast delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductSection;
