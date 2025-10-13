import '@testing-library/jest-dom';

// JSDOM: mock window.matchMedia used by ThemeProvider
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// JSDOM: mock IntersectionObserver used by framer-motion InView
class MockIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;
  readonly rootMargin: string = '0px';
  readonly thresholds: ReadonlyArray<number> = [0];
  constructor(_callback: IntersectionObserverCallback, _options?: IntersectionObserverInit) {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

// Assign mocks to global/window
// @ts-expect-error jsdom environment
global.IntersectionObserver = MockIntersectionObserver as any;
// @ts-expect-error jsdom environment
window.IntersectionObserver = MockIntersectionObserver as any;
