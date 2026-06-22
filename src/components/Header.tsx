import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, type CSSProperties } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";
import { cn } from "@/lib/utils";
import { CTA_PRIMARY_LABEL } from "@/lib/ctaCopy";
import { useCart } from "@/context/CartContext";

const MENU_EXIT_MS = 220;

const iconButtonClass = (textColor: string) =>
  cn(
    "flex h-10 w-10 items-center justify-center transition-opacity hover:opacity-80",
    textColor,
  );

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const location = useLocation();
  const { items } = useCart();
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { to: "/", label: "Home", hashMatch: "" },
    { to: "/#order", label: "Order Now", hashMatch: "#order" },
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

  const closeMenu = useCallback(() => {
    setIsMenuClosing(true);
    window.setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, MENU_EXIT_MS);
  }, []);

  const openMenu = () => {
    setIsMenuClosing(false);
    setIsMenuOpen(true);
  };

  useEffect(() => {
    if (isMenuOpen && !isMenuClosing) {
      document.body.style.overflow = "hidden";
    } else if (!isMenuOpen) {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, isMenuClosing]);

  const showMenu = isMenuOpen || isMenuClosing;

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 bg-white transition-[top] duration-300",
          "top-[var(--sticky-cta-offset,0px)]",
        )}
      >
        <div className="mx-auto w-full max-w-[1200px] px-3">
          <div className="relative flex h-16 items-center md:h-18">
            <button
              type="button"
              onClick={openMenu}
              className={cn(iconButtonClass("text-foreground"), "relative z-10")}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
            </button>

            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 transition-opacity hover:opacity-80"
            >
              <BrandLogo />
            </Link>

            <div className="relative z-10 ml-auto flex items-center">
              <Link
                to="/cart"
                className={cn(iconButtonClass("text-foreground"), "relative")}
                aria-label={
                  cartItemCount > 0 ? `Open cart, ${cartItemCount} items` : "Open cart"
                }
              >
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                {cartItemCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-obsidian px-1 text-[10px] font-medium leading-none text-warm-parchment">
                    {cartItemCount > 9 ? "9+" : cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {showMenu && (
        <div
          className={cn(
            "fixed inset-0 z-[100] bg-walnut-shell",
            isMenuClosing ? "menu-overlay-exit" : "menu-overlay-enter",
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            className={cn(
              "mx-auto flex h-full w-full max-w-[1200px] flex-col px-3",
              isMenuClosing ? "menu-panel-exit" : "menu-panel-enter",
            )}
          >
            <div className="flex h-16 items-center justify-between md:h-18">
              <Link to="/" onClick={closeMenu} className="transition-opacity hover:opacity-80">
                <BrandLogo variant="inverse" />
              </Link>
              <button
                onClick={closeMenu}
                className="text-caption font-normal text-warm-parchment transition-opacity hover:opacity-80"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center">
              <nav className="w-full max-w-2xl">
                <div className="flex flex-col gap-2 md:gap-3">
                  {navLinks.map((link, index) => {
                    const active = linkIsActive(link.hashMatch);
                    return (
                      <Link
                        key={link.to + link.label}
                        to={link.to}
                        className={cn(
                          "menu-nav-link py-2 text-2xl font-normal text-warm-parchment transition-colors hover:text-amber-glow md:text-4xl",
                          active && "text-amber-glow",
                        )}
                        style={{ "--menu-link-index": index } as CSSProperties}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>

            <div className="border-t border-muted-gold pb-8 pt-6">
              <Button
                variant="outline"
                size="lg"
                className="min-h-12 w-full border-warm-parchment bg-transparent text-warm-parchment hover:bg-warm-parchment hover:text-walnut-shell md:w-auto md:min-w-[12rem]"
                asChild
              >
                <Link to="/product" onClick={closeMenu}>
                  {CTA_PRIMARY_LABEL}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
