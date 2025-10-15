import { render, screen } from '@testing-library/react';
import { Header } from '@/widgets/layout/Header';
// Zustand: тесты без провайдера темы

const renderUI = (ui: React.ReactNode) => render(<>{ui}</>);

describe('Header', () => {
  it('renders logo and nav links', () => {
    renderUI(<Header />);
    // Текущий Header содержит англоязычные тексты
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
