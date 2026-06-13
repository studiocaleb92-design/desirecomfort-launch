import EditorialSection from "@/components/layout/EditorialSection";
import { cn } from "@/lib/utils";
import { PRODUCT_VIDEO_FILES, videoSrc } from "@/lib/media";

interface ProductVideosSectionProps {
  /** When false, renders without EditorialSection wrapper (e.g. inline on product page). */
  wrapped?: boolean;
  id?: string;
}

const videoScatter = [
  "md:w-[58%] md:mr-auto md:self-start",
  "md:w-[52%] md:ml-auto md:-mt-20 md:mb-8",
];

const ProductVideosSection = ({ wrapped = true, id = "product-videos" }: ProductVideosSectionProps) => {
  const content = (
    <div id={id}>
      <h3 className="text-subheading font-medium text-foreground">Videos</h3>
      <div className="mt-8 flex flex-col gap-10 md:gap-0 md:pb-12">
        {PRODUCT_VIDEO_FILES.map((video, index) => (
          <div key={video.filename + index} className={cn("w-full", videoScatter[index])}>
            <h4 className="mb-2 text-body font-medium text-foreground">{video.title}</h4>
            <div className="mt-2 aspect-video overflow-hidden rounded-none bg-candlelight">
              <video
                src={videoSrc(video.filename)}
                controls
                className="h-full w-full object-contain"
                preload="metadata"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (!wrapped) {
    return content;
  }

  return (
    <EditorialSection surface="soft-blush">
      {content}
    </EditorialSection>
  );
};

export default ProductVideosSection;
