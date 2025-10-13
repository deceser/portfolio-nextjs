import Image from 'next/image';
import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { projects } from '@/lib/projects';

export function Projects() {
  return (
    <section id="projects" className="border-y border-border/60 py-24">
      <Container>
        <MotionFade>
          <h2 className="text-2xl font-semibold tracking-tight">Портфолио / проекты</h2>
          <p className="mt-4 text-muted">/* TODO: Добавить проекты */</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((p) => (
              <a
                key={p.id}
                href={p.href ?? '#'}
                className="group block overflow-hidden rounded-lg border border-border/60 bg-card shadow-sm transition hover:shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
