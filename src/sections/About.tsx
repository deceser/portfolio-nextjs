import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <LiquidBackground className="opacity-50" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">О себе</h2>
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                Я специализируюсь на создании современных веб-приложений с использованием React,
                Next.js и TypeScript. Мой опыт включает разработку высокопроизводительных
                пользовательских интерфейсов и интеграцию с различными API.
              </p>
              <p>
                Особое внимание уделяю доступности, производительности и современным стандартам
                веб-разработки. Постоянно изучаю новые технологии и применяю их в проектах для
                создания лучшего пользовательского опыта.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">3+</div>
                <div className="text-muted">Года опыта</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">20+</div>
                <div className="text-muted">Проектов</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">100%</div>
                <div className="text-muted">Качество</div>
              </div>
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
