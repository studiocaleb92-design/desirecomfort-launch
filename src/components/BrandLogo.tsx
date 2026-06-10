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
    aria-label="Desire Comfort"
  >
    <span className={variant === "inverse" ? "text-warm-parchment" : "text-[#3a3a3a]"}>
      Desire
    </span>
    <span className="text-[#c4b896]">Comfort</span>
  </span>
);

export default BrandLogo;
