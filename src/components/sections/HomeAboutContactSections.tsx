import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HEADER_SCROLL_ANCHOR_CLASS } from "@/lib/productCatalog";

export const HomeAboutSection = () => (
  <section id="about" className={`section-padding bg-background ${HEADER_SCROLL_ANCHOR_CLASS}`}>
    <div className="container mx-auto max-w-3xl text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blush-light">
        <HeartHandshake className="h-6 w-6 text-primary" aria-hidden />
      </div>
      <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">About us</h2>
      <p className="mt-4 text-base font-medium leading-relaxed text-foreground/90">
        Desire Comfort™ exists to give you leak confidence without sacrificing how you want to look and feel. We design
        period underwear with real bodies and real schedules in mind — soft fabrics, secure layers, and honest sizing.
      </p>
      <Button variant="outline" className="mt-8" asChild>
        <Link to="/about">
          Our story <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </section>
);

export const HomeContactSection = () => (
  <section id="contact" className={`section-padding bg-cream-dark ${HEADER_SCROLL_ANCHOR_CLASS}`}>
    <div className="container mx-auto max-w-3xl text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-soft">
        <Mail className="h-6 w-6 text-primary" aria-hidden />
      </div>
      <h2 className="font-serif text-3xl font-medium text-foreground md:text-4xl">Contact us</h2>
      <p className="mt-4 text-base font-medium leading-relaxed text-foreground/90">
        Questions about sizing, shipping, or your order? Our team replies as quickly as we can on business days.
      </p>
      <p className="mt-4">
        <a href="mailto:info@desire-comfort.com" className="text-lg font-semibold text-primary hover:underline">
          info@desire-comfort.com
        </a>
      </p>
      <Button variant="hero" className="mt-8" asChild>
        <Link to="/contact">Go to contact form</Link>
      </Button>
    </div>
  </section>
);
