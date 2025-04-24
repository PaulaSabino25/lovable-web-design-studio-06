
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to your server
    console.log("Form submitted:", formData);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding bg-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-navy mb-4">Entre em Contato</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-gray-medium max-w-3xl mx-auto text-lg">
            Estamos prontos para ajudar seu negócio a alcançar novos patamares.
            Entre em contato e vamos conversar sobre seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-dark font-medium mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="border-gray-200 focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-dark font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu.email@exemplo.com"
                    required
                    className="border-gray-200 focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-dark font-medium mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="border-gray-200 focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-dark font-medium mb-2">
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Assunto da mensagem"
                    required
                    className="border-gray-200 focus:border-gold"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-gray-dark font-medium mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Digite sua mensagem aqui..."
                    required
                    rows={5}
                    className="border-gray-200 focus:border-gold"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="mt-6 bg-navy hover:bg-opacity-90 text-white px-8 py-6"
              >
                Enviar Mensagem
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="bg-navy rounded-lg shadow-md text-white p-8">
            <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gold/20 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telefone</h4>
                  <p className="text-gray-300">+55 (11) 3456-7890</p>
                  <p className="text-gray-300">+55 (11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/20 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-300">contato@studiopro.com.br</p>
                  <p className="text-gray-300">comercial@studiopro.com.br</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gold/20 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="text-gray-300">
                    Av. Paulista, 1000 - Bela Vista
                    <br />
                    São Paulo - SP, 01310-000
                    <br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Map placeholder - In a real project you'd use Google Maps or another provider */}
            <div className="h-48 bg-gray-800 rounded mt-8 flex items-center justify-center">
              <p className="text-gray-400">Mapa interativo aqui</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
