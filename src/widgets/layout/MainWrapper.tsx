'use client';

import { useUIStore } from '@/stores/ui';

export function MainWrapper({ children }: { children: React.ReactNode }) {
  const mobileMenuOpen = useUIStore((s) => s.mobileMenuOpen);

  return (
    <main
      className="pt-16 transition-all duration-300 ease-in-out"
      style={{
        marginTop: mobileMenuOpen ? '220px' : '0',
      }}
    >
      {children}
    </main>
  );
}
