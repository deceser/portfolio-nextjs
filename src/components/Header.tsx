import Link from 'next/link';
import { Container } from '@/components/Container';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-bg/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#hero" className="text-base">
          <Logo />
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="#about" className="hover:opacity-80">
            О себе
          </Link>
          <Link href="#projects" className="hover:opacity-80">
            Проекты
          </Link>
          <Link href="#contact" className="hover:opacity-80">
            Контакты
          </Link>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
