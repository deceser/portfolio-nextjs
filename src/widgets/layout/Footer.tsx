import { Container } from '@/shared/ui/Container';

export function Footer() {
  return (
    <footer className="glass-header py-8 md:py-12 text-xs md:text-sm text-muted">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 md:gap-4">
          <span className="text-center sm:text-left">
            © {new Date().getFullYear()} Denys Bezverkhyi
          </span>
          <div className="flex items-center gap-3 md:gap-4">
            <span className="opacity-80">Built with Next.js</span>
            <div className="w-2 h-2 bg-gradient-accent rounded-full animate-pulse"></div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
