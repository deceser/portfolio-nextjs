import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';

const reviews = [
  {
    id: 1,
    name: 'Anna Petrova',
    position: 'Product Manager',
    company: 'TechCorp',
    text: 'Denis did an excellent job developing our web application. He quickly understands requirements and offers quality solutions.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example1',
  },
  {
    id: 2,
    name: 'Mikhail Ivanov',
    position: 'CEO',
    company: 'StartupXYZ',
    text: 'Professional approach, attention to detail and excellent communication skills. I recommend him as a reliable developer.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example2',
  },
  {
    id: 3,
    name: 'Elena Smirnova',
    position: 'Design Lead',
    company: 'CreativeStudio',
    text: 'Working with Denis was very productive. He quickly adapts to changes and always offers optimal solutions.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example3',
  },
  {
    id: 4,
    name: 'Alexey Kozlov',
    position: 'CTO',
    company: 'InnovateLab',
    text: 'High code quality, meeting deadlines and excellent understanding of modern technologies. Very satisfied with the result.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example4',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-24 relative">
      <LiquidBackground className="opacity-20" />
      <Container>
        <MotionFade>
          <div className="glass-card p-12 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">Reviews</h2>
            <p className="text-lg text-muted mb-12">What clients say about working with me</p>

            <div className="relative">
              <div className="flex gap-6 overflow-hidden pb-4 scrollbar-hide">
                <div className="flex gap-6 animate-scroll group">
                  {reviews.map((review) => (
                    <a
                      key={review.id}
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-80 glass-card-no-shadow p-6 block hover:scale-105 transition-transform duration-300 relative"
                    >
                      {/* Upwork icon */}
                      <div className="absolute top-4 right-4 w-6 h-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full text-green-500"
                        >
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.266-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.392H0v7.112c0 2.914 2.37 5.284 5.284 5.284 2.913 0 5.283-2.37 5.283-5.284v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3.028 0 5.49-2.463 5.49-5.49 0-3.028-2.463-5.491-5.49-5.491z" />
                        </svg>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted mb-4 italic">"{review.text}"</p>
                      <div className="border-t border-glass-border pt-4">
                        <div className="font-semibold text-fg">{review.name}</div>
                        <div className="text-sm text-muted">
                          {review.position}, {review.company}
                        </div>
                      </div>
                    </a>
                  ))}
                  {/* Duplicate cards for seamless animation */}
                  {reviews.map((review) => (
                    <a
                      key={`duplicate-${review.id}`}
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-80 glass-card-no-shadow p-6 block hover:scale-105 transition-transform duration-300 relative"
                    >
                      {/* Upwork icon */}
                      <div className="absolute top-4 right-4 w-6 h-6">
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-full h-full text-green-500"
                        >
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.266-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.392H0v7.112c0 2.914 2.37 5.284 5.284 5.284 2.913 0 5.283-2.37 5.283-5.284v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3.028 0 5.49-2.463 5.49-5.49 0-3.028-2.463-5.491-5.49-5.491z" />
                        </svg>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-muted mb-4 italic">"{review.text}"</p>
                      <div className="border-t border-glass-border pt-4">
                        <div className="font-semibold text-fg">{review.name}</div>
                        <div className="text-sm text-muted">
                          {review.position}, {review.company}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </MotionFade>
      </Container>
    </section>
  );
}
