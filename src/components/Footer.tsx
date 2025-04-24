
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-playfair font-bold mb-6">
              Studio<span className="text-gold">Pro</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Transformamos ideias em experiências digitais impactantes, conectando marcas ao seu público com soluções inovadoras e resultados mensuráveis.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-gold transition-colors duration-300 text-white p-2 rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gold transition-colors duration-300 text-white p-2 rounded-full"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gold transition-colors duration-300 text-white p-2 rounded-full"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-gold transition-colors duration-300 text-white p-2 rounded-full"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-300 hover:text-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-gold transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-gold transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-gold transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Design UI/UX
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Desenvolvimento Web
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Identidade Visual
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Consultoria Estratégica
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Suporte e Manutenção
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-gray-300">+55 (11) 3456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold mr-3 mt-0.5" />
                <span className="text-gray-300">contato@studiopro.com.br</span>
              </li>
              <li>
                <a href="#" className="inline-block mt-4 border border-gold text-gold hover:bg-gold hover:text-navy transition-colors px-4 py-2 rounded">
                  Solicitar Orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} StudioPro. Todos os direitos reservados.
            </p>
            <div className="flex mt-4 md:mt-0 space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold text-sm">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-gold text-sm">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
