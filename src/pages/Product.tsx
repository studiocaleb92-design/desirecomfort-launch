import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { 
  ShoppingBag, 
  Shield, 
  Truck, 
  RotateCcw, 
  Check, 
  Minus, 
  Plus,
  Star,
  Droplets,
  Feather,
  Heart
} from "lucide-react";
import productHero from "@/assets/product-hero.jpg";
import productVariants from "@/assets/product-variants.jpg";
import { getCompareAtPrice, getSavings, roundToTwoDecimals } from "@/lib/utils";

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
// Supplier colors: original + Caramel, Apricot, Khaki, Lava, White (1688)
const colors = [
  { name: "Blush Pink", class: "bg-[hsl(355,45%,70%)]" },
  { name: "Dusty Rose", class: "bg-[hsl(355,40%,55%)]" },
  { name: "Cream", class: "bg-[hsl(40,40%,90%)]" },
  { name: "Black", class: "bg-[hsl(0,0%,15%)]" },
  { name: "Caramel", class: "bg-[hsl(30,45%,55%)]" },
  { name: "Apricot", class: "bg-[hsl(35,50%,85%)]" },
  { name: "Khaki", class: "bg-[hsl(45,25%,45%)]" },
  { name: "Lava", class: "bg-[hsl(350,35%,35%)]" },
  { name: "White", class: "bg-white border border-border" },
];

// Local videos (uploaded to public/videos) — filename encoded in src for spaces/parentheses
const PRODUCT_VIDEO_FILES: { filename: string; title: string }[] = [
  { filename: "FDownloader.Net_AQOMe06JL1S0JuWve6X9wcBaecBBpTHUvLsOfsOvWzFn-lmb_6XT9SB3EyeKv1nRo9XA2SDTdndE1nbkK9z7Afu_FPZclFM6PdeY977NnN7Kow_720p_(HD).mp4", title: "How it works" },
  { filename: "FDownloader.net-2142650612827084-(1080p) (1).mp4", title: "Comfort & protection" },
  { filename: "FDownloader.net-972242837872958-(1080p).mp4", title: "Care & wash" },
];

// Per-color images. Replace caramel.svg, apricot.svg, khaki.svg, lava.svg, white.svg with .jpg when you have real product photos.
const COLOR_IMAGES_SRC: Record<string, string[]> = {
  "Blush Pink": ["/images/blush-pink.jpg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  "Dusty Rose": ["/images/dusty-rose.jpg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  "Cream": ["/images/cream.jpg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  "Black": ["/images/black.jpg", "/images/everdries-gallery-3.jpg", "/images/everdries-gallery-4.jpg"],
  "Caramel": ["/images/caramel.svg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  "Apricot": ["/images/apricot.svg", "/images/everdries-gallery-2.jpg", "/images/everdries-gallery-3.jpg"],
  "Khaki": ["/images/khaki.svg", "/images/everdries-gallery-3.jpg", "/images/everdries-gallery-4.jpg"],
  "Lava": ["/images/lava.svg", "/images/everdries-gallery-4.jpg", "/images/everdries-gallery-3.jpg"],
  "White": ["/images/white.svg", "/images/everdries-white.jpg", "/images/everdries-gallery-2.jpg"],
};
const FALLBACK_BY_COLOR: Record<string, string[]> = {
  "Blush Pink": [productHero, productVariants, "/images/blush-pink.jpg"],
  "Dusty Rose": [productHero, productVariants, "/images/dusty-rose.jpg"],
  "Cream": [productHero, productVariants, "/images/cream.jpg"],
  "Black": [productHero, productVariants, "/images/black.jpg"],
  "Caramel": [productHero, productVariants, "/images/caramel.svg"],
  "Apricot": [productHero, productVariants, "/images/apricot.svg"],
  "Khaki": [productHero, productVariants, "/images/khaki.svg"],
  "Lava": [productHero, productVariants, "/images/lava.svg"],
  "White": [productHero, productVariants, "/images/white.svg"],
};
const COLOR_IMAGES = COLOR_IMAGES_SRC;
const FALLBACK_IMAGES = [productHero, productVariants, productHero];

// Pricing aligned with everdries.com: 5-Pack at $69.95, 30% off
const UNIT_PRICE = 13.99;
const BUNDLE_SIZES = [
  { label: "5-Pack", qty: 5 },
  { label: "10-Pack", qty: 10 },
  { label: "15-Pack", qty: 15 },
  { label: "20-Pack", qty: 20 },
] as const;

const PRODUCT_TITLE = "Leak-Proof Period Underwear";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blush Pink");
  const [bundleQty, setBundleQty] = useState(5);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem, openCart } = useCart();

  const images = COLOR_IMAGES[selectedColor] ?? FALLBACK_IMAGES;
  const fallbackImages = FALLBACK_BY_COLOR[selectedColor] ?? FALLBACK_IMAGES;

  const quantity = bundleQty;
  const price = UNIT_PRICE;
  const compareAtUnit = getCompareAtPrice(price);
  const savingsUnit = getSavings(compareAtUnit, price);
  const totalPrice = roundToTwoDecimals(price * quantity);
  const totalCompareAt = roundToTwoDecimals(compareAtUnit * quantity);
  const totalSavings = getSavings(totalCompareAt, totalPrice);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-cream-dark">
                <img
                  src={images[activeImage]}
                  alt={`Desire Comfort™ Period Underwear — ${selectedColor}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const el = e.currentTarget;
                    if (!el.dataset.fallback) {
                      el.dataset.fallback = "1";
                      el.src = fallbackImages[activeImage] ?? productHero;
                    }
                  }}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                {images.map((img, index) => (
                  <button
                    key={`${selectedColor}-${index}`}
                    onClick={() => setActiveImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === index ? "border-primary ring-2 ring-primary/30" : "border-transparent hover:border-muted-foreground/30"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        if (fallbackImages[index]) e.currentTarget.src = fallbackImages[index];
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:py-4">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground">Period Underwear</span>
              </nav>

              {/* Title & Rating */}
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
                Leak-Proof Period Underwear
              </h1>
              
              <div className="flex items-center gap-3 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-rating fill-rating" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 (2,500+ reviews)</span>
              </div>

              {/* Price — per unit and bundle total */}
              <div className="flex flex-wrap items-baseline gap-3 mt-6">
                <span className="text-3xl font-medium text-foreground">${totalPrice.toFixed(2)}</span>
                {quantity > 1 && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">${totalCompareAt.toFixed(2)}</span>
                    <span className="text-sm font-medium bg-[#C8A24A]/15 text-[#C8A24A] px-2 py-1 rounded">
                      30% OFF
                    </span>
                    <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded">
                      Save ${totalSavings.toFixed(2)}
                    </span>
                  </>
                )}
                {quantity === 1 && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">${compareAtUnit.toFixed(2)}</span>
                    <span className="text-sm font-medium bg-[#C8A24A]/15 text-[#C8A24A] px-2 py-1 rounded">
                      30% OFF
                    </span>
                    <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded">
                      Save ${savingsUnit.toFixed(2)}
                    </span>
                  </>
                )}
              </div>
              {quantity > 1 && (
                <p className="text-sm text-muted-foreground mt-1">
                  ${price.toFixed(2)} per pair
                </p>
              )}

              {/* Description */}
              <p className="text-base font-medium text-foreground/90 mt-6 leading-relaxed">
                Ultra-thin, leak-proof period underwear designed for all-day comfort. 
                Our 4-layer technology absorbs up to 4 tampons worth of fluid while 
                staying incredibly thin and breathable.
              </p>

              {/* Benefits Pills */}
              <div className="flex flex-wrap gap-2 mt-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush-light text-sm text-warm-brown">
                  <Droplets className="w-3.5 h-3.5" />
                  Leak-Proof
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush-light text-sm text-warm-brown">
                  <Feather className="w-3.5 h-3.5" />
                  Ultra-Thin
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush-light text-sm text-warm-brown">
                  <Heart className="w-3.5 h-3.5" />
                  All-Day Comfort
                </div>
              </div>

              {/* Color Selection — names shown so colors are easy to find and match the photo */}
              <div className="mt-8">
                <span className="text-base font-semibold text-foreground block mb-3">Color</span>
                <div className="flex flex-wrap gap-4">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color.name);
                        setActiveImage(0);
                      }}
                      className="flex flex-col items-center gap-1.5 transition-all hover:opacity-90"
                      aria-label={color.name}
                    >
                      <span
                        className={`w-10 h-10 rounded-full ${color.class} block transition-all ${
                          selectedColor === color.name
                            ? "ring-2 ring-primary ring-offset-2"
                            : "hover:scale-110"
                        }`}
                      />
                      <span className="text-sm font-semibold text-foreground">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-base font-semibold text-foreground">Size</span>
                  <button className="text-sm font-medium text-primary hover:underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-10 rounded-lg text-sm font-medium transition-all ${
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

              {/* Bundle / Pack size — 5, 10, 15, 20 located here */}
              <div className="mt-8">
                <span className="text-base font-semibold text-foreground mb-3 block">Pack size</span>
                <div className="flex flex-wrap gap-2">
                  {BUNDLE_SIZES.map(({ label, qty }) => (
                    <button
                      key={qty}
                      onClick={() => setBundleQty(qty)}
                      className={`min-w-[5rem] px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        bundleQty === qty
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {bundleQty > 1 && (
                  <p className="text-sm font-medium text-foreground/80 mt-2">
                    Save ${totalSavings.toFixed(2)} with this bundle
                  </p>
                )}
              </div>

              {/* Add to Cart Button — opens cart drawer on the right */}
              <div className="mt-8">
                <Button
                  variant="hero"
                  size="xl"
                  className="w-full"
                  onClick={() => {
                    const packLabel = BUNDLE_SIZES.find((b) => b.qty === bundleQty)?.label ?? `${bundleQty}-Pack`;
                    addItem({
                      title: PRODUCT_TITLE,
                      price,
                      quantity: bundleQty,
                      color: selectedColor,
                      size: selectedSize,
                      packLabel,
                      image: images[0],
                    });
                    openCart();
                  }}
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart — ${totalPrice.toFixed(2)}
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-2">
                    <Truck className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Free Shipping<br />Over $50</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-2">
                    <RotateCcw className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">30-Day<br />Returns</p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Secure<br />Checkout</p>
                </div>
              </div>

              {/* How It Works / Why It Works — product education */}
              <div className="mt-8 pt-8 border-t border-border">
                <h3 className="font-serif text-xl font-medium text-foreground mb-6">
                  How It Works / Why It Works
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-card rounded-lg p-4 border border-border/50">
                    <div className="font-medium text-foreground mb-2">4-layer absorption</div>
                    <p className="text-muted-foreground">
                      Moisture-wicking top layer, absorbent core, leak-proof barrier, and soft outer fabric work together to hold up to 4 tampons worth (40ml) while staying thin.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border/50">
                    <div className="font-medium text-foreground mb-2">Leak-proof logic</div>
                    <p className="text-muted-foreground">
                      The middle barrier layer prevents leaks in every direction. Side panels and gusset design keep you protected all day, no matter your flow.
                    </p>
                  </div>
                  <div className="bg-card rounded-lg p-4 border border-border/50">
                    <div className="font-medium text-foreground mb-2">Breathable & thin</div>
                    <p className="text-muted-foreground">
                      Unlike bulky pads, our technology is breathable and feels like real underwear. You get security without the bulk or discomfort.
                    </p>
                  </div>
                </div>
              </div>

              {/* Product videos — 3 videos from public/videos */}
              <div id="product-videos" className="mt-8 pt-8 border-t border-border space-y-10">
                <h3 className="font-serif text-xl font-medium text-foreground">Videos</h3>
                {PRODUCT_VIDEO_FILES.map((video, index) => (
                  <div key={video.filename + index}>
                    <h4 className="font-serif text-lg font-medium text-foreground mb-2">
                      {video.title}
                    </h4>
                    <div className="aspect-video rounded-xl overflow-hidden bg-muted mt-2">
                      <video
                        src={`/videos/${encodeURIComponent(video.filename)}`}
                        controls
                        className="w-full h-full object-contain"
                        preload="metadata"
                        playsInline
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                ))}
              </div>

              {/* Page under videos: Daily routine, Reviews preview, FAQ preview */}
              <div className="mt-8 pt-8 border-t border-border space-y-10">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Daily routine</h3>
                  <ol className="list-decimal list-inside space-y-2 text-base font-medium text-foreground/90">
                    <li>Wear like regular underwear on light to heavy days.</li>
                    <li>Rinse in cold water after use, then machine wash at 40°C or below.</li>
                    <li>Hang dry or tumble dry on low — ready for next use.</li>
                  </ol>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">What customers say</h3>
                  <div className="bg-card rounded-lg p-4 border border-border/50">
                    <p className="text-foreground text-base font-medium italic">&ldquo;I actually forget I&apos;m on my period. No more midnight panics about leaks.&rdquo;</p>
                    <p className="text-base font-medium text-foreground/80 mt-2">— Sarah M., verified buyer</p>
                  </div>
                  <Link to="/#reviews" className="text-base font-medium text-primary hover:underline mt-2 inline-block">
                    Read more reviews →
                  </Link>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-4">Quick FAQ</h3>
                  <p className="text-foreground/90 text-base font-medium mb-2">
                    <strong className="text-foreground">Size?</strong> Use our Size Guide above. Between sizes? Size up for comfort.
                  </p>
                  <p className="text-foreground/90 text-base font-medium mb-2">
                    <strong className="text-foreground">Returns?</strong> 30-day comfort guarantee. Unworn, original packaging.
                  </p>
                  <Link to="/faq" className="text-base font-medium text-primary hover:underline inline-block">
                    Full FAQ →
                  </Link>
                </div>
              </div>

              {/* Product Details Accordion */}
              <div className="mt-8 space-y-4">
                <details className="group border border-border rounded-lg">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <span className="font-medium text-foreground">Product Details</span>
                    <Plus className="w-4 h-4 text-muted-foreground group-open:hidden" />
                    <Minus className="w-4 h-4 text-muted-foreground hidden group-open:block" />
                  </summary>
                  <div className="px-4 pb-4 text-sm text-muted-foreground space-y-2">
                    <p>• 4-layer absorption technology</p>
                    <p>• Absorbs up to 4 tampons (40ml)</p>
                    <p>• 95% Cotton, 5% Elastane outer</p>
                    <p>• Antimicrobial inner lining</p>
                    <p>• Machine washable at 40°C</p>
                    <p>• Lasts 2+ years with proper care</p>
                  </div>
                </details>
                
                <details className="group border border-border rounded-lg">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <span className="font-medium text-foreground">Shipping & Returns</span>
                    <Plus className="w-4 h-4 text-muted-foreground group-open:hidden" />
                    <Minus className="w-4 h-4 text-muted-foreground hidden group-open:block" />
                  </summary>
                  <div className="px-4 pb-4 text-sm text-muted-foreground space-y-2">
                    <p>• Free shipping on orders over $50</p>
                    <p>• Standard shipping: 5-7 business days</p>
                    <p>• Express shipping available at checkout</p>
                    <p>• 30-day comfort guarantee</p>
                    <p>• Easy returns & exchanges</p>
                  </div>
                </details>

                <details className="group border border-border rounded-lg">
                  <summary className="flex items-center justify-between p-4 cursor-pointer">
                    <span className="font-medium text-foreground">Care Instructions</span>
                    <Plus className="w-4 h-4 text-muted-foreground group-open:hidden" />
                    <Minus className="w-4 h-4 text-muted-foreground hidden group-open:block" />
                  </summary>
                  <div className="px-4 pb-4 text-sm text-muted-foreground space-y-2">
                    <p>• Rinse in cold water after use</p>
                    <p>• Machine wash at 40°C or below</p>
                    <p>• Use mild detergent, no fabric softener</p>
                    <p>• Hang dry or tumble dry on low</p>
                    <p>• Do not iron or bleach</p>
                  </div>
                </details>
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
