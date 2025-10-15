import { Container, MotionFade, LiquidBackground } from '@/shared/ui';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <LiquidBackground className="opacity-50" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">О себе</h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
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

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-muted">Years of Experience</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-muted">Projects</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-muted">Quality</div>
              </div>
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
