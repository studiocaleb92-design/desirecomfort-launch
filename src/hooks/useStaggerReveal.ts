import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";

interface UseStaggerRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useStaggerReveal(options?: UseStaggerRevealOptions) {
  const { ref, isVisible } = useScrollReveal(options);
  return { containerRef: ref, isVisible };
}

export function staggerChildProps(index: number, isVisible: boolean, className?: string) {
  return {
    style: { "--stagger-index": index } as CSSProperties,
    className: cn(className, isVisible ? "reveal-visible reveal-stagger" : "reveal-hidden"),
  };
}
