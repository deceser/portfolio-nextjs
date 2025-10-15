export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description:
      'Современная платформа для онлайн-торговли с интеграцией платежных систем и управлением складом.',
    image: '/api/placeholder/400/250',
    href: 'https://example-ecommerce.com',
    github: 'https://github.com/user/ecommerce-platform',
  },
  {
    id: '2',
    title: 'Task Management App',
    description:
      'Приложение для управления задачами с командной работой, уведомлениями и аналитикой.',
    image: '/api/placeholder/400/250',
    href: 'https://example-tasks.com',
    github: 'https://github.com/user/task-manager',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Интерактивная панель погоды с прогнозами, картами и историческими данными.',
    image: '/api/placeholder/400/250',
    href: 'https://example-weather.com',
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Инструмент для анализа социальных сетей с визуализацией данных и отчетностью.',
    image: '/api/placeholder/400/250',
    github: 'https://github.com/user/social-analytics',
  },
  {
    id: '5',
    title: 'Portfolio Website',
    description: 'Персональный сайт-портфолио с анимациями и адаптивным дизайном.',
    image: '/api/placeholder/400/250',
    href: 'https://example-portfolio.com',
    github: 'https://github.com/user/portfolio',
  },
  {
    id: '6',
    title: 'Chat Application',
    description: 'Веб-приложение для обмена сообщениями в реальном времени с групповыми чатами.',
    image: '/api/placeholder/400/250',
    href: 'https://example-chat.com',
    github: 'https://github.com/user/chat-app',
  },
];
