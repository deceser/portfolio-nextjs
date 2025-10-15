'use client';
import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <LiquidBackground className="opacity-40" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">Contact</h2>
            <p className="text-lg text-muted mb-8">Get in touch with me to discuss your project</p>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="w-full rounded-liquid border border-glass-border bg-glass px-4 py-3 outline-none transition-all duration-300 placeholder:text-muted focus:border-accent focus:bg-card backdrop-blur-sm"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  id="email"
                  required
                  type="email"
                  className="w-full rounded-liquid border border-glass-border bg-glass px-4 py-3 outline-none transition-all duration-300 placeholder:text-muted focus:border-accent focus:bg-card backdrop-blur-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full rounded-liquid border border-glass-border bg-glass px-4 py-3 outline-none transition-all duration-300 placeholder:text-muted focus:border-accent focus:bg-card backdrop-blur-sm resize-none"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="liquid-button w-full py-4 text-lg font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
