'use client';

import { useEffect } from 'react';
import { useDataStore } from '@/stores/data';
import { ProjectCard3D } from '@/widgets/projects/ProjectCard3D';
import { Container, MotionFade, LiquidBackground, ProjectCardSkeleton } from '@/shared/ui';

export function Projects() {
  const projects = useDataStore((s) => s.projects);
  const loading = useDataStore((s) => s.loading);
  const fetchProjects = useDataStore((s) => s.fetchProjects);

  useEffect(() => {
    if (projects.length === 0) fetchProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="projects" className="py-8 md:py-20 xl:py-24 relative">
      <LiquidBackground className="opacity-30" />
      <Container>
        <MotionFade>
          <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text mb-6 md:mb-8">
              Portfolio
            </h2>
            <p className="text-base md:text-lg text-muted mb-8 md:mb-12">
              My latest projects and work
            </p>

            {loading ? (
              <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 space-y-4 md:space-y-0">
                {[...Array(6)].map((_, i) => (
                  <ProjectCardSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div
                id="stacking-cards-container"
                className="scrollbar-hide md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0"
              >
                {projects.map((project, index) => (
                  <div
                    key={project.id}
                    className="stacking-card-wrapper md:w-auto"
                    style={
                      {
                        '--index': index + 1,
                        '--reverse-index': projects.length - index,
                      } as React.CSSProperties
                    }
                  >
                    <div className="stacking-card-content">
                      <ProjectCard3D project={project} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
