import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialProofSection from "@/components/sections/SocialProofSection";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 md:pt-28">
        <SocialProofSection />
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
