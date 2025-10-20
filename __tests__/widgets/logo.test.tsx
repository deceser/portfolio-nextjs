import { render, screen } from '@testing-library/react';
import { Logo } from '@/widgets/layout/Logo';

describe('Logo', () => {
  it('renders logo image', () => {
    render(<Logo />);
    const img = screen.getByAltText('Site icon');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/logo.png');
  });

  it('renders button with aria-label', () => {
    render(<Logo />);
    const button = screen.getByRole('button', { name: 'Matrix trigger' });
    expect(button).toBeInTheDocument();
  });

  it('renders tooltip text', () => {
    render(<Logo />);
    expect(screen.getByText(/Click 3 times/i)).toBeInTheDocument();
  });

  it('image is not draggable', () => {
    render(<Logo />);
    const img = screen.getByAltText('Site icon');
    expect(img).toHaveAttribute('draggable', 'false');
  });
});
