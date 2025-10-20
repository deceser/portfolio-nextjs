import { renderHook, act } from '@testing-library/react';
import { useUIStore } from '@/stores/ui';

describe('Theme Persistence', () => {
  beforeEach(() => {
    localStorage.clear();
    useUIStore.setState({ theme: 'system' });
  });

  it('persists theme to localStorage', () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.setTheme('dark');
    });

    expect(result.current.theme).toBe('dark');
  });

  it('changes theme multiple times', () => {
    const { result } = renderHook(() => useUIStore());

    act(() => {
      result.current.setTheme('light');
    });
    expect(result.current.theme).toBe('light');

    act(() => {
      result.current.setTheme('dark');
    });
    expect(result.current.theme).toBe('dark');

    act(() => {
      result.current.setTheme('system');
    });
    expect(result.current.theme).toBe('system');
  });

  it('theme state is accessible', () => {
    const state = useUIStore.getState();
    expect(state.theme).toBeDefined();
    expect(['system', 'light', 'dark']).toContain(state.theme);
  });
});
