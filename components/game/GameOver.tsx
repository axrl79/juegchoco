'use client';

interface GameOverProps {
  onRestart: () => void;
  proposals: string[];
}

export function GameOver({ onRestart, proposals }: GameOverProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/75 backdrop-blur-xl">
      {/* Efectos de luz cibernética animados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/25 rounded-full blur-3xl animate-glow-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/25 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl w-full mx-4 my-8 animate-proposal-pop relative z-10">
        {/* Aura brillante detrás */}
        <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-30 animate-glow-pulse"></div>

        {/* Tarjeta principal sofisticada */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-10 sm:p-14 md:p-16 shadow-2xl border-2 border-cyan-400/40 relative overflow-hidden">
          {/* Efecto de brillo cristalino */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent pointer-events-none rounded-3xl"></div>

          {/* Líneas decorativas */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>

          {/* Encabezado espectacular profesional */}
          <div className="text-center mb-12 space-y-4 relative z-10">
            {/* Celebración sofisticada */}
            <div className="flex justify-center gap-4 text-5xl sm:text-6xl md:text-7xl animate-bounce">
              <span className="drop-shadow-2xl filter brightness-125">🎯</span>
              <span className="drop-shadow-2xl filter brightness-125" style={{ animationDelay: '0.1s' }}>⚡</span>
              <span className="drop-shadow-2xl filter brightness-125" style={{ animationDelay: '0.2s' }}>🎯</span>
            </div>

            {/* Título principal con estilo cyberpunk */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-2xl uppercase tracking-wider">
              PROPUESTAS REVELADAS
            </h1>
            
            <p className="text-xl sm:text-2xl text-cyan-300/80 font-bold drop-shadow-lg tracking-wide">
              ✓ Todas las propuestas políticas han sido descubiertas
            </p>
          </div>

          {/* Propuestas reveladas - Tarjeta mejorada */}
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 mb-12 max-h-96 overflow-y-auto border-2 border-cyan-400/30 hover:border-cyan-400/60 transition-all relative z-10 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-8 flex items-center gap-3 drop-shadow-md sticky top-0 bg-black/50 backdrop-blur-sm py-2">
              <span className="text-4xl">📋</span> Propuestas Electorales
            </h2>
            
            <ol className="space-y-4">
              {proposals.map((proposal, index) => (
                <li
                  key={index}
                  className="text-base sm:text-lg text-white/90 flex gap-4 animate-fade-in items-start group hover:bg-cyan-500/10 p-4 rounded-lg transition-all border border-cyan-400/20 hover:border-cyan-400/40"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <span className="font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 flex-shrink-0 min-w-12">
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <span className="text-balance font-semibold drop-shadow-md group-hover:text-cyan-200 transition-colors leading-relaxed">
                    {proposal}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Estadísticas finales */}
          <div className="grid grid-cols-3 gap-4 mb-10 relative z-10">
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-center hover:border-cyan-400/60 transition-all">
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 drop-shadow-lg">{proposals.length}</div>
              <div className="text-xs sm:text-sm text-cyan-300/70 uppercase tracking-wider font-bold mt-2">Propuestas</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-center hover:border-cyan-400/60 transition-all">
              <div className="text-3xl sm:text-4xl font-black text-blue-400 drop-shadow-lg">100%</div>
              <div className="text-xs sm:text-sm text-cyan-300/70 uppercase tracking-wider font-bold mt-2">Completado</div>
            </div>
            <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-center hover:border-cyan-400/60 transition-all">
              <div className="text-3xl sm:text-4xl font-black text-purple-400 drop-shadow-lg">✓</div>
              <div className="text-xs sm:text-sm text-cyan-300/70 uppercase tracking-wider font-bold mt-2">Gana</div>
            </div>
          </div>

          {/* Botones mejorados */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button
              onClick={onRestart}
              className="px-10 py-4 sm:py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-black text-lg sm:text-xl rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 transition-all transform hover:scale-110 drop-shadow-lg uppercase tracking-widest border-2 border-cyan-300/50"
            >
              ↻ Jugar de Nuevo
            </button>
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.location.reload();
                }
              }}
              className="px-10 py-4 sm:py-5 bg-gradient-to-r from-slate-700 to-slate-800 text-cyan-400 font-black text-lg sm:text-xl rounded-xl hover:shadow-2xl hover:shadow-slate-500/50 active:scale-95 transition-all transform hover:scale-105 drop-shadow-lg uppercase tracking-widest border-2 border-cyan-400/30 hover:border-cyan-400/60"
            >
              ⌂ Volver al Inicio
            </button>
          </div>

          {/* Decoración profesional */}
          <div className="flex justify-center gap-6 mt-10 text-5xl md:text-6xl animate-bounce-infinite relative z-10">
            <span className="drop-shadow-2xl filter brightness-125" style={{ animationDelay: '0s' }}>⚡</span>
            <span className="drop-shadow-2xl filter brightness-125" style={{ animationDelay: '0.2s' }}>✓</span>
            <span className="drop-shadow-2xl filter brightness-125" style={{ animationDelay: '0.4s' }}>⚡</span>
          </div>

          {/* Línea decorativa inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
