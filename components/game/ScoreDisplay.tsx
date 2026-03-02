interface ScoreDisplayProps {
  score: number;
  total: number;
}

export function ScoreDisplay({ score, total }: ScoreDisplayProps) {
  const progress = (score / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Fondo mejorado con efecto neon */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-900/60 via-blue-900/30 to-transparent backdrop-blur-lg border-b-2 border-cyan-400/30"></div>

      {/* Contenido */}
      <div className="relative flex justify-between items-center px-6 sm:px-8 py-6 sm:py-8">
        
        {/* Icono izquierdo - Propuestas */}
        <div className="text-5xl sm:text-6xl md:text-7xl animate-bounce drop-shadow-lg filter brightness-125">
          📋
        </div>

        {/* Contador central mejorado */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-xs sm:text-sm md:text-base font-black text-cyan-400 tracking-widest uppercase drop-shadow-md">
            Propuestas Reveladas
          </div>

          {/* Contador con efecto cyberpunk */}
          <div className="relative">
            <div className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-2xl tracking-tighter font-mono">
              {String(score).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </div>
            
            {/* Glow detrás del número */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-500/30 rounded-lg blur-2xl opacity-70"></div>
          </div>

          {/* Barra de progreso mejorada */}
          <div className="w-40 sm:w-48 md:w-56 h-3 sm:h-4 bg-black/50 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-2xl">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 transition-all duration-500 rounded-full shadow-lg shadow-cyan-400/50"
              style={{ width: `${progress}%` }}
            ></div>
            
            {/* Brillo de animación en la barra */}
            {progress > 0 && progress < 100 && (
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
                style={{ 
                  width: '20%',
                  left: `${progress}%`,
                  animation: 'shimmer 1s infinite'
                }}
              ></div>
            )}
          </div>

          {/* Porcentaje de progreso */}
          <div className="text-sm font-bold text-cyan-300 drop-shadow-md">
            {Math.round(progress)}% Completado
          </div>
        </div>

        {/* Icono derecho - Gobierno */}
        <div className="text-5xl sm:text-6xl md:text-7xl animate-bounce drop-shadow-lg filter brightness-125" style={{ animationDelay: '0.2s' }}>
          🏛️
        </div>
      </div>
    </div>
  );
}
