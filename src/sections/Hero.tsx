import { Container, MotionFade, LiquidBackground } from '@/shared/ui';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative py-4 md:py-20 xl:py-24 overflow-hidden md:min-h-screen flex items-center"
    >
      <LiquidBackground />

      <Container>
        <MotionFade>
          <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold tracking-tight gradient-text">
              Denis Karediska
            </h1>
            <p className="mt-4 md:mt-6 max-w-2xl text-base md:text-lg xl:text-xl text-muted leading-relaxed">
              Frontend developer creating modern web applications with focus on user experience and
              performance
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
        </MotionFade>
      </Container>
    </section>
  );
}
