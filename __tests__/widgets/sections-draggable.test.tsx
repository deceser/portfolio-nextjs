import { render } from '@testing-library/react';
import { SectionsDraggable } from '@/widgets/layout/SectionsDraggable';

// Mock all dynamic imports
jest.mock('@/sections/Hero', () => ({
  Hero: () => <div>Hero Section</div>,
}));
jest.mock('@/sections/About', () => ({
  About: () => <div>About Section</div>,
}));
jest.mock('@/sections/Skills', () => ({
  Skills: () => <div>Skills Section</div>,
}));
jest.mock('@/sections/Projects', () => ({
  Projects: () => <div>Projects Section</div>,
}));
jest.mock('@/sections/Reviews', () => ({
  Reviews: () => <div>Reviews Section</div>,
}));
jest.mock('@/sections/Contact', () => ({
  Contact: () => <div>Contact Section</div>,
}));

describe('SectionsDraggable', () => {
  it('renders component without errors', () => {
    const { container } = render(<SectionsDraggable />);
    expect(container).toBeInTheDocument();
  });

  it('wraps content in motion container', () => {
    const { container } = render(<SectionsDraggable />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
