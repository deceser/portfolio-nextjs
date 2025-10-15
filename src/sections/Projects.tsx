import { Container, MotionFade, LiquidBackground } from '@/shared/ui';
import { ProjectCard3D } from '@/widgets/projects/ProjectCard3D';
import { projects } from '@/shared/data';

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <LiquidBackground className="opacity-30" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">Portfolio</h2>
            <p className="text-lg text-muted mb-12">My latest projects and work</p>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard3D key={project.id} project={project} />
              ))}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
