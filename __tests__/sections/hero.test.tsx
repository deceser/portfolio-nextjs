import { render, screen } from '@testing-library/react';
import { Hero } from '@/sections/Hero';

describe('Hero Section', () => {
  it('renders name and title', () => {
    render(<Hero />);
    expect(screen.getByText('Denys Bezverkhyi')).toBeInTheDocument();
    expect(screen.getByText('JavaScript Developer')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Hero />);
    expect(screen.getByText(/React\/Next.js and Node.js/i)).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<Hero />);
    const projectsLink = screen.getByText('View Projects');
    const contactLink = screen.getByText('Get In Touch');
    expect(projectsLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(projectsLink.closest('a')).toHaveAttribute('href', '#projects');
    expect(contactLink.closest('a')).toHaveAttribute('href', '#contact');
  });

  it('has correct section id', () => {
    const { container } = render(<Hero />);
    const section = container.querySelector('section#hero');
    expect(section).toBeInTheDocument();
  });
});
