
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const UrgencyBar: React.FC = () => {
  // Estado para o tempo em segundos (15 minutos = 900 segundos)
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-red-600 text-white py-2 px-4 z-[60] shadow-md flex justify-center items-center gap-2 text-sm md:text-base font-bold animate-pulse">
      <Clock size={18} />
      <span>OFERTA RELÂMPAGO: O preço sobe em {formatTime(timeLeft)}</span>
    </div>
  );
};

export default UrgencyBar;
