'use client';

import { useState, useEffect, useRef } from 'react';
import { Player } from './Player';
import { MarioCube } from './MarioCube';
import { ProposalCard } from './ProposalCard';
import { GameOver } from './GameOver';
import { SideAnimals } from './SideAnimals';
import { GameBackground } from './GameBackground';
import { ScoreDisplay } from './ScoreDisplay';

const PROPOSALS = [
  'Mejorar infraestructura vial y accesos principales a la ciudad',
  'Ampliación de servicios de agua potable a zonas rurales y periféricas',
  'Programa de empleabilidad y capacitación técnica para jóvenes',
  'Renovación de espacios públicos y parques recreativos modernos',
  'Subsidio para educación técnica profesional y becas locales',
  'Campaña integral de salud preventiva y atención médica comunitaria',
  'Apoyo directo a productores locales y emprendimientos sustentables',
  'Mejora de iluminación LED e infraestructura en barrios',
  'Programa de seguridad ciudadana con patrullaje comunitario reforzado',
  'Inversión en energías renovables limpias para desarrollo sostenible',
];

const GAME_CONFIG = {
  GROUND_Y: 80,
  CUBE_TOP: 100,
  CUBE_BOTTOM: 155,
  CUBE_CENTER_X: 50, // %
  PLAYER_WIDTH: 60, // px aproximado
  GRAVITY: 0.6,
  JUMP_POWER: 20,
  JUMP_INTERVAL: 1000,
};

export function GameContainer() {
  // Estado del juego
  const [playerY, setPlayerY] = useState(GAME_CONFIG.GROUND_Y);
  const [gameActive, setGameActive] = useState(true);
  const [score, setScore] = useState(0);
  const [currentProposal, setCurrentProposal] = useState<string | null>(null);
  const [revealedProposals, setRevealedProposals] = useState<string[]>([]);
  const [isCubeShaking, setIsCubeShaking] = useState(false);
  const [impactEffect, setImpactEffect] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  
  // Referencias
  const velocityRef = useRef(0);
  const isJumpingRef = useRef(false);
  const usedProposalsRef = useRef(new Set<number>());
  const canHitRef = useRef(true);

  // Sistema de física de salto
  useEffect(() => {
    if (!gameActive) return;

    let animationFrameId: number;
    const gameLoop = () => {
      setPlayerY((prevY) => {
        // Aplicar gravedad
        velocityRef.current -= GAME_CONFIG.GRAVITY;
        let newY = prevY - velocityRef.current;

        // Limitar altura mínima
        if (newY < 0) {
          newY = 0;
          velocityRef.current = 0;
        }

        // Suelo
        if (newY >= GAME_CONFIG.GROUND_Y) {
          newY = GAME_CONFIG.GROUND_Y;
          velocityRef.current = 0;
          isJumpingRef.current = false;
        }

        // Detección de colisión mejorada
        if (
          canHitRef.current &&
          newY < GAME_CONFIG.CUBE_BOTTOM &&
          newY + GAME_CONFIG.PLAYER_WIDTH > GAME_CONFIG.CUBE_TOP &&
          velocityRef.current < 0 // Descendiendo
        ) {
          performHit();
          canHitRef.current = false;
          setTimeout(() => {
            canHitRef.current = true;
          }, 500);
        }

        return newY;
      });

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameActive]);

  // Auto-jump del personaje
  useEffect(() => {
    if (!gameActive || showStartScreen) return;

    const jumpInterval = setInterval(() => {
      velocityRef.current = GAME_CONFIG.JUMP_POWER;
      isJumpingRef.current = true;
    }, GAME_CONFIG.JUMP_INTERVAL);

    return () => clearInterval(jumpInterval);
  }, [gameActive, showStartScreen]);

  // Función de hit mejorada
  const performHit = () => {
    if (score >= PROPOSALS.length || !gameActive) return;

    let randomIdx: number;
    do {
      randomIdx = Math.floor(Math.random() * PROPOSALS.length);
    } while (
      usedProposalsRef.current.has(randomIdx) &&
      usedProposalsRef.current.size < PROPOSALS.length
    );

    usedProposalsRef.current.add(randomIdx);
    const newProposal = PROPOSALS[randomIdx];
    const newScore = score + 1;

    // Actualizar estado
    setCurrentProposal(newProposal);
    setScore(newScore);
    setRevealedProposals([...revealedProposals, newProposal]);

    // Efectos visuales
    setIsCubeShaking(true);
    setImpactEffect(true);

    setTimeout(() => setIsCubeShaking(false), 300);
    setTimeout(() => setImpactEffect(false), 500);

    // Fin del juego
    if (newScore >= PROPOSALS.length) {
      setTimeout(() => setGameActive(false), 1000);
    }
  };

  // Manejo de clicks/toques en el cubo
  const handleCubeClick = () => {
    if (!gameActive) return;

    if (showStartScreen) {
      setShowStartScreen(false);
      return;
    }

    performHit();
  };

  // Manejo de toques en la pantalla (salto)
  const handleScreenTap = (e: React.TouchEvent | React.MouseEvent) => {
    if (!gameActive || showStartScreen) return;
    
    // Evitar conflicto si es click en botones o elementos interactivos
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('[role="button"]')) {
      return;
    }

    // Hacer saltar al personaje
    velocityRef.current = GAME_CONFIG.JUMP_POWER;
    isJumpingRef.current = true;
  };

  // Reiniciar juego
  const handleRestart = () => {
    setPlayerY(GAME_CONFIG.GROUND_Y);
    setScore(0);
    setRevealedProposals([]);
    setCurrentProposal(null);
    setGameActive(true);
    setShowStartScreen(true);
    setImpactEffect(false);
    velocityRef.current = 0;
    isJumpingRef.current = false;
    usedProposalsRef.current.clear();
    canHitRef.current = true;
  };

  return (
    <div 
      className="w-full h-screen bg-background overflow-hidden relative flex flex-col"
      onClick={handleScreenTap}
      onTouchStart={handleScreenTap}
    >
      {/* Background */}
      <GameBackground />

      {/* Score Display */}
      <ScoreDisplay score={score} total={PROPOSALS.length} />

      {/* Game Area - Centro */}
      <div className="flex-1 relative w-full flex items-end justify-center">
        {/* Impact Effect */}
        {impactEffect && (
          <div className="absolute inset-0 z-45 pointer-events-none">
            <div className="absolute left-1/2 bottom-1/3 transform -translate-x-1/2">
              <div className="w-32 h-32 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-70 animate-impact-burst"></div>
            </div>
            <div className="absolute left-1/2 bottom-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-cyan-400/80 animate-energy-pulse"></div>
              <div className="absolute w-32 h-32 rounded-full border-2 border-blue-500/50 animate-energy-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute w-40 h-40 rounded-full border-2 border-purple-500/30 animate-energy-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}

        {/* Player */}
        {!gameActive ? null : <Player y={playerY} />}

        {/* Cube */}
        {gameActive && (
          <MarioCube 
            onHit={handleCubeClick} 
            isShaking={isCubeShaking} 
          />
        )}

        {/* Side Animals */}
        <SideAnimals />
      </div>

      {/* Proposal Modal */}
      {currentProposal && (
        <ProposalCard 
          proposal={currentProposal} 
          onAnimationEnd={() => setCurrentProposal(null)} 
        />
      )}

      {/* Game Over Screen */}
      {!gameActive && (
        <GameOver 
          onRestart={handleRestart} 
          proposals={revealedProposals} 
        />
      )}

      {/* Start Screen - Overlay */}
      {showStartScreen && gameActive && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center pointer-events-none bg-black/30">
          <div className="text-center space-y-8 animate-fade-in-down">
            <h1 className="text-6xl sm:text-8xl font-black bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-xl">
              PROPUESTAS POLÍTICAS
            </h1>
            <p className="text-xl sm:text-3xl font-bold text-white/90 tracking-wider">
              Salta y descubre el programa de gobierno
            </p>
            <div className="flex justify-center gap-6 text-6xl animate-bounce">
              <span>📋</span>
              <span style={{ animationDelay: '0.1s' }}>⚡</span>
              <span style={{ animationDelay: '0.2s' }}>🎯</span>
            </div>
          </div>

          <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 pointer-events-auto">
            <button
              onClick={() => setShowStartScreen(false)}
              className="px-10 py-5 sm:px-16 sm:py-6 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-black text-2xl sm:text-3xl rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 transition-all transform hover:scale-110 uppercase tracking-wider border-2 border-cyan-300/50 shadow-xl"
            >
              COMENZAR JUEGO
            </button>
            <p className="text-center text-white/70 mt-6 text-lg font-semibold animate-pulse">
              Toca la pantalla para que el Choco salte ✨
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
