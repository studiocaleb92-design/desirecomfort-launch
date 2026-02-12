import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
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
            About Desire Comfort™
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            We believe every woman deserves to feel comfortable and confident, every day.
            Desire Comfort™ was created to offer leak-proof period underwear that feels like
            regular underwear — so you can focus on what matters most.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Our mission is simple: premium comfort, reliable protection, and a brand you can trust.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
