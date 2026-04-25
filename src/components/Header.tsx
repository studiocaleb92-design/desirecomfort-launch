import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/** Scrolling promo strip — evergreen marketing (no seasonal tie-in). */
const PROMO_MARQUEE_SEGMENT =
  "30% OFF Today · Leak-proof confidence · Trusted by 50,000+ women · Free shipping worldwide · ";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home", hashMatch: "" },
    { to: "/#order", label: "Get Yours Now - 30% Off", hashMatch: "#order" },
    { to: "/#about", label: "About Us", hashMatch: "#about" },
    { to: "/#contact", label: "Contact Us", hashMatch: "#contact" },
    { to: "/#faq", label: "FAQ", hashMatch: "#faq" },
    { to: "/#reviews", label: "Reviews", hashMatch: "#reviews" },
    { to: "/#how-it-works", label: "How It Works", hashMatch: "#how-it-works" },
  ] as const;

  const linkIsActive = (hashMatch: string) => {
    if (!hashMatch) return location.pathname === "/" && !location.hash;
    return location.pathname === "/" && location.hash === hashMatch;
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="bg-primary/10 py-2 text-center text-sm font-medium text-foreground">
        ✈️ FREE SHIPPING WORLDWIDE ✈️
      </div>
      <div className="overflow-hidden border-b border-border/50 bg-muted/80 py-1.5">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex shrink-0 gap-8 whitespace-nowrap pr-8 text-xs font-semibold tracking-wide text-foreground"
            >
              <span className="text-[#C8A24A]">{PROMO_MARQUEE_SEGMENT}</span>
              <span className="text-[#C8A24A]">{PROMO_MARQUEE_SEGMENT}</span>
              <span className="text-[#C8A24A]">{PROMO_MARQUEE_SEGMENT}</span>
              <span className="text-[#C8A24A]">{PROMO_MARQUEE_SEGMENT}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="Desire Comfort™" className="h-8 w-auto" width="136" height="32" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = linkIsActive(link.hashMatch);
              const className = cn(
                "text-sm font-medium transition-colors hover:text-primary",
                active ? "text-foreground" : "text-muted-foreground",
              );
              return link.to === "/" ? (
                <Link key={link.to} to={link.to} className={className}>
                  {link.label}
                </Link>
              ) : (
                <Link key={link.to} to={link.to} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="hero" size="default" asChild>
              <Link to="/#order">
                <ShoppingBag className="h-4 w-4" />
                Get Yours Now - 30% Off
              </Link>
            </Button>
          </div>

          <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="animate-fade-in border-t border-border/50 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="hero" size="lg" className="mt-2 w-full" asChild>
                <Link to="/#order" onClick={() => setIsMenuOpen(false)}>
                  <ShoppingBag className="h-4 w-4" />
                  Get Yours Now - 30% Off
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
