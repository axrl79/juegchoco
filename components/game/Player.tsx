'use client';

import Image from 'next/image';

interface PlayerProps {
  y: number;
}

export function Player({ y }: PlayerProps) {
  return (
    <div
      className="absolute transition-all duration-100 will-change-transform z-20"
      style={{
        bottom: `${y}px`,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <div className="relative group">
        {/* Aura de brillo dinámico - Efecto energía */}
        <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/60 via-blue-500/40 to-transparent rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity animate-energy-glow"></div>

        {/* Sombra dinámica mejorada - Adaptativa a altura */}
        <div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/40 rounded-full blur-lg shadow-2xl transition-all"
          style={{
            width: `${96 + (y / 250) * 20}px`,
            height: `${12 + (y / 250) * 4}px`,
            opacity: 0.5 - (y / 500),
          }}
        ></div>

        {/* Personaje principal */}
        <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 drop-shadow-2xl filter brightness-110">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sogliano-9hRvRwMxLBrHSXJnUo7DncIwI5ALTb.png"
            alt="Candidato"
            fill
            className="object-contain"
            priority
          />

          {/* Efecto de brillo frontal dinámico */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Brillo de movimiento */}
          <div className="absolute -inset-3 border-2 border-cyan-400/30 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Líneas de movimiento aerodinámicas mejoradas */}
        <div className="absolute -left-8 top-1/2 w-5 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-motion-line opacity-70"></div>
        <div className="absolute -right-8 top-1/3 w-5 h-0.5 bg-gradient-to-l from-cyan-400 to-transparent animate-motion-line opacity-70" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute -left-6 top-2/3 w-4 h-0.5 bg-gradient-to-r from-blue-400 to-transparent animate-motion-line opacity-50" style={{ animationDelay: '0.2s' }}></div>

        {/* Partículas de energía al saltar */}
        <div className="absolute -bottom-6 left-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-particle-rise opacity-60"></div>
        <div className="absolute -bottom-8 right-1/4 w-2 h-2 bg-blue-300 rounded-full animate-particle-rise opacity-50" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute -bottom-5 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-particle-rise opacity-40" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}
