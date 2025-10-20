'use client';

import { m, useDragControls } from 'framer-motion';
import { useRef, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { SectionSkeleton, ProjectsSkeleton, ReviewsSkeleton, ContactsSkeleton } from '@/shared/ui';

const Hero = dynamic(() => import('@/sections/Hero').then((mod) => ({ default: mod.Hero })), {
  loading: () => <SectionSkeleton />,
});
const About = dynamic(() => import('@/sections/About').then((mod) => ({ default: mod.About })), {
  loading: () => <SectionSkeleton />,
});
const Skills = dynamic(() => import('@/sections/Skills').then((mod) => ({ default: mod.Skills })), {
  loading: () => <SectionSkeleton />,
});
const Projects = dynamic(
  () => import('@/sections/Projects').then((mod) => ({ default: mod.Projects })),
  { loading: () => <ProjectsSkeleton /> },
);
const Reviews = dynamic(
  () => import('@/sections/Reviews').then((mod) => ({ default: mod.Reviews })),
  { loading: () => <ReviewsSkeleton /> },
);
const Contact = dynamic(
  () => import('@/sections/Contact').then((mod) => ({ default: mod.Contact })),
  { loading: () => <ContactsSkeleton /> },
);

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
    <m.div
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
    </m.div>
  );
};

export const SectionsDraggable = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <m.div ref={constraintsRef}>
      <DraggableSection constraintsRef={constraintsRef}>
        <Suspense fallback={<SectionSkeleton />}>
          <Hero />
        </Suspense>
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Suspense fallback={<SectionSkeleton />}>
          <Skills />
        </Suspense>
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Suspense fallback={<ProjectsSkeleton />}>
          <Projects />
        </Suspense>
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Suspense fallback={<ReviewsSkeleton />}>
          <Reviews />
        </Suspense>
      </DraggableSection>
      <DraggableSection constraintsRef={constraintsRef}>
        <Suspense fallback={<ContactsSkeleton />}>
          <Contact />
        </Suspense>
      </DraggableSection>
    </m.div>
  );
};
