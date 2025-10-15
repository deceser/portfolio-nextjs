export type Review = {
  id: number;
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
  url: string;
};

export const reviews: Review[] = [
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
