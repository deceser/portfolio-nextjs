import { render } from '@testing-library/react';
import { ThemeProvider } from '@/lib/theme';

// Smoke test: provider mounts without errors
it('mounts ThemeProvider', () => {
  render(<ThemeProvider>child</ThemeProvider>);
});
