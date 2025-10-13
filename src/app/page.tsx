import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Skills } from '@/sections/Skills';
import { Projects } from '@/sections/Projects';
import { Reviews } from '@/sections/Reviews';
import { Contact } from '@/sections/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Reviews />
      <Contact />
    </>
  );
}
