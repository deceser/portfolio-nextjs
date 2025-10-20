'use client';

import dynamic from 'next/dynamic';

const MatrixEasterEgg = dynamic(() => import('./MatrixEasterEgg'), {
  ssr: false,
});

export function MatrixEasterEggLazy({ children }: { children: React.ReactNode }) {
  return <MatrixEasterEgg>{children}</MatrixEasterEgg>;
}
