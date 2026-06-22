import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useProductOffer } from "@/context/ProductOfferContext";
import { CTA_PRIMARY_LABEL, CTA_TRUST_LINE, offerLine } from "@/lib/ctaCopy";
import { BRAND_NAME } from "@/lib/brand";
import { PRODUCT_HERO_FALLBACK } from "@/lib/media";
import ProductVideosSection from "@/components/sections/ProductVideosSection";
import {
  COLOR_GALLERY_IMAGES,
  GALLERY_FALLBACK_BY_COLOR,
  GALLERY_FALLBACK_DEFAULT,
  PRIMARY_IMAGE_BY_COLOR,
  PRODUCT_COLORS,
  PRODUCT_SIZES,
} from "@/lib/productCatalog";
import { BUNDLE_OPTIONS, SITE_DISCOUNT_PERCENT } from "@/lib/productPricing";
import {
  colorSwatchClass,
  colorSwatchLabelClass,
  colorSwatchToggleClass,
  galleryThumbToggleClass,
  packSizeToggleClass,
} from "@/lib/productSelectorStyles";
import DailyRoutineSection from "@/components/sections/DailyRoutineSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import { cn } from "@/lib/utils";

const PRODUCT_TITLE = "4-Layer Leakproof Panties";

const foldedBullets = [
  "Leak-proof protection",
  "No bulk under clothing",
  "Reusable and washable",
  "Saves money over time",
];

const trustLines = [
  "Free shipping on orders over $50",
  "30-day fit guarantee",
  "Secure checkout",
];

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<(typeof PRODUCT_SIZES)[number]>("M");
  const colors = PRODUCT_COLORS.filter((c) => PRIMARY_IMAGE_BY_COLOR[c.name]);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "Blush Pink");
  const [activeImage, setActiveImage] = useState(0);
  const { bundleQty, setBundleQty, totals } = useProductOffer();
  const { addItem } = useCart();
  const navigate = useNavigate();

  const images = COLOR_GALLERY_IMAGES[selectedColor] ?? GALLERY_FALLBACK_DEFAULT;
  const fallbackImages = GALLERY_FALLBACK_BY_COLOR[selectedColor] ?? GALLERY_FALLBACK_DEFAULT;
  const packLabel = BUNDLE_OPTIONS.find((b) => b.qty === bundleQty)?.label ?? `${bundleQty} Pack`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="page-top-offset page-bottom-safe pb-28 md:pb-32">
        <div className="mx-auto w-full max-w-[1200px] px-3 py-8 md:py-16">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden bg-candlelight">
                <img
                  key={`${selectedColor}-${activeImage}`}
                  src={images[activeImage]}
                  alt={`${BRAND_NAME} Period Underwear — ${selectedColor}`}
                  className="h-full w-full rounded-none object-cover"
                  loading={activeImage === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.dataset.fallback) {
                      el.dataset.fallback = "1";
                      el.src = fallbackImages[activeImage] ?? PRODUCT_HERO_FALLBACK;
                    }
                  }}
                />
              </div>
              <div className="scrollbar-thin flex gap-2 overflow-x-auto pb-1">
                {images.map((img, index) => (
                  <button
                    key={`${selectedColor}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={galleryThumbToggleClass(activeImage === index)}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="h-full w-full rounded-none object-cover"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        if (fallbackImages[index]) e.currentTarget.src = fallbackImages[index];
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <nav className="mb-4 flex items-center gap-2 text-caption text-muted-foreground">
                <Link to="/" className="transition-opacity hover:opacity-80">
                  Home
                </Link>
                <span>/</span>
                <span className="text-foreground">Period Underwear</span>
              </nav>

              <h1 className="text-heading font-medium text-foreground">{PRODUCT_TITLE}</h1>
              <p className="mt-3 text-body text-muted-gold">
                4-layer leakproof panties · {offerLine(SITE_DISCOUNT_PERCENT)}
              </p>
              <p className="mt-2 text-caption text-muted-gold">4.9/5 from 2,500+ reviews</p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-heading-sm font-medium text-foreground">
                  ${totals.totalSale.toFixed(2)}
                </span>
                <span className="text-body text-muted-foreground line-through">
                  ${totals.totalCompare.toFixed(2)}
                </span>
                <span className="text-caption text-muted-gold">{SITE_DISCOUNT_PERCENT}% off</span>
              </div>
              <p className="mt-1 text-caption text-muted-foreground">
                ${totals.unitSale.toFixed(2)} per pair · {bundleQty} pairs
              </p>

              <ul className="mt-6 space-y-2 border-t border-obsidian/10 pt-4 text-body text-foreground">
                {foldedBullets.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>

              <p className="mt-6 text-body text-muted-foreground">
                Ultra-thin, leak-proof period underwear designed for all-day comfort. Our 4-layer
                technology absorbs up to 4 tampons worth of fluid while staying thin and breathable.
              </p>

              <div className="mt-8">
                <span className="mb-2 block text-caption font-medium text-foreground">Pack size</span>
                <div className="flex flex-wrap gap-2">
                  {BUNDLE_OPTIONS.map(({ label, qty, valueLabel }) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setBundleQty(qty)}
                      className={packSizeToggleClass(bundleQty === qty)}
                    >
                      <span className="block">{label}</span>
                      <span className="mt-0.5 block text-caption text-muted-foreground">{valueLabel}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <span className="mb-2 block text-caption font-medium text-foreground">Color</span>
                <div className="flex flex-wrap gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => {
                        setSelectedColor(color.name);
                        setActiveImage(0);
                      }}
                      className={colorSwatchToggleClass(selectedColor === color.name)}
                      aria-label={color.name}
                    >
                      <span className={colorSwatchClass(color.swatchClass, selectedColor === color.name)} />
                      <span className={colorSwatchLabelClass(selectedColor === color.name)}>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-caption font-medium text-foreground">Size</span>
                  <Link
                    to="/faq"
                    className="border-b border-obsidian pb-0.5 text-caption text-obsidian transition-opacity hover:opacity-80"
                  >
                    Size guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRODUCT_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={cn(packSizeToggleClass(selectedSize === size), "min-w-12")}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
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
                      image: images[0],
                    });
                    navigate("/cart");
                  }}
                >
                  {CTA_PRIMARY_LABEL}
                </Button>
                <p className="mt-2 text-caption text-muted-foreground">{CTA_TRUST_LINE}</p>
                <p className="mt-3 text-caption text-muted-foreground">
                  Prefer to shop on the homepage?{" "}
                  <Link
                    to="/#order"
                    className="border-b border-obsidian text-obsidian transition-opacity hover:opacity-80"
                  >
                    Jump to featured checkout
                  </Link>
                </p>
              </div>

              <ul className="mt-8 space-y-3 border-t border-obsidian/10 pt-8 text-caption text-muted-foreground">
                {trustLines.map((line) => (
                  <li key={line} className="border-b border-obsidian/10 pb-3 last:border-0">
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-0 border-t border-obsidian/10 pt-8">
                <h3 className="text-subheading font-medium text-foreground">Product details</h3>
                <details className="group border-b border-obsidian/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-body font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    <span>Product details</span>
                    <span className="text-muted-foreground group-open:hidden">+</span>
                    <span className="hidden text-muted-foreground group-open:inline">−</span>
                  </summary>
                  <div className="space-y-2 pb-4 text-body text-muted-foreground">
                    <p>4-layer absorption technology</p>
                    <p>Absorbs up to 4 tampons (40ml)</p>
                    <p>95% Cotton, 5% Elastane outer</p>
                    <p>Antimicrobial inner lining</p>
                    <p>Machine washable at 40°C</p>
                    <p>Lasts 2+ years with proper care</p>
                  </div>
                </details>

                <details className="group border-b border-obsidian/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-body font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    <span>Shipping & returns</span>
                    <span className="text-muted-foreground group-open:hidden">+</span>
                    <span className="hidden text-muted-foreground group-open:inline">−</span>
                  </summary>
                  <div className="space-y-2 pb-4 text-body text-muted-foreground">
                    <p>Free shipping on orders over $50</p>
                    <p>Standard shipping: 5–7 business days</p>
                    <p>Express shipping available at checkout</p>
                    <p>30-day fit guarantee</p>
                    <p>Easy returns and exchanges</p>
                  </div>
                </details>

                <details className="group border-b border-obsidian/10">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-body font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    <span>Care instructions</span>
                    <span className="text-muted-foreground group-open:hidden">+</span>
                    <span className="hidden text-muted-foreground group-open:inline">−</span>
                  </summary>
                  <div className="space-y-2 pb-4 text-body text-muted-foreground">
                    <p>Rinse in cold water after use</p>
                    <p>Machine wash at 40°C or below</p>
                    <p>Use mild detergent, no fabric softener</p>
                    <p>Hang dry or tumble dry on low</p>
                    <p>Do not iron or bleach</p>
                  </div>
                </details>
              </div>

              <div className="mt-8 border-t border-obsidian/10 pt-8">
                <ProductVideosSection wrapped={false} />
              </div>
            </div>
          </div>
        </div>
        <DailyRoutineSection />
        <ComparisonSection />
        <BenefitsSection />
      </main>

      <Footer />
    </div>
  );
};

export default Product;
