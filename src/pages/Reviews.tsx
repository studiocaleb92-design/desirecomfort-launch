import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/sections/SocialProofSection";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="page-top-offset pb-28 md:pb-32">
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
