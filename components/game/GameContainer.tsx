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

export function GameContainer() {
  const [playerY, setPlayerY] = useState(50);
  const [playerRotation, setPlayerRotation] = useState(0);
  const [isJumping, setIsJumping] = useState(false);
  const [gameActive, setGameActive] = useState(true);
  const [score, setScore] = useState(0);
  const [currentProposal, setCurrentProposal] = useState<string | null>(null);
  const [revealedProposals, setRevealedProposals] = useState<string[]>([]);
  const [isCubeShaking, setIsCubeShaking] = useState(false);
  const [impactEffect, setImpactEffect] = useState(false);
  const velocityRef = useRef(0);
  const jumpingRef = useRef(false);
  const usedProposalsRef = useRef(new Set<number>());
  const lastHitRef = useRef(false);

  // Simulación de física de salto mejorada
  useEffect(() => {
    if (!gameActive) return;

    let frameId: number;
    const gameLoop = () => {
      setPlayerY((prevY) => {
        // Física más realista con easing suave
        const GRAVITY = 0.55;
        const JUMP_POWER = 18;
        const GROUND_Y = 50;
        const MAX_Y = 250;

        if (!jumpingRef.current) {
          // Iniciar salto automático cada 900ms
          jumpingRef.current = true;
          velocityRef.current = JUMP_POWER;
          setIsJumping(true);
        }

        velocityRef.current -= GRAVITY;
        let newY = prevY - velocityRef.current;

        // Límite superior
        if (newY < 0) {
          newY = 0;
          velocityRef.current = 0;
        }

        if (newY >= GROUND_Y) {
          newY = GROUND_Y;
          velocityRef.current = 0;
          jumpingRef.current = false;
          setIsJumping(false);
        }

        // Detección de colisión mejorada con el cubo
        // El cubo está entre 100-180px de altura
        const playerSize = 35; // Altura aproximada del jugador
        if (newY + playerSize > 100 && newY < 180 && !lastHitRef.current) {
          if (prevY >= GROUND_Y || velocityRef.current < -3) {
            // Colisión descendente o en fase de caída
            handleCubeHit();
            lastHitRef.current = true;
          }
        } else if (newY >= GROUND_Y) {
          lastHitRef.current = false;
        }

        // Rotación del personaje según velocidad
        setPlayerRotation(Math.min(Math.abs(velocityRef.current) * 5, 30));

        return newY;
      });

      frameId = requestAnimationFrame(gameLoop);
    };

    frameId = requestAnimationFrame(gameLoop);

    return () => cancelAnimationFrame(frameId);
  }, [gameActive]);

  // Auto-salto continuo mejorado
  useEffect(() => {
    if (!gameActive) return;

    const jumpTimer = setInterval(() => {
      velocityRef.current = 18;
      jumpingRef.current = true;
    }, 900);

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

    // Efectos visuales mejorados
    setIsCubeShaking(true);
    setImpactEffect(true);
    
    setTimeout(() => setIsCubeShaking(false), 300);
    setTimeout(() => setImpactEffect(false), 400);

    // Fin del juego
    if (newScore >= PROPOSALS.length) {
      setTimeout(() => {
        setGameActive(false);
      }, 800);
    }
  };

  const handleRestart = () => {
    setPlayerY(50);
    setScore(0);
    setRevealedProposals([]);
    setCurrentProposal(null);
    setGameActive(true);
    setImpactEffect(false);
    setPlayerRotation(0);
    velocityRef.current = 0;
    jumpingRef.current = false;
    usedProposalsRef.current.clear();
    lastHitRef.current = false;
  };

  return (
    <div className="w-full h-screen bg-background overflow-hidden relative">
      {/* Background */}
      <GameBackground />

      {/* Score Display */}
      <ScoreDisplay score={score} total={PROPOSALS.length} />

      {/* Game Area */}
      <div className="relative w-full h-full">
        {/* Impact Effect - Gran explosión de energía */}
        {impactEffect && (
          <div className="fixed inset-0 z-45 pointer-events-none">
            <div className="absolute left-1/2 bottom-32 transform -translate-x-1/2">
              <div className="w-32 h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-3xl opacity-70 animate-impact-burst"></div>
            </div>
            {/* Ondas de energía */}
            <div className="absolute left-1/2 bottom-32 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 rounded-full border-4 border-cyan-400/80 animate-energy-pulse"></div>
              <div className="absolute w-32 h-32 rounded-full border-2 border-blue-500/50 animate-energy-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="absolute w-40 h-40 rounded-full border-2 border-purple-500/30 animate-energy-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        )}

        {/* Player */}
        <Player y={playerY} />

        {/* Mario Cube */}
        {gameActive && <MarioCube onHit={handleCubeHit} isShaking={isCubeShaking} />}

        {/* Side Animals */}
        <SideAnimals />

        {/* Current Proposal */}
        {currentProposal && <ProposalCard proposal={currentProposal} onAnimationEnd={() => setCurrentProposal(null)} />}

        {/* Game Over */}
        {!gameActive && <GameOver onRestart={handleRestart} proposals={revealedProposals} />}
      </div>

      {/* Instrucciones iniciales mejoradas */}
      {gameActive && score === 0 && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center pointer-events-none">
          {/* Instrucción superior */}
          <div className="absolute top-20 animate-fade-in-down">
            <div className="text-center space-y-4">
              <h1 className="text-5xl sm:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                PROPUESTAS POLÍTICAS
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-white/80 tracking-wider">
                Salta y descubre las propuestas de gobierno
              </p>
              <div className="flex justify-center gap-4 text-4xl">
                <span className="animate-bounce">📋</span>
                <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>⚡</span>
                <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🎯</span>
              </div>
            </div>
          </div>

          {/* Instrucción inferior */}
          <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 pointer-events-auto">
            <button
              onClick={handleCubeHit}
              className="px-8 py-4 sm:px-12 sm:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl sm:text-2xl rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 active:scale-95 transition-all transform hover:scale-110 uppercase tracking-wider border-2 border-cyan-300/50"
            >
              Golpea el Cubo ↓
            </button>
            <p className="text-center text-white/60 mt-4 text-sm animate-pulse">
              El personaje saltará automáticamente
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
