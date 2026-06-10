import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export type HeaderTheme = "overHero" | "onLight";

interface UseHeaderThemeOptions {
  heroSentinelRef?: React.RefObject<HTMLElement>;
}

export function useHeaderTheme({ heroSentinelRef }: UseHeaderThemeOptions = {}): HeaderTheme {
  const location = useLocation();
  const [theme, setTheme] = useState<HeaderTheme>("onLight");

  useEffect(() => {
    if (location.pathname !== "/") {
      setTheme("onLight");
      return;
    }

    const sentinel = heroSentinelRef?.current || document.getElementById("hero-sentinel");
    
    if (!sentinel) {
      setTheme("onLight");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setTheme(entry.isIntersecting ? "overHero" : "onLight");
      },
      {
        threshold: 0,
        rootMargin: "-72px 0px 0px 0px",
      }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, [location.pathname, heroSentinelRef]);

  return theme;
}
