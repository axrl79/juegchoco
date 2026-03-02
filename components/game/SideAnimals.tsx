'use client';

export function SideAnimals() {
  return (
    <>
      {/* Gato izquierda */}
      <div className="fixed bottom-20 left-1 sm:left-3 md:left-6 z-30 group">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-float-bounce">
          {/* Aura detrás del gato */}
          <div className="absolute -inset-3 bg-purple-300/30 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity shadow-lg"></div>

          {/* Gato feliz - más colorido */}
          <div className="text-5xl sm:text-6xl md:text-7xl drop-shadow-xl filter brightness-125 group-hover:scale-125 transition-transform">
            😺
          </div>

          {/* Orejas moviéndose */}
          <div className="absolute -top-2 left-2 text-3xl sm:text-4xl animate-wiggle-tail">
            👂
          </div>
          <div className="absolute -top-2 right-2 text-3xl sm:text-4xl animate-wiggle-tail" style={{ animationDelay: '0.1s' }}>
            👂
          </div>

          {/* Cola */}
          <div className="absolute bottom-0 right-0 text-4xl sm:text-5xl animate-wiggle-tail" style={{ animationDelay: '0.2s' }}>
            🐱
          </div>
        </div>
      </div>

      {/* Perro derecha */}
      <div className="fixed bottom-20 right-1 sm:right-3 md:right-6 z-30 group">
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 animate-float-bounce" style={{ animationDelay: '0.3s' }}>
          {/* Aura detrás del perro */}
          <div className="absolute -inset-3 bg-orange-300/30 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity shadow-lg"></div>

          {/* Perro feliz - más colorido */}
          <div className="text-5xl sm:text-6xl md:text-7xl drop-shadow-xl filter brightness-125 group-hover:scale-125 transition-transform">
            🐕
          </div>

          {/* Lengua de perro */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl animate-bounce">
            👅
          </div>

          {/* Cola moviéndose */}
          <div className="absolute -bottom-3 -right-1 text-4xl sm:text-5xl animate-wiggle-tail">
            🪶
          </div>
        </div>
      </div>
    </>
  );
}
