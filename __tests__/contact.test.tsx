import { render, screen } from '@testing-library/react';
// Zustand: тесты без провайдера темы
import { Contact } from '@/sections/Contact';

const renderUI = (ui: React.ReactNode) => render(<>{ui}</>);

describe('Contact', () => {
  it('renders cards and links', () => {
    renderUI(<Contact />);
    expect(screen.getByText('Контакты')).toBeInTheDocument();
    expect(screen.getByText('Мои проекты и код')).toBeInTheDocument();
  });
});
