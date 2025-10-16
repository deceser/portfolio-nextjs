import { Container, MotionFade, LiquidBackground } from '@/shared/ui';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
} from 'react-icons/si';

const skills = [
  { name: 'React', level: 95, icon: SiReact },
  { name: 'Next.js', level: 90, icon: SiNextdotjs },
  { name: 'TypeScript', level: 88, icon: SiTypescript },
  { name: 'JavaScript', level: 92, icon: SiJavascript },
  { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss },
  { name: 'Node.js', level: 75, icon: SiNodedotjs },
  { name: 'Git', level: 80, icon: SiGit },
  { name: 'Figma', level: 70, icon: SiFigma },
];

export function Skills() {
  return (
    <section id="skills" className="py-8 md:py-20 xl:py-24 relative">
      <LiquidBackground className="opacity-20" />
      <Container>
        <MotionFade>
          <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text mb-6 md:mb-8">
              Skills
            </h2>
            <p className="text-base md:text-lg text-muted mb-8 md:mb-12">
              Technologies and tools I work with
            </p>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
              {skills.map((skill) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="glass-card p-3 md:p-6 text-center group hover:scale-105 transition-transform duration-300"
                  >
                    {/* Мобильная версия - только иконки */}
                    <div className="md:hidden flex flex-col items-center justify-center h-full">
                      <IconComponent className="text-2xl text-primary" />
                    </div>

                    {/* Десктопная версия - полная информация */}
                    <div className="hidden md:block">
                      <div className="text-xl md:text-2xl font-bold gradient-text mb-2">
                        {skill.name}
                      </div>
                      <div className="w-full bg-glass-border rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="text-xs md:text-sm text-muted">{skill.level}%</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
