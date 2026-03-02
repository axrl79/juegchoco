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
    }, 3500);

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 pointer-events-none ${
        show ? 'opacity-100 pointer-events-auto' : 'opacity-0'
      }`}
      onClick={() => setShow(false)}
    >
      {/* Fondo oscuro dramático con efecto cinematic */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-lg"></div>

      {/* Destellos de energía cibernética */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Tarjeta principal sofisticada */}
      <div className="relative z-50 max-w-2xl mx-4 animate-proposal-pop pointer-events-auto">
        {/* Aura brillante de energía detrás */}
        <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-40 animate-glow-pulse"></div>

        {/* Tarjeta principal */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-10 sm:p-12 md:p-16 shadow-2xl border-2 border-cyan-400/40 overflow-hidden">
          
          {/* Efecto de brillo cristalino superior */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none rounded-3xl"></div>

          {/* Líneas decorativas cibernéticas */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>

          {/* Contenido */}
          <div className="text-center space-y-6 relative z-10">
            
            {/* Encabezado mejorado */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-400 to-transparent rounded-full"></div>
                <p className="text-sm sm:text-base font-black text-cyan-400 uppercase tracking-widest drop-shadow-lg">
                  Propuesta Electoral
                </p>
                <div className="h-0.5 w-12 bg-gradient-to-l from-cyan-400 to-transparent rounded-full"></div>
              </div>
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-lg">
                PROPUESTA REVELADA
              </h2>
            </div>

            {/* Caja de contenido de propuesta - Diseño sofisticado */}
            <div className="relative group">
              {/* Fondo de resplandor */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative bg-black/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all min-h-32 flex items-center justify-center group hover:bg-black/20">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-balance leading-relaxed drop-shadow-lg tracking-wide">
                  {proposal}
                </p>
              </div>
            </div>

            {/* Iconografía profesional */}
            <div className="flex justify-center gap-8 text-5xl sm:text-6xl md:text-7xl pt-2">
              <span className="animate-bounce drop-shadow-lg" style={{ animationDelay: '0s' }}>📋</span>
              <span className="animate-rotate-360 drop-shadow-lg">⚡</span>
              <span className="animate-bounce drop-shadow-lg" style={{ animationDelay: '0.2s' }}>🎯</span>
            </div>

            {/* Información adicional */}
            <div className="pt-4 text-sm text-cyan-300/70 space-y-1">
              <p className="font-semibold drop-shadow-md">Presiona para continuar o espera</p>
            </div>

            {/* Botón de acción mejorado */}
            <div className="pt-6 flex gap-4 justify-center">
              <button
                onClick={() => setShow(false)}
                className="px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-black rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 transition-all text-base sm:text-lg md:text-xl drop-shadow-lg transform hover:scale-110 uppercase tracking-widest border-2 border-cyan-300/50"
              >
                Siguiente Propuesta →
              </button>
            </div>
          </div>

          {/* Decoración lateral izquierda - Sutil */}
          <div className="absolute -left-24 top-1/2 transform -translate-y-1/2 text-9xl opacity-5 filter brightness-75">🏛️</div>
          {/* Decoración lateral derecha - Sutil */}
          <div className="absolute -right-24 bottom-0 text-9xl opacity-5 filter brightness-75">📜</div>
        </div>
      </div>
    </div>
  );
}
