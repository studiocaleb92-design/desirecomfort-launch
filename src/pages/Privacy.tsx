import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="page-top-offset pb-28 md:pb-32">
      <PageContent className="max-w-2xl">
        <h1 className="text-heading font-medium text-foreground">Privacy policy</h1>
        <p className="mt-6 text-body text-muted-foreground">
          We respect your privacy. This page will be updated with our full privacy policy. For
          questions, contact us at{" "}
          <a
            href="mailto:info@desire-comfort.com"
            className="border-b border-muted-gold text-foreground transition-opacity hover:opacity-80"
          >
            info@desire-comfort.com
          </a>
          .
        </p>
      </PageContent>
    </main>
    <Footer />
  </div>
);

export default Privacy;
