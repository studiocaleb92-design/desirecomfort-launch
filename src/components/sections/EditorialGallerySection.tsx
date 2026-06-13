import { Link } from "react-router-dom";
import EditorialSection from "@/components/layout/EditorialSection";
import { useStaggerReveal, staggerChildProps } from "@/hooks/useStaggerReveal";
import { cn } from "@/lib/utils";
import { IMAGES, PRODUCT_HERO_FALLBACK, PRODUCT_VARIANTS_FALLBACK } from "@/lib/media";
import { orderHref } from "@/lib/productCatalog";

type GalleryLink =
  | { type: "order"; color: string }
  | { type: "product" };

const galleryItems = [
  {
    src: IMAGES.blushPink,
    fallback: PRODUCT_HERO_FALLBACK,
    alt: "Desire Comfort™ — blush pink",
    caption: "Blush Pink — 4-layer leakproof",
    link: { type: "order", color: "Blush Pink" } satisfies GalleryLink,
    aspect: "aspect-[3/4]",
    grid: "md:col-span-4 md:col-start-1 md:row-start-1 md:row-span-2",
    frame: "md:h-[min(520px,68vh)]",
  },
  {
    src: IMAGES.gallery1,
    fallback: PRODUCT_HERO_FALLBACK,
    alt: "4-Layer Leakproof Panties — main",
    caption: "Main product view",
    link: { type: "product" } satisfies GalleryLink,
    aspect: "aspect-[16/10]",
    grid: "md:col-span-8 md:col-start-5 md:row-start-1",
    frame: "md:h-[min(360px,46vh)]",
  },
  {
    src: IMAGES.blackBriefs,
    fallback: PRODUCT_HERO_FALLBACK,
    alt: "Desire Comfort™ — black briefs",
    caption: "Black — flat lay",
    link: { type: "order", color: "Black" } satisfies GalleryLink,
    aspect: "aspect-[4/3]",
    grid: "md:col-span-5 md:col-start-7 md:row-start-2",
    frame: "md:h-[min(280px,36vh)]",
  },
  {
    src: IMAGES.creamBriefs,
    fallback: PRODUCT_VARIANTS_FALLBACK,
    alt: "Desire Comfort™ — cream briefs",
    caption: "Cream — on-body fit",
    link: { type: "order", color: "Cream" } satisfies GalleryLink,
    aspect: "aspect-[4/3]",
    grid: "md:col-span-3 md:col-start-1 md:row-start-3",
    frame: "md:h-[min(260px,34vh)]",
  },
  {
    src: IMAGES.blueLifestyle,
    fallback: PRODUCT_VARIANTS_FALLBACK,
    alt: "Desire Comfort™ — lifestyle",
    caption: "Everyday comfort",
    link: { type: "order", color: "Blush Pink" } satisfies GalleryLink,
    aspect: "aspect-[4/3]",
    grid: "md:col-span-3 md:col-start-10 md:row-start-3",
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

const galleryLinkTo = (link: GalleryLink) =>
  link.type === "product" ? "/product" : orderHref(link.color);

const EditorialGallerySection = () => {
  const { containerRef, isVisible } = useStaggerReveal();

  return (
    <EditorialSection surface="soft-blush" reveal>
      <h2 className="text-heading font-medium text-foreground">See the difference</h2>
      <p className="mt-3 max-w-xl text-body text-muted-foreground">
        Different angles and styles of our 4-layer leakproof panties.
      </p>

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
                <Link
                  to={galleryLinkTo(item.link)}
                  className="inline-block border-b border-obsidian pb-1.5 transition-opacity hover:opacity-80"
                >
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
