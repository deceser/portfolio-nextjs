import { useSettingsStore } from '@/stores/settings';

describe('Settings Store', () => {
  beforeEach(() => {
    localStorage.clear();
    useSettingsStore.setState({
      language: 'en',
      animations: true,
    });
  });

  it('initializes with default values', () => {
    const state = useSettingsStore.getState();
    expect(state.language).toBe('en');
    expect(state.animations).toBe(true);
  });

  it('sets language', () => {
    useSettingsStore.getState().setLanguage('ru');
    expect(useSettingsStore.getState().language).toBe('ru');
  });

  it('toggles animations', () => {
    const { toggleAnimations } = useSettingsStore.getState();
    expect(useSettingsStore.getState().animations).toBe(true);
    toggleAnimations();
    expect(useSettingsStore.getState().animations).toBe(false);
    toggleAnimations();
    expect(useSettingsStore.getState().animations).toBe(true);
  });
});
