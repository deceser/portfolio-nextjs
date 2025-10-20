import { render, screen } from '@testing-library/react';
import { MotionFade } from '@/shared/ui/MotionFade';

describe('MotionFade', () => {
  it('renders children', () => {
    render(
      <MotionFade>
        <div>Test Content</div>
      </MotionFade>,
    );
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('wraps content in motion div', () => {
    const { container } = render(
      <MotionFade>
        <span>Test</span>
      </MotionFade>,
    );
    expect(container.firstChild).toBeInTheDocument();
  });
});
