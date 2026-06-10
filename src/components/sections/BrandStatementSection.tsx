import { Link } from "react-router-dom";
import EditorialSection from "@/components/layout/EditorialSection";
import { BRAND_STATEMENT_IMAGE, PRODUCT_HERO_FALLBACK } from "@/lib/media";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const painPoints = [
  "Constant worry about leaks and stains",
  "Uncomfortable, bulky pads that chafe",
  "Frequent bathroom trips just to check",
  "Feeling self-conscious about what you're wearing",
];

const features = [
  "4-layer absorption technology",
  "Breathable, moisture-wicking fabric",
  "Seamless, invisible fit under any outfit",
  "Machine washable and reusable",
];

const BrandStatementSection = () => (
  <EditorialSection
    id="about"
    surface="candlelight"
    reveal
    className={HEADER_SCROLL_ANCHOR_CLASS}
  >
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16 lg:items-start">
      <div>
        <h2 className="text-heading font-medium text-foreground">
          Your period shouldn&apos;t hold you back
        </h2>
        <p className="mt-6 text-body text-muted-foreground">
          We know the struggle — the anxiety and the constant checking. You deserve better than
          spending your days worried about leaks.
        </p>
        <ul className="mt-8 space-y-3 text-body text-foreground">
          {painPoints.map((point) => (
            <li key={point} className="border-b border-obsidian/10 pb-3">
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-body text-foreground">
          Desire Comfort™ leak-proof underwear combines invisible protection with all-day comfort.
          No bulk. No bunching. Just confidence you can feel.
        </p>
        <ul className="mt-6 space-y-2 text-body text-foreground">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <div className="mt-10">
          <img
            src={BRAND_STATEMENT_IMAGE}
            alt="Desire Comfort™ period underwear"
            onError={(e) => {
              e.currentTarget.src = PRODUCT_HERO_FALLBACK;
            }}
            className="w-full rounded-none object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
        <p className="mt-8">
          <Link
            to="/#order"
            className="inline-block border-b border-obsidian pb-2 text-body text-obsidian transition-opacity hover:opacity-80"
          >
            Shop 4-layer leakproof panties
          </Link>
        </p>
      </div>
    </div>
  </EditorialSection>
);

export default BrandStatementSection;
