'use client';

import { useCallback, useRef } from 'react';

interface ColliderConfig {
  cubeTop: number;
  cubeBottom: number;
  cubeCenterX: number; // porcentaje (0-100)
  cubeWidth: number; // px aproximado
  playerWidth: number; // px aproximado
}

export function useCollisionDetector(config: ColliderConfig) {
  const lastHitTimeRef = useRef(0);
  const HIT_COOLDOWN = 500; // ms entre hits

  const checkCollision = useCallback((playerY: number, velocity: number) => {
    const now = Date.now();
    
    // Verificar cooldown
    if (now - lastHitTimeRef.current < HIT_COOLDOWN) {
      return false;
    }

    // El personaje debe estar en la zona de colisión vertical
    const isInVerticalRange = 
      playerY < config.cubeBottom && 
      playerY + config.playerWidth > config.cubeTop;

    // Debe estar descendiendo (velocity negativa)
    const isDescending = velocity < -1;

    // Si ambas condiciones se cumplen, es una colisión
    if (isInVerticalRange && isDescending) {
      lastHitTimeRef.current = now;
      return true;
    }

    return false;
  }, [config.cubeTop, config.cubeBottom, config.playerWidth]);

  return { checkCollision };
}
