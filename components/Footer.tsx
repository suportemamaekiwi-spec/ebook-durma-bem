import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-serif text-xl mb-2">Durma Bem, Mamãe e Bebê</h3>
          <p className="text-gray-400 text-sm">Cuidando do sono da sua família com amor.</p>
        </div>
        
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
        
        <div className="text-xs text-gray-500 text-center md:text-right">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
