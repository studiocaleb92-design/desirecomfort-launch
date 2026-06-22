import { cn } from "@/lib/utils";

/** Pack size and garment size toggles — active = filled obsidian for clear contrast on cream/pink surfaces. */
export const packSizeToggleClass = (active: boolean) =>
  cn(
    "min-h-11 border border-obsidian bg-transparent px-4 py-2 text-sm font-medium text-obsidian transition-colors",
    active ? "bg-obsidian text-warm-parchment" : "hover:bg-obsidian/5",
  );

/** Color swatch selector — active ring on the swatch + emphasis on the label. */
export const colorSwatchToggleClass = (active: boolean) =>
  cn(
    "flex flex-col items-center gap-1.5 border border-transparent px-2 py-1 transition-colors",
    active ? "opacity-100" : "hover:opacity-80",
  );

export const colorSwatchClass = (swatchClass: string, active: boolean) =>
  cn(
    "block h-8 w-8 rounded-none",
    swatchClass,
    active && "ring-2 ring-obsidian ring-offset-2",
  );

export const colorSwatchLabelClass = (active: boolean) =>
  cn("text-caption text-foreground", active && "font-medium underline decoration-obsidian decoration-2 underline-offset-4");

/** Product gallery thumbnail — active ring instead of amber underline. */
export const galleryThumbToggleClass = (active: boolean) =>
  cn(
    "h-20 w-20 flex-shrink-0 overflow-hidden border transition-colors",
    active
      ? "border-obsidian ring-2 ring-obsidian ring-offset-2"
      : "border-obsidian/20 hover:border-obsidian/50",
  );
