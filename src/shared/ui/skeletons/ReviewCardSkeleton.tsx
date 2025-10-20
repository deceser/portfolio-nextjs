export function ReviewCardSkeleton() {
  return (
    <div
      className="flex-shrink-0 w-72 sm:w-80 glass-card-no-shadow p-5 md:p-6 animate-pulse"
      data-testid="review-skeleton"
    >
      <div className="flex items-center mb-3 md:mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 md:w-5 md:h-5 bg-glass-border rounded" />
          ))}
        </div>
      </div>
      <div className="space-y-2 mb-3 md:mb-4">
        <div className="h-4 bg-glass-border rounded-liquid w-full" />
        <div className="h-4 bg-glass-border rounded-liquid w-5/6" />
        <div className="h-4 bg-glass-border rounded-liquid w-4/6" />
      </div>
      <div className="border-t border-glass-border pt-3 md:pt-4">
        <div className="h-5 bg-glass-border rounded-liquid w-32 mb-2" />
        <div className="h-4 bg-glass-border rounded-liquid w-24" />
      </div>
    </div>
  );
}

export function ReviewsSkeleton() {
  return (
    <section className="py-8 md:py-20 xl:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto animate-pulse">
          <div className="h-10 bg-glass-border rounded-liquid w-48 mb-6" />
          <div className="h-6 bg-glass-border rounded-liquid w-64 mb-8" />
          <div className="flex gap-4 md:gap-6 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <ReviewCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
