import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';

export function Hero() {
  return (
    <section id="hero" className="relative py-32 overflow-hidden">
      <LiquidBackground />

      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl gradient-text">
              Денис Каредиска
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-muted leading-relaxed">
              Frontend разработчик, создающий современные веб-приложения с фокусом на
              пользовательский опыт и производительность
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="liquid-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Смотреть проекты
              </a>
              <a
                href="#contact"
                className="glass-card inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-fg hover:bg-glass-border transition-all duration-300"
              >
                Связаться
              </a>
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
