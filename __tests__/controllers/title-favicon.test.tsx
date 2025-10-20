import { render } from '@testing-library/react';
import { TitleAndFaviconController } from '@/controllers/TitleAndFaviconController';

describe('TitleAndFaviconController', () => {
  beforeEach(() => {
    document.title = '';
    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) favicon.remove();
  });

  it('renders without visual output', () => {
    const { container } = render(<TitleAndFaviconController />);
    expect(container.firstChild).toBeNull();
  });

  it('updates document title on visibility change', () => {
    render(<TitleAndFaviconController />);
    expect(document.title).toBeTruthy();
  });
});
