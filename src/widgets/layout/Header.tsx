'use client';

import { m, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container } from '@/shared/ui/Container';
import { Logo } from '@/widgets/layout';
import { MenuIcon } from '@/shared/icons/MenuIcon';
import { DragArrowIcon } from '@/shared/icons/DragArrowIcon';
import { useUIStore } from '@/stores/ui';

const ThemeToggle = dynamic(
  () => import('@/features/theme/ThemeToggle').then((mod) => ({ default: mod.ThemeToggle })),
  {
    ssr: false,
  },
);

export function Header() {
  const [isDesktop, setIsDesktop] = useState(false);
  const mobileMenuOpen = useUIStore((s) => s.mobileMenuOpen);
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu);
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);
  const dragY = useMotionValue(0);
  const headerHeight = useTransform(dragY, (y) => 64 + y);
  const arrowTop = useTransform(dragY, (y) => 64 + y);
  const contentOpacity = useTransform(dragY, [0, 150], [0, 1]);
  const contentScaleY = useTransform(dragY, [0, 150], [1, 1.5]);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <>
      <m.header
        className="glass-header fixed inset-x-0 top-0 z-50 md:overflow-hidden"
        style={{ height: isDesktop ? headerHeight : 'auto' }}
      >
        <Container>
          <m.div
            style={{ scaleY: isDesktop ? contentScaleY : 1, transformOrigin: 'top' }}
            className="flex h-16 items-center justify-between"
          >
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
          </m.div>
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

        {isDesktop && (
          <m.div style={{ opacity: contentOpacity }} className="text-center pt-4">
            <p className="text-sm">Hello World</p>
          </m.div>
        )}
      </m.header>

      <m.div
        style={{ top: arrowTop }}
        className="fixed inset-x-0 z-50 hidden md:flex justify-center py-2 pointer-events-none"
      >
        <m.div
          drag="y"
          dragDirectionLock
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
          onDrag={(_, info) => dragY.set(Math.max(0, Math.min(150, info.offset.y)))}
          onDragEnd={() => animate(dragY, 0, { type: 'spring', stiffness: 500, damping: 15 })}
          whileDrag={{ cursor: 'grabbing' }}
          className="cursor-grab pointer-events-auto"
        >
          <DragArrowIcon className="w-5 h-5 opacity-50" />
        </m.div>
      </m.div>
    </>
  );
}
