import { useEffect, useState } from "react";
import {
  formatOfferCountdown,
  getOfferRemainingMs,
} from "@/lib/offerCountdown";

export function useOfferCountdown() {
  const [remainingMs, setRemainingMs] = useState(getOfferRemainingMs);

  useEffect(() => {
    const tick = () => setRemainingMs(getOfferRemainingMs());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return {
    remainingMs,
    formatted: formatOfferCountdown(remainingMs),
  };
}
