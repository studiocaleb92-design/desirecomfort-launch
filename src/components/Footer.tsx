import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { BRAND_NAME } from "@/lib/brand";
import { CTA_PRIMARY_LABEL } from "@/lib/ctaCopy";
import { WHATSAPP_HREF } from "@/lib/contactLinks";

const Footer = () => {
  return (
    <footer className="footer-bottom-safe border-t border-muted-gold bg-walnut-shell text-warm-parchment">
      <div className="mx-auto w-full max-w-[1200px] px-3 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block transition-opacity hover:opacity-80">
              <BrandLogo variant="inverse" className="text-[1.5rem] md:text-[1.75rem]" />
            </Link>
            <p className="mt-4 max-w-md text-caption leading-relaxed text-warm-parchment/80">
              Leak-proof period underwear designed for real bodies and real schedules. Soft fabrics,
              secure layers, and sizing you can trust.
            </p>
            <div className="mt-6">
              <a
                href="mailto:info@desire-comfort.com"
                className="inline-block border-b border-muted-gold pb-2 text-caption text-warm-parchment transition-colors hover:text-warm-parchment/80"
              >
                info@desire-comfort.com
              </a>
            </div>
            <div className="mt-6 flex gap-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-caption font-medium text-warm-parchment">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/#order"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                {CTA_PRIMARY_LABEL}
              </Link>
              <Link
                to="/#how-it-works"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                How It Works
              </Link>
              <Link
                to="/#reviews"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                Reviews
              </Link>
              <Link
                to="/#faq"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                FAQ
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-caption font-medium text-warm-parchment">Support</h4>
            <nav className="flex flex-col gap-3">
              <Link
                to="/shipping"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                Shipping Info
              </Link>
              <Link
                to="/refund"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                Returns
              </Link>
              <Link
                to="/faq"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                Size Guide
              </Link>
              <Link
                to="/contact"
                className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                Contact Us
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit border-b border-muted-gold pb-0.5 text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
              >
                WhatsApp
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-muted-gold pt-8 md:flex-row">
          <p className="text-caption text-warm-parchment/80">
            © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
            >
              Privacy Policy
            </Link>
            <Link
              to="/refund"
              className="text-caption text-warm-parchment/80 transition-colors hover:text-warm-parchment"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
