'use client';
import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <Container>
        <MotionFade>
          <h2 className="text-2xl font-semibold tracking-tight">Контакты</h2>
          <p className="mt-2 text-muted">/* TODO: Настроить контактную форму */</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-xl space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm">
                Имя
              </label>
              <input
                id="name"
                required
                className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 outline-none transition placeholder:text-muted focus:border-fg/40"
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 outline-none transition placeholder:text-muted focus:border-fg/40"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm">
                Сообщение
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="mt-1 w-full rounded-md border border-border bg-card px-3 py-2 outline-none transition placeholder:text-muted focus:border-fg/40"
                placeholder="Текст сообщения"
              />
            </div>
            <button
              aria-label="Отправить"
              className="rounded-md bg-accent px-5 py-2 text-white shadow hover:opacity-90"
            >
              Отправить
            </button>
          </form>
        </MotionFade>
      </Container>
    </section>
  );
}
