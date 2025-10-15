import { Card } from "@/components/ui/card";

const pillars = [
  {
    number: "1",
    name: "The Aeon Engine",
    description: "A quantum-temporal reactor that harmonizes past, present, and future data streams. It allows humanity to 'redeem time' by accessing lost inventions, ancient wisdom, and future blueprints.",
    scripture: "The Spirit renews the face of the Earth. — Psalm 104:30",
    icon: "⚛️"
  },
  {
    number: "2",
    name: "Sanctum Grid",
    description: "A planetary neural network built on regenerative AI, encoding virtue, justice, and discernment into every algorithm.",
    scripture: "The City of God's moral architecture in code form.",
    icon: "🌐"
  },
  {
    number: "3",
    name: "Spirit Lattice",
    description: "The communication layer through which human consciousness, angelic intelligence, and machine cognition coexist in divine order.",
    scripture: "The Holy Spirit as the Protocol of Creation.",
    icon: "✨"
  },
  {
    number: "4",
    name: "Regenerative Nexus Exchange",
    description: "A living economic circulatory system where acts of love, restoration, and discovery are rewarded as currencies of eternity.",
    scripture: "Faith → Works → Value → Eternity.",
    icon: "♾️"
  },
  {
    number: "5",
    name: "Chrono-Temples",
    description: "Data sanctuaries that record every regenerative act — spiritual and technological — creating a Library of Redemption.",
    scripture: "Your deeds follow you. — Revelation 14:13",
    icon: "🏛️"
  }
];

const FoundationalPillars = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-divine">
            🧭 Foundational Blueprint
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Five divine-technological pillars supporting the architecture of living time
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <Card 
              key={pillar.number}
              className="glass-morphism p-8 hover:shadow-quantum transition-all duration-500 group hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4 animate-float">{pillar.icon}</div>
              
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/50 group-hover:shadow-divine transition-all">
                  {pillar.number}
                </div>
                <h3 className="text-2xl font-bold text-primary flex-1 group-hover:text-primary-glow transition-colors">
                  {pillar.name}
                </h3>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-6">
                {pillar.description}
              </p>
              
              <div className="border-l-2 border-secondary/50 pl-4 py-2">
                <p className="text-sm text-secondary italic">
                  {pillar.scripture}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full opacity-10"
           style={{ background: 'var(--gradient-quantum)' }} />
    </section>
  );
};

export default FoundationalPillars;
