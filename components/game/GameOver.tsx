'use client';

interface GameOverProps {
  onRestart: () => void;
  proposals: string[];
}

export function GameOver({ onRestart, proposals }: GameOverProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 backdrop-blur-lg">
      {/* Efectos de luz animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-500/30 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-3xl w-full mx-4 my-8 animate-proposal-pop relative z-10">
        {/* Aura brillante detrás */}
        <div className="absolute -inset-6 bg-gradient-to-br from-violet-600 via-purple-600 to-orange-500 rounded-3xl blur-2xl opacity-25 animate-glow-pulse"></div>

        {/* Tarjeta principal mejorada */}
        <div className="bg-gradient-to-br from-violet-700 via-purple-700 to-purple-800 rounded-3xl p-8 sm:p-12 shadow-2xl border-4 border-violet-400/50 relative overflow-hidden">
          {/* Efecto de brillo interno */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none rounded-3xl"></div>

          {/* Encabezado espectacular */}
          <div className="text-center mb-10 space-y-4 relative z-10">
            {/* Celebración */}
            <div className="flex justify-center gap-4 text-5xl sm:text-6xl animate-bounce">
              <span>🎉</span>
              <span style={{ animationDelay: '0.1s' }}>🏆</span>
              <span style={{ animationDelay: '0.2s' }}>🎉</span>
            </div>

            {/* Título principal */}
            <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-orange-400 drop-shadow-lg">
              ¡JUEGO COMPLETADO!
            </h1>
            <p className="text-lg sm:text-xl text-white font-bold drop-shadow-md">
              🎖️ Todas las propuestas de tu alcaldía han sido reveladas 🎖️
            </p>
          </div>

          {/* Propuestas reveladas - mejoradas */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 max-h-80 overflow-y-auto border-2 border-white/30 relative z-10">
            <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-3 drop-shadow-md">
              <span className="text-3xl">📜</span> Propuestas Reveladas
            </h2>
            <ol className="space-y-3">
              {proposals.map((proposal, index) => (
                <li
                  key={index}
                  className="text-base sm:text-lg text-white flex gap-4 animate-fade-in items-start group hover:bg-white/10 p-2 rounded transition-colors"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <span className="font-black text-2xl text-gradient-to-r from-orange-300 to-yellow-300 flex-shrink-0 bg-gradient-to-r from-orange-300 to-yellow-300 text-transparent bg-clip-text">
                    {index + 1}.
                  </span>
                  <span className="text-balance font-semibold drop-shadow-md group-hover:text-yellow-200 transition-colors">
                    {proposal}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Botones mejorados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button
              onClick={onRestart}
              className="px-8 py-4 sm:py-5 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-black text-lg sm:text-xl rounded-xl hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 transition-all transform hover:scale-105 drop-shadow-lg"
            >
              🎮 JUGAR DE NUEVO
            </button>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.reload();
                }
              }}
              className="px-8 py-4 sm:py-5 bg-gradient-to-r from-violet-400 to-purple-400 text-white font-black text-lg sm:text-xl rounded-xl hover:shadow-lg hover:shadow-purple-500/50 active:scale-95 transition-all transform hover:scale-105 drop-shadow-lg"
            >
              🏠 VOLVER AL INICIO
            </button>
          </div>

          {/* Decoración festiva */}
          <div className="flex justify-center gap-4 mt-8 text-4xl animate-bounce-infinite relative z-10">
            <span className="drop-shadow-lg">⭐</span>
            <span className="drop-shadow-lg" style={{ animationDelay: '0.2s' }}>✨</span>
            <span className="drop-shadow-lg" style={{ animationDelay: '0.4s' }}>⭐</span>
            <span className="drop-shadow-lg" style={{ animationDelay: '0.6s' }}>✨</span>
            <span className="drop-shadow-lg" style={{ animationDelay: '0.8s' }}>⭐</span>
          </div>

          {/* Decoración lateral */}
          <div className="absolute top-0 left-0 text-8xl opacity-10 pointer-events-none">📜</div>
          <div className="absolute bottom-0 right-0 text-8xl opacity-10 pointer-events-none">🏛️</div>
        </div>
      </div>
    </div>
  );
}
