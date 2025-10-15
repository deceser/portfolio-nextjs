// Zustand: stores application settings
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type SettingsState = {
  language: 'en' | 'ru';
  animations: boolean;
  setLanguage: (l: SettingsState['language']) => void;
  toggleAnimations: () => void;
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      language: 'en',
      animations: true,
      setLanguage: (l) => set({ language: l }),
      toggleAnimations: () => set({ animations: !get().animations }),
    }),
    { name: 'settings-storage' },
  ),
);
