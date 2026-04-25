import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { getBundleTotals, type BundleQty } from "@/lib/productPricing";

type ProductOfferContextValue = {
  bundleQty: BundleQty;
  setBundleQty: (qty: BundleQty) => void;
  totals: ReturnType<typeof getBundleTotals>;
};

const ProductOfferContext = createContext<ProductOfferContextValue | null>(null);

export function ProductOfferProvider({ children }: { children: React.ReactNode }) {
  const [bundleQty, setBundleQtyState] = useState<BundleQty>(10);

  const setBundleQty = useCallback((qty: BundleQty) => {
    setBundleQtyState(qty);
  }, []);

  const totals = useMemo(() => getBundleTotals(bundleQty), [bundleQty]);

  const value = useMemo(
    () => ({ bundleQty, setBundleQty, totals }),
    [bundleQty, setBundleQty, totals],
  );

  return <ProductOfferContext.Provider value={value}>{children}</ProductOfferContext.Provider>;
}

export function useProductOffer(): ProductOfferContextValue {
  const ctx = useContext(ProductOfferContext);
  if (!ctx) throw new Error("useProductOffer must be used within ProductOfferProvider");
  return ctx;
}
