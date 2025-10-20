import { render, screen } from '@testing-library/react';
import { Skills } from '@/sections/Skills';

describe('Skills Section', () => {
  it('renders heading', () => {
    render(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Technologies and tools I work with')).toBeInTheDocument();
  });

  it('renders skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Front-end')).toBeInTheDocument();
    expect(screen.getByText('Back-end')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText(/Databases/i)).toBeInTheDocument();
    expect(screen.getByText('Deployment')).toBeInTheDocument();
  });

  it('renders skill items on desktop', () => {
    render(<Skills />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Next.js')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('has correct section id', () => {
    const { container } = render(<Skills />);
    const section = container.querySelector('section#skills');
    expect(section).toBeInTheDocument();
  });
});
