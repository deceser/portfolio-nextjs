export function ProjectCardSkeleton() {
  return (
    <div className="glass-card-3d overflow-hidden animate-pulse" data-testid="project-skeleton">
      <div className="aspect-[16/10] w-full bg-glass-border" />
      <div className="p-4 md:p-6">
        <div className="h-6 bg-glass-border rounded-liquid w-3/4 mb-2" />
        <div className="h-4 bg-glass-border rounded-liquid w-full mb-2" />
        <div className="h-4 bg-glass-border rounded-liquid w-5/6 mb-4" />
        <div className="flex gap-2 md:gap-3">
          <div className="h-10 bg-glass-border rounded-lg flex-1" />
          <div className="h-10 bg-glass-border rounded-lg flex-1" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSkeleton() {
  return (
    <section className="py-8 md:py-20 xl:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto animate-pulse">
          <div className="h-10 bg-glass-border rounded-liquid w-48 mb-6" />
          <div className="h-6 bg-glass-border rounded-liquid w-64 mb-8" />
          <div className="md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-8 space-y-4 md:space-y-0">
            {[...Array(6)].map((_, i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
