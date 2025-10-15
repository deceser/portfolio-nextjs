import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';

const skills = [
  { name: 'React', level: 95 },
  { name: 'Next.js', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'JavaScript', level: 92 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Git', level: 80 },
  { name: 'Figma', level: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <LiquidBackground className="opacity-20" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">Skills</h2>
            <p className="text-lg text-muted mb-12">Technologies and tools I work with</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl font-bold gradient-text mb-2">{skill.name}</div>
                  <div className="w-full bg-glass-border rounded-full h-2 mb-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted">{skill.level}%</div>
                </div>
              ))}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
