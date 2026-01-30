import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground">
            Contact Us
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-2xl">
            Have a question or need help? We're here for you.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <a
              href="mailto:hello@desirecomfort.com"
              className="text-primary hover:underline font-medium"
            >
              hello@desirecomfort.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
