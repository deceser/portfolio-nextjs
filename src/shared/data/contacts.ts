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
    description: 'My projects and code',
    url: 'https://github.com/deceser',
    icon: GitHubIcon,
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    id: 2,
    name: 'Upwork',
    description: 'My Upwork profile',
    url: 'https://www.upwork.com/freelancers/~0182116cc42c5fde78',
    icon: UpworkIcon,

    color: 'text-green-500',
  },
  {
    id: 3,
    name: 'CV',
    description: 'My CV',
    url: 'https://drive.google.com/file/d/1I01Qp4ErXrpJJPhvlYdrVS3rBdFLtvoh/view?usp=sharing',
    icon: CvIcon,
    color: 'text-blue-500',
  },
];
