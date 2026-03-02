'use client';

import { useRef, useState, useCallback, useEffect } from 'react';

interface JumpConfig {
  groundY: number;
  gravity: number;
  jumpPower: number;
  jumpInterval: number;
}

export function useJumpPhysics(config: JumpConfig) {
  const [playerY, setPlayerY] = useState(config.groundY);
  const velocityRef = useRef(0);
  const isJumpingRef = useRef(false);
  
  // Función para hacer saltar
  const jump = useCallback(() => {
    velocityRef.current = config.jumpPower;
    isJumpingRef.current = true;
  }, [config.jumpPower]);

  // Actualizar física
  const updatePhysics = useCallback((onCollisionCheck?: (newY: number) => void) => {
    setPlayerY((currentY) => {
      velocityRef.current -= config.gravity;
      let newY = currentY - velocityRef.current;

      // Límite superior
      if (newY < 0) {
        newY = 0;
        velocityRef.current = 0;
      }

      // Suelo
      if (newY >= config.groundY) {
        newY = config.groundY;
        velocityRef.current = 0;
        isJumpingRef.current = false;
      }

      // Ejecutar callback para colisiones
      if (onCollisionCheck) {
        onCollisionCheck(newY);
      }

      return newY;
    });
  }, [config.gravity, config.groundY]);

  return {
    playerY,
    setPlayerY,
    velocityRef,
    isJumpingRef,
    jump,
    updatePhysics,
  };
}

