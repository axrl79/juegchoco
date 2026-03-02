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
        className={`relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 cursor-pointer transition-all active:scale-95 group duration-200 ${
          isShaking ? 'animate-bounce' : ''
        }`}
        onClick={onHit}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Aura brillante exterior intensa - Más intenso */}
        <div className="absolute -inset-6 bg-gradient-to-br from-yellow-200 via-yellow-300 to-orange-400 rounded-lg blur-3xl opacity-80 group-hover:opacity-100 transition-opacity animate-pulse"></div>

        {/* Aura secundaria más cercana */}
        <div className="absolute -inset-3 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-lg blur-2xl opacity-60 group-hover:opacity-80"></div>

        {/* Cubo Mario principal - 3D Estilo Clásico */}
        <div className="w-full h-full bg-gradient-to-b from-yellow-300 via-yellow-400 to-yellow-600 rounded-lg relative shadow-2xl border-4 border-red-600 hover:shadow-yellow-400/80 transition-all group-hover:scale-110">
          {/* Bordes rojo Mario Bros */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-red-700"></div>
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-800"></div>
          <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-red-700"></div>
          <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-red-800"></div>

          {/* Efecto 3D con bloques */}
          <div className="absolute inset-1 border-2 border-yellow-200 rounded-lg opacity-70"></div>
          
          {/* Punto 3D superior izquierdo */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-orange-300 rounded-full opacity-80"></div>
          <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-yellow-200 rounded-full opacity-60"></div>

          {/* Ojos del cubo - Grandes y expresivos */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4">
            {/* Ojo izquierdo */}
            <div className="relative group/eye">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-black rounded-full shadow-lg group-hover/eye:scale-125 transition-transform animate-pulse"></div>
              <div className="absolute inset-1 bg-white/80 rounded-full"></div>
              <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/50 rounded-full"></div>
            </div>
            {/* Ojo derecho */}
            <div className="relative group/eye">
              <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-black rounded-full shadow-lg group-hover/eye:scale-125 transition-transform animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute inset-1 bg-white/80 rounded-full"></div>
              <div className="absolute bottom-0.5 right-0.5 w-1.5 h-1.5 bg-black rounded-full"></div>
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/50 rounded-full"></div>
            </div>
          </div>

          {/* Boca sonriente animada - Roja */}
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2">
            <svg viewBox="0 0 24 12" className="w-8 h-4 sm:w-10 sm:h-5 md:w-12 md:h-6 stroke-red-700 stroke-2.5 fill-none drop-shadow-md">
              <path d="M 2 6 Q 12 10 22 6" strokeLinecap="round" />
            </svg>
          </div>

          {/* Brillo superior con gradiente */}
          <div className="absolute top-0 left-1/4 w-1/3 h-1/2 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-lg"></div>

          {/* Signo de interrogación flotante - Grande */}
          <div className="absolute -top-6 right-0 text-4xl sm:text-5xl md:text-6xl font-black text-white drop-shadow-lg filter brightness-110 animate-bounce" style={{ animationDelay: '0.2s' }}>
            ?
          </div>

          {/* Brillo de esquina derecha */}
          <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-orange-200 rounded-full opacity-70 shadow-md"></div>
        </div>

        {/* Sombra dinámica debajo - Más oscura */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 md:w-40 h-3 sm:h-4 bg-black/40 rounded-full blur-xl group-hover:shadow-2xl transition-shadow"></div>

        {/* Partículas de brillo al pasar el mouse */}
        {isHovered && (
          <>
            <div className="absolute top-0 right-0 w-2 h-2 bg-yellow-200 rounded-full animate-float-up"></div>
            <div className="absolute top-1/2 left-0 w-2 h-2 bg-yellow-300 rounded-full animate-float-up" style={{ animationDelay: '0.1s' }}></div>
            <div className="absolute bottom-0 right-1/4 w-1.5 h-1.5 bg-orange-200 rounded-full animate-float-up" style={{ animationDelay: '0.2s' }}></div>
          </>
        )}
      </div>
    </div>
  );
}
