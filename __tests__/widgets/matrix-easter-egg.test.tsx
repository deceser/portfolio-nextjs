import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MatrixEasterEgg from '@/widgets/matrix/MatrixEasterEgg';
import { useUIStore } from '@/stores/ui';

jest.mock('@/stores/ui', () => ({
  useUIStore: jest.fn(),
}));

jest.mock('@/widgets/matrix/MatrixRain', () => ({
  __esModule: true,
  default: () => <div data-testid="matrix-rain">Matrix Rain</div>,
}));

jest.mock('@/widgets/matrix/MatrixAudio', () => ({
  __esModule: true,
  default: () => <div data-testid="matrix-audio">Matrix Audio</div>,
}));

jest.mock('@/widgets/matrix/MatrixCursor', () => ({
  __esModule: true,
  default: () => <div data-testid="matrix-cursor">Matrix Cursor</div>,
}));

describe('MatrixEasterEgg', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders children', () => {
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ modal: null, openModal: jest.fn(), closeModal: jest.fn() }),
    );
    render(
      <MatrixEasterEgg>
        <div>Child Content</div>
      </MatrixEasterEgg>,
    );
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });

  it('renders Matrix components', () => {
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ modal: null, openModal: jest.fn(), closeModal: jest.fn() }),
    );
    render(
      <MatrixEasterEgg>
        <div>Content</div>
      </MatrixEasterEgg>,
    );
    expect(screen.getByTestId('matrix-rain')).toBeInTheDocument();
    expect(screen.getByTestId('matrix-audio')).toBeInTheDocument();
    expect(screen.getByTestId('matrix-cursor')).toBeInTheDocument();
  });

  it('shows matrix mode message when active', () => {
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ modal: 'matrix', openModal: jest.fn(), closeModal: jest.fn() }),
    );
    render(
      <MatrixEasterEgg>
        <div>Content</div>
      </MatrixEasterEgg>,
    );
    expect(screen.getByText('Welcome to the Matrix...')).toBeInTheDocument();
  });

  it('calls closeModal after 10 seconds', () => {
    const closeModal = jest.fn();
    (useUIStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ modal: 'matrix', openModal: jest.fn(), closeModal }),
    );
    render(
      <MatrixEasterEgg>
        <div>Content</div>
      </MatrixEasterEgg>,
    );

    jest.advanceTimersByTime(10000);
    expect(closeModal).toHaveBeenCalled();
  });
});
