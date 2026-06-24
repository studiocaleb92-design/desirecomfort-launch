import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scroll to top on route change; homepage hash links handle their own scroll. */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
