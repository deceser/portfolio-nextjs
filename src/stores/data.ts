// Zustand: stores loading and cache data (entities)
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Project } from '@/shared/data/projects';
import type { Review } from '@/shared/data/reviews';
import type { Contact } from '@/shared/data/contacts';

type DataState = {
  projects: Project[];
  reviews: Review[];
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  fetchProjects: () => Promise<void>;
  fetchContacts: () => Promise<void>;
  setProjects: (items: Project[]) => void;
  fetchReviews: () => Promise<void>;
  setReviews: (items: Review[]) => void;
  setContacts: (items: Contact[]) => void;
};

// demo: we take local data as "source"
export const useDataStore = create<DataState>()(
  persist(
    (set) => ({
      projects: [],
      reviews: [],
      contacts: [],
      loading: false,
      error: null,
      setProjects: (items) => set({ projects: items }),
      setReviews: (items) => set({ reviews: items }),
      setContacts: (items) => set({ contacts: items }),

      fetchProjects: async () => {
        try {
          set({ loading: true, error: null });
          const { projects } = await import('@/shared/data/projects');
          set({ projects, loading: false });
        } catch (e) {
          set({ error: 'Failed to load projects', loading: false });
        }
      },

      fetchContacts: async () => {
        try {
          set({ loading: true, error: null });
          const { contacts } = await import('@/shared/data/contacts');
          set({ contacts, loading: false });
        } catch (e) {
          set({ error: 'Failed to load contacts', loading: false });
        }
      },

      fetchReviews: async () => {
        try {
          set({ loading: true, error: null });
          const { reviews } = await import('@/shared/data/reviews');
          set({ reviews, loading: false });
        } catch (e) {
          set({ error: 'Failed to load reviews', loading: false });
        }
      },
    }),
    {
      name: 'data-storage',
      partialize: (state) => ({ projects: state.projects, reviews: state.reviews }),
    },
  ),
);
