import { render, screen } from '@testing-library/react';
import { Contact } from '@/sections/Contact';
import { useDataStore } from '@/stores/data';

jest.mock('@/stores/data', () => ({
  useDataStore: jest.fn(),
}));

describe('Contact', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders heading and description', () => {
    (useDataStore as unknown as jest.Mock).mockImplementation((selector) =>
      selector({ contacts: [], loading: false, fetchContacts: jest.fn() }),
    );
    render(<Contact />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('Contact me through these platforms')).toBeInTheDocument();
  });
});
