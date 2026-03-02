'use client';

import { useState, useEffect, useRef } from 'react';
import { Player } from './Player';
import { MarioCube } from './MarioCube';
import { ProposalCard } from './ProposalCard';
import { GameOver } from './GameOver';
import { SideAnimals } from './SideAnimals';
import { GameBackground } from './GameBackground';
import { ScoreDisplay } from './ScoreDisplay';
import { useJumpPhysics } from '@/hooks/useJumpPhysics';
import { useCollisionDetector } from '@/hooks/useCollisionDetector';
import { useScreenInput } from '@/hooks/useScreenInput';

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
  physics: {
    gravity: 0.6,
    jumpPower: 20,
    jumpInterval: 1000,
    groundY: 80,
  },
  collision: {
    cubeTop: 350,
    cubeBottom: 480,
    playerWidth: 60,
    hitCooldown: 500,
  },
  cube: {
    centerX: 50, // %
  },
};

export function GameContainer() {
  // Estado del juego
  const [gameActive, setGameActive] = useState(true);
  const [score, setScore] = useState(0);
  const [currentProposal, setCurrentProposal] = useState<string | null>(null);
  const [revealedProposals, setRevealedProposals] = useState<string[]>([]);
  const [isCubeShaking, setIsCubeShaking] = useState(false);
  const [impactEffect, setImpactEffect] = useState(false);
  const [showStartScreen, setShowStartScreen] = useState(true);
  
  // Referencias
  const usedProposalsRef = useRef(new Set<number>());
  const containerRef = useRef<HTMLDivElement>(null);

  // Usar custom hooks
  const { playerY, velocityRef, isJumpingRef, jump, updatePhysics } = useJumpPhysics({
    groundY: GAME_CONFIG.physics.groundY,
    gravity: GAME_CONFIG.physics.gravity,
    jumpPower: GAME_CONFIG.physics.jumpPower,
    jumpInterval: GAME_CONFIG.physics.jumpInterval,
  });

  const { checkCollision } = useCollisionDetector({
    cubeTop: GAME_CONFIG.collision.cubeTop,
    cubeBottom: GAME_CONFIG.collision.cubeBottom,
    playerWidth: GAME_CONFIG.collision.playerWidth,
  });

  useScreenInput(containerRef, () => {
    if (!gameActive || showStartScreen) return;
    jump();
  }, gameActive && !showStartScreen);

  // Sistema de física de salto
  useEffect(() => {
    if (!gameActive) return;

    let animationFrameId: number;
    const gameLoop = () => {
      updatePhysics((newY) => {
        // Detección de colisión mejorada
        if (
          newY < GAME_CONFIG.collision.cubeBottom &&
          newY + GAME_CONFIG.collision.playerWidth > GAME_CONFIG.collision.cubeTop &&
          velocityRef.current < 0 // Descendiendo
        ) {
          performHit();
        }
      });

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [gameActive, updatePhysics]);

  // Auto-jump del personaje - Solo saltar si está en el suelo
  useEffect(() => {
    if (!gameActive || showStartScreen) return;

    const jumpInterval = setInterval(() => {
      // Solo saltar si está en el suelo (no saltando)
      if (!isJumpingRef.current && playerY >= GAME_CONFIG.physics.groundY - 5) {
        jump();
      }
    }, GAME_CONFIG.physics.jumpInterval);

    return () => clearInterval(jumpInterval);
  }, [gameActive, showStartScreen, jump, playerY]);

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

  // Reiniciar juego
  const handleRestart = () => {
    setScore(0);
    setRevealedProposals([]);
    setCurrentProposal(null);
    setGameActive(true);
    setShowStartScreen(true);
    setImpactEffect(false);
    usedProposalsRef.current.clear();
  };

  return (
    <div 
      ref={containerRef}
      className="w-full h-screen bg-background overflow-hidden relative flex flex-col"
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
