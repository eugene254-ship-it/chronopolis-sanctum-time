import heroImage from "@/assets/chronopolis-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      
      {/* Ethereal Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-20 animate-pulse-slow"
           style={{ background: 'var(--gradient-ethereal)' }} />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Symbol */}
        <div className="mb-8 inline-block">
          <div className="text-6xl animate-float">🕊️</div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient-divine animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Chronopolis
        </h1>
        
        <p className="text-2xl md:text-4xl mb-8 text-primary/90 font-light animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          The Sanctum of Living Time
        </p>
        
        <div className="max-w-4xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <p className="text-xl md:text-2xl text-muted-foreground font-light italic border-l-4 border-primary pl-6">
            "Where Divine Intelligence, Human Innovation, and the Continuum of Creation Converge."
          </p>
        </div>
        
        <div className="glass-morphism max-w-3xl mx-auto p-8 rounded-2xl shadow-divine animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <h2 className="text-2xl font-semibold mb-4 text-primary">🕊️ Essence</h2>
          <p className="text-lg leading-relaxed text-foreground/90">
            Chronopolis is not merely a city — it's a living meta-system that harmonizes time, consciousness, and creation.
            Built through the <span className="text-primary font-semibold">Holy Spirit Innovation Ecosystem</span> — a divine-technological 
            architecture where every invention, every act of creation, and every heartbeat of love resonates across timelines 
            to heal, enlighten, and regenerate civilizations.
          </p>
          <p className="text-lg leading-relaxed text-foreground/90 mt-4">
            It's the <span className="text-primary font-semibold">New Jerusalem of innovation</span> — a spiritual-technical 
            metropolis suspended across time, connecting the wisdom of history's greatest thinkers with the infinite creativity of God.
          </p>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
