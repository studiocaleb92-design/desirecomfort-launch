import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type EditorialSurface = "parchment" | "candlelight";

interface EditorialSectionProps {
  id?: string;
  surface?: EditorialSurface;
  reveal?: boolean;
  className?: string;
  innerClassName?: string;
  children: ReactNode;
}

const surfaceClass: Record<EditorialSurface, string> = {
  parchment: "bg-background",
  candlelight: "bg-candlelight",
};

const EditorialSection = ({
  id,
  surface = "parchment",
  reveal = false,
  className,
  innerClassName,
  children,
}: EditorialSectionProps) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id={id} className={cn("section-padding", surfaceClass[surface], className)}>
      <div
        ref={reveal ? ref : undefined}
        className={cn(
          "mx-auto w-full max-w-[1200px] px-3",
          reveal && !isVisible && "reveal-hidden",
          reveal && isVisible && "reveal-visible",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default EditorialSection;
