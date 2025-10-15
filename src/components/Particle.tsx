'use client';

import { useEffect, useRef } from 'react';

interface ParticleProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  mouseX?: number;
  mouseY?: number;
}

export function Particle({ x, y, vx, vy, size, color, opacity, mouseX, mouseY }: ParticleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particleRef = useRef({
    x,
    y,
    vx,
    vy,
    size,
    color,
    opacity,
    life: 1,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const particle = particleRef.current;

    const animate = () => {
      // Обновляем позицию
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Гравитация
      particle.vy += 0.02;

      // Сопротивление воздуха
      particle.vx *= 0.999;
      particle.vy *= 0.999;

      // Взаимодействие с мышью
      if (mouseX !== undefined && mouseY !== undefined) {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * 0.5;
          particle.vy += Math.sin(angle) * force * 0.5;
        }
      }

      // Границы экрана
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.vx *= -0.8;
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.vy *= -0.8;
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }

      // Очищаем canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Рисуем частицу
      ctx.save();
      ctx.globalAlpha = particle.opacity * particle.life;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Добавляем свечение
      ctx.shadowBlur = 20;
      ctx.shadowColor = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mouseX, mouseY]);

  return (
    <canvas
      ref={canvasRef}
      width={typeof window !== 'undefined' ? window.innerWidth : 1920}
      height={typeof window !== 'undefined' ? window.innerHeight : 1080}
      className="particle-canvas absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
