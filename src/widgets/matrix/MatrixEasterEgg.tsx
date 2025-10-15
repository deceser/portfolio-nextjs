'use client';

import { useEffect, useRef, useState } from 'react';
import { useUIStore } from '@/stores/ui';
import MatrixRain from '@/widgets/matrix/MatrixRain';
import MatrixAudio from '@/widgets/matrix/MatrixAudio';
import MatrixCursor from '@/widgets/matrix/MatrixCursor';

interface MatrixEasterEggProps {
  children: React.ReactNode;
}

export default function MatrixEasterEgg({ children }: MatrixEasterEggProps) {
  const isMatrixMode = useUIStore((s) => s.modal === 'matrix');
  const openModal = useUIStore((s) => s.openModal);
  const closeModal = useUIStore((s) => s.closeModal);
  const [keySequence, setKeySequence] = useState('');
  const logoClickCount = useRef(0);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newSequence = keySequence + e.key.toLowerCase();
      setKeySequence(newSequence.slice(-5));

      if (newSequence.includes('idkfa')) {
        openModal('matrix');
        setKeySequence('');
      }
    };

    const handleLogoClick = () => {
      logoClickCount.current++;
      if (logoClickCount.current >= 3) {
        openModal('matrix');
        logoClickCount.current = 0;
      }

      setTimeout(() => {
        logoClickCount.current = 0;
      }, 2000);
    };

    document.addEventListener('keydown', handleKeyPress);

    const logo = document.querySelector('[data-logo]');
    if (logo) {
      logo.addEventListener('click', handleLogoClick);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      if (logo) {
        logo.removeEventListener('click', handleLogoClick);
      }
    };
  }, [keySequence]);

  useEffect(() => {
    if (isMatrixMode) {
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        closeModal();
        document.body.style.overflow = '';
      }, 10000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [isMatrixMode]);

  return (
    <>
      {children}
      <MatrixRain />
      <MatrixAudio />
      <MatrixCursor />
      {isMatrixMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="text-green-400 font-mono text-2xl animate-pulse">
            Welcome to the Matrix...
          </div>
        </div>
      )}
    </>
  );
}
