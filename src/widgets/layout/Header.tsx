'use client';

import Link from 'next/link';
import { Container } from '@/shared/ui/Container';
import { ThemeToggle } from '@/features/theme';
import { Logo } from '@/widgets/layout';
import { MenuIcon } from '@/shared/icons/MenuIcon';
import { useUIStore } from '@/stores/ui';

export function Header() {
  const mobileMenuOpen = useUIStore((s) => s.mobileMenuOpen);
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu);
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <header className="glass-header fixed inset-x-0 top-0 z-50">
      <Container className="flex h-16 items-center justify-between">
        <Link href="#hero" data-logo>
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Link
            href="#about"
            className="glass-card px-4 py-2 text-sm font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent min-h-touch"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="glass-card px-4 py-2 text-sm font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent min-h-touch"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="glass-card px-4 py-2 text-sm font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent min-h-touch"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="glass-card p-2 rounded-liquid min-h-touch min-w-touch flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <MenuIcon isOpen={mobileMenuOpen} />
          </button>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div className="md:hidden glass-card mx-4 my-3 rounded-liquid animate-slide-down">
          <nav className="flex flex-col p-4 gap-2">
            <Link
              href="#about"
              onClick={handleLinkClick}
              className="glass-card px-4 py-3 text-base font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent min-h-touch"
            >
              About
            </Link>
            <Link
              href="#projects"
              onClick={handleLinkClick}
              className="glass-card px-4 py-3 text-base font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent min-h-touch"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              onClick={handleLinkClick}
              className="glass-card px-4 py-3 text-base font-medium rounded-liquid transition-all duration-300 hover:bg-glass-border hover:text-accent min-h-touch"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
