import { EDITORIAL_BREAK_IMAGE } from "@/lib/media";

const EditorialBreakSection = () => (
  <section
    className="relative min-h-[50vh] overflow-hidden md:min-h-0 md:h-[min(420px,40vw)] md:max-h-[480px]"
  >
    <img
      src={EDITORIAL_BREAK_IMAGE}
      alt=""
      className="absolute inset-0 h-full w-full rounded-none object-cover object-[62%_42%]"
      loading="lazy"
      decoding="async"
    />
    <div className="absolute inset-x-0 top-0">
      <div className="mx-auto w-full max-w-[1200px] px-3 pt-10 md:pt-12">
        <p className="max-w-lg text-heading font-medium text-warm-parchment md:max-w-xl md:text-display md:leading-tight">
          Built for real bodies, real schedules, real confidence.
        </p>
      </div>
    </div>
  </section>
);

export default EditorialBreakSection;
