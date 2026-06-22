import { Link } from "react-router-dom";
import EditorialSection from "@/components/layout/EditorialSection";
import { BRAND_NAME } from "@/lib/brand";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

const HomeAboutContactSection = () => (
  <EditorialSection
    surface="candlelight"
    reveal
    className={HEADER_SCROLL_ANCHOR_CLASS}
  >
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
      <div>
        <h2 className="text-heading font-medium text-foreground">About us</h2>
        <p className="mt-4 text-body text-foreground">
          {BRAND_NAME} exists to give you leak confidence without sacrificing how you want to
          look and feel. We design period underwear with real bodies and real schedules in mind —
          soft fabrics, secure layers, and honest sizing.
        </p>
        <p className="mt-6">
          <Link
            to="/about"
            className="inline-block border-b border-obsidian pb-2 text-body text-obsidian transition-opacity hover:opacity-80"
          >
            Our story
          </Link>
        </p>
      </div>

      <div id="contact">
        <h2 className="text-heading font-medium text-foreground">Contact us</h2>
        <p className="mt-4 text-body text-foreground">
          Questions about sizing, shipping, or your order? Our team replies as quickly as we can on
          business days.
        </p>
        <p className="mt-6">
          <a
            href="mailto:info@desire-comfort.com"
            className="inline-block border-b border-muted-gold pb-2 text-body text-foreground transition-opacity hover:opacity-80"
          >
            info@desire-comfort.com
          </a>
        </p>
        <p className="mt-6">
          <Link
            to="/contact"
            className="inline-block border-b border-obsidian pb-2 text-body text-obsidian transition-opacity hover:opacity-80"
          >
            Go to contact form
          </Link>
        </p>
      </div>
    </div>
  </EditorialSection>
);

export default HomeAboutContactSection;
