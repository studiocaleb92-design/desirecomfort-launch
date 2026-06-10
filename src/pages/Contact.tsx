import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";
import { WHATSAPP_HREF } from "@/lib/contactLinks";

const Contact = () => {
  useEffect(() => {
    const el = document.getElementById("page-content");
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-28 pt-20 md:pb-32 md:pt-24">
        <PageContent id="page-content" className="max-w-2xl">
          <h1 className="text-heading font-medium text-foreground">Contact us</h1>
          <p className="mt-6 text-body text-muted-foreground">
            Have a question or need help? We&apos;re here for you.
          </p>
          <p className="mt-8">
            <a
              href="mailto:info@desire-comfort.com"
              className="inline-block border-b border-muted-gold pb-2 text-body text-foreground transition-opacity hover:opacity-80"
            >
              info@desire-comfort.com
            </a>
          </p>
          <p className="mt-6">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-b border-muted-gold pb-2 text-body text-foreground transition-opacity hover:opacity-80"
            >
              Message us on WhatsApp
            </a>
          </p>
        </PageContent>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
