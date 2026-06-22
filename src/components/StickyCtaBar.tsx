import { useEffect, useRef } from "react";
import { usePostHeroVisible } from "@/hooks/usePostHeroVisible";
import { PROMO_BANNER_TEXT } from "@/lib/ctaCopy";
import { cn } from "@/lib/utils";

const StickyCtaBar = () => {
  const visible = usePostHeroVisible();
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;

    const syncOffset = () => {
      const height = visible && barRef.current ? barRef.current.offsetHeight : 0;
      root.style.setProperty("--sticky-cta-offset", `${height}px`);
    };

    syncOffset();

    const bar = barRef.current;
    if (!bar) {
      return () => {
        root.style.setProperty("--sticky-cta-offset", "0px");
      };
    }

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
        "fixed left-0 right-0 top-0 z-[60] bg-soft-blush pb-0 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      )}
      role="region"
      aria-label="Offer"
      aria-hidden={!visible}
    >
      <div className="mx-auto w-full max-w-[1200px] px-3 py-2.5 text-center sm:py-3">
        <p className="text-caption font-medium text-foreground sm:text-body">{PROMO_BANNER_TEXT}</p>
      </div>
    </div>
  );
};

export default StickyCtaBar;
