import { Container, MotionFade, LiquidBackground } from '@/shared/ui';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMui,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiExpress,
  SiFramer,
  SiRedux,
} from 'react-icons/si';
import { GiBearHead } from 'react-icons/gi';
import { TbApi } from 'react-icons/tb';
import { MdDataObject } from 'react-icons/md';
import { RiKey2Line } from 'react-icons/ri';

const groups = [
  {
    title: 'Front-end',
    items: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Vue', icon: SiVuedotjs },
      { name: 'Redux', icon: SiRedux },
      { name: 'Zustand', icon: GiBearHead },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss3 },
      { name: 'MUI', icon: SiMui },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Framer Motion', icon: SiFramer },
    ],
  },
  {
    title: 'Mobile',
    items: [{ name: 'React Native', icon: SiReact }],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST API', icon: TbApi },
      { name: 'CRUD', icon: MdDataObject },
      { name: 'JWT Auth', icon: RiKey2Line },
    ],
  },
  {
    title: 'Databases & Data stores',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'Firebase', icon: SiFirebase },
    ],
  },
  {
    title: 'Deployment',
    items: [{ name: 'Vercel', icon: SiVercel }],
  },
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

            <div className="space-y-6 md:space-y-8">
              {groups.map((group) => (
                <div key={group.title}>
                  <h3 className="font-semibold mb-3 md:mb-4">{group.title}</h3>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {group.items.map((skill) => {
                      const IconComponent = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="glass-card p-3 md:p-6 text-center group hover:scale-105 transition-transform duration-300"
                        >
                          <div className="md:hidden flex flex-col items-center justify-center h-full">
                            <IconComponent className="text-2xl text-primary" />
                          </div>

                          <div className="hidden md:flex flex-col items-center justify-center">
                            <IconComponent className="text-3xl text-primary mb-2" />
                            <div className="text-xl md:text-2xl font-bold gradient-text">
                              {skill.name}
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
