
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen pt-20"
      style={{
        backgroundImage: "linear-gradient(rgba(15, 42, 71, 0.85), rgba(15, 42, 71, 0.85)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-white mb-6">
            Transformando visões em soluções digitais <span className="text-gold">impactantes</span>
          </h1>
          <p className="text-gray-100 text-xl md:text-2xl mb-8 font-light">
            Planejamento estratégico, design moderno e implementação de alta qualidade para o sucesso do seu negócio digital.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-gold hover:bg-opacity-90 text-navy text-lg py-6 px-8">
              Conheça Nossos Serviços
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy text-lg py-6 px-8">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
