import React from 'react';
import { Gift, Utensils, Smile } from 'lucide-react';

const Bonus: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-brand-beige/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
           <span className="uppercase tracking-widest text-xs font-bold text-brand-roseDark mb-2 block">Bônus Exclusivos</span>
           <h2 className="text-3xl md:text-4xl font-serif text-brand-dark">Leve também estes presentes especiais</h2>
           <p className="text-brand-text mt-4 max-w-2xl mx-auto">
             Para tornar sua jornada ainda mais completa, preparamos dois materiais extras que vão transformar seu dia a dia.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bonus 1 */}
          <div className="bg-brand-cream border border-brand-beige rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-all group">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-brand-rose/20 rounded-lg flex items-center justify-center relative overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
               {/* Mockup visual representation */}
               <div className="absolute inset-2 border-2 border-white rounded-md flex flex-col items-center justify-center text-center p-2 bg-brand-roseDark/10">
                  <Smile size={32} className="text-brand-roseDark mb-2" />
                  <span className="font-serif font-bold text-brand-dark text-sm leading-tight">30 Atividades Incríveis</span>
                  <span className="text-[10px] uppercase mt-2 text-brand-text">0-24 Meses</span>
               </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-brand-rose text-white text-xs font-bold rounded-full mb-3 shadow-sm">Bônus #1</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">30 Atividades para Fazer com seu Bebê</h3>
              <p className="text-brand-text text-sm mb-4">
                Fortaleça o vínculo e estimule o desenvolvimento motor e cognitivo de 0 a 24 meses. Brincadeiras simples que fazem a diferença no dia a dia.
              </p>
              <ul className="text-sm text-brand-text/80 space-y-1 text-left inline-block">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-rose"></span>Fortaleça o vínculo</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-rose"></span>Estimule o desenvolvimento</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-rose"></span>Diversão garantida</li>
              </ul>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bg-brand-cream border border-brand-beige rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center hover:shadow-lg transition-all group">
            <div className="w-full md:w-1/3 aspect-[3/4] bg-brand-olive/20 rounded-lg flex items-center justify-center relative overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
               {/* Mockup visual representation */}
               <div className="absolute inset-2 border-2 border-white rounded-md flex flex-col items-center justify-center text-center p-2 bg-brand-oliveDark/10">
                  <Utensils size={32} className="text-brand-oliveDark mb-2" />
                  <span className="font-serif font-bold text-brand-dark text-sm leading-tight">40 Receitas Irresistíveis</span>
                  <span className="text-[10px] uppercase mt-2 text-brand-text">Saudáveis</span>
               </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-brand-olive text-white text-xs font-bold rounded-full mb-3 shadow-sm">Bônus #2</div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">40 Receitas Saudáveis para Bebês e Crianças</h3>
              <p className="text-brand-text text-sm mb-4">
                Acabe com a seletividade alimentar! Receitas nutritivas, fáceis e deliciosas para introdução alimentar, almoços e lanches.
              </p>
               <ul className="text-sm text-brand-text/80 space-y-1 text-left inline-block">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-olive"></span>Introdução alimentar</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-olive"></span>Lanches saudáveis</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-olive"></span>Aceitação garantida</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-brand-beige/30 rounded-xl text-center border border-brand-beige max-w-2xl mx-auto">
             <div className="flex items-center justify-center gap-2 mb-2 text-brand-oliveDark">
                 <Gift size={20} />
                 <span className="font-bold uppercase tracking-wide text-sm">Valor Total dos Bônus: R$ 59,80</span>
             </div>
             <p className="text-xl font-serif text-brand-dark">
                 Levando o ebook hoje, você recebe tudo isso <span className="font-bold text-brand-roseDark">GRATUITAMENTE</span>.
             </p>
        </div>
      </div>
    </section>
  );
};
