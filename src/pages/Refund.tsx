import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";

const Refund = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="page-top-offset pb-28 md:pb-32">
      <PageContent className="max-w-2xl">
        <h1 className="text-heading font-medium text-foreground">Refund policy</h1>
        <p className="mt-6 text-body text-muted-foreground">
          We offer a 30-day comfort guarantee. If you&apos;re not satisfied, contact us for a refund
          or exchange. Items must be unworn and in original packaging. Full refund policy details
          will be published here.
        </p>
      </PageContent>
    </main>
    <Footer />
  </div>
);

export default Refund;
