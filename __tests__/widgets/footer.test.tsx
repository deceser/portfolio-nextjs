import { render, screen } from '@testing-library/react';
import { Footer } from '@/widgets/layout/Footer';

describe('Footer', () => {
  it('renders copyright with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`${currentYear}.*Denys Bezverkhyi`))).toBeInTheDocument();
  });

  it('renders built with Next.js text', () => {
    render(<Footer />);
    expect(screen.getByText('Built with Next.js')).toBeInTheDocument();
  });

  it('renders as footer element', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});
