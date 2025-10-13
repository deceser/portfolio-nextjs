import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';

const contacts = [
  {
    id: 1,
    name: 'GitHub',
    description: 'Мои проекты и код',
    url: 'https://github.com/deniskarediska',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'text-gray-800 dark:text-gray-200',
  },
  {
    id: 2,
    name: 'Upwork',
    description: 'Мой профиль фрилансера',
    url: 'https://www.upwork.com/freelancers/~your-profile',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.266-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.392H0v7.112c0 2.914 2.37 5.284 5.284 5.284 2.913 0 5.283-2.37 5.283-5.284v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3.028 0 5.49-2.463 5.49-5.49 0-3.028-2.463-5.491-5.49-5.491z" />
      </svg>
    ),
    color: 'text-green-500',
  },
  {
    id: 3,
    name: 'CV',
    description: 'Мое резюме',
    url: 'https://drive.google.com/file/d/your-cv-link/view',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
        <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
      </svg>
    ),
    color: 'text-blue-500',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <LiquidBackground className="opacity-40" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">Контакты</h2>
            <p className="text-lg text-muted mb-12">Свяжитесь со мной через эти платформы</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`${contact.color} mb-4 flex justify-center`}>{contact.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
                  <p className="text-muted">{contact.description}</p>
                </a>
              ))}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
