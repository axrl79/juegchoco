'use client';

import Image from 'next/image';

interface PlayerProps {
  y: number;
  onJump?: () => void;
}

export function Player({ y, onJump }: PlayerProps) {
  return (
    <div
      className="absolute transition-all duration-75 will-change-transform z-40 cursor-pointer"
      style={{
        bottom: `${y}px`,
        left: '50%',
        transform: 'translateX(-50%)',
      }}
      onClick={() => onJump?.()}
    >
      <div className="relative group">
        {/* Aura de brillo dinámico - Efecto energía */}
        <div className="absolute -inset-8 bg-linear-to-br from-cyan-400/60 via-blue-500/40 to-transparent rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity animate-energy-glow"></div>

        {/* Sombra dinámica adaptativa */}
        <div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-black/40 rounded-full blur-lg shadow-2xl transition-all"
          style={{
            width: `${120 + (y / 250) * 30}px`,
            height: `${16 + (y / 250) * 6}px`,
            opacity: Math.max(0.3 - (y / 400), 0.1),
          }}
        ></div>

        {/* Personaje principal - AUMENTADO */}
        <div className="relative w-40 h-56 sm:w-48 sm:h-64 md:w-56 md:h-72 drop-shadow-2xl filter brightness-110">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sogliano-9hRvRwMxLBrHSXJnUo7DncIwI5ALTb.png"
            alt="Candidato"
            fill
            className="object-contain"
            priority
          />

          {/* Efecto de brillo frontal dinámico */}
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-white/20 to-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>

          {/* Brillo de movimiento */}
          <div className="absolute -inset-4 border-2 border-cyan-400/30 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Líneas de movimiento aerodinámicas */}
        <div className="absolute -left-10 top-1/2 w-6 h-0.5 bg-linear-to-r from-cyan-400 to-transparent animate-motion-line opacity-70"></div>
        <div className="absolute -right-10 top-1/3 w-6 h-0.5 bg-linear-to-l from-cyan-400 to-transparent animate-motion-line opacity-70" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute -left-8 top-2/3 w-5 h-0.5 bg-linear-to-r from-blue-400 to-transparent animate-motion-line opacity-50" style={{ animationDelay: '0.2s' }}></div>

        {/* Partículas de energía */}
        <div className="absolute -bottom-8 left-1/4 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-particle-rise opacity-60"></div>
        <div className="absolute -bottom-10 right-1/4 w-2.5 h-2.5 bg-blue-300 rounded-full animate-particle-rise opacity-50" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute -bottom-6 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-particle-rise opacity-40" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}
