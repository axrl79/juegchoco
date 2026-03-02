'use client';

import { useEffect, useRef, useCallback, RefObject } from 'react';

export function useScreenInput(
  containerRef: RefObject<HTMLDivElement>,
  onTap: () => void,
  enabled: boolean = true
) {
  const lastTapRef = useRef(0);
  const TAP_COOLDOWN = 100; // Prevenir múltiples taps accidentales

  const handleTap = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!enabled) return;

      const now = Date.now();
      if (now - lastTapRef.current < TAP_COOLDOWN) return;

      // No ejecutar en botones o elementos interactivos
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('.no-tap')
      ) {
        return;
      }

      lastTapRef.current = now;
      onTap();
    },
    [enabled, onTap]
  );

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;

    // Mouse
    container.addEventListener('click', handleTap as EventListener);
    
    // Touch
    container.addEventListener('touchstart', handleTap as EventListener);

    return () => {
      container.removeEventListener('click', handleTap as EventListener);
      container.removeEventListener('touchstart', handleTap as EventListener);
    };
  }, [enabled, handleTap, containerRef]);

  return containerRef;
}
