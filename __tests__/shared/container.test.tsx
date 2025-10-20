import { render, screen } from '@testing-library/react';
import { Container } from '@/shared/ui/Container';

describe('Container', () => {
  it('renders children', () => {
    render(
      <Container>
        <div>Test Content</div>
      </Container>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies base classes', () => {
    const { container } = render(
      <Container>
        <div>Test</div>
      </Container>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('mx-auto');
    expect(wrapper.className).toContain('max-w-7xl');
  });

  it('applies custom className', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Test</div>
      </Container>,
    );
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toContain('custom-class');
  });
});
