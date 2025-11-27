import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Para qual idade serve este guia?",
      answer: "O ebook abrange estratégias e rotinas detalhadas para bebês de 0 meses até crianças de 3 anos de idade."
    },
    {
      question: "Por que o valor é tão baixo?",
      answer: "Eu sofri muito com a privação de sono e, na época, as consultorias eram financeiramente inviáveis para mim. Minha missão é democratizar esse conhecimento para que nenhuma mãe precise passar pelo que passei por falta de recursos."
    },
    {
      question: "Preciso deixar meu bebê chorando?",
      answer: "Não necessariamente. Apresentamos diversos métodos, desde os mais gentis (sem choro) até métodos de espera controlada. Você escolhe o que melhor se adapta à sua filosofia."
    },
    {
      question: "Como recebo o ebook?",
      answer: "Assim que o pagamento for confirmado, você receberá um e-mail com o link para baixar o arquivo PDF imediatamente."
    },
    {
      question: "Serve para bebês que mamam no peito?",
      answer: "Sim! O guia respeita a amamentação e oferece estratégias para desassociar o sono da sucção gentilmente, se esse for seu objetivo."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-serif text-center text-brand-dark mb-10">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-brand-beige rounded-lg overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left bg-brand-cream hover:bg-brand-beige/50 transition-colors"
      >
        <span className="font-medium text-brand-dark">{question}</span>
        {isOpen ? <ChevronUp size={20} className="text-brand-rose" /> : <ChevronDown size={20} className="text-brand-text" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white text-brand-text text-sm leading-relaxed border-t border-brand-beige">
          {answer}
        </div>
      )}
    </div>
  );
}

export default FAQ;
