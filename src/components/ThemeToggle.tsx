'use client';
import { useTheme } from '@/lib/theme';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const base = 'rounded-md px-2.5 py-1 text-sm transition border hover:opacity-90';
  const styleFor = (active: boolean): React.CSSProperties =>
    active
      ? { background: 'var(--color-accent)', color: '#fff', borderColor: 'transparent' }
      : {
          background: 'var(--color-card)',
          color: 'var(--color-fg)',
          borderColor: 'var(--color-border)',
        };

  return (
    // Замените блок ниже на свой UI (иконки/тумблер), сохранив вызовы setTheme
    <div className="inline-flex items-center gap-1">
      <button
        aria-label="System theme"
        type="button"
        aria-pressed={theme === 'system'}
        onClick={() => setTheme('system')}
        className={base}
        style={styleFor(theme === 'system')}
      >
        System
      </button>
      <button
        aria-label="Light theme"
        type="button"
        aria-pressed={theme === 'light'}
        onClick={() => setTheme('light')}
        className={base}
        style={styleFor(theme === 'light')}
      >
        Light
      </button>
      <button
        aria-label="Dark theme"
        type="button"
        aria-pressed={theme === 'dark'}
        onClick={() => setTheme('dark')}
        className={base}
        style={styleFor(theme === 'dark')}
      >
        Dark
      </button>
    </div>
  );
}
