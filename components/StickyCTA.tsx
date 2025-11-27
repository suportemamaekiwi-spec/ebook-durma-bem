import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // SUBSTITUA O LINK ABAIXO PELO SEU HOTLINK DE CHECKOUT DA HOTMART
  const HOTMART_CHECKOUT_URL = "https://pay.hotmart.com/SEU_CODIGO_AQUI?checkoutMode=10";

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero (approx 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:hidden z-50 flex justify-between items-center gap-4">
      <div className="flex flex-col">
         <span className="text-xs text-gray-500 line-through">R$ 97,00</span>
         <span className="text-lg font-bold text-brand-oliveDark">R$ 26,47</span>
      </div>
      <a 
        href={HOTMART_CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-3 bg-brand-rose text-white font-bold rounded-lg shadow-sm text-center"
      >
        Comprar Agora
      </a>
    </div>
  );
};

export default StickyCTA;
