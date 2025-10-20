import { render } from '@testing-library/react';
import { LiquidBackground } from '@/shared/ui/LiquidBackground';

describe('LiquidBackground', () => {
  it('renders background elements', () => {
    const { container } = render(<LiquidBackground />);
    const background = container.querySelector('.absolute.inset-0');
    expect(background).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<LiquidBackground className="opacity-50" />);
    const background = container.firstChild as HTMLElement;
    expect(background.className).toContain('opacity-50');
  });

  it('renders floating elements', () => {
    const { container } = render(<LiquidBackground />);
    const floatingElements = container.querySelectorAll('.floating-element');
    expect(floatingElements.length).toBeGreaterThan(0);
  });
});
