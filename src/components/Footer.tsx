import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream-dark border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <span className="text-sm tracking-[0.3em] font-medium text-foreground">
              D E S I R E C O M F O R T
            </span>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-md">
              Empowering women with comfort and confidence, every day. 
              Our leak-proof underwear is designed to give you peace of mind 
              so you can focus on what matters most.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-warm-brown hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-warm-brown hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@desirecomfort.com"
                className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center text-warm-brown hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Order Now
              </Link>
              <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                How It Works
              </Link>
              <Link to="/reviews" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reviews
              </Link>
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Support</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/shipping" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Shipping Info
              </Link>
              <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Returns
              </Link>
              <a href="/product#size-guide" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Size Guide
              </a>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DesireComfort. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
