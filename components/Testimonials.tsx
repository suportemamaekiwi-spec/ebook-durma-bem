import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Juliana M.",
      baby: "Mãe do Theo, 8 meses",
      text: "Eu achava que nunca mais ia dormir. Aplicamos a rotina sugerida no capítulo 3 e em uma semana o Theo parou de acordar de hora em hora. Obrigada por devolver minha sanidade!",
      image: "https://picsum.photos/id/64/100/100"
    },
    {
      name: "Fernanda S.",
      baby: "Mãe da Lara, 2 anos",
      text: "A transição para a cama estava um pesadelo. As dicas de 'conforto e segurança' mudaram tudo. O ebook é lindo, fácil de ler e muito acolhedor.",
      image: "https://picsum.photos/id/65/100/100"
    },
    {
      name: "Carla R.",
      baby: "Mãe de gêmeos, 5 meses",
      text: "Direto ao ponto. Sem enrolação. Gostei muito da parte sobre o ambiente de sono e as janelas de sono por idade. Salvou minhas sonecas!",
      image: "https://picsum.photos/id/338/100/100"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-serif text-brand-dark mb-12">
          Histórias de noites transformadas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-brand-cream p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-brand-rose">
                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-brand-text text-sm mb-6 italic">"{review.text}"</p>
              <h4 className="font-bold text-brand-dark">{review.name}</h4>
              <span className="text-xs text-brand-oliveDark font-medium">{review.baby}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
