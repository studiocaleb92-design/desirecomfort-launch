import { Sun, Moon } from "lucide-react";
const blocks = [
  {
    title: "Morning",
    icon: Sun,
    items: ["Pull on like everyday underwear — no wings or adhesive.", "Head out protected on medium–heavy days without a pad stack."],
  },
  {
    title: "Day & night",
    icon: Moon,
    items: ["Change when you’re ready; rinse cold first to keep fabric fresh.", "Sleep without the diaper-like bulk — full coverage where you need it."],
  },
];

const DailyRoutineSection = () => {
  return (
    <section id="daily-routine" className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">All-day rhythm</span>
          <h2 className="mt-3 font-serif text-3xl font-medium text-foreground md:text-4xl">Your daily routine</h2>
          <p className="mt-3 text-base font-medium text-foreground/85">From morning rush to overnight rest — one pair, layered protection.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border/50 bg-card p-6 shadow-soft">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-light">
                  <b.icon className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">{b.title}</h3>
              </div>
              <ul className="space-y-3 text-sm font-medium leading-relaxed text-foreground/90 md:text-base">
                {b.items.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyRoutineSection;
