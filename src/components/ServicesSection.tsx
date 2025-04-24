
import { Briefcase, Image, Code, Award, BarChart, Settings, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Briefcase className="h-10 w-10 text-gold" />,
      title: "Consultoria Estratégica",
      description:
        "Análise de mercado, definição de posicionamento e estratégias digitais personalizadas para seu negócio.",
    },
    {
      icon: <Image className="h-10 w-10 text-gold" />,
      title: "Design UI/UX",
      description:
        "Criação de interfaces intuitivas e atraentes que encantam seus usuários e refletem a identidade da sua marca.",
    },
    {
      icon: <Code className="h-10 w-10 text-gold" />,
      title: "Desenvolvimento Web",
      description:
        "Websites, e-commerces e aplicações web responsivas, rápidas e otimizadas para todos os dispositivos.",
    },
    {
      icon: <Award className="h-10 w-10 text-gold" />,
      title: "Identidade Visual",
      description:
        "Criação de logotipos e sistemas visuais que fortalecem e comunicam a essência da sua marca.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-gold" />,
      title: "Marketing Digital",
      description:
        "Estratégias de SEO, mídias sociais e campanhas pagas para ampliar sua presença online e gerar leads.",
    },
    {
      icon: <Settings className="h-10 w-10 text-gold" />,
      title: "Suporte e Manutenção",
      description:
        "Atualizações de segurança, otimizações de performance e suporte técnico para seus projetos digitais.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-navy mb-4">Nossos Serviços</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-medium max-w-3xl mx-auto text-lg">
            Oferecemos soluções digitais completas para empresas que buscam destaque no
            mercado e conexão genuína com seu público-alvo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover-scale group"
            >
              <div className="mb-5">{service.icon}</div>
              <h3 className="text-2xl text-navy font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-medium mb-4">{service.description}</p>
              <a href="#" className="text-gold font-medium flex items-center group-hover:underline">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-navy hover:bg-opacity-90 text-white px-8 py-6 text-lg">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
