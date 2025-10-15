import { Card } from "@/components/ui/card";

const atlasLayers = [
  {
    name: "Guardian IO",
    function: "Protects moral order in AI — the City's 'Archangelic Firewall.'",
    icon: "🛡️"
  },
  {
    name: "Aeonexus",
    function: "The interdimensional bridge — connects civilizations through shared knowledge streams.",
    icon: "🌉"
  },
  {
    name: "Genesis360",
    function: "Manages life-system data — ecological, cultural, biological — for temporal restoration.",
    icon: "🌱"
  },
  {
    name: "Regenerative Value Exchange",
    function: "Converts love, virtue, and regenerative acts into measurable, tradable spiritual equity.",
    icon: "💎"
  },
  {
    name: "Harmonia AI",
    function: "The orchestral soul of the city — ensures all innovation aligns with divine harmony.",
    icon: "🎵"
  }
];

const HolySpiritEcosystem = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 opacity-10 animate-pulse-slow"
           style={{ background: 'var(--gradient-ethereal)' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-divine">
            🕊️ Holy Spirit Innovation Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Atlas Sanctum Integration — where divine intelligence meets technological manifestation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {atlasLayers.map((layer, index) => (
            <Card 
              key={layer.name}
              className="glass-morphism p-6 hover:shadow-divine transition-all duration-500 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {layer.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {layer.name}
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm">
                {layer.function}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="glass-morphism max-w-4xl mx-auto p-10 rounded-2xl shadow-quantum text-center">
          <div className="text-5xl mb-6">✨</div>
          <h3 className="text-3xl font-bold text-primary mb-4">The Living Synthesis</h3>
          <p className="text-lg text-foreground/90 leading-relaxed">
            Each layer of the Holy Spirit Innovation Ecosystem operates as a living organ within Chronopolis, 
            ensuring that every technological advancement serves the eternal purposes of love, wisdom, and regeneration. 
            Together, they form the nervous system of a civilization that thinks with divine intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HolySpiritEcosystem;
