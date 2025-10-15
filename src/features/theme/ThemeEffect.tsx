'use client';
import { useEffect } from 'react';
import { useUIStore } from '@/stores/ui';

export function ThemeEffect() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const s = useUIStore.getState();
      if (s.theme === 'system') s.setTheme('system');
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return null;
}
