'use client';

import { useEffect, useState, useCallback } from 'react';
import { Particle } from './Particle';

interface ParticleData {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
}

const colors = [
  '#60A5FA', // blue-400
  '#34D399', // emerald-400
  '#FBBF24', // amber-400
  '#F472B6', // pink-400
  '#A78BFA', // violet-400
  '#FB7185', // rose-400
];

export function ParticleSystem() {
  const [particles, setParticles] = useState<ParticleData[]>([]);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null);

  const createParticle = useCallback((): ParticleData => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;

    return {
      id: Math.random(),
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 2,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: Math.random() * 0.8 + 0.2,
    };
  }, []);

  useEffect(() => {
    // Создаем начальные частицы (меньше для производительности)
    const initialParticles = Array.from({ length: 30 }, createParticle);
    setParticles(initialParticles);

    // Обновляем частицы периодически
    const interval = setInterval(() => {
      setParticles((prev) => {
        const newParticles = [...prev];

        // Удаляем старые частицы и добавляем новые
        if (newParticles.length > 0) {
          newParticles.shift();
          newParticles.push(createParticle());
        }

        return newParticles;
      });
    }, 3000); // Увеличил интервал для лучшей производительности

    return () => clearInterval(interval);
  }, [createParticle]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      setMousePosition(null);
    };

    const handleResize = () => {
      // Обновляем частицы при изменении размера окна
      setParticles(Array.from({ length: 30 }, createParticle));
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [createParticle]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <Particle
          key={particle.id}
          x={particle.x}
          y={particle.y}
          vx={particle.vx}
          vy={particle.vy}
          size={particle.size}
          color={particle.color}
          opacity={particle.opacity}
          mouseX={mousePosition?.x}
          mouseY={mousePosition?.y}
        />
      ))}
    </div>
  );
}
