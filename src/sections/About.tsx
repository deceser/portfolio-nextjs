import { Container, MotionFade, LiquidBackground } from '@/shared/ui';

export function About() {
  return (
    <section id="about" className="py-8 md:py-20 xl:py-24 relative">
      <LiquidBackground className="opacity-50" />
      <Container>
        <MotionFade>
          <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text mb-6 md:mb-8">
              About me
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted leading-relaxed">
              <p>
                I specialize in creating modern web applications using React, Next.js and
                TypeScript. My experience includes developing high-performance user interfaces and
                integrating with various APIs.
              </p>
              <p>
                I pay special attention to accessibility, performance and modern standards of web
                development. I constantly study new technologies and apply them in projects to
                create better user experience.
              </p>
            </div>

            <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              <div className="glass-card p-5 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-sm md:text-base text-muted">Years of Experience</div>
              </div>
              <div className="glass-card p-5 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-sm md:text-base text-muted">Projects</div>
              </div>
              <div className="glass-card p-5 md:p-6 text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-sm md:text-base text-muted">Quality</div>
              </div>
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
