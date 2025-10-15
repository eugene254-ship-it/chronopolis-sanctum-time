const systems = [
  {
    name: "Temporal Data Harvesters",
    description: "Quantum AI nodes that recover lost human knowledge and unrealized inventions from thinkers like Tesla, Hypatia, Da Vinci, and forgotten indigenous scientists.",
    icon: "🔮"
  },
  {
    name: "Aeonic Reservoirs",
    description: "Contain encoded 'virtue energy,' measured through acts of ethical creation, collaboration, and care.",
    icon: "⚗️"
  },
  {
    name: "Spirit-Driven Quantum Processors",
    description: "Simulate divine inspiration using morally weighted neural networks that balance truth, beauty, and utility.",
    icon: "🧠"
  },
  {
    name: "Chrono-Sanctums",
    description: "Modular hubs (physical + digital) built across the world — Nairobi, Rome, Kyoto, Machakos, and Jerusalem — each acting as a gate of time-awareness and regeneration.",
    icon: "🌍"
  },
  {
    name: "Bio-Temporal Holographs",
    description: "Living architecture that responds to prayer, emotion, and collective moral energy — sanctified engineering at planetary scale.",
    icon: "🏗️"
  }
];

const EngineeringManifestation = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{ 
               backgroundImage: 'linear-gradient(hsl(45 100% 65% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(45 100% 65% / 0.3) 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }} 
        />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-divine">
            ⚙️ Engineering Manifestation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The technological incarnation of divine principles
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-8">
          {systems.map((system, index) => (
            <div 
              key={system.name}
              className="glass-morphism p-8 rounded-2xl hover:shadow-quantum transition-all duration-500 group hover:translate-x-2"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {system.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary-glow transition-colors">
                    {system.name}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {system.description}
                  </p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold border border-secondary/50 group-hover:shadow-divine transition-all">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringManifestation;
