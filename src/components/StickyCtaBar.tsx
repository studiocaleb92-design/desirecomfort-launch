import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useProductOffer } from "@/context/ProductOfferContext";
import { SITE_DISCOUNT_PERCENT } from "@/lib/productPricing";
import { CTA_PRIMARY_LABEL } from "@/lib/ctaCopy";

const StickyCtaBar = () => {
  const { totals } = useProductOffer();

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border/80 bg-background/95 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md shadow-[0_-4px_24px_-4px_hsl(20_25%_20%/0.12)]"
      role="region"
      aria-label="Limited time offer"
    >
      <div className="container mx-auto flex flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3">
        <p className="text-center text-sm font-semibold text-foreground sm:text-left sm:text-base">
          Get Yours Now – {SITE_DISCOUNT_PERCENT}% Off Today
        </p>
        <div className="flex items-center justify-center gap-3 sm:justify-end">
          <div className="flex flex-wrap items-baseline justify-center gap-2 text-sm sm:text-base">
            <span className="text-muted-foreground line-through">${totals.totalCompare.toFixed(2)}</span>
            <span className="text-lg font-semibold text-foreground sm:text-xl">${totals.totalSale.toFixed(2)}</span>
            <span className="rounded bg-[#C8A24A]/15 px-2 py-0.5 text-xs font-semibold text-[#C8A24A]">
              {SITE_DISCOUNT_PERCENT}% OFF
            </span>
          </div>
          <Button variant="hero" size="default" className="min-h-11 shrink-0 px-4 sm:min-h-10" asChild>
            <Link to="/#order">
              <ShoppingBag className="h-4 w-4" />
              {CTA_PRIMARY_LABEL}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;
