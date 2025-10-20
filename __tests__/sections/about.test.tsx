import { render, screen } from '@testing-library/react';
import { About } from '@/sections/About';

describe('About Section', () => {
  it('renders heading', () => {
    render(<About />);
    expect(screen.getByText('About me')).toBeInTheDocument();
  });

  it('renders section content', () => {
    render(<About />);
    expect(screen.getByText(/JavaScript Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/3 years/i)).toBeInTheDocument();
  });

  it('has correct section id', () => {
    const { container } = render(<About />);
    const section = container.querySelector('section#about');
    expect(section).toBeInTheDocument();
  });
});
