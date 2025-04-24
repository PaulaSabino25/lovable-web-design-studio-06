
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      position: "CEO, TechVision",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      quote:
        "A parceria com a StudioPro transformou completamente nossa presença digital. O novo site não apenas melhorou nossa imagem como aumentou significativamente nossas conversões. Uma equipe extraordinária!",
      rating: 5,
    },
    {
      name: "Ricardo Mendes",
      position: "Diretor de Marketing, GloboTech",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      quote:
        "Encontramos na StudioPro mais que um fornecedor, mas um verdadeiro parceiro estratégico. A equipe entendeu perfeitamente nossas necessidades e entregou além das expectativas.",
      rating: 5,
    },
    {
      name: "Camila Torres",
      position: "Fundadora, Artesana",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80",
      quote:
        "Como uma pequena empresa, precisávamos de uma solução que não apenas parecesse profissional, mas que também se encaixasse em nosso orçamento. A StudioPro entregou isso e muito mais.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="section-padding bg-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-white mb-4">O Que Dizem Nossos Clientes</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-100 max-w-3xl mx-auto text-lg opacity-80">
            Trabalhamos com empresas de diversos segmentos e portes, entregando soluções
            que impulsionam resultados reais. Confira o que dizem sobre nós.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item transition-all duration-500 ${
                index === currentIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute top-0 left-0 right-0 translate-x-20"
              }`}
            >
              <div className="bg-white text-navy rounded-lg shadow-lg p-8 md:p-12 mb-8">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold" fill="#D4AF37" />
                  ))}
                </div>
                <p className="text-gray-dark text-lg md:text-xl mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-center md:text-left">
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-gray-300">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-12 space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="border-gold text-gold hover:bg-gold hover:text-navy rounded-full"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-gold text-gold hover:bg-gold hover:text-navy rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
