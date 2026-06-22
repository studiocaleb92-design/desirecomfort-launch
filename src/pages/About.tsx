import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";
import { BRAND_NAME } from "@/lib/brand";

const About = () => {
  useEffect(() => {
    const el = document.getElementById("page-content");
    if (el) el.scrollIntoView({ behavior: "auto", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="page-top-offset pb-28 md:pb-32">
        <PageContent id="page-content" className="max-w-2xl">
          <h1 className="text-heading font-medium text-foreground">About {BRAND_NAME}</h1>
          <p className="mt-6 text-body text-muted-foreground">
            We believe every woman deserves to feel comfortable and confident, every day. {BRAND_NAME}{" "}
            was created to offer leak-proof period underwear that feels like regular underwear — so
            you can focus on what matters most.
          </p>
          <p className="mt-4 text-body text-muted-foreground">
            Our mission is simple: premium comfort, reliable protection, and a brand you can trust.
          </p>
        </PageContent>
      </main>
      <Footer />
    </div>
  );
};

export default About;
