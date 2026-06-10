import EditorialSection from "@/components/layout/EditorialSection";

const blocks = [
  {
    title: "Morning",
    items: [
      "Pull on like everyday underwear — no wings or adhesive.",
      "Head out protected on medium–heavy days without a pad stack.",
    ],
  },
  {
    title: "Day and night",
    items: [
      "Change when you're ready; rinse cold first to keep fabric fresh.",
      "Sleep without the diaper-like bulk — full coverage where you need it.",
    ],
  },
];

const DailyRoutineSection = () => (
  <EditorialSection id="daily-routine" surface="candlelight">
    <div className="max-w-2xl">
      <h2 className="text-heading font-medium text-foreground">Your daily routine</h2>
      <p className="mt-3 text-body text-muted-foreground">
        From morning rush to overnight rest — one pair, layered protection.
      </p>
    </div>

    <div className="mt-10 grid grid-cols-1 gap-10 border-t border-obsidian/10 pt-10 md:grid-cols-2 md:gap-12">
      {blocks.map((block) => (
        <div key={block.title}>
          <h3 className="text-subheading font-medium text-foreground">{block.title}</h3>
          <ul className="mt-4 space-y-3 text-body text-foreground">
            {block.items.map((line) => (
              <li key={line} className="border-b border-obsidian/10 pb-3">
                {line}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </EditorialSection>
);

export default DailyRoutineSection;
