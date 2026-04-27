import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useProductOffer } from "@/context/ProductOfferContext";
import {
  ShoppingBag,
  Shield,
  Truck,
  RotateCcw,
  Minus,
  Plus,
  Star,
  Flame,
  Check,
} from "lucide-react";
import { CTA_PRIMARY_LABEL } from "@/lib/ctaCopy";
import productHero from "@/assets/product-hero.jpg";
import productVariants from "@/assets/product-variants.jpg";
import {
  COLOR_GALLERY_IMAGES,
  GALLERY_FALLBACK_BY_COLOR,
  GALLERY_FALLBACK_DEFAULT,
  PRIMARY_IMAGE_BY_COLOR,
  PRODUCT_COLORS,
  PRODUCT_SIZES,
} from "@/lib/productCatalog";
import { BUNDLE_OPTIONS, SITE_DISCOUNT_PERCENT } from "@/lib/productPricing";

const PRODUCT_VIDEO_FILES: { filename: string; title: string }[] = [
  { filename: "hf_20260319_062456_52468f2b-fc9e-4262-a66b-adc0a8b3e825.mp4", title: "How it works" },
  { filename: "hf_20260326_174955_49a25311-fd30-4578-abf0-36a9b0143862.mp4", title: "Comfort & protection" },
];

const PRODUCT_TITLE = "Leak-Proof Period Underwear";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState<(typeof PRODUCT_SIZES)[number]>("M");
  const colors = PRODUCT_COLORS.filter((c) => PRIMARY_IMAGE_BY_COLOR[c.name]);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.name ?? "Blush Pink");
  const [activeImage, setActiveImage] = useState(0);
  const { bundleQty, setBundleQty, totals } = useProductOffer();
  const { addItem, openCart } = useCart();

  const images = COLOR_GALLERY_IMAGES[selectedColor] ?? GALLERY_FALLBACK_DEFAULT;
  const fallbackImages = GALLERY_FALLBACK_BY_COLOR[selectedColor] ?? GALLERY_FALLBACK_DEFAULT;
  const packLabel = BUNDLE_OPTIONS.find((b) => b.qty === bundleQty)?.label ?? `${bundleQty} Pack`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pb-28 pt-24 md:pb-32 md:pt-28">
        <div className="container mx-auto max-w-6xl px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="group relative aspect-square overflow-hidden rounded-2xl bg-cream-dark">
                <img
                  key={`${selectedColor}-${activeImage}`}
                  src={images[activeImage]}
                  alt={`Desire Comfort™ Period Underwear — ${selectedColor}`}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  loading={activeImage === 0 ? "eager" : "lazy"}
                  decoding="async"
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.dataset.fallback) {
                      el.dataset.fallback = "1";
                      el.src = fallbackImages[activeImage] ?? productHero;
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
                    className={`h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-colors ${
                      activeImage === index ? "border-primary ring-2 ring-primary/30" : "border-transparent hover:border-muted-foreground/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="h-full w-full object-cover"
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

            <div className="lg:py-4">
              <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Link to="/" className="transition-colors hover:text-foreground">
                  Home
                </Link>
                <span>/</span>
                <span className="text-foreground">Period Underwear</span>
              </nav>

              <h1 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Leak-Proof Period Underwear</h1>

              <div className="mt-3 flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-rating text-rating" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 (2,500+ reviews)</span>
              </div>

              <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold text-[#B45309]">
                <Flame className="h-4 w-4 shrink-0" aria-hidden />
                <span>
                  Limited stock · Flash sale {SITE_DISCOUNT_PERCENT}% off · Selling fast · Offer ends soon
                </span>
              </p>

              <div className="mt-6 flex flex-wrap items-baseline gap-2 gap-y-2">
                <span className="text-3xl font-medium text-foreground">${totals.totalSale.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through">${totals.totalCompare.toFixed(2)}</span>
                <span className="rounded bg-[#C8A24A]/15 px-2 py-1 text-sm font-medium text-[#C8A24A]">{SITE_DISCOUNT_PERCENT}% OFF</span>
                <span className="rounded bg-success/10 px-2 py-1 text-sm font-medium text-success">Save ${totals.totalSavings.toFixed(2)}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                ${totals.unitSale.toFixed(2)} per pair · {bundleQty} pairs
              </p>
              <p className="mt-2 text-sm font-medium text-[#B45309]">
                Limited stock available · Selling fast · Offer ends soon
              </p>

              <ul className="mt-5 space-y-2 text-base font-medium text-foreground/90">
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

              <p className="mt-6 text-base font-medium leading-relaxed text-foreground/90">
                Ultra-thin, leak-proof period underwear designed for all-day comfort. Our 4-layer technology absorbs up
                to 4 tampons worth of fluid while staying incredibly thin and breathable.
              </p>

              <div className="mt-8">
                <span className="mb-3 block text-base font-semibold text-foreground">Color</span>
                <div className="flex flex-wrap gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => {
                        setSelectedColor(color.name);
                        setActiveImage(0);
                      }}
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

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-base font-semibold text-foreground">Size</span>
                  <Link to="/faq" className="text-sm font-medium text-primary hover:underline">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {PRODUCT_SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`min-h-11 w-14 rounded-lg text-sm font-medium transition-all ${
                        selectedSize === size ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <span className="mb-3 block text-base font-semibold text-foreground">Pack size</span>
                <div className="flex flex-wrap gap-2">
                  {BUNDLE_OPTIONS.map(({ label, qty, valueLabel, highlight }) => (
                    <button
                      key={qty}
                      type="button"
                      onClick={() => setBundleQty(qty)}
                      className={`min-h-[48px] min-w-[5.5rem] rounded-lg px-3 py-2 text-left text-sm font-medium transition-all sm:px-4 ${
                        bundleQty === qty
                          ? highlight
                            ? "bg-primary text-primary-foreground ring-2 ring-[#C8A24A] ring-offset-2 ring-offset-background"
                            : "bg-primary text-primary-foreground"
                          : highlight
                            ? "border-2 border-[#C8A24A]/50 bg-muted text-foreground hover:bg-muted/80"
                            : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      <span className="block font-semibold">{label}</span>
                      <span className="mt-0.5 block text-xs opacity-90">{valueLabel}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <Button
                  variant="hero"
                  size="xl"
                  className="min-h-12 w-full"
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
                    openCart();
                  }}
                >
                  <ShoppingBag className="h-5 w-5" />
                  {CTA_PRIMARY_LABEL}
                </Button>
                <p className="mt-2 text-center text-xs font-medium text-muted-foreground">
                  Secure checkout · 30-day guarantee · Fast delivery
                </p>
                <p className="mt-3 text-center text-sm text-muted-foreground">
                  Prefer to shop on the homepage?{" "}
                  <Link to="/#order" className="font-medium text-primary hover:underline">
                    Jump to featured checkout
                  </Link>
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-8">
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blush-light">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Free Shipping
                    <br />
                    Over $50
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blush-light">
                    <RotateCcw className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    30-Day
                    <br />
                    Fit guarantee
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blush-light">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Secure
                    <br />
                    Checkout
                  </p>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-border pt-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Product details</h3>
                <details className="group rounded-lg border border-border">
                  <summary className="flex cursor-pointer items-center justify-between p-4">
                    <span className="font-medium text-foreground">Product Details</span>
                    <Plus className="h-4 w-4 text-muted-foreground group-open:hidden" />
                    <Minus className="hidden h-4 w-4 text-muted-foreground group-open:block" />
                  </summary>
                  <div className="space-y-2 px-4 pb-4 text-sm text-muted-foreground">
                    <p>• 4-layer absorption technology</p>
                    <p>• Absorbs up to 4 tampons (40ml)</p>
                    <p>• 95% Cotton, 5% Elastane outer</p>
                    <p>• Antimicrobial inner lining</p>
                    <p>• Machine washable at 40°C</p>
                    <p>• Lasts 2+ years with proper care</p>
                  </div>
                </details>

                <details className="group rounded-lg border border-border">
                  <summary className="flex cursor-pointer items-center justify-between p-4">
                    <span className="font-medium text-foreground">Shipping & Returns</span>
                    <Plus className="h-4 w-4 text-muted-foreground group-open:hidden" />
                    <Minus className="hidden h-4 w-4 text-muted-foreground group-open:block" />
                  </summary>
                  <div className="space-y-2 px-4 pb-4 text-sm text-muted-foreground">
                    <p>• Free shipping on orders over $50</p>
                    <p>• Standard shipping: 5-7 business days</p>
                    <p>• Express shipping available at checkout</p>
                    <p>• 30-day fit guarantee</p>
                    <p>• Easy returns & exchanges</p>
                  </div>
                </details>

                <details className="group rounded-lg border border-border">
                  <summary className="flex cursor-pointer items-center justify-between p-4">
                    <span className="font-medium text-foreground">Care Instructions</span>
                    <Plus className="h-4 w-4 text-muted-foreground group-open:hidden" />
                    <Minus className="hidden h-4 w-4 text-muted-foreground group-open:block" />
                  </summary>
                  <div className="space-y-2 px-4 pb-4 text-sm text-muted-foreground">
                    <p>• Rinse in cold water after use</p>
                    <p>• Machine wash at 40°C or below</p>
                    <p>• Use mild detergent, no fabric softener</p>
                    <p>• Hang dry or tumble dry on low</p>
                    <p>• Do not iron or bleach</p>
                  </div>
                </details>
              </div>

              <div id="product-videos" className="mt-8 space-y-10 border-t border-border pt-8">
                <h3 className="font-serif text-xl font-medium text-foreground">Videos</h3>
                {PRODUCT_VIDEO_FILES.map((video, index) => (
                  <div key={video.filename + index}>
                    <h4 className="mb-2 font-serif text-lg font-medium text-foreground">{video.title}</h4>
                    <div className="mt-2 aspect-video overflow-hidden rounded-xl bg-muted">
                      <video
                        src={`/videos/${encodeURIComponent(video.filename)}`}
                        controls
                        className="h-full w-full object-contain"
                        preload="metadata"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 space-y-10 border-t border-border pt-8">
                <div>
                  <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Daily routine</h3>
                  <ol className="list-inside list-decimal space-y-2 text-base font-medium text-foreground/90">
                    <li>Wear like regular underwear on light to heavy days.</li>
                    <li>Rinse in cold water after use, then machine wash at 40°C or below.</li>
                    <li>Hang dry or tumble dry on low — ready for next use.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">What customers say</h3>
                  <div className="rounded-lg border border-border/50 bg-card p-4">
                    <p className="text-base font-medium italic text-foreground">
                      &ldquo;I actually forget I&apos;m on my period. No more midnight panics about leaks.&rdquo;
                    </p>
                    <p className="mt-2 text-base font-medium text-foreground/80">— Sarah M., verified buyer</p>
                  </div>
                  <Link to="/#reviews" className="mt-2 inline-block text-base font-medium text-primary hover:underline">
                    Read more reviews →
                  </Link>
                </div>
                <div>
                  <h3 className="mb-4 font-serif text-lg font-semibold text-foreground">Quick FAQ</h3>
                  <p className="mb-2 text-base font-medium text-foreground/90">
                    <strong className="text-foreground">Size?</strong> See our FAQ for measurements. Between sizes? Size up for comfort.
                  </p>
                  <p className="mb-2 text-base font-medium text-foreground/90">
                    <strong className="text-foreground">Returns?</strong> 30-day fit guarantee. Unworn, original packaging.
                  </p>
                  <Link to="/faq" className="inline-block text-base font-medium text-primary hover:underline">
                    Full FAQ →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
