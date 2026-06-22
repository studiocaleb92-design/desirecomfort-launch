import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";
import { Button } from "@/components/ui/button";

const OrderSuccess = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="page-top-offset pb-28 md:pb-32">
      <PageContent className="max-w-lg">
        <h1 className="text-heading font-medium text-foreground">Thank you for your order</h1>
        <p className="mt-4 text-body text-muted-foreground">
          We&apos;ve received your payment. You&apos;ll get a confirmation email shortly with
          shipping details.
        </p>
        <div className="mt-8">
          <Button variant="hero" size="lg" asChild>
            <Link to="/">Continue shopping</Link>
          </Button>
        </div>
      </PageContent>
    </main>
    <Footer />
  </div>
);

export default OrderSuccess;
