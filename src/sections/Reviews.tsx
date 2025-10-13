import { Container } from '@/components/Container';
import { MotionFade } from '@/components/MotionFade';
import { LiquidBackground } from '@/components/LiquidBackground';

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    position: 'Product Manager',
    company: 'TechCorp',
    text: 'Денис отлично справился с разработкой нашего веб-приложения. Быстро понимает требования и предлагает качественные решения.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example1',
  },
  {
    id: 2,
    name: 'Михаил Иванов',
    position: 'CEO',
    company: 'StartupXYZ',
    text: 'Профессиональный подход, внимательность к деталям и отличные навыки коммуникации. Рекомендую как надежного разработчика.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example2',
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    position: 'Design Lead',
    company: 'CreativeStudio',
    text: 'Работа с Денисом была очень продуктивной. Он быстро адаптируется к изменениям и всегда предлагает оптимальные решения.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example3',
  },
  {
    id: 4,
    name: 'Алексей Козлов',
    position: 'CTO',
    company: 'InnovateLab',
    text: 'Высокое качество кода, соблюдение сроков и отличное понимание современных технологий. Очень довольны результатом.',
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
            <h2 className="text-4xl font-bold tracking-tight gradient-text mb-8">Отзывы</h2>
            <p className="text-lg text-muted mb-12">Что говорят клиенты о работе со мной</p>

            <div className="relative">
              <div className="flex gap-6 overflow-hidden pb-4 scrollbar-hide">
                <div className="flex gap-6 animate-scroll group">
                  {reviews.map((review) => (
                    <a
                      key={review.id}
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-80 glass-card-no-shadow p-6 block hover:scale-105 transition-transform duration-300"
                    >
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
                  {/* Дублируем карточки для бесшовной анимации */}
                  {reviews.map((review) => (
                    <a
                      key={`duplicate-${review.id}`}
                      href={review.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 w-80 glass-card-no-shadow p-6 block hover:scale-105 transition-transform duration-300"
                    >
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
