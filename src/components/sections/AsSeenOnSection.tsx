const AsSeenOnSection = () => {
  return (
    <section className="section-padding bg-background border-t border-border/50">
      <div className="container mx-auto">
        <p className="text-center text-xs font-medium tracking-widest text-muted-foreground uppercase mb-8">
          As seen on
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
          {/* Placeholder logos — replace with real "As seen on" assets */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-8 md:h-10 w-24 md:w-28 rounded bg-muted flex items-center justify-center text-muted-foreground text-xs font-medium"
              aria-hidden
            >
              Logo {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsSeenOnSection;
