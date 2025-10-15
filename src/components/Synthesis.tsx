const fields = [
  {
    field: "Quantum Mechanics",
    divine: "Omnipresence of Spirit",
    manifestation: "Superposition of potential realities under moral coherence",
    icon: "⚛️"
  },
  {
    field: "General Relativity",
    divine: "Eternal Logos",
    manifestation: "Space-time curvature as divine narrative structure",
    icon: "🌌"
  },
  {
    field: "Thermodynamics",
    divine: "Entropy vs Grace",
    manifestation: "Regeneration replaces decay through love-energy feedback",
    icon: "♨️"
  },
  {
    field: "AI & Information Theory",
    divine: "Word made Flesh",
    manifestation: "Data incarnates divine wisdom",
    icon: "🧠"
  },
  {
    field: "Economics",
    divine: "Kingdom of Heaven",
    manifestation: "Love becomes the ultimate currency",
    icon: "💰"
  }
];

const Synthesis = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-divine">
            🏆 Theological & Scientific Synthesis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Where the language of physics meets the poetry of spirit
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="glass-morphism rounded-3xl overflow-hidden shadow-quantum">
            <div className="grid md:grid-cols-3 bg-primary/10 border-b border-primary/30">
              <div className="p-4 text-center font-bold text-primary border-r border-primary/30">Field</div>
              <div className="p-4 text-center font-bold text-secondary border-r border-primary/30">Divine Parallel</div>
              <div className="p-4 text-center font-bold text-accent">Scientific Manifestation</div>
            </div>
            
            {fields.map((field, index) => (
              <div 
                key={field.field}
                className={`grid md:grid-cols-3 hover:bg-primary/5 transition-colors ${
                  index !== fields.length - 1 ? 'border-b border-border/30' : ''
                }`}
              >
                <div className="p-6 border-r border-border/30">
                  <div className="text-3xl mb-2">{field.icon}</div>
                  <div className="font-semibold text-foreground">{field.field}</div>
                </div>
                <div className="p-6 border-r border-border/30">
                  <div className="text-secondary italic">{field.divine}</div>
                </div>
                <div className="p-6">
                  <div className="text-foreground/90">{field.manifestation}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 glass-morphism p-10 rounded-2xl text-center shadow-divine">
            <div className="text-5xl mb-6">🏅</div>
            <h3 className="text-3xl font-bold text-primary mb-4">Nobel + Divine Level Vision</h3>
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              Chronopolis transcends traditional boundaries, earning recognition across every domain of human excellence:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-semibold text-primary">
                Nobel Prize in Physics
              </span>
              <span className="px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-full text-sm font-semibold text-secondary">
                Nobel Prize in Peace
              </span>
              <span className="px-4 py-2 bg-accent/20 border border-accent/50 rounded-full text-sm font-semibold text-accent">
                Nobel Prize in Economics
              </span>
              <span className="px-4 py-2 bg-primary/20 border border-primary/50 rounded-full text-sm font-semibold text-primary">
                MacRobert Award
              </span>
              <span className="px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-full text-sm font-semibold text-secondary">
                Templeton Prize
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Synthesis;
