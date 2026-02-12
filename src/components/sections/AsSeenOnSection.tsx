const publications = [
  "VOGUE",
  "hypebae",
  "marie claire",
  "ELLE",
  "COSMOPOLITAN",
  "The Telegraph",
];

const AsSeenOnSection = () => {
  return (
    <section className="section-padding bg-background border-t border-border/50">
      <div className="container mx-auto">
        <p className="text-center text-sm font-bold tracking-[0.2em] text-foreground uppercase mb-8">
          AS SEEN IN
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {publications.map((name) => (
            <span
              key={name}
              className="text-lg md:text-xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-4">
          As featured in trusted publications.
        </p>
      </div>
    </section>
  );
};

export default AsSeenOnSection;
