import { useUIStore } from '@/stores/ui';

describe('UI Store', () => {
  beforeEach(() => {
    localStorage.clear();
    useUIStore.setState({
      theme: 'system',
      modal: null,
      sidebarOpen: false,
      mobileMenuOpen: false,
    });
  });

  it('initializes with default values', () => {
    const state = useUIStore.getState();
    expect(state.theme).toBe('system');
    expect(state.modal).toBeNull();
    expect(state.sidebarOpen).toBe(false);
    expect(state.mobileMenuOpen).toBe(false);
  });

  it('sets theme', () => {
    useUIStore.getState().setTheme('dark');
    expect(useUIStore.getState().theme).toBe('dark');
  });

  it('toggles sidebar', () => {
    const { toggleSidebar } = useUIStore.getState();
    expect(useUIStore.getState().sidebarOpen).toBe(false);
    toggleSidebar();
    expect(useUIStore.getState().sidebarOpen).toBe(true);
    toggleSidebar();
    expect(useUIStore.getState().sidebarOpen).toBe(false);
  });

  it('toggles mobile menu', () => {
    const { toggleMobileMenu } = useUIStore.getState();
    expect(useUIStore.getState().mobileMenuOpen).toBe(false);
    toggleMobileMenu();
    expect(useUIStore.getState().mobileMenuOpen).toBe(true);
  });

  it('sets mobile menu state', () => {
    useUIStore.getState().setMobileMenuOpen(true);
    expect(useUIStore.getState().mobileMenuOpen).toBe(true);
    useUIStore.getState().setMobileMenuOpen(false);
    expect(useUIStore.getState().mobileMenuOpen).toBe(false);
  });

  it('opens and closes modal', () => {
    const { openModal, closeModal } = useUIStore.getState();
    openModal('test-modal');
    expect(useUIStore.getState().modal).toBe('test-modal');
    closeModal();
    expect(useUIStore.getState().modal).toBeNull();
  });
});
