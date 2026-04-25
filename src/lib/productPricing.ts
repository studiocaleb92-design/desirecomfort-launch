import { getCompareAtPrice, getSavings, roundToTwoDecimals } from "@/lib/utils";

/** Sitewide sale discount — compare-at is derived so UI always shows this percentage off. */
export const SITE_DISCOUNT_PERCENT = 30 as const;

export const BUNDLE_QTYS = [10, 15, 20] as const;
export type BundleQty = (typeof BUNDLE_QTYS)[number];

export type BundleOption = {
  qty: BundleQty;
  label: string;
  valueLabel: string;
  /** Best per-pair price — highlighted in UI */
  highlight?: boolean;
};

export const BUNDLE_OPTIONS: BundleOption[] = [
  { qty: 10, label: "10 Pack", valueLabel: "Great value" },
  { qty: 15, label: "15 Pack", valueLabel: "Better value" },
  { qty: 20, label: "20 Pack", valueLabel: "Best value", highlight: true },
];

/** Per-pair sale price (USD) for each pack tier — 20-pack is best per-unit value. */
const UNIT_SALE_BY_QTY: Record<BundleQty, number> = {
  10: 13.99,
  15: 12.99,
  20: 11.99,
};

export function getUnitSalePrice(bundleQty: BundleQty): number {
  return UNIT_SALE_BY_QTY[bundleQty];
}

export function getBundleTotals(bundleQty: BundleQty) {
  const unitSale = getUnitSalePrice(bundleQty);
  const totalSale = roundToTwoDecimals(unitSale * bundleQty);
  const unitCompare = getCompareAtPrice(unitSale);
  const totalCompare = roundToTwoDecimals(unitCompare * bundleQty);
  const totalSavings = getSavings(totalCompare, totalSale);
  return {
    unitSale,
    unitCompare,
    totalSale,
    totalCompare,
    totalSavings,
    discountPercent: SITE_DISCOUNT_PERCENT,
  };
}

export function isBundleQty(n: number): n is BundleQty {
  return (BUNDLE_QTYS as readonly number[]).includes(n);
}
