import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '@/lib/theme';
import { Contact } from '@/sections/Contact';

const renderWithTheme = (ui: React.ReactNode) => render(<ThemeProvider>{ui}</ThemeProvider>);

describe('Contact', () => {
  it('renders fields and submit button', () => {
    renderWithTheme(<Contact />);
    expect(screen.getByLabelText('Имя')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Отправить' })).toBeInTheDocument();
  });
});
