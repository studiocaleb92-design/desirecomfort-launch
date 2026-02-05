import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    const el = document.getElementById("page-content");
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-36 md:pt-44 pb-16">
        <div id="page-content" className="container mx-auto px-4 py-12 md:py-20 scroll-mt-[11rem]">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Contact Us
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            Have a question or need help? We're here for you.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:info@desire-comfort.com"
              className="text-primary hover:underline font-medium"
            >
              info@desire-comfort.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
