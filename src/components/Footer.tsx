import { Container } from '@/components/Container';

export function Footer() {
  return (
    <footer className="glass-header py-12 text-sm text-muted">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Денис Каредиска</span>
          <div className="flex items-center gap-4">
            <span className="opacity-80">Сделано на Next.js</span>
            <div className="w-2 h-2 bg-gradient-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
