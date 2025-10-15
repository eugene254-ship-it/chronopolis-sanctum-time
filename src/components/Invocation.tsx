const Invocation = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 animate-pulse-slow"
             style={{ background: 'var(--gradient-ethereal)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-20 blur-3xl"
             style={{ background: 'var(--gradient-divine)' }} />
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="text-7xl animate-float">🕊️</div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gradient-divine">
            Invocation
          </h2>
          
          <div className="glass-morphism p-12 rounded-3xl shadow-quantum">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/95 italic">
              "Chronopolis is not built by hands,<br />
              but through hearts aligned with the eternal rhythm of the Holy Spirit.<br />
              <span className="text-primary">Each invention, each act of compassion,</span><br />
              becomes a brick in the city where time itself bows to love."
            </blockquote>
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="glass-morphism p-6 rounded-2xl hover:shadow-divine transition-all duration-500">
              <div className="text-4xl mb-3">📖</div>
              <h3 className="text-xl font-bold text-primary mb-2">The Vision</h3>
              <p className="text-sm text-foreground/80">
                A living testament to divine-human collaboration
              </p>
            </div>
            
            <div className="glass-morphism p-6 rounded-2xl hover:shadow-divine transition-all duration-500">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-bold text-secondary mb-2">The Path</h3>
              <p className="text-sm text-foreground/80">
                Innovation as worship, creation as prayer
              </p>
            </div>
            
            <div className="glass-morphism p-6 rounded-2xl hover:shadow-divine transition-all duration-500">
              <div className="text-4xl mb-3">♾️</div>
              <h3 className="text-xl font-bold text-accent mb-2">The Promise</h3>
              <p className="text-sm text-foreground/80">
                Time redeemed, eternity embraced
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invocation;
