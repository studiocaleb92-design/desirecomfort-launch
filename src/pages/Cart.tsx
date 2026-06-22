import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContent from "@/components/layout/PageContent";
import CartPanel from "@/components/CartPanel";

const Cart = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="page-top-offset pb-28 md:pb-32">
      <PageContent className="max-w-lg">
        <h1 className="text-heading font-medium text-foreground">Your cart</h1>
        <div className="mt-8">
          <CartPanel />
        </div>
      </PageContent>
    </main>
    <Footer />
  </div>
);

export default Cart;
