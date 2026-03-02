'use client';

import { useState } from 'react';

interface MarioCubeProps {
  onHit: () => void;
  isShaking: boolean;
}

export function MarioCube({ onHit, isShaking }: MarioCubeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="absolute z-40" style={{ bottom: '120px', left: '50%', transform: 'translateX(-50%)' }}>
      <div
        className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 cursor-pointer transition-all active:scale-95 group duration-200 ${
          isShaking ? 'animate-impact-shake' : 'animate-document-float'
        }`}
        onClick={onHit}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Aura brillante exterior - Efecto flotante */}
        <div className="absolute -inset-10 bg-linear-to-br from-cyan-300/50 via-blue-400/30 to-purple-500/20 rounded-3xl blur-3xl opacity-75 group-hover:opacity-100 transition-opacity animate-cyber-pulse"></div>

        {/* Aura secundaria */}
        <div className="absolute -inset-6 bg-linear-to-br from-cyan-400/40 to-blue-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 animate-color-shift"></div>

        {/* Cubo principal - Limpio y flotante */}
        <div className="w-full h-full bg-linear-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl relative shadow-2xl border-2 border-cyan-300/60 hover:shadow-cyan-400/80 transition-all group-hover:scale-110 overflow-hidden backdrop-blur-sm">
          
          {/* Efecto de cristal sutil */}
          <div className="absolute inset-0 bg-linear-to-tr from-white/0 via-white/15 to-white/25 rounded-3xl"></div>
          
          {/* Grid cibernético muy sutil */}
          <div className="absolute inset-0 opacity-10 rounded-3xl" style={{
            backgroundImage: 'linear-gradient(90deg, rgba(34,211,238,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(34,211,238,0.05) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>

          {/* Centro: Icono flotante */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <div className="text-6xl sm:text-8xl md:text-9xl font-black text-white drop-shadow-2xl filter brightness-125 animate-document-float">
              📋
            </div>
            
            <div className="text-xs sm:text-sm md:text-base font-black text-white/90 uppercase tracking-wider drop-shadow-lg opacity-80 animate-pulse">
              Propuestas
            </div>
          </div>

          {/* Indicador de interactividad */}
          <div className="absolute -top-10 right-6 text-5xl sm:text-6xl md:text-7xl font-black text-cyan-300 drop-shadow-lg filter brightness-125 animate-interaction-hint">
            ✨
          </div>
        </div>

        {/* Sombra dinámica mejorada */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-40 sm:w-48 md:w-56 h-5 sm:h-6 bg-black/30 rounded-full blur-xl group-hover:shadow-2xl transition-shadow"></div>

        {/* Partículas flotantes de energía */}
        {isHovered && (
          <>
            <div className="absolute -top-8 right-1/4 w-3 h-3 bg-cyan-300 rounded-full animate-float-up"></div>
            <div className="absolute -top-10 left-1/4 w-2.5 h-2.5 bg-blue-300 rounded-full animate-float-up" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute -top-6 right-1/3 w-2 h-2 bg-purple-300 rounded-full animate-float-up" style={{ animationDelay: '0.2s' }}></div>
            
            <div className="absolute top-1/2 -right-6 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-float-right"></div>
            <div className="absolute top-1/3 -left-6 w-2 h-2 bg-blue-400 rounded-full animate-float-left"></div>
          </>
        )}

        {/* Anillo de interactividad */}
        {isHovered && (
          <div className="absolute inset-0 rounded-3xl border-2 border-cyan-300/50 animate-ping-slow"></div>
        )}
      </div>
    </div>
  );
}
