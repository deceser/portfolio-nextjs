export function SectionSkeleton() {
  return (
    <div className="py-8 md:py-20 xl:py-24 relative" data-testid="section-skeleton">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-8 md:p-10 xl:p-12 max-w-6xl mx-auto animate-pulse">
          <div className="h-10 bg-glass-border rounded-liquid w-48 mb-6" />
          <div className="h-6 bg-glass-border rounded-liquid w-64 mb-8" />
          <div className="space-y-4">
            <div className="h-4 bg-glass-border rounded-liquid w-full" />
            <div className="h-4 bg-glass-border rounded-liquid w-5/6" />
            <div className="h-4 bg-glass-border rounded-liquid w-4/6" />
          </div>
        </div>
      </div>
    </div>
  );
}
