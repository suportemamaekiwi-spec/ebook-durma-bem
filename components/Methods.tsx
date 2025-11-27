import React from 'react';

const Methods: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-brand-rose/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-6">
          Cada bebê é único, <br/> <span className="italic text-brand-roseDark">assim como cada mãe.</span>
        </h2>
        <p className="text-lg text-brand-text mb-10 leading-relaxed">
          Não acreditamos em fórmulas mágicas únicas. Por isso, este ebook apresenta diversas abordagens para que você encontre a que faz sentido para o seu coração e para o temperamento do seu filho.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                "Método Ferber",
                "Pick Up / Put Down",
                "Método da Cadeira",
                "Método Pantley"
            ].map((method, idx) => (
                <div key={idx} className="bg-white py-4 px-2 rounded-lg shadow-sm border border-brand-rose/20 flex items-center justify-center">
                    <span className="text-brand-dark font-medium text-sm md:text-base">{method}</span>
                </div>
            ))}
        </div>
        
        <p className="mt-8 text-sm text-brand-text opacity-80">
          Inclui tabelas progressivas e guias de intervenção para cada método.
        </p>
      </div>
    </section>
  );
};

export default Methods;
