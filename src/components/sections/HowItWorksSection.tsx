import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EditorialSection from "@/components/layout/EditorialSection";
import ProductVideosSection from "@/components/sections/ProductVideosSection";
import { CTA_PRIMARY_LABEL, CTA_TRUST_LINE } from "@/lib/ctaCopy";

const layers = [
  {
    step: "01",
    title: "Quick-drying absorbent layer",
    text: "A specially developed top layer that quickly wicks moisture so you feel dry. Works like regular underwear — only smarter.",
  },
  {
    step: "02",
    title: "Highly absorbent core",
    text: "The middle layer effectively absorbs moisture. Thin, not bulky — with options from light to heavy flow.",
  },
  {
    step: "03",
    title: "Leak-proof barrier",
    text: "The impermeable layer keeps you protected. Capacity of up to 4 tampons' worth (40ml) — for strong and light days.",
  },
];

const trustBadges = [
  { label: "Recommended by", value: "9/10 customers" },
  { label: "Leak-proof", value: "For 100 washes*" },
  { label: "OEKO-TEX", value: "Tested & safe" },
];

const HowItWorksSection = () => (
  <>
    <EditorialSection surface="soft-blush">
      <div className="max-w-2xl">
        <h1 className="text-heading font-medium text-foreground">Technology & protection</h1>
        <p className="mt-4 text-body text-muted-foreground">
          Go deeper on fabrics, layers, and how we test — so you know exactly what you&apos;re
          wearing.
        </p>
      </div>

      <div className="mt-12 max-w-3xl">
        <h2 className="text-subheading font-medium text-foreground">
          The most advanced technology in period underwear
        </h2>
        <p className="mt-3 text-body text-muted-foreground">
          Developed for comfort and reliability. Super absorbent and at the same time impermeable.
        </p>

        <div className="mt-10 space-y-10 border-t border-obsidian/10 pt-10">
          {layers.map((layer) => (
            <div key={layer.step} className="grid grid-cols-1 gap-4 sm:grid-cols-[4rem_1fr]">
              <span className="text-heading-sm font-medium text-muted-gold">{layer.step}</span>
              <div>
                <h3 className="text-subheading font-medium text-foreground">{layer.title}</h3>
                <p className="mt-2 text-body text-muted-foreground">{layer.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-caption text-muted-foreground">
          Thickness only ~4mm — thin like normal underwear.
        </p>
      </div>
    </EditorialSection>

    <EditorialSection surface="candlelight">
      <div className="grid grid-cols-1 gap-8 border-t border-obsidian/10 pt-10 sm:grid-cols-3 sm:border-0 sm:pt-0">
        {trustBadges.map((badge) => (
          <div key={badge.label}>
            <p className="text-caption text-muted-gold">{badge.label}</p>
            <p className="mt-1 text-body font-medium text-foreground">{badge.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-md border-t border-obsidian/10 pt-10">
        <a
          href="https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block transition-opacity hover:opacity-80"
          aria-label="OEKO-TEX Standard 100 — textiles tested for harmful substances"
        >
          <img
            src="/images/oeko-tex-badge.svg"
            alt="OEKO-TEX STANDARD 100 — Certified textiles tested for harmful substances"
            className="h-12 w-auto"
            width="120"
            height="48"
          />
        </a>
        <p className="mt-4 text-caption text-muted-gold">OEKO-TEX certified</p>
        <p className="mt-2 text-body text-muted-foreground">
          Tested for harmful substances.{" "}
          <a
            href="https://www.oeko-tex.com/en/our-standards/standard-100-by-oeko-tex"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b border-obsidian text-obsidian transition-opacity hover:opacity-80"
          >
            Learn more
          </a>
        </p>
      </div>

      <div className="mt-12 max-w-2xl border-t border-obsidian/10 pt-10">
        <h3 className="text-subheading font-medium text-foreground">Tests? Obsessed.</h3>
        <p className="mt-3 text-body text-foreground">Proven to be leak-proof for 100 washes*</p>
        <p className="mt-3 text-body text-muted-foreground">
          We put our underwear through rigorous testing so you can trust every wear. Quality you can
          feel.
        </p>
        <p className="mt-4 text-caption text-muted-foreground">*Care instructions apply. See FAQ.</p>
      </div>

      <div className="mt-12">
        <Button variant="hero" size="lg" asChild>
          <Link to="/#order">{CTA_PRIMARY_LABEL}</Link>
        </Button>
        <p className="mt-3 text-caption text-muted-foreground">{CTA_TRUST_LINE}</p>
      </div>
    </EditorialSection>

    <ProductVideosSection />
  </>
);

export default HowItWorksSection;
