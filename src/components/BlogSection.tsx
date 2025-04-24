
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      title: "Tendências de design digital para 2023",
      excerpt:
        "Descubra as principais tendências e técnicas que estão transformando o design de interfaces e a experiência do usuário.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "15 de abril, 2023",
      author: "Mariana Santos",
      category: "Design",
    },
    {
      title: "Como otimizar seu site para mecanismos de busca",
      excerpt:
        "Aprenda estratégias eficientes para melhorar o posicionamento do seu site nos resultados de buscas e atrair mais visitantes.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "28 de março, 2023",
      author: "Paulo Oliveira",
      category: "Marketing",
    },
    {
      title: "A importância da acessibilidade web no design moderno",
      excerpt:
        "Entenda como criar sites e aplicações inclusivas que atendam a todos os usuários, independentemente de suas limitações.",
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      date: "10 de fevereiro, 2023",
      author: "Carla Rodrigues",
      category: "Desenvolvimento",
    },
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <h2 className="text-navy mb-4">Blog e Insights</h2>
            <div className="w-20 h-1 bg-gold mb-6"></div>
            <p className="text-gray-medium max-w-2xl text-lg">
              Compartilhamos conhecimento e tendências sobre design, tecnologia e
              estratégias digitais para manter você sempre atualizado.
            </p>
          </div>
          <a href="#" className="mt-6 md:mt-0 text-gold font-medium text-lg flex items-center hover:underline">
            Ver todos os artigos
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md hover-scale">
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center mb-3">
                  <span className="bg-navy text-white text-xs px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl text-navy font-semibold mb-3">{post.title}</h3>
                <p className="text-gray-medium mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-gray-medium text-sm mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
