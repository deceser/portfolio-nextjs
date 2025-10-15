'use client';
import { useUIStore } from '@/stores/ui';

export function ThemeToggle() {
  const theme = useUIStore((s) => s.theme);
  const setTheme = useUIStore((s) => s.setTheme);

  return (
    <div className="glass-card p-1 inline-flex items-center gap-1 liquid-button bg-none">
      <button
        aria-label="System theme"
        type="button"
        aria-pressed={theme === 'system'}
        onClick={() => setTheme('system')}
        className={`px-3 py-1.5 text-sm font-medium rounded-liquid transition-all duration-300 ${
          theme === 'system'
            ? 'bg-gradient-accent text-accent-solid shadow-liquid'
            : 'text-muted hover:text-fg hover:bg-glass-border'
        }`}
      >
        System
      </button>
      <button
        aria-label="Light theme"
        type="button"
        aria-pressed={theme === 'light'}
        onClick={() => setTheme('light')}
        className={`px-3 py-1.5 text-sm font-medium rounded-liquid transition-all duration-300 ${
          theme === 'light'
            ? 'bg-gradient-accent text-accent-solid shadow-liquid'
            : 'text-muted hover:text-fg hover:bg-glass-border'
        }`}
      >
        Light
      </button>
      <button
        aria-label="Dark theme"
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => setTheme('dark')}
        className={`px-3 py-1.5 text-sm font-medium rounded-liquid transition-all duration-300 ${
          theme === 'dark'
            ? 'bg-gradient-accent text-accent-solid shadow-liquid'
            : 'text-muted hover:text-fg hover:bg-glass-border'
        }`}
      >
        Dark
      </button>
    </div>
  );
}
