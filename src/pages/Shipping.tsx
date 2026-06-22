import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";

const Shipping = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="page-top-offset pb-28 md:pb-32">
      <PageContent className="max-w-2xl">
        <h1 className="text-heading font-medium text-foreground">Shipping & delivery</h1>
        <div className="mt-8 space-y-4 text-body text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Free shipping worldwide.</span> We ship
            standard delivery in 5–7 business days. Express shipping may be available at checkout.
          </p>
          <p>
            You&apos;ll receive a tracking link once your order ships. If you have questions,
            contact us at{" "}
            <a
              href="mailto:info@desire-comfort.com"
              className="border-b border-muted-gold text-foreground transition-opacity hover:opacity-80"
            >
              info@desire-comfort.com
            </a>
            .
          </p>
        </div>
      </PageContent>
    </main>
    <Footer />
  </div>
);

export default Shipping;
