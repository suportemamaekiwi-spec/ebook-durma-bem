import React from 'react';
import { Star, Moon } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-brand-beige to-brand-cream pt-10 pb-16 px-4 md:px-8 lg:pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1">
          <div className="flex items-center justify-center md:justify-start gap-2 text-brand-oliveDark font-medium tracking-wide uppercase text-sm">
            <Moon size={16} fill="currentColor" />
            <span>Para mães de bebês de 0 a 3 anos</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-brand-dark font-serif leading-tight">
            Durma Bem, <br/>
            <span className="italic text-brand-roseDark">Mamãe e Bebê</span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-text leading-relaxed">
            Desvende os segredos para noites tranquilas e dias revigorantes. 
            Um guia acolhedor e prático para transformar a rotina de sono da sua família, 
            sem sofrimento e com muito amor.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center justify-center md:justify-start pt-4">
            <button 
              onClick={scrollToPricing}
              className="px-8 py-4 bg-brand-rose hover:bg-brand-roseDark text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Quero noites tranquilas
            </button>
            <p className="text-sm text-brand-text opacity-80 mt-2 sm:mt-0 sm:ml-4">
              <span className="flex items-center justify-center md:justify-start gap-1">
                <Star size={14} className="text-yellow-500" fill="currentColor"/>
                <Star size={14} className="text-yellow-500" fill="currentColor"/>
                <Star size={14} className="text-yellow-500" fill="currentColor"/>
                <Star size={14} className="text-yellow-500" fill="currentColor"/>
                <Star size={14} className="text-yellow-500" fill="currentColor"/>
              </span>
              +1.000 famílias ajudadas
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-96 md:w-96 md:h-[500px] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=800&auto=format&fit=crop" 
              alt="Mãe segurando bebê com carinho" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-rose/10 mix-blend-multiply"></div>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -left-4 md:bottom-10 md:-left-10 bg-white p-4 rounded-xl shadow-lg max-w-[180px]">
            <p className="font-serif text-brand-dark text-lg leading-tight">
              "Finalmente voltamos a dormir a noite toda!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
