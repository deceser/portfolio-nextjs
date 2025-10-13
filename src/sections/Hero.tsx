import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';

export function Hero() {
  return (
    <section id="hero" className="border-b border-border/60 py-24">
      <Container>
        <MotionFade>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            /* TODO: Заполнить имя и описание */
          </h1>
          <p className="mt-4 max-w-2xl text-muted">/* TODO: Заполнить имя и описание */</p>
          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="rounded-md bg-accent px-5 py-2 text-white shadow hover:opacity-90"
            >
              Смотреть проекты
            </a>
            <a href="#contact" className="rounded-md border border-border px-5 py-2 hover:bg-elev">
              Связаться
            </a>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
