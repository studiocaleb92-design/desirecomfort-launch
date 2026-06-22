import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EditorialSection from "@/components/layout/EditorialSection";
import { useStaggerReveal, staggerChildProps } from "@/hooks/useStaggerReveal";
import { cn } from "@/lib/utils";
import { IMAGES, PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK } from "@/lib/media";
import { BRAND_NAME } from "@/lib/brand";
import { orderHref } from "@/lib/productCatalog";

type GalleryLink = { type: "order"; color: string };

const galleryItems = [
  {
    src: IMAGES.blushPink,
    fallback: PRODUCT_HERO_FALLBACK,
    alt: `${BRAND_NAME} — blush pink`,
    caption: "Blush Pink — 4-layer leakproof",
    link: { type: "order", color: "Blush Pink" } satisfies GalleryLink,
    aspect: "aspect-[3/4]",
    grid: "md:col-span-4 md:col-start-1 md:row-start-1 md:row-span-2",
    frame: "md:h-[min(520px,68vh)]",
  },
  {
    src: IMAGES.brownLifestyle,
    fallback: PRODUCT_HERO_FALLBACK,
    alt: `${BRAND_NAME} — brown on-body`,
    caption: "Brown — on-body fit",
    link: { type: "order", color: "Brown" } satisfies GalleryLink,
    aspect: "aspect-[4/3]",
    grid: "md:col-span-5 md:col-start-7 md:row-start-2",
    frame: "md:h-[min(280px,36vh)]",
  },
  {
    src: IMAGES.blackBriefs,
    fallback: PRODUCT_HERO_FALLBACK,
    alt: `${BRAND_NAME} — black briefs`,
    caption: "Black — flat lay",
    link: { type: "order", color: "Black" } satisfies GalleryLink,
    aspect: "aspect-[4/3]",
    grid: "md:col-span-3 md:col-start-1 md:row-start-3",
    frame: "md:h-[min(260px,34vh)]",
  },
  {
    src: IMAGES.creamBriefs,
    fallback: PRODUCT_VARIANTS_FALLBACK,
    alt: `${BRAND_NAME} — cream briefs`,
    caption: "Cream — on-body fit",
    link: { type: "order", color: "Cream" } satisfies GalleryLink,
    aspect: "aspect-[4/3]",
    grid: "md:col-span-3 md:col-start-4 md:row-start-3",
    frame: "md:h-[min(260px,34vh)]",
  },
  {
    src: IMAGES.blueLifestyle,
    fallback: PRODUCT_VARIANTS_FALLBACK,
    alt: `${BRAND_NAME} — blue lifestyle`,
    caption: "Blue — everyday comfort",
    link: { type: "order", color: "Blue" } satisfies GalleryLink,
    aspect: "aspect-[4/3]",
    grid: "md:col-span-3 md:col-start-7 md:row-start-3",
    frame: "md:h-[min(260px,34vh)]",
  },
  {
    src: IMAGES.pinkStack,
    fallback: PRODUCT_HERO_FALLBACK,
    alt: "4-Layer Leakproof Panties — stack",
    caption: "Stacked pairs",
    link: { type: "order", color: "Dusty Rose" } satisfies GalleryLink,
    aspect: "aspect-[16/10]",
    grid: "md:col-span-9 md:col-start-2 md:row-start-4",
    frame: "md:h-[min(340px,42vh)]",
  },
];

const captionLinkClass =
  "inline-block border-b border-obsidian pb-1.5 transition-opacity hover:opacity-80";

const EditorialGallerySection = () => {
  const { containerRef, isVisible } = useStaggerReveal();

  return (
    <EditorialSection surface="soft-blush" reveal>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-heading font-medium text-foreground">See the difference</h2>
          <p className="mt-3 text-body text-muted-foreground">
            Different angles and styles of our 4-layer leakproof panties.
          </p>
        </div>
        <Button variant="outline" size="default" className="shrink-0 self-start md:self-auto" asChild>
          <Link to="/product">Main product view</Link>
        </Button>
      </div>

      <div
        ref={containerRef}
        className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-12 md:gap-x-10 md:gap-y-14 md:pb-16"
      >
        {galleryItems.map((item, index) => {
          const stagger = staggerChildProps(
            index,
            isVisible,
            cn("w-full min-w-0 md:px-1", item.grid),
          );
          return (
            <figure key={item.caption} className={stagger.className} style={stagger.style}>
              <div
                className={cn(
                  "w-full overflow-hidden",
                  item.aspect,
                  item.frame,
                  "md:aspect-auto",
                )}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full max-h-full rounded-none object-cover object-center"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    if (item.fallback) e.currentTarget.src = item.fallback;
                  }}
                />
              </div>
              <figcaption className="mt-4 pt-1 text-caption text-obsidian md:mt-5">
                <Link to={orderHref(item.link.color)} className={captionLinkClass}>
                  {item.caption}
                </Link>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </EditorialSection>
  );
};

export default EditorialGallerySection;
