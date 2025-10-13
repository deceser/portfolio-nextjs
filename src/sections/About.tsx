import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';

export function About() {
  return (
    <section id="about" className="py-24">
      <Container>
        <MotionFade>
          <h2 className="text-2xl font-semibold tracking-tight">О себе</h2>
          <p className="mt-4 max-w-3xl text-muted">/* TODO: Заполнить имя и описание */</p>
        </MotionFade>
      </Container>
    </section>
  );
}
