import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#order", label: "Order Now" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#reviews", label: "Reviews" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      {/* Announcement bar — matches reference site */}
      <div className="bg-primary/10 text-foreground text-center py-2 px-4 text-sm font-medium">
        ✈️ FREE SHIPPING WORLDWIDE ✈️
      </div>
      {/* Valentine's sale banner — centered */}
      <div className="bg-muted/80 text-foreground border-b border-border/50 py-1.5 text-center">
        <span className="text-xs font-medium tracking-wide">
          <span>VALENTINE&apos;S SALE: </span>
          <span className="text-[#C8A24A] font-semibold">30% OFF</span>
          <span> Limited Time</span>
        </span>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="DesireComfort" className="h-8 w-auto" width="136" height="32" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isHome = link.href === "/";
              const className = cn(
                "text-sm font-medium transition-colors hover:text-primary",
                link.href.startsWith("/#")
                  ? (location.pathname === "/" && (!location.hash || location.hash === link.href.slice(1)) ? "text-foreground" : "text-muted-foreground")
                  : (location.pathname === link.href ? "text-foreground" : "text-muted-foreground")
              );
              return isHome ? (
                <a key={link.href} href="/" className={className}>
                  {link.label}
                </a>
              ) : (
                <Link key={link.href} to={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/#order">
              <Button variant="hero" size="default">
                <ShoppingBag className="w-4 h-4" />
                Shop Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isHome = link.href === "/";
                return isHome ? (
                  <a
                    key={link.href}
                    href="/"
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link to="/product" onClick={() => setIsMenuOpen(false)}>
                <Button variant="hero" size="lg" className="w-full mt-2">
                  <ShoppingBag className="w-4 h-4" />
                  Shop Now
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
