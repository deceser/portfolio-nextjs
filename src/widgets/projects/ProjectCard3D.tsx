'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { m, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLinkIcon } from '@/shared/icons/ExternalLinkIcon';
import { GitHubIcon } from '@/shared/icons/GitHubIcon';
import type { Project } from '@/shared/data/projects';

interface ProjectCard3DProps {
  project: Project;
}

export function ProjectCard3D({ project }: ProjectCard3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(springY, [-100, 100], [15, -15]);
  const rotateY = useTransform(springX, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isTouchDevice) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const maxRotation = 15;
    const clampedX = Math.max(-maxRotation, Math.min(maxRotation, mouseX / 10));
    const clampedY = Math.max(-maxRotation, Math.min(maxRotation, mouseY / 10));

    setMousePosition({ x: clampedX, y: clampedY });
    x.set(mouseX * 0.1);
    y.set(mouseY * 0.1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    if (!isTouchDevice) setIsHovered(true);
  };

  return (
    <m.div
      ref={cardRef}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: isTouchDevice ? 'none' : '1000px',
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <m.div
        className={`glass-card-3d overflow-hidden transition-all duration-500 ease-out ${isTouchDevice ? 'shadow-none' : ''}`}
        style={{
          x: isTouchDevice ? 0 : springX,
          y: isTouchDevice ? 0 : springY,
          rotateX: isHovered && !isTouchDevice ? rotateX : 0,
          rotateY: isHovered && !isTouchDevice ? rotateY : 0,
          transformStyle: isTouchDevice ? 'flat' : 'preserve-3d',
        }}
        whileHover={isTouchDevice ? {} : { scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <m.div
          className="relative aspect-[16/10] w-full overflow-hidden"
          style={{ transform: 'translateZ(30px)' }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            className="object-cover transition duration-700 group-hover:scale-110"
          />
          <m.div
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{ transform: 'translateZ(40px)' }}
          />

          <m.div
            className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full"
            animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            style={{ transform: 'translateZ(50px)' }}
          />
          <m.div
            className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full"
            animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            style={{ transform: 'translateZ(50px)' }}
          />
        </m.div>

        <m.div
          className="p-4 md:p-6 relative"
          style={{ transform: isTouchDevice ? 'none' : 'translateZ(20px)' }}
        >
          <m.h3
            className="font-semibold text-base md:text-lg mb-2"
            style={{ transform: isTouchDevice ? 'none' : 'translateZ(10px)' }}
            whileHover={isTouchDevice ? {} : { scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {project.title}
          </m.h3>
          <m.p
            className="text-muted mb-4 text-sm md:text-base"
            style={{ transform: isTouchDevice ? 'none' : 'translateZ(5px)' }}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          >
            {project.description}
          </m.p>

          <m.div
            className={`flex gap-2 md:gap-3 ${!project.href || !project.github ? 'flex-col' : 'flex-row'}`}
            style={{ transform: isTouchDevice ? 'none' : 'translateZ(15px)' }}
            initial={isTouchDevice ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            animate={
              isTouchDevice
                ? { y: 0, opacity: 1 }
                : { y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }
            }
            transition={{
              duration: 0.3,
              delay: isHovered ? 0.1 : 0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {project.href && (
              <m.a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-button-3d flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg min-h-touch ${!project.href || !project.github ? 'w-full' : 'flex-1'}`}
                style={{ transform: isTouchDevice ? 'none' : 'translateZ(20px)' }}
                whileHover={isTouchDevice ? {} : { scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Проект
              </m.a>
            )}
            {project.github && (
              <m.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-button-3d flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:from-gray-800 hover:to-gray-900 hover:scale-105 hover:shadow-lg min-h-touch ${!project.href || !project.github ? 'w-full' : 'flex-1'}`}
                style={{ transform: isTouchDevice ? 'none' : 'translateZ(20px)' }}
                whileHover={isTouchDevice ? {} : { scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </m.a>
            )}
          </m.div>
        </m.div>

        <m.div
          className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ transform: 'translateZ(50px)' }}
        />
        <m.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ transform: 'translateZ(60px)' }}
        />
      </m.div>
    </m.div>
  );
}
