import { render, screen, waitFor } from '@testing-library/react';
import { Reviews } from '@/sections/Reviews';
import { useDataStore } from '@/stores/data';

jest.mock('@/stores/data', () => ({
  useDataStore: jest.fn(),
}));

describe('Reviews Section', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders heading', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ reviews: [], loading: false, fetchReviews: jest.fn() }),
    );
    render(<Reviews />);
    expect(screen.getByText('Reviews')).toBeInTheDocument();
    expect(screen.getByText('What clients say about working with me')).toBeInTheDocument();
  });

  it('shows skeletons when loading', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ reviews: [], loading: true, fetchReviews: jest.fn() }),
    );
    render(<Reviews />);
    const skeletons = screen.getAllByTestId(/skeleton/i);
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders reviews with rating', () => {
    const mockReviews = [
      {
        id: '1',
        name: 'John Doe',
        position: 'CEO',
        company: 'Test Inc',
        text: 'Great work!',
        rating: 5,
        date: '2024-01-01',
        url: 'https://example.com',
      },
    ];
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ reviews: mockReviews, loading: false, fetchReviews: jest.fn() }),
    );
    render(<Reviews />);
    const names = screen.getAllByText('John Doe');
    expect(names.length).toBeGreaterThan(0);
    const reviewTexts = screen.getAllByText(/Great work/i);
    expect(reviewTexts.length).toBeGreaterThan(0);
  });

  it('calls fetchReviews on mount', () => {
    const fetchReviews = jest.fn();
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ reviews: [], loading: false, fetchReviews }),
    );
    render(<Reviews />);
    expect(fetchReviews).toHaveBeenCalled();
  });

  it('has correct section id', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ reviews: [], loading: false, fetchReviews: jest.fn() }),
    );
    const { container } = render(<Reviews />);
    const section = container.querySelector('section#reviews');
    expect(section).toBeInTheDocument();
  });
});
