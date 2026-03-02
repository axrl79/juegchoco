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
        {/* Aura de brillo detrás del personaje */}
        <div className="absolute -inset-4 bg-gradient-to-br from-purple-400/50 via-pink-400/30 to-transparent rounded-full blur-2xl opacity-70 group-hover:opacity-100 transition-opacity animate-pulse"></div>

        {/* Sombra dinámica mejorada */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 sm:w-28 h-3 bg-black/35 rounded-full blur-md shadow-lg"></div>

        {/* Personaje principal */}
        <div className="relative w-24 h-32 sm:w-28 sm:h-36 md:w-32 md:h-40 drop-shadow-2xl">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sogliano-9hRvRwMxLBrHSXJnUo7DncIwI5ALTb.png"
            alt="Choco Sogliano"
            fill
            className="object-contain filter brightness-125 drop-shadow-xl"
            priority
          />

          {/* Efecto de brillo frontal mejorado */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/15 to-white/25 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>

        {/* Líneas de movimiento cuando está saltando - mejorado */}
        <div className="absolute -left-6 top-1/2 w-4 h-0.5 bg-gradient-to-r from-purple-400 to-transparent animate-float-up opacity-50"></div>
        <div className="absolute -right-6 top-1/3 w-4 h-0.5 bg-gradient-to-l from-purple-400 to-transparent animate-float-up opacity-50" style={{ animationDelay: '0.1s' }}></div>
        <div className="absolute -left-4 top-2/3 w-3 h-0.5 bg-gradient-to-r from-pink-400 to-transparent animate-float-up opacity-40" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}
