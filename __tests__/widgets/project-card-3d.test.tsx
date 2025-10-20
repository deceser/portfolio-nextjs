import { render, screen } from '@testing-library/react';
import { ProjectCard3D } from '@/widgets/projects/ProjectCard3D';

const mockProject = {
  id: '1',
  title: 'Test Project',
  description: 'Test Description',
  image: '/test.jpg',
  href: 'https://example.com',
  github: 'https://github.com/test',
};

describe('ProjectCard3D', () => {
  it('renders project title and description', () => {
    render(<ProjectCard3D project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('renders project image', () => {
    render(<ProjectCard3D project={mockProject} />);
    const img = screen.getByAltText('Test Project');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
  });

  it('renders project link when href provided', () => {
    render(<ProjectCard3D project={mockProject} />);
    const link = screen.getByText('Проект').closest('a');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders github link when github provided', () => {
    render(<ProjectCard3D project={mockProject} />);
    const link = screen.getByText('GitHub').closest('a');
    expect(link).toHaveAttribute('href', 'https://github.com/test');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('does not render links when not provided', () => {
    const projectWithoutLinks = { ...mockProject, href: undefined, github: undefined };
    render(<ProjectCard3D project={projectWithoutLinks} />);
    expect(screen.queryByText('Проект')).not.toBeInTheDocument();
    expect(screen.queryByText('GitHub')).not.toBeInTheDocument();
  });
});
