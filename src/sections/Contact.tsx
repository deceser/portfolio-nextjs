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
    <section id="contact" className="py-24 relative">
      <LiquidBackground className="opacity-40" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">Contact</h2>
            <p className="text-lg text-muted mb-12">Contact me through these platforms</p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-8 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`${contact.color} mb-4 flex justify-center`}>
                    <contact.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
                  <p className="text-muted">{contact.description}</p>
                </a>
              ))}
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
