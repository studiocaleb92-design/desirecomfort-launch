import { useEffect, useState, type RefObject } from "react";
import { useLocation } from "react-router-dom";

interface UsePostHeroVisibleOptions {
  heroSentinelRef?: RefObject<HTMLElement>;
}

export function usePostHeroVisible({ heroSentinelRef }: UsePostHeroVisibleOptions = {}): boolean {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname === "/product") {
      setVisible(true);
      return;
    }

    if (location.pathname !== "/") {
      setVisible(false);
      return;
    }

    const sentinel = heroSentinelRef?.current || document.getElementById("hero-sentinel");
    if (!sentinel) {
      setVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-72px 0px 0px 0px",
      },
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, heroSentinelRef]);

  return visible;
}
