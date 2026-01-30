import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            About DesireComfort
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            We believe every woman deserves to feel comfortable and confident, every day.
            DesireComfort was created to offer leak-proof period underwear that feels like
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
