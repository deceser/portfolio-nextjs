export type Review = {
  id: number;
  name: string;
  position?: string;
  company?: string;
  text: string;
  rating: number;
  url: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: 1,
    name: 'DeFi Flutter App',
    text: 'The developer is highly skilled, understands requirements rapidly, works fast while maximizing quality. Highly recommend!',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example1',
    date: 'Jul 1, 2025 - Oct 9, 2025',
  },
  {
    id: 2,
    name: 'Mikhail Ivanov',
    position: 'CEO',
    company: 'StartupXYZ',
    text: 'Professional approach, attention to detail and excellent communication skills. I recommend him as a reliable developer.',
    rating: 5,
    url: 'https://www.upwork.com/freelancers/~example2',
    date: '2025-01-01',
  },
];
