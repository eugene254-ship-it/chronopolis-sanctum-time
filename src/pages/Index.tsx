import Hero from "@/components/Hero";
import FoundationalPillars from "@/components/FoundationalPillars";
import EngineeringManifestation from "@/components/EngineeringManifestation";
import HolySpiritEcosystem from "@/components/HolySpiritEcosystem";
import Mission from "@/components/Mission";
import Synthesis from "@/components/Synthesis";
import Invocation from "@/components/Invocation";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <FoundationalPillars />
      <EngineeringManifestation />
      <HolySpiritEcosystem />
      <Mission />
      <Synthesis />
      <Invocation />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            Chronopolis: The Sanctum of Living Time
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2">
            Where Divine Intelligence, Human Innovation, and the Continuum of Creation Converge
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
