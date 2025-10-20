'use client';

import { motion, useDragControls } from 'framer-motion';
import { useRef } from 'react';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Reviews } from '@/sections/Reviews';
import { Contact } from '@/sections/Contact';

const DraggableSection = ({
  children,
  constraintsRef,
}: {
  children: React.ReactNode;
  constraintsRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const controls = useDragControls();
  const sectionRef = useRef<HTMLDivElement>(null);
  let pressTimer: ReturnType<typeof setTimeout> | null = null;

  const onDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    const glassCard = target.closest('.glass-card');
    if (!glassCard) return;

    e.stopPropagation();
    pressTimer = setTimeout(() => controls.start(e), 300);
  };

  const onUpOrLeave = () => {
    if (pressTimer) clearTimeout(pressTimer);
  };

  return (
    <motion.div
      ref={sectionRef}
      drag
      dragControls={controls}
      dragListener={false}
      dragElastic={0}
      dragMomentum={false}
      onPointerDown={onDown}
      onPointerUp={onUpOrLeave}
      onPointerLeave={onUpOrLeave}
      className="[&_.glass-card]:cursor-grab [&_.glass-card]:active:cursor-grabbing"
    >
      {children}
    </motion.div>
  );
};

export const SectionsDraggable = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={constraintsRef}>
      <DraggableSection constraintsRef={constraintsRef}>
        <Hero />
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <About />
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Skills />
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Projects />
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Reviews />
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Contact />
      </DraggableSection>
    </motion.div>
  );
};
