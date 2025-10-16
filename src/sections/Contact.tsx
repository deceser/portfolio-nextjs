'use client';

import { Container, MotionFade, LiquidBackground } from '@/shared/ui';
import { useDataStore } from '@/stores/data';
import { useEffect } from 'react';

export function Contact() {
  const contacts = useDataStore((s) => s.contacts);
  const loading = useDataStore((s) => s.loading);
  const fetchContacts = useDataStore((s) => s.fetchContacts);

  useEffect(() => {
    if (contacts.length === 0) fetchContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="contact" className="py-8 md:py-20 xl:py-24 relative">
      <LiquidBackground className="opacity-40" />
      <Container>
        <MotionFade>
          <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text mb-6 md:mb-8">
              Contact
            </h2>
            <p className="text-base md:text-lg text-muted mb-8 md:mb-12">
              Contact me through these platforms
            </p>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 md:gap-6">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-6 md:p-8 text-center group hover:scale-105 transition-all duration-300 min-h-touch"
                >
                  <div className={`${contact.color} mb-3 md:mb-4 flex justify-center`}>
                    <contact.icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">{contact.name}</h3>
                  <p className="text-sm md:text-base text-muted">{contact.description}</p>
                </a>
              ))}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
