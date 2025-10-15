import { render, screen } from '@testing-library/react';
import { Header } from '@/widgets/layout/Header';
import { ThemeProvider } from '@/shared/config';

const renderWithTheme = (ui: React.ReactNode) => render(<ThemeProvider>{ui}</ThemeProvider>);

describe('Header', () => {
  it('renders logo and nav links', () => {
    renderWithTheme(<Header />);
    expect(screen.getByText('/* TODO: Заполнить имя и описание */')).toBeInTheDocument();
    expect(screen.getByText('О себе')).toBeInTheDocument();
    expect(screen.getByText('Проекты')).toBeInTheDocument();
    expect(screen.getByText('Контакты')).toBeInTheDocument();
  });
});
