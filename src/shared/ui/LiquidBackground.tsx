'use client';

interface LiquidBackgroundProps {
  className?: string;
}

export function LiquidBackground({ className = '' }: LiquidBackgroundProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-accent rounded-full opacity-20 blur-3xl floating-element"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-accent rounded-full opacity-15 blur-3xl floating-element"
        style={{ animationDelay: '2s' }}
      ></div>
      <div
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-accent rounded-full opacity-10 blur-2xl floating-element"
        style={{ animationDelay: '4s' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-glass/5 to-transparent"></div>
    </div>
  );
}
