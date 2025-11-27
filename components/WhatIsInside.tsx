import React from 'react';
import { BookOpen, Moon, Sun, Layout, Heart } from 'lucide-react';

const WhatIsInside: React.FC = () => {
  const chapters = [
    {
      id: "I",
      title: "A Importância do Sono",
      desc: "Entenda o impacto do sono no desenvolvimento cerebral do bebê e na saúde mental da mãe.",
      icon: <Heart size={24} />
    },
    {
      id: "II",
      title: "O Ambiente Perfeito",
      desc: "Temperatura, ruído branco, iluminação e segurança. Como preparar o quarto para o sucesso.",
      icon: <Moon size={24} />
    },
    {
      id: "III",
      title: "Estabelecendo a Rotina",
      desc: "Ajuste de janelas de sono, sinais de cansaço e o ritual noturno ideal.",
      icon: <Sun size={24} />
    },
    {
      id: "IV",
      title: "Estratégias de Sono",
      desc: "Lidando com associações (ninar, peito, colo) e como ensinar autonomia com gentileza.",
      icon: <Layout size={24} />
    },
    {
      id: "V",
      title: "Métodos de Ensino",
      desc: "Passo a passo de métodos renomados para você escolher o que se adapta à sua família.",
      icon: <BookOpen size={24} />
    },
    {
      id: "VI",
      title: "Bônus Exclusivo",
      desc: "Guia prático do Método Ferber passo a passo para aplicação imediata.",
      icon: <StarIcon />
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-roseDark font-bold tracking-widest text-sm uppercase">Conteúdo Completo</span>
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mt-2">O que você vai aprender</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="bg-brand-cream border border-brand-beige p-8 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <span className="text-5xl font-serif text-brand-beige font-bold opacity-50">{chapter.id}</span>
                <div className="text-brand-oliveDark p-2 bg-brand-olive/10 rounded-lg">
                  {chapter.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{chapter.title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{chapter.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
)

export default WhatIsInside;
