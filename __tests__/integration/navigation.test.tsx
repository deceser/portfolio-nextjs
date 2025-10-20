import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '@/widgets/layout/Header';

describe('Navigation Integration', () => {
  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('navigation links have correct href attributes', () => {
    render(<Header />);
    const aboutLink = screen.getByText('About').closest('a');
    const projectsLink = screen.getByText('Projects').closest('a');
    const contactLink = screen.getByText('Contact').closest('a');

    expect(aboutLink).toHaveAttribute('href', '#about');
    expect(projectsLink).toHaveAttribute('href', '#projects');
    expect(contactLink).toHaveAttribute('href', '#contact');
  });

  it('can click navigation links', () => {
    render(<Header />);
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    expect(aboutLink).toBeInTheDocument();
  });
});
