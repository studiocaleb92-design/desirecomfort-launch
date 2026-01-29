import { AlertCircle, Frown, Clock, Eye } from "lucide-react";

const painPoints = [
  {
    icon: AlertCircle,
    text: "Constant worry about leaks and stains",
  },
  {
    icon: Frown,
    text: "Uncomfortable, bulky pads that chafe",
  },
  {
    icon: Clock,
    text: "Frequent bathroom trips just to check",
  },
  {
    icon: Eye,
    text: "Feeling self-conscious about what you're wearing",
  },
];

const PainSection = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="text-sm font-medium tracking-wider text-primary uppercase">
            We Understand
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mt-4">
            Your period shouldn't hold you back
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            We know the struggle. The anxiety. The constant checking. 
            You deserve better than spending your days worried about leaks.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 max-w-3xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Emotional Statement */}
        <div className="text-center mt-12">
          <p className="text-xl md:text-2xl font-serif text-muted-foreground italic">
            "It's exhausting. And it doesn't have to be this way."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
