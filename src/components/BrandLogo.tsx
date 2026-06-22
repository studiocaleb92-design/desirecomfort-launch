import { BRAND_NAME } from "@/lib/brand";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  /** Default for light backgrounds; inverse for walnut-shell / dark overlays. */
  variant?: "default" | "inverse";
  className?: string;
};

const BrandLogo = ({ variant = "default", className }: BrandLogoProps) => (
  <span
    className={cn(
      "brand-logo inline-block whitespace-nowrap text-[1.375rem] leading-none md:text-[1.625rem]",
      className,
    )}
    aria-label={BRAND_NAME}
  >
    <span className={variant === "inverse" ? "text-warm-parchment" : "text-[#3a3a3a]"}>
      Desire
    </span>
    <span className="text-[#c4b896]">Comfort</span>
    <sup
      className={cn(
        "relative -top-[0.35em] ml-px text-[0.45em] font-normal leading-none",
        variant === "inverse" ? "text-warm-parchment/90" : "text-[#c4b896]",
      )}
      aria-hidden="true"
    >
      ™
    </sup>
  </span>
);

export default BrandLogo;
