import { Container, MotionFade, LiquidBackground } from '@/shared/ui';
import { skills } from '@/shared/data/skills';

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

            <div className="space-y-6 md:space-y-8">
              {skills.map((skill) => (
                <div key={skill.title}>
                  <h3 className="font-semibold mb-3 md:mb-4">{skill.title}</h3>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {skill.items.map((skillItem) => {
                      const IconComponent = skillItem.icon;
                      return (
                        <div
                          key={skillItem.name}
                          className="glass-card p-3 md:p-6 text-center group hover:scale-105 transition-transform duration-300"
                        >
                          <div className="md:hidden flex flex-col items-center justify-center h-full">
                            <IconComponent className="text-2xl text-primary" />
                          </div>

                          <div className="hidden md:flex flex-col items-center justify-center">
                            <IconComponent className="text-3xl text-primary mb-2" />
                            <div className="text-xl md:text-2xl font-bold gradient-text">
                              {skillItem.name}
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
