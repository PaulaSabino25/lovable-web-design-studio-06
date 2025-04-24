
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-navy font-playfair font-bold text-2xl">
            Studio<span className="text-gold">Pro</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-navy hover:text-gold transition-colors font-medium">
            Home
          </a>
          <a href="#about" className="text-navy hover:text-gold transition-colors font-medium">
            Sobre
          </a>
          <a href="#services" className="text-navy hover:text-gold transition-colors font-medium">
            Serviços
          </a>
          <a href="#testimonials" className="text-navy hover:text-gold transition-colors font-medium">
            Depoimentos
          </a>
          <a href="#blog" className="text-navy hover:text-gold transition-colors font-medium">
            Blog
          </a>
          <a href="#contact" className="text-navy hover:text-gold transition-colors font-medium">
            Contato
          </a>
          <Button className="bg-navy hover:bg-opacity-90 text-white ml-4">
            Solicitar Orçamento
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-colors font-medium py-2"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-colors font-medium py-2"
            >
              Sobre
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-colors font-medium py-2"
            >
              Serviços
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-colors font-medium py-2"
            >
              Depoimentos
            </a>
            <a
              href="#blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-colors font-medium py-2"
            >
              Blog
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-colors font-medium py-2"
            >
              Contato
            </a>
            <Button className="bg-navy hover:bg-opacity-90 text-white w-full">
              Solicitar Orçamento
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
