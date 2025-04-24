
import { Award, Users, Shield, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: <Award className="h-12 w-12 text-gold" />,
      title: "Excelência",
      description: "Buscamos a perfeição em cada projeto, superando expectativas e entregando resultados excepcionais.",
    },
    {
      icon: <Users className="h-12 w-12 text-gold" />,
      title: "Colaboração",
      description: "Trabalhamos em parceria com nossos clientes, garantindo transparência e alinhamento em cada etapa.",
    },
    {
      icon: <Shield className="h-12 w-12 text-gold" />,
      title: "Confiança",
      description: "Construímos relacionamentos duradouros baseados em integridade, confiabilidade e resultados.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-gold" />,
      title: "Inovação",
      description: "Estamos sempre à frente, implementando tecnologias e estratégias de ponta para seu negócio.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-navy mb-4">Sobre Nós</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-medium max-w-3xl mx-auto text-lg">
            Há mais de 10 anos no mercado, somos uma agência de design e desenvolvimento digital
            especializada em transformar ideias em experiências digitais memoráveis e efetivas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg shadow-sm hover-scale">
              <div className="mb-4 flex justify-center">{value.icon}</div>
              <h3 className="text-xl text-navy font-semibold mb-3 text-center">{value.title}</h3>
              <p className="text-gray-medium text-center">{value.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-light p-8 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-navy mb-4">Nossa Missão</h3>
              <p className="text-gray-medium mb-6">
                Capacitar empresas através de soluções digitais inovadoras que impulsionem seus negócios, 
                conectem-nas com seu público e fortaleçam sua presença no mercado digital.
              </p>
              <ul className="space-y-2">
                {[
                  "Equipe multidisciplinar de especialistas",
                  "Mais de 500 projetos entregues com sucesso",
                  "Metodologias ágeis e processos eficientes",
                  "Compromisso com resultados mensuráveis"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-gold mr-2" />
                    <span className="text-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0">
              <h3 className="text-navy mb-4">Nossa Visão</h3>
              <p className="text-gray-medium mb-4">
                Ser reconhecida como referência em soluções digitais inovadoras, criando 
                experiências que transformam a maneira como as marcas se conectam com seus clientes.
              </p>
              <p className="text-gray-medium">
                Acreditamos que cada projeto é único e merece uma abordagem personalizada. 
                Nossa paixão é transformar desafios em oportunidades e criar soluções que não apenas 
                atendam, mas excedam as expectativas dos nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
