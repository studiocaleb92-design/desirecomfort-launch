import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EditorialSection from "@/components/layout/EditorialSection";
import { CTA_PRIMARY_LABEL, CTA_TRUST_LINE, offerLine } from "@/lib/ctaCopy";
import { PRODUCT_HERO_FALLBACK } from "@/lib/media";
import { useCart } from "@/context/CartContext";
import { useProductOffer } from "@/context/ProductOfferContext";
import { BUNDLE_OPTIONS, SITE_DISCOUNT_PERCENT } from "@/lib/productPricing";
import {
  COLOR_QUERY_PARAM,
  HEADER_SCROLL_ANCHOR_CLASS,
  isPurchasableColor,
  PRIMARY_IMAGE_BY_COLOR,
  PRODUCT_COLORS,
  PRODUCT_SIZES,
} from "@/lib/productCatalog";
import { cn } from "@/lib/utils";

const PRODUCT_TITLE = "4-Layer Leakproof Panties";

const foldedBullets = [
  "30-day fit guarantee — unworn pairs in original packaging",
  "Reusable protection with a slimmer profile than pads",
  "Leak-proof, breathable, and washable for daily wear",
];

const toggleClass = (active: boolean) =>
  cn(
    "min-h-11 border border-obsidian bg-transparent px-4 py-2 text-sm font-medium text-obsidian transition-colors",
    active && "border-b-2 border-b-amber-glow"
  );

const FeaturedProductSection = () => {
  const { search } = useLocation();
  const colors = PRODUCT_COLORS.filter((c) => PRIMARY_IMAGE_BY_COLOR[c.name]);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "Blush Pink");
  const [selectedSize, setSelectedSize] = useState<(typeof PRODUCT_SIZES)[number]>("M");
  const { bundleQty, setBundleQty, totals } = useProductOffer();
  const { addItem, openCart } = useCart();

  useEffect(() => {
    const color = new URLSearchParams(search).get(COLOR_QUERY_PARAM);
    if (color && isPurchasableColor(color)) {
      setSelectedColor(color);
    }
  }, [search]);

  const featuredImage = PRIMARY_IMAGE_BY_COLOR[selectedColor] ?? "/images/blush-pink.jpg";
  const packLabel = BUNDLE_OPTIONS.find((b) => b.qty === bundleQty)?.label ?? `${bundleQty} Pack`;

  return (
    <EditorialSection
      id="order"
      surface="candlelight"
      reveal
      className={HEADER_SCROLL_ANCHOR_CLASS}
    >
      <div className="mb-10 max-w-2xl">
        <h2 className="text-heading font-medium text-foreground">4-Layer Leakproof Panties</h2>
        <p className="mt-3 text-body text-muted-gold">
          4-layer leakproof panties · {offerLine(SITE_DISCOUNT_PERCENT)}
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
        <div className="aspect-square w-full overflow-hidden bg-background">
          <img
            key={selectedColor}
            src={featuredImage}
            alt={`Desire Comfort™ 4-Layer Leakproof Panties — ${selectedColor}`}
            className="h-full w-full rounded-none object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const el = e.currentTarget;
              if (!el.dataset.fallback) {
                el.dataset.fallback = "1";
                el.src = PRODUCT_HERO_FALLBACK;
              }
            }}
          />
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-heading-sm font-medium text-foreground">
              ${totals.totalSale.toFixed(2)}
            </span>
            <span className="text-body text-muted-foreground line-through">
              ${totals.totalCompare.toFixed(2)}
            </span>
            <span className="text-caption text-muted-gold">{SITE_DISCOUNT_PERCENT}% off</span>
          </div>
          <p className="text-caption text-muted-foreground">
            ${totals.unitSale.toFixed(2)} per pair · {bundleQty} pairs
          </p>

          <ul className="space-y-2 border-t border-obsidian/10 pt-4 text-body text-foreground">
            {foldedBullets.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div>
            <span className="mb-2 block text-caption font-medium text-foreground">Pack size</span>
            <div className="flex flex-wrap gap-2">
              {BUNDLE_OPTIONS.map(({ label, qty, valueLabel }) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => setBundleQty(qty)}
                  className={toggleClass(bundleQty === qty)}
                >
                  <span className="block">{label}</span>
                  <span className="mt-0.5 block text-caption text-muted-foreground">{valueLabel}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-2 block text-caption font-medium text-foreground">Color</span>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => setSelectedColor(color.name)}
                  className={cn(
                    "flex flex-col items-center gap-1.5 border border-transparent px-2 py-1 transition-opacity hover:opacity-80",
                    selectedColor === color.name && "border-b border-b-amber-glow"
                  )}
                  aria-label={color.name}
                >
                  <span className={`block h-8 w-8 rounded-none ${color.swatchClass}`} />
                  <span className="text-caption text-foreground">{color.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <span className="mb-2 block text-caption font-medium text-foreground">Size</span>
            <div className="flex flex-wrap gap-2">
              {PRODUCT_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={cn(toggleClass(selectedSize === size), "min-w-12")}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="hero"
            size="lg"
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
            {CTA_PRIMARY_LABEL}
          </Button>
          <p className="text-caption text-muted-foreground">{CTA_TRUST_LINE}</p>
        </div>
      </div>
    </EditorialSection>
  );
};

export default FeaturedProductSection;
