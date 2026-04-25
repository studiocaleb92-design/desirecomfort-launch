import { Check, X } from "lucide-react";
const rows = [
  { label: "Feels like real underwear", us: true, pads: false },
  { label: "No crinkle sound or shifting", us: true, pads: false },
  { label: "Reusable — less waste", us: true, pads: false },
  { label: "Wash & wear for years*", us: true, pads: false },
];

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why switch</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">Better than pads &amp; disposable diapers</h2>
          <p className="mt-3 text-base font-medium text-foreground/85">
            Same leak security with a slimmer profile — without the plastic feel or constant adjusting.
          </p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-soft">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-border bg-muted/40 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:px-6 sm:text-sm">
            <span> </span>
            <span className="text-center text-primary">Desire Comfort™</span>
            <span className="text-center">Pads / disposables</span>
          </div>
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-border/60 px-4 py-3 last:border-0 sm:px-6 sm:py-4"
            >
              <span className="text-sm font-medium text-foreground sm:text-base">{row.label}</span>
              <span className="flex justify-center">
                {row.us ? <Check className="h-5 w-5 text-success" aria-label="Yes" /> : <X className="h-5 w-5 text-muted-foreground" aria-label="No" />}
              </span>
              <span className="flex justify-center">
                {row.pads ? <Check className="h-5 w-5 text-muted-foreground" aria-label="Yes" /> : <X className="h-5 w-5 text-muted-foreground/70" aria-label="No" />}
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">*With proper care — see product care instructions.</p>
      </div>
    </section>
  );
};

export default ComparisonSection;
