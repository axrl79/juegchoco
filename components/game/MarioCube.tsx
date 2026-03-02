'use client';

import { useState } from 'react';

interface MarioCubeProps {
  onHit: () => void;
  isShaking: boolean;
}

export function MarioCube({ onHit, isShaking }: MarioCubeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 z-40">
      <div
        className={`relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 cursor-pointer transition-all active:scale-95 group duration-200 ${
          isShaking ? 'animate-impact-shake' : ''
        }`}
        onClick={onHit}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Aura brillante exterior - Efecto energía cibernética */}
        <div className="absolute -inset-8 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity animate-cyber-pulse"></div>

        {/* Aura secundaria más cercana */}
        <div className="absolute -inset-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl blur-2xl opacity-60 group-hover:opacity-80 animate-color-shift"></div>

        {/* Cubo principal sofisticado - Estilo moderno */}
        <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-2xl relative shadow-2xl border-2 border-cyan-300/60 hover:shadow-cyan-400/80 transition-all group-hover:scale-110 overflow-hidden">
          
          {/* Efecto de cristal/vidrio */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/15 to-white/30 rounded-2xl"></div>
          
          {/* Grid de líneas cibernéticas */}
          <div className="absolute inset-0 opacity-30 rounded-2xl" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(34,211,238,0.1) 1px, transparent 1px), linear-gradient(0deg, rgba(34,211,238,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>

          {/* Triángulo superior izquierdo - Decorativo */}
          <div className="absolute top-2 left-2 w-3 h-3 bg-cyan-200/80 rounded-full animate-pulse shadow-lg"></div>

          {/* Centro: Símbolo de propuestas - Documento/Propuesta */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            {/* Icono de documento mejorado */}
            <div className="text-5xl sm:text-7xl md:text-8xl font-black text-white drop-shadow-2xl filter brightness-125 animate-document-float">
              📋
            </div>
            
            {/* Texto "PROPUESTAS" animado */}
            <div className="text-xs sm:text-sm md:text-base font-black text-white uppercase tracking-wider drop-shadow-lg opacity-90 animate-pulse">
              PROPUESTAS
            </div>
          </div>

          {/* Brillo superior derecha */}
          <div className="absolute top-1 right-2 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-white/60 to-cyan-200/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"></div>

          {/* Signo pulsante - Interactividad */}
          <div className="absolute -top-8 right-4 text-5xl sm:text-6xl md:text-7xl font-black text-cyan-300 drop-shadow-lg filter brightness-125 animate-interaction-hint">
            ⚡
          </div>
        </div>

        {/* Sombra dinámica mejorada - Profundidad */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-32 sm:w-40 md:w-48 h-4 sm:h-5 bg-black/35 rounded-full blur-xl group-hover:shadow-2xl transition-shadow"></div>

        {/* Partículas de energía al interactuar */}
        {isHovered && (
          <>
            {/* Partículas superiores */}
            <div className="absolute -top-6 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-float-up"></div>
            <div className="absolute -top-8 left-1/4 w-2.5 h-2.5 bg-blue-300 rounded-full animate-float-up" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute -top-4 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float-up" style={{ animationDelay: '0.2s' }}></div>
            
            {/* Partículas laterales */}
            <div className="absolute top-1/2 -right-4 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-float-right"></div>
            <div className="absolute top-1/3 -left-5 w-2 h-2 bg-blue-400 rounded-full animate-float-left"></div>
          </>
        )}

        {/* Anillo de interactividad */}
        {isHovered && (
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-300/50 animate-ping-slow"></div>
        )}
      </div>
    </div>
  );
}
