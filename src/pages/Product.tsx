import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
const colors = [
  { name: "Blush Pink", class: "bg-[hsl(355,45%,70%)]" },
  { name: "Dusty Rose", class: "bg-[hsl(355,40%,55%)]" },
  { name: "Cream", class: "bg-[hsl(40,40%,90%)]" },
  { name: "Black", class: "bg-[hsl(0,0%,15%)]" },
];

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Blush Pink");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const images = [productHero, productVariants];

  const price = 34.99;
  const comparePrice = 45.00;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-cream-dark">
                <img
                  src={images[activeImage]}
                  alt="DesireComfort Period Underwear"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      activeImage === index ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
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

              {/* Price */}
              <div className="flex items-baseline gap-3 mt-6">
                <span className="text-3xl font-medium text-foreground">${price}</span>
                <span className="text-lg text-muted-foreground line-through">${comparePrice}</span>
                <span className="text-sm font-medium text-success bg-success/10 px-2 py-1 rounded">
                  Save ${(comparePrice - price).toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mt-6 leading-relaxed">
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

              {/* Color Selection */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Color</span>
                  <span className="text-sm text-muted-foreground">{selectedColor}</span>
                </div>
                <div className="flex gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full ${color.class} transition-all ${
                        selectedColor === color.name
                          ? "ring-2 ring-primary ring-offset-2"
                          : "hover:scale-110"
                      }`}
                      aria-label={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Size</span>
                  <button className="text-sm text-primary hover:underline">Size Guide</button>
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

              {/* Quantity */}
              <div className="mt-8">
                <span className="text-sm font-medium text-foreground mb-3 block">Quantity</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {quantity >= 3 && "Bundle & Save!"}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="mt-8 space-y-3">
                <Button variant="hero" size="xl" className="w-full">
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart — ${(price * quantity).toFixed(2)}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  or 4 interest-free payments of ${(price * quantity / 4).toFixed(2)}
                </p>
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
