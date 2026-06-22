import EditorialSection from "@/components/layout/EditorialSection";
import { BRAND_NAME } from "@/lib/brand";

const rows = [
  { label: "Reusable", us: true, pads: false },
  { label: "No bulk", us: true, pads: false },
  { label: "Leak protection", us: true, pads: false },
  { label: "Comfort", us: true, pads: false },
];

const ComparisonSection = () => (
  <EditorialSection surface="soft-blush">
    <div className="max-w-2xl">
      <h2 className="text-heading font-medium text-foreground">{BRAND_NAME} vs pads / diapers</h2>
      <p className="mt-3 text-body text-muted-foreground">
        Same leak security with a slimmer profile — without the plastic feel or constant adjusting.
      </p>
    </div>

    <div className="mt-10 max-w-2xl">
      <div className="grid grid-cols-[1fr_auto_auto] gap-4 border-b border-obsidian/10 pb-3 text-caption font-medium text-muted-foreground">
        <span />
        <span className="text-foreground">{BRAND_NAME}</span>
        <span>Pads / diapers</span>
      </div>
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[1fr_auto_auto] items-center gap-4 border-b border-obsidian/10 py-4"
        >
          <span className="text-body text-foreground">{row.label}</span>
          <span className="min-w-16 text-center text-body text-foreground">{row.us ? "Yes" : "—"}</span>
          <span className="min-w-16 text-center text-body text-muted-foreground">
            {row.pads ? "Yes" : "—"}
          </span>
        </div>
      ))}
      <p className="mt-4 text-caption text-muted-foreground">
        Pads and disposable diapers offer only limited leak control and less comfort.
      </p>
    </div>
  </EditorialSection>
);

export default ComparisonSection;
