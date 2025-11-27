import React from 'react';
import { Clock, BatteryWarning, Frown, HelpCircle } from 'lucide-react';

const PainPoints: React.FC = () => {
  const points = [
    {
      icon: <Clock size={32} className="text-brand-roseDark" />,
      title: "Despertares Constantes",
      text: "Seu bebê acorda várias vezes na madrugada e só volta a dormir com muito esforço, peito ou colo."
    },
    {
      icon: <BatteryWarning size={32} className="text-brand-roseDark" />,
      title: "Exaustão Materna",
      text: "Você se sente drenada, irritada e sem energia para aproveitar a maternidade como sonhou."
    },
    {
      icon: <Frown size={32} className="text-brand-roseDark" />,
      title: "Sonecas Curtas",
      text: "Durante o dia, o bebê tira sonecas de 20 minutos e passa o resto do tempo irritado e choroso."
    },
    {
      icon: <HelpCircle size={32} className="text-brand-roseDark" />,
      title: "Sem Rotina",
      text: "Cada dia é uma surpresa. Você não sabe a hora que ele vai dormir ou acordar, gerando ansiedade."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center font-serif text-brand-dark mb-4">
          Você se identifica com isso?
        </h2>
        <p className="text-center text-brand-text mb-12 max-w-2xl mx-auto">
          A maternidade é maravilhosa, mas a privação de sono pode transformar o sonho em um desafio exaustivo. Você não está sozinha.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-brand-cream hover:shadow-md transition-shadow">
              <div className="mb-4 p-3 bg-brand-rose/20 rounded-full">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2 font-serif">{point.title}</h3>
              <p className="text-sm text-brand-text leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
