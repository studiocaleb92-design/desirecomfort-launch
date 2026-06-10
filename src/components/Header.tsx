import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import BrandLogo from "@/components/BrandLogo";
import { cn } from "@/lib/utils";
import { CTA_PRIMARY_LABEL } from "@/lib/ctaCopy";
import { useHeaderTheme } from "@/hooks/useHeaderTheme";

interface HeaderProps {
  heroSentinelRef?: React.RefObject<HTMLElement>;
}

const MENU_EXIT_MS = 220;

const Header = ({ heroSentinelRef }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const location = useLocation();
  const theme = useHeaderTheme({ heroSentinelRef });

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

  const isOverHero = theme === "overHero";
  const textColor = isOverHero ? "text-obsidian" : "text-foreground";
  const headerBg = isOverHero ? "" : "bg-background/95";
  const showHeaderBorder = !isOverHero;
  const showMenu = isMenuOpen || isMenuClosing;

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300",
          showHeaderBorder ? "border-muted-gold" : "border-transparent",
          headerBg,
        )}
      >
        <div className="mx-auto w-full max-w-[1200px] px-3">
          <div className="flex h-16 items-center justify-between md:h-18">
            <Link to="/" className="transition-opacity hover:opacity-80">
              <BrandLogo />
            </Link>

            <button
              onClick={openMenu}
              className={cn(
                "text-caption font-normal transition-colors hover:opacity-80",
                textColor,
              )}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              Menu
            </button>
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
