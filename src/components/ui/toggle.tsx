import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center rounded-button text-base font-normal ring-offset-background transition-colors hover:bg-candlelight hover:text-obsidian focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-glow focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:border data-[state=on]:border-obsidian data-[state=on]:bg-candlelight data-[state=on]:text-obsidian",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-obsidian bg-transparent hover:bg-candlelight hover:text-obsidian",
      },
      size: {
        default: "h-11 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
