'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ExternalLinkIcon } from '@/components/ExternalLinkIcon';
import { GitHubIcon } from '@/components/GitHubIcon';
import type { Project } from '@/lib/projects';

interface ProjectCard3DProps {
  project: Project;
}

export function ProjectCard3D({ project }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Ограничиваем максимальный угол поворота
    const maxRotation = 15;
    const clampedX = Math.max(-maxRotation, Math.min(maxRotation, mouseX / 10));
    const clampedY = Math.max(-maxRotation, Math.min(maxRotation, mouseY / 10));

    setMousePosition({ x: clampedX, y: clampedY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Вычисляем углы поворота на основе позиции мыши
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const rotateX = isHovered && !isMobile ? mousePosition.y : 0;
  const rotateY = isHovered && !isMobile ? mousePosition.x : 0;

  return (
    <div
      ref={cardRef}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        // Отключаем 3D эффекты на мобильных устройствах для производительности
        perspective: typeof window !== 'undefined' && window.innerWidth < 768 ? 'none' : '1000px',
      }}
    >
      <div
        className="glass-card-3d overflow-hidden transition-all duration-500 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Изображение проекта */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
            style={{
              transform: `translateZ(30px)`,
            }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              transform: `translateZ(40px)`,
            }}
          />
        </div>

        {/* Контент карточки */}
        <div
          className="p-6 relative"
          style={{
            transform: `translateZ(20px)`,
          }}
        >
          <h3
            className="font-semibold text-lg mb-2"
            style={{
              transform: `translateZ(10px)`,
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-muted mb-4"
            style={{
              transform: `translateZ(5px)`,
            }}
          >
            {project.description}
          </p>

          {/* Кнопки */}
          <div
            className="flex gap-3"
            style={{
              transform: `translateZ(15px)`,
            }}
          >
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button-3d flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg"
                style={{
                  transform: `translateZ(20px)`,
                }}
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Проект
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button-3d flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:from-gray-800 hover:to-gray-900 hover:scale-105 hover:shadow-lg"
                style={{
                  transform: `translateZ(20px)`,
                }}
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
          </div>
        </div>

        {/* Дополнительные 3D эффекты */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            transform: `translateZ(50px)`,
          }}
        />
      </div>
    </div>
  );
}
