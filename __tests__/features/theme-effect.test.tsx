import { render } from '@testing-library/react';
import { ThemeEffect } from '@/features/theme/ThemeEffect';

describe('ThemeEffect', () => {
  it('renders without errors', () => {
    const { container } = render(<ThemeEffect />);
    expect(container).toBeInTheDocument();
  });

  it('returns null (no visual output)', () => {
    const { container } = render(<ThemeEffect />);
    expect(container.firstChild).toBeNull();
  });

  it('sets up media query listener', () => {
    const addEventListener = jest.fn();
    window.matchMedia = jest.fn().mockReturnValue({
      matches: false,
      addEventListener,
      removeEventListener: jest.fn(),
    });
    render(<ThemeEffect />);
    expect(addEventListener).toHaveBeenCalledWith('change', expect.any(Function));
  });
});
