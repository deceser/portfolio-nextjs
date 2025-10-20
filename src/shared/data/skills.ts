import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiVuedotjs,
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

export type SkillItem = {
  name: string;
  icon: React.FC<{ className?: string }>;
};

export type Skill = {
  title: string;
  items: SkillItem[];
};

export const skills: Skill[] = [
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
