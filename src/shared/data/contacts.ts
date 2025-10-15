import { GitHubIcon } from '../icons/GitHubIcon';
import { UpworkIcon } from '../icons/UpworkIcon';
import { CvIcon } from '../icons/CvIcon';

export type Contact = {
  id: number;
  name: string;
  description: string;
  url: string;
  icon: React.FC<{ className?: string }>;
  color: string;
};

export const contacts: Contact[] = [
  {
    id: 1,
    name: 'GitHub',
    description: 'Мои проекты и код',
    url: 'https://github.com/deniskarediska',
    icon: GitHubIcon,
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    id: 2,
    name: 'Upwork',
    description: 'Мой профиль фрилансера',
    url: 'https://www.upwork.com/freelancers/~your-profile',
    icon: UpworkIcon,

    color: 'text-green-500',
  },
  {
    id: 3,
    name: 'CV',
    description: 'Мое резюме',
    url: 'https://drive.google.com/file/d/your-cv-link/view',
    icon: CvIcon,
    color: 'text-blue-500',
  },
];
