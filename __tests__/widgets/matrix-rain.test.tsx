import { render, screen } from '@testing-library/react';
import MatrixRain from '@/widgets/matrix/MatrixRain';
import { useUIStore } from '@/stores/ui';

jest.mock('@/stores/ui', () => ({
  useUIStore: jest.fn(),
}));

describe('MatrixRain', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('does not render when inactive', () => {
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ modal: null }),
    );
    const { container } = render(<MatrixRain />);
    expect(container.firstChild).toBeNull();
  });

  it('renders canvas when matrix mode active', () => {
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ modal: 'matrix' }),
    );
    render(<MatrixRain />);
    const canvas = document.querySelector('canvas');
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass('fixed', 'inset-0', 'z-50', 'pointer-events-none');
  });

  it('canvas has correct styling', () => {
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ modal: 'matrix' }),
    );
    render(<MatrixRain />);
    const canvas = document.querySelector('canvas') as HTMLCanvasElement;
    expect(canvas.style.background).toBe('black');
  });
});
