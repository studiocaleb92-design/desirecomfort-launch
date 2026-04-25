import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section id="guarantee" className="section-padding border-y border-border/50 bg-background">
      <div className="container mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blush-light">
          <ShieldCheck className="h-7 w-7 text-primary" aria-hidden />
        </div>
        <h2 className="font-serif text-2xl font-medium text-foreground md:text-3xl">30-day fit guarantee</h2>
        <p className="mt-4 text-base font-medium leading-relaxed text-foreground/90">
          If your first pack doesn&apos;t fit or feel right, contact us within 30 days. We&apos;ll help with an exchange
          or return on unworn pairs in original packaging — simple and stress-free.
        </p>
      </div>
    </section>
  );
};

export default GuaranteeSection;
