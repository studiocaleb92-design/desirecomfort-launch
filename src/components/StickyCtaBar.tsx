import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useProductOffer } from "@/context/ProductOfferContext";
import { usePostHeroVisible } from "@/hooks/usePostHeroVisible";
import { CTA_PRIMARY_LABEL, CTA_STICKY_HEADLINE, offerLine } from "@/lib/ctaCopy";
import { SITE_DISCOUNT_PERCENT } from "@/lib/productPricing";
import { cn } from "@/lib/utils";

const StickyCtaBar = () => {
  const visible = usePostHeroVisible();
  const barRef = useRef<HTMLDivElement>(null);
  const { totals } = useProductOffer();

  useEffect(() => {
    const root = document.documentElement;

    if (!visible) {
      root.style.setProperty("--sticky-cta-offset", "0px");
      return;
    }

    const bar = barRef.current;
    if (!bar) return;

    const syncOffset = () => {
      root.style.setProperty("--sticky-cta-offset", `${bar.offsetHeight}px`);
    };

    syncOffset();
    const observer = new ResizeObserver(syncOffset);
    observer.observe(bar);

    return () => {
      observer.disconnect();
      root.style.setProperty("--sticky-cta-offset", "0px");
    };
  }, [visible]);

  return (
    <div
      ref={barRef}
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 border-t border-obsidian bg-candlelight pb-[env(safe-area-inset-bottom,0px)] transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
      role="region"
      aria-label="Order"
      aria-hidden={!visible}
    >
      <div className="mx-auto w-full max-w-[1200px] px-3 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-3 sm:gap-4">
          <div className="min-w-0 sm:text-left">
            <p className="hidden text-body font-medium leading-snug text-foreground sm:block">
              {CTA_STICKY_HEADLINE}
            </p>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 sm:mt-1">
              <span className="text-body font-medium text-foreground">
                ${totals.totalSale.toFixed(2)}
              </span>
              <span className="hidden text-caption text-muted-foreground line-through sm:inline">
                ${totals.totalCompare.toFixed(2)}
              </span>
              <span className="text-caption text-muted-gold">
                {offerLine(SITE_DISCOUNT_PERCENT)}
              </span>
            </div>
          </div>

          <Button
            variant="hero"
            size="default"
            className="h-10 shrink-0 px-4 sm:min-w-[9.5rem]"
            asChild
          >
            <Link to="/product">{CTA_PRIMARY_LABEL}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCtaBar;
