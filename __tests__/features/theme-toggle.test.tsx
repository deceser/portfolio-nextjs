import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/features/theme/ThemeToggle';
import { useUIStore } from '@/stores/ui';

jest.mock('@/stores/ui', () => ({
  useUIStore: jest.fn(),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all theme buttons', () => {
    const setTheme = jest.fn();
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ theme: 'system', setTheme }),
    );
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: 'System theme' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Light theme' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Dark theme' })).toBeInTheDocument();
  });

  it('highlights active theme', () => {
    const setTheme = jest.fn();
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ theme: 'dark', setTheme }),
    );
    render(<ThemeToggle />);
    const darkButton = screen.getByRole('button', { name: 'Dark theme' });
    expect(darkButton).toHaveAttribute('aria-pressed', 'true');
  });

  it('calls setTheme when button clicked', () => {
    const setTheme = jest.fn();
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ theme: 'system', setTheme }),
    );
    render(<ThemeToggle />);
    const lightButton = screen.getByRole('button', { name: 'Light theme' });
    fireEvent.click(lightButton);
    expect(setTheme).toHaveBeenCalledWith('light');
  });

  it('switches between themes', () => {
    const setTheme = jest.fn();
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ theme: 'light', setTheme }),
    );
    render(<ThemeToggle />);
    const darkButton = screen.getByRole('button', { name: 'Dark theme' });
    fireEvent.click(darkButton);
    expect(setTheme).toHaveBeenCalledWith('dark');
  });
});
