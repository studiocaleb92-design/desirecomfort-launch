import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Round to 2 decimals for currency. */
export function roundToTwoDecimals(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Compare-at price for 30% off: salePrice is 70% of compareAt, so compareAt = salePrice / 0.70 */
export function getCompareAtPrice(salePrice: number): number {
  return roundToTwoDecimals(salePrice / 0.7);
}

/** Savings amount when compareAt and sale price are known. */
export function getSavings(compareAt: number, salePrice: number): number {
  return roundToTwoDecimals(compareAt - salePrice);
}
