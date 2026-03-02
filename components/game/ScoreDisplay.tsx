interface ScoreDisplayProps {
  score: number;
  total: number;
}

export function ScoreDisplay({ score, total }: ScoreDisplayProps) {
  const progress = (score / total) * 100;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Fondo mejorado */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-violet-600/40 via-purple-600/20 to-transparent backdrop-blur-md border-b border-violet-400/30"></div>

      {/* Contenido */}
      <div className="relative flex justify-between items-center p-4 sm:p-6">
        {/* Icono izquierdo */}
        <div className="text-3xl sm:text-4xl animate-bounce drop-shadow-lg">
          🎮
        </div>

        {/* Contador central mejorado */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-xs sm:text-sm font-black text-white tracking-widest uppercase drop-shadow-md">
            Propuestas Reveladas
          </div>

          {/* Contador con efecto 3D */}
          <div className="relative">
            <div className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 drop-shadow-lg">
              {score}/{total}
            </div>
          </div>

          {/* Barra de progreso */}
          <div className="w-32 sm:w-40 h-2 bg-black/30 rounded-full overflow-hidden border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-violet-400 to-orange-400 transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Icono derecho */}
        <div className="text-3xl sm:text-4xl animate-bounce drop-shadow-lg" style={{ animationDelay: '0.2s' }}>
          🏛️
        </div>
      </div>
    </div>
  );
}
