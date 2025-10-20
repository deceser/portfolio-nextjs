export function ContactCardSkeleton() {
  return (
    <div className="glass-card p-6 md:p-8 text-center animate-pulse" data-testid="contact-skeleton">
      <div className="mb-3 md:mb-4 flex justify-center">
        <div className="w-7 h-7 md:w-8 md:h-8 bg-glass-border rounded" />
      </div>
      <div className="h-6 bg-glass-border rounded-liquid w-32 mx-auto mb-2" />
      <div className="h-4 bg-glass-border rounded-liquid w-48 mx-auto" />
    </div>
  );
}

export function ContactsSkeleton() {
  return (
    <section className="py-8 md:py-20 xl:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto animate-pulse">
          <div className="h-10 bg-glass-border rounded-liquid w-48 mb-6" />
          <div className="h-6 bg-glass-border rounded-liquid w-64 mb-8" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 md:gap-6">
            {[...Array(6)].map((_, i) => (
              <ContactCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
