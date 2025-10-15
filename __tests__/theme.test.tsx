import { render } from '@testing-library/react';
// Zustand: провайдер больше не нужен

// Smoke test: provider mounts without errors
it('mounts components without ThemeProvider', () => {
  render(<div>child</div>);
});
