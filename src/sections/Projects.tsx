import Image from 'next/image';
import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';
import { ExternalLinkIcon } from '@/components/ExternalLinkIcon';
import { GitHubIcon } from '@/components/GitHubIcon';
import { projects } from '@/lib/projects';

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
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="group glass-card overflow-hidden transition-all duration-300 hover:scale-105"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
                    <p className="text-muted mb-4">{p.description}</p>

                    <div className="flex gap-3">
                      {p.href && (
                        <a
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                          Проект
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-button flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-lg text-sm font-medium transition-all duration-300 hover:from-gray-800 hover:to-gray-900 hover:scale-105 hover:shadow-lg"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
