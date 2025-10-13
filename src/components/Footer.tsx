import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-bg/60 py-8 text-sm text-muted backdrop-blur">
      <Container>
        <div className="flex items-center justify-between">
          <span>© {new Date().getFullYear()} /* TODO: Заполнить имя и описание */</span>
          <span className="opacity-80">Сделано на Next.js</span>
        </div>
      </Container>
    </footer>
  );
}
