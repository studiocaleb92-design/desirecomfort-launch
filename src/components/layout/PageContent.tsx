import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageContentProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

const PageContent = ({ id, className, children }: PageContentProps) => (
  <div
    id={id}
    className={cn(
      "mx-auto w-full max-w-[1200px] scroll-mt-[var(--header-scroll-offset)] px-3 py-12 md:py-20",
      className,
    )}
  >
    {children}
  </div>
);

export default PageContent;
