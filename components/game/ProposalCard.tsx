'use client';

import { useEffect, useState } from 'react';

interface ProposalCardProps {
  proposal: string;
  onAnimationEnd: () => void;
}

export function ProposalCard({ proposal, onAnimationEnd }: ProposalCardProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onAnimationEnd, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : 'opacity-0'
      }`}
      onClick={() => setShow(false)}
    >
      {/* Fondo oscuro con efecto más dramático */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30 backdrop-blur-md"></div>

      {/* Destellos de luz */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Tarjeta principal */}
      <div className="relative z-50 max-w-xl mx-4 animate-proposal-pop pointer-events-auto">
        {/* Aura brillante detrás */}
        <div className="absolute -inset-6 bg-gradient-to-br from-violet-500 via-purple-500 to-orange-500 rounded-2xl blur-2xl opacity-30 animate-glow-pulse"></div>

        {/* Tarjeta */}
        <div className="relative bg-gradient-to-br from-violet-600 via-purple-600 to-purple-700 rounded-2xl p-8 sm:p-10 shadow-2xl border-4 border-violet-400/50 overflow-hidden">
          {/* Efecto de brillo interno */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none rounded-2xl"></div>

          {/* Decoración superior - Triángulo brillante */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="text-4xl sm:text-5xl animate-bounce drop-shadow-lg">⭐</div>
            <div className="text-3xl sm:text-4xl animate-rotate-360">✨</div>
            <div className="text-4xl sm:text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>⭐</div>
          </div>

          {/* Contenido */}
          <div className="text-center pt-6 space-y-5 relative z-10">
            {/* Número de propuesta */}
            <div className="flex items-center justify-center gap-2">
              <div className="h-1 w-8 bg-gradient-to-r from-orange-300 to-transparent rounded-full"></div>
              <h2 className="text-lg sm:text-xl font-black text-white text-balance tracking-wider">
                NUEVA PROPUESTA
              </h2>
              <div className="h-1 w-8 bg-gradient-to-l from-orange-300 to-transparent rounded-full"></div>
            </div>

            {/* Caja de propuesta - mejorada */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 sm:p-6 border-2 border-white/30 min-h-24 flex items-center justify-center group hover:bg-white/15 transition-all">
              <p className="text-base sm:text-lg font-bold text-white text-balance leading-relaxed drop-shadow-md">
                {proposal}
              </p>
            </div>

            {/* Iconos animados */}
            <div className="flex justify-center gap-6 text-5xl sm:text-6xl">
              <span className="animate-bounce-infinite drop-shadow-lg">📋</span>
              <span className="animate-rotate-360 drop-shadow-lg">⚡</span>
              <span className="animate-bounce-infinite drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
                🎯
              </span>
            </div>

            {/* Botón mejorado */}
            <div className="pt-4 flex gap-3 justify-center">
              <button
                onClick={() => setShow(false)}
                className="px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 transition-all text-base sm:text-lg drop-shadow-lg transform hover:scale-105"
              >
                Siguiente →
              </button>
            </div>
          </div>

          {/* Decoración lateral izquierda */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2 text-8xl opacity-10">📜</div>
          {/* Decoración lateral derecha */}
          <div className="absolute -right-20 bottom-0 text-8xl opacity-10">🏛️</div>
        </div>
      </div>
    </div>
  );
}
