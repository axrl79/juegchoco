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
  '🛣️ Mejorar infraestructura vial y accesos principales',
  '💧 Ampliación de servicios de agua potable a zonas rurales',
  '👨‍💼 Programa de empleabilidad y capacitación para jóvenes',
  '🌳 Renovación de espacios públicos y parques recreativos',
  '📚 Subsidio para educación técnica y becas locales',
  '⚕️ Campaña de salud preventiva y atención médica comunitaria',
  '🏪 Apoyo directo a productores locales y emprendedores',
  '💡 Mejora de iluminación e infraestructura en barrios',
  '🚔 Programa de seguridad ciudadana y patrullaje reforzado',
  '♻️ Incentivos e inversión en energías renovables limpias',
];

export function GameContainer() {
  const [playerY, setPlayerY] = useState(50);
  const [isJumping, setIsJumping] = useState(false);
  const [gameActive, setGameActive] = useState(true);
  const [score, setScore] = useState(0);
  const [currentProposal, setCurrentProposal] = useState<string | null>(null);
  const [revealedProposals, setRevealedProposals] = useState<string[]>([]);
  const [isCubeShaking, setIsCubeShaking] = useState(false);
  const velocityRef = useRef(0);
  const jumpingRef = useRef(false);
  const usedProposalsRef = useRef(new Set<number>());

  // Simulación de física de salto
  useEffect(() => {
    if (!gameActive) return;

    let frameId: number;
    const gameLoop = () => {
      setPlayerY((prevY) => {
        const GRAVITY = 0.4;
        const JUMP_POWER = 15;
        const GROUND_Y = 50;

        if (!jumpingRef.current) {
          // Iniciar salto automático
          jumpingRef.current = true;
          velocityRef.current = JUMP_POWER;
        }

        velocityRef.current -= GRAVITY;
        let newY = prevY - velocityRef.current;

        if (newY <= GROUND_Y) {
          newY = GROUND_Y;
          velocityRef.current = 0;
          jumpingRef.current = false;
        }

        // Detección de colisión con el cubo
        if (newY > 100 && newY < 180 && prevY >= GROUND_Y) {
          handleCubeHit();
        }

        return newY;
      });

      frameId = requestAnimationFrame(gameLoop);
    };

    frameId = requestAnimationFrame(gameLoop);

    return () => cancelAnimationFrame(frameId);
  }, [gameActive]);

  // Auto-salto continuo
  useEffect(() => {
    if (!gameActive) return;

    const jumpTimer = setInterval(() => {
      velocityRef.current = 15;
      jumpingRef.current = true;
    }, 800);

    return () => clearInterval(jumpTimer);
  }, [gameActive]);

  const handleCubeHit = () => {
    if (score >= PROPOSALS.length) return;

    let randomIdx: number;
    do {
      randomIdx = Math.floor(Math.random() * PROPOSALS.length);
    } while (usedProposalsRef.current.has(randomIdx) && usedProposalsRef.current.size < PROPOSALS.length);

    usedProposalsRef.current.add(randomIdx);

    const newProposal = PROPOSALS[randomIdx];
    const newScore = score + 1;

    setCurrentProposal(newProposal);
    setScore(newScore);
    setRevealedProposals([...revealedProposals, newProposal]);

    // Efecto visual
    setIsCubeShaking(true);
    setTimeout(() => setIsCubeShaking(false), 400);

    // Fin del juego
    if (newScore >= PROPOSALS.length) {
      setTimeout(() => {
        setGameActive(false);
      }, 500);
    }
  };

  const handleProposalEnd = () => {
    setCurrentProposal(null);
  };

  const handleRestart = () => {
    setPlayerY(50);
    setScore(0);
    setRevealedProposals([]);
    setCurrentProposal(null);
    setGameActive(true);
    velocityRef.current = 0;
    jumpingRef.current = false;
    usedProposalsRef.current.clear();
  };

  return (
    <div className="w-full h-screen bg-background overflow-hidden relative">
      {/* Background */}
      <GameBackground />

      {/* Score Display */}
      <ScoreDisplay score={score} total={PROPOSALS.length} />

      {/* Game Area */}
      <div className="relative w-full h-full">
        {/* Player */}
        <Player y={playerY} />

        {/* Mario Cube */}
        {gameActive && <MarioCube onHit={handleCubeHit} isShaking={isCubeShaking} />}

        {/* Side Animals */}
        <SideAnimals />

        {/* Current Proposal */}
        {currentProposal && <ProposalCard proposal={currentProposal} onAnimationEnd={handleProposalEnd} />}

        {/* Game Over */}
        {!gameActive && <GameOver onRestart={handleRestart} proposals={revealedProposals} />}
      </div>

      {/* Instrucciones iniciales */}
      {gameActive && score === 0 && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
          {/* Instrucción superior */}
          <div className="absolute top-24 animate-bounce">
            <div className="text-center space-y-3">
              <p className="text-2xl sm:text-4xl font-black text-primary">¡BIENVENIDO!</p>
              <p className="text-base sm:text-xl font-bold text-primary/80">Golpea el cubo para revelar propuestas</p>
            </div>
          </div>

          {/* Instrucción inferior */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-auto">
            <button
              onClick={handleCubeHit}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground font-black text-lg sm:text-xl rounded-lg hover:bg-primary/90 active:scale-95 transition-all transform animate-bounce"
            >
              👇 GOLPEAR CUBO 👇
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
