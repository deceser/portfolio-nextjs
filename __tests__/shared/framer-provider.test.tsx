import { render, screen } from '@testing-library/react';
import { FramerProvider } from '@/shared/ui/FramerProvider';

describe('FramerProvider', () => {
  it('renders children', () => {
    render(
      <FramerProvider>
        <div>Test Content</div>
      </FramerProvider>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('wraps children with MotionConfig', () => {
    const { container } = render(
      <FramerProvider>
        <span>Test</span>
      </FramerProvider>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
