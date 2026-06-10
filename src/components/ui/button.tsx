import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button text-base font-medium ring-offset-background transition-[transform,colors] duration-150 ease-out active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border border-obsidian bg-transparent text-obsidian hover:bg-obsidian hover:text-warm-parchment",
        destructive:
          "border border-destructive bg-transparent text-destructive hover:bg-destructive hover:text-destructive-foreground",
        outline:
          "border border-obsidian bg-transparent text-obsidian hover:bg-obsidian hover:text-warm-parchment",
        secondary:
          "border border-obsidian bg-transparent text-obsidian hover:bg-candlelight",
        ghost: "hover:bg-candlelight hover:text-foreground",
        link: "border-b border-obsidian rounded-none pb-2 text-obsidian hover:bg-transparent",
        hero: "border border-obsidian bg-transparent text-obsidian hover:bg-obsidian hover:text-warm-parchment",
        soft: "border border-warm-parchment bg-transparent text-obsidian hover:bg-walnut-shell hover:text-warm-parchment",
        solid:
          "border border-obsidian bg-obsidian text-warm-parchment hover:bg-walnut-shell hover:text-warm-parchment",
        minimal:
          "border-b border-muted-gold rounded-none pb-2 text-muted-foreground hover:text-foreground hover:bg-transparent",
      },
      size: {
        default: "h-11 px-[18px] py-4",
        sm: "h-9 px-4 py-2 text-caption",
        lg: "h-14 px-8 py-4",
        xl: "h-16 px-10 text-subheading",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
