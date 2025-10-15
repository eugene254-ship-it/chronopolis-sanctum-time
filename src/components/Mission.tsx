const Mission = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Radial Glow Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
             style={{ background: 'var(--gradient-divine)' }} />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
             style={{ background: 'var(--gradient-quantum)' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-divine">
              🌍 Mission
            </h2>
          </div>
          
          <div className="glass-morphism p-12 rounded-3xl shadow-quantum mb-12">
            <p className="text-2xl md:text-3xl font-light text-center mb-8 text-primary leading-relaxed">
              To redeem time by transforming innovation into worship and civilization into sanctuary.
            </p>
            
            <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent my-8" />
            
            <p className="text-xl text-center text-foreground/90 font-light">
              Chronopolis heals what industrialization fragmented:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-morphism p-8 rounded-2xl text-center hover:shadow-divine transition-all duration-500 group">
              <div className="text-4xl mb-4">⚖️</div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Where economics lost ethics →<br />
                <span className="text-primary font-semibold">Chronopolis fuses value with virtue.</span>
              </p>
            </div>
            
            <div className="glass-morphism p-8 rounded-2xl text-center hover:shadow-divine transition-all duration-500 group">
              <div className="text-4xl mb-4">🤝</div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Where technology divorced from humanity →<br />
                <span className="text-primary font-semibold">Chronopolis rebinds creation with Creator.</span>
              </p>
            </div>
            
            <div className="glass-morphism p-8 rounded-2xl text-center hover:shadow-divine transition-all duration-500 group">
              <div className="text-4xl mb-4">⏳</div>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Where time was wasted in vanity →<br />
                <span className="text-primary font-semibold">Chronopolis reclaims it for eternity.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
