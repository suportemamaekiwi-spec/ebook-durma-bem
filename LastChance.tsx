
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const LastChance: React.FC = () => {
  // SUBSTITUA O LINK ABAIXO PELO SEU HOTLINK DE CHECKOUT DA HOTMART
  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/SEU_CODIGO_AQUI?checkoutMode=10";

  return (
    <section className="py-16 px-4 bg-brand-dark text-white text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <div className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
            <AlertTriangle size={14} />
            Última Chamada
        </div>
        
        <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
          Não deixe para depois.<br/>
          <span className="text-brand-rose">Sua sanidade não tem preço.</span>
        </h2>
        
        <p className="text-gray-300 text-lg">
          Você pode continuar acordando 10 vezes por noite e se sentindo exausta, ou pode tomar uma decisão agora por apenas <span className="text-white font-bold">R$ 26,47</span>. O risco é todo nosso com a garantia de 7 dias.
        </p>

        <a 
          href={HOTMART_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-xl flex flex-col items-center leading-none mt-4"
        >
          <span>QUERO DORMIR AGORA</span>
          <span className="text-xs font-normal opacity-80 mt-1 uppercase tracking-wide">Acesso Imediato • Compra Segura</span>
        </a>
      </div>
    </section>
  );
};

export default LastChance;
