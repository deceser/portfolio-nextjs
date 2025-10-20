import { useDataStore } from '@/stores/data';

jest.mock('@/shared/data/projects', () => ({
  projects: [{ id: '1', title: 'Test Project' }],
}));

jest.mock('@/shared/data/reviews', () => ({
  reviews: [{ id: '1', name: 'Test Review' }],
}));

jest.mock('@/shared/data/contacts', () => ({
  contacts: [{ id: '1', name: 'Test Contact' }],
}));

describe('Data Store', () => {
  beforeEach(() => {
    localStorage.clear();
    useDataStore.setState({
      projects: [],
      reviews: [],
      contacts: [],
      loading: false,
      error: null,
    });
  });

  it('initializes with empty arrays', () => {
    const state = useDataStore.getState();
    expect(state.projects).toEqual([]);
    expect(state.reviews).toEqual([]);
    expect(state.contacts).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBeNull();
  });

  it('fetches projects', async () => {
    await useDataStore.getState().fetchProjects();
    const state = useDataStore.getState();
    expect(state.projects).toHaveLength(1);
    expect(state.projects[0].title).toBe('Test Project');
    expect(state.loading).toBe(false);
  });

  it('fetches reviews', async () => {
    await useDataStore.getState().fetchReviews();
    const state = useDataStore.getState();
    expect(state.reviews).toHaveLength(1);
    expect(state.reviews[0].name).toBe('Test Review');
    expect(state.loading).toBe(false);
  });

  it('fetches contacts', async () => {
    await useDataStore.getState().fetchContacts();
    const state = useDataStore.getState();
    expect(state.contacts).toHaveLength(1);
    expect(state.contacts[0].name).toBe('Test Contact');
    expect(state.loading).toBe(false);
  });

  it('sets projects directly', () => {
    const mockProjects = [{ id: '2', title: 'Direct Project' }] as any;
    useDataStore.getState().setProjects(mockProjects);
    expect(useDataStore.getState().projects).toEqual(mockProjects);
  });

  it('sets reviews directly', () => {
    const mockReviews = [{ id: '2', name: 'Direct Review' }] as any;
    useDataStore.getState().setReviews(mockReviews);
    expect(useDataStore.getState().reviews).toEqual(mockReviews);
  });

  it('sets contacts directly', () => {
    const mockContacts = [{ id: '2', name: 'Direct Contact' }] as any;
    useDataStore.getState().setContacts(mockContacts);
    expect(useDataStore.getState().contacts).toEqual(mockContacts);
  });
});
