import { render, screen, waitFor } from '@testing-library/react';
import { Projects } from '@/sections/Projects';
import { useDataStore } from '@/stores/data';

jest.mock('@/stores/data', () => ({
  useDataStore: jest.fn(),
}));

describe('Projects Section', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders heading', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ projects: [], loading: false, fetchProjects: jest.fn() }),
    );
    render(<Projects />);
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('My latest projects and work')).toBeInTheDocument();
  });

  it('shows skeletons when loading', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ projects: [], loading: true, fetchProjects: jest.fn() }),
    );
    render(<Projects />);
    const skeletons = screen.getAllByTestId(/skeleton/i);
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders projects when loaded', async () => {
    const mockProjects = [
      { id: '1', title: 'Test Project', description: 'Test desc', image: '/test.jpg' },
    ];
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ projects: mockProjects, loading: false, fetchProjects: jest.fn() }),
    );
    render(<Projects />);
    await waitFor(() => {
      expect(screen.getByText('Test Project')).toBeInTheDocument();
    });
  });

  it('calls fetchProjects on mount', () => {
    const fetchProjects = jest.fn();
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ projects: [], loading: false, fetchProjects }),
    );
    render(<Projects />);
    expect(fetchProjects).toHaveBeenCalled();
  });

  it('has correct section id', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ projects: [], loading: false, fetchProjects: jest.fn() }),
    );
    const { container } = render(<Projects />);
    const section = container.querySelector('section#projects');
    expect(section).toBeInTheDocument();
  });
});
