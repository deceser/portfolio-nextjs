import Link from 'next/link';
import { Container } from '@/components/Container';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Logo } from '@/components/Logo';

export function Header() {
  return (
    <header className="glass-header fixed inset-x-0 top-0 z-50">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#hero" data-logo>
          <Logo />
        </Link>
        <nav className="flex items-center gap-2">
          <Link
            href="#about"
            className="glass-card px-4 py-2 text-sm font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="glass-card px-4 py-2 text-sm font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="glass-card px-4 py-2 text-sm font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </Container>
    </header>
  );
}
