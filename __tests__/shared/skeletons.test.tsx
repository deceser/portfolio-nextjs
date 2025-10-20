import { render } from '@testing-library/react';
import {
  SectionSkeleton,
  ProjectCardSkeleton,
  ReviewCardSkeleton,
  ContactCardSkeleton,
} from '@/shared/ui/skeletons';

describe('Skeleton Components', () => {
  it('renders SectionSkeleton', () => {
    const { container } = render(<SectionSkeleton />);
    expect(container.querySelector('[data-testid="section-skeleton"]')).toBeInTheDocument();
  });

  it('renders ProjectCardSkeleton', () => {
    const { container } = render(<ProjectCardSkeleton />);
    expect(container.querySelector('[data-testid="project-skeleton"]')).toBeInTheDocument();
  });

  it('renders ReviewCardSkeleton', () => {
    const { container } = render(<ReviewCardSkeleton />);
    expect(container.querySelector('[data-testid="review-skeleton"]')).toBeInTheDocument();
  });

  it('renders ContactCardSkeleton', () => {
    const { container } = render(<ContactCardSkeleton />);
    expect(container.querySelector('[data-testid="contact-skeleton"]')).toBeInTheDocument();
  });

  it('all skeletons have animate pulse', () => {
    const { container: section } = render(<SectionSkeleton />);
    const { container: project } = render(<ProjectCardSkeleton />);
    const { container: review } = render(<ReviewCardSkeleton />);
    const { container: contact } = render(<ContactCardSkeleton />);

    expect(section.querySelector('.animate-pulse')).toBeInTheDocument();
    expect(project.querySelector('.animate-pulse')).toBeInTheDocument();
    expect(review.querySelector('.animate-pulse')).toBeInTheDocument();
    expect(contact.querySelector('.animate-pulse')).toBeInTheDocument();
  });
});
