import { Container, MotionFade, LiquidBackground } from '@/shared/ui';

export function About() {
  return (
    <section id="about" className="py-8 md:py-20 xl:py-24 relative">
      <LiquidBackground className="opacity-50" />
      <Container>
        <MotionFade>
          <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight gradient-text mb-6 md:mb-8">
              About me
            </h2>
            <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted leading-relaxed">
              <p>
                Hey there! I'm a JavaScript Developer with 3 years of getting my hands dirty in the
                world of coding. My journey's been all about turning cool ideas into even cooler web
                apps that don't just work great but look and feel awesome too.
              </p>
              <p>
                I've got a knack for making websites that adapt like a dream, no matter what screen
                they're on, ensuring users get the best experience. And when it comes to talking
                shop or anything else, you can bet on my English skills to keep the conversation
                flowing smoothly.
              </p>
              <p>
                So, if you're looking for someone who's all in on making your project a hit without
                running around in circles, I'm your guy!
              </p>
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
