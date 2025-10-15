// Zustand: stores global UI states
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UIState = {
  theme: 'system' | 'light' | 'dark';
  modal: string | null;
  sidebarOpen: boolean;
  setTheme: (t: UIState['theme']) => void;
  toggleSidebar: () => void;
  openModal: (id: string) => void;
  closeModal: () => void;
};

const getSystemDark = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;

const applyTheme = (theme: UIState['theme']) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const prefersDark = getSystemDark();
  root.classList.remove('dark', 'light');
  root.removeAttribute('data-theme');
  if (theme === 'dark' || (theme === 'system' && prefersDark)) {
    root.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    (root.style as any).colorScheme = 'dark';
  } else {
    root.classList.add('light');
    root.setAttribute('data-theme', 'light');
    (root.style as any).colorScheme = 'light';
  }
};

export const useUIStore = create<UIState>()(
  persist(
    (set, get) => ({
      theme: 'system',
      modal: null,
      sidebarOpen: false,
      setTheme: (t) => {
        set({ theme: t });
        applyTheme(t);
      },
      toggleSidebar: () => set({ sidebarOpen: !get().sidebarOpen }),
      openModal: (id) => set({ modal: id }),
      closeModal: () => set({ modal: null }),
    }),
    { name: 'ui-storage' },
  ),
);
