import { render, screen, waitFor } from '@testing-library/react';
import { Contact } from '@/sections/Contact';
import { useDataStore } from '@/stores/data';

jest.mock('@/stores/data', () => ({
  useDataStore: jest.fn(),
}));

describe('Contact Section', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders heading', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ contacts: [], loading: false, fetchContacts: jest.fn() }),
    );
    render(<Contact />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Contact me through these platforms')).toBeInTheDocument();
  });

  it('shows skeletons when loading', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ contacts: [], loading: true, fetchContacts: jest.fn() }),
    );
    render(<Contact />);
    const skeletons = screen.getAllByTestId(/skeleton/i);
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders contact cards', () => {
    const mockContacts = [
      {
        id: '1',
        name: 'GitHub',
        description: 'My code',
        url: 'https://github.com',
        icon: () => <div>Icon</div>,
        color: 'text-white',
      },
    ];
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ contacts: mockContacts, loading: false, fetchContacts: jest.fn() }),
    );
    render(<Contact />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('My code')).toBeInTheDocument();
  });

  it('calls fetchContacts on mount', () => {
    const fetchContacts = jest.fn();
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ contacts: [], loading: false, fetchContacts }),
    );
    render(<Contact />);
    expect(fetchContacts).toHaveBeenCalled();
  });

  it('has correct section id', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ contacts: [], loading: false, fetchContacts: jest.fn() }),
    );
    const { container } = render(<Contact />);
    const section = container.querySelector('section#contact');
    expect(section).toBeInTheDocument();
  });
});
