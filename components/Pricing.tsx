import React from 'react';
import { CheckCircle, Lock, HeartHandshake } from 'lucide-react';

const Pricing: React.FC = () => {
  // SUBSTITUA O LINK ABAIXO PELO SEU HOTLINK DE CHECKOUT DA HOTMART
  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/SEU_CODIGO_AQUI?checkoutMode=10"; 

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-brand-beige to-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-brand-rose/20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-8 md:p-12 bg-brand-cream flex flex-col justify-center">
               <span className="uppercase tracking-widest text-xs font-bold text-brand-roseDark mb-2">Oferta Especial e Acessível</span>
               <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4">Comece hoje a mudar suas noites</h2>
               
               <div className="flex items-baseline gap-2 mb-2">
                 <span className="text-lg text-gray-400 line-through">R$ 97,00</span>
                 <span className="text-4xl font-bold text-brand-oliveDark">R$ 26,47</span>
               </div>
               
               <div className="mb-6 p-3 bg-brand-rose/10 rounded-lg border border-brand-rose/20">
                 <div className="flex gap-2 items-start">
                    <HeartHandshake size={18} className="text-brand-roseDark mt-1 shrink-0" />
                    <p className="text-xs text-brand-text leading-tight italic">
                      <strong>Por que este valor?</strong> Sei como consultorias de sono são caras e inacessíveis. Passei por isso e decidi tornar este conhecimento acessível para todas as mamães.
                    </p>
                 </div>
               </div>

               <p className="text-brand-text mb-8 text-sm">Acesso imediato ao ebook completo em PDF + Bônus exclusivos.</p>
               
               <a 
                 href={HOTMART_CHECKOUT_URL}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="w-full py-4 bg-brand-rose hover:bg-brand-roseDark text-white font-bold rounded-lg shadow-md transition-colors text-lg mb-4 text-center block"
               >
                 Sim, eu quero dormir melhor!
               </a>
               
               <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                 <Lock size={12} />
                 <span>Pagamento 100% seguro</span>
               </div>
            </div>

            <div className="p-8 md:p-12">
              <h3 className="font-bold text-brand-dark mb-6 text-lg">O que você recebe:</h3>
              <ul className="space-y-4">
                {[
                  "Ebook Completo: Durma Bem, Mamãe e Bebê",
                  "Guia de Rotinas por Idade (0 a 3 anos)",
                  "Bônus: 30 Atividades Incríveis (0-24 meses)",
                  "Bônus: 40 Receitas Saudáveis",
                  "Passo a passo Método Ferber",
                  "Dicas de Ambiente e Segurança",
                  "Acesso vitalício ao material",
                  "Garantia de 7 dias"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-text text-sm">
                    <CheckCircle size={18} className="text-brand-olive shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-rose/20 rounded-full flex items-center justify-center text-brand-roseDark font-bold text-xl">7</div>
                    <div>
                        <p className="font-bold text-brand-dark text-sm">Dias de Garantia</p>
                        <p className="text-xs text-gray-500">Se não gostar, devolvemos seu dinheiro.</p>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
