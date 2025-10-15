'use client';

import { useEffect } from 'react';

const SECTION_IDS = ['hero', 'about', 'projects', 'skills', 'reviews', 'contact'] as const;

type SectionId = (typeof SECTION_IDS)[number];

function getCurrentSectionId(): SectionId | null {
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.33 && rect.bottom >= window.innerHeight * 0.33) {
      return id;
    }
  }
  return null;
}

// Favicon progress ring was removed by request.

export function TitleAndFaviconController() {
  useEffect(() => {
    const lastSectionRef = { current: '' as string };
    const marqueeBaseRef = { current: '' as string };
    const marqueeIndexRef = { current: 0 };
    let marqueeTimer: ReturnType<typeof setInterval> | null = null;

    const startMarquee = () => {
      if (marqueeTimer) return;
      marqueeTimer = setInterval(() => {
        const base = marqueeBaseRef.current ? `${marqueeBaseRef.current}   ` : '';
        if (!base) return;
        const length = base.length;
        const index = marqueeIndexRef.current % length;
        const rotated = base.slice(index) + base.slice(0, index);
        document.title = rotated;
        marqueeIndexRef.current = index + 1;
      }, 180);
    };

    const stopMarquee = () => {
      if (marqueeTimer) {
        clearInterval(marqueeTimer);
        marqueeTimer = null;
      }
    };

    const update = () => {
      const section = getCurrentSectionId();
      const titlePrefix = 'Denys Bezverkhyi';
      const sectionTitle = section ? section.charAt(0).toUpperCase() + section.slice(1) : 'Home';
      const nextBaseTitle = `${titlePrefix} | ${sectionTitle}`;
      if (marqueeBaseRef.current !== nextBaseTitle) {
        marqueeBaseRef.current = nextBaseTitle;
        marqueeIndexRef.current = 0;
        document.title = nextBaseTitle;
      }

      // favicon progress drawing removed

      // Update URL hash without pushing history entries
      const nextHash = section ? `#${section}` : '';
      if (lastSectionRef.current !== nextHash) {
        lastSectionRef.current = nextHash;
        const url = `${location.pathname}${location.search}${nextHash}`;
        history.replaceState(null, '', url);
      }
    };

    update();
    startMarquee();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('hashchange', update);
    window.addEventListener('resize', update);
    const vis = () => {
      if (document.hidden) stopMarquee();
      else startMarquee();
    };
    document.addEventListener('visibilitychange', vis);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('hashchange', update);
      window.removeEventListener('resize', update);
      document.removeEventListener('visibilitychange', vis);
      stopMarquee();
    };
  }, []);

  return null;
}
