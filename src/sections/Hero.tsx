'use client';

import { Container, MotionFade, LiquidBackground } from '@/shared/ui';
import { PortalFrame } from '@/widgets/hero';

interface HeroProps {
  onInteractionChange?: (isInteracting: boolean) => void;
}

export function Hero({ onInteractionChange }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative py-4 md:py-20 xl:py-24 overflow-hidden md:min-h-screen flex items-center"
    >
      <LiquidBackground />

      <Container>
        <MotionFade>
          <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold tracking-tight gradient-text">
                  Denys Bezverkhyi
                </h1>
                <p className="mt-2 md:mt-3 text-sm md:text-base xl:text-lg text-muted">
                  JavaScript Developer
                </p>
                <p className="mt-4 md:mt-6 text-base md:text-lg xl:text-xl text-muted leading-relaxed">
                  I craft fast, accessible web and mobile apps with React/Next.js and Node.js.
                  Focused on clean UX, performance, and reliable delivery.
                </p>
                <div className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a
                    href="#projects"
                    className="liquid-button inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold min-h-touch"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact"
                    className="glass-card inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-fg hover:bg-glass-border transition-all duration-300 min-h-touch"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>

              <div className="order-1 md:order-2 w-full flex justify-center md:justify-end">
                <PortalFrame onInteractionChange={onInteractionChange} />
              </div>
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
