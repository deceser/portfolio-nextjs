'use client';

interface LiquidIconProps {
  className?: string;
  children: React.ReactNode;
}

export function LiquidIcon({ className = '', children }: LiquidIconProps) {
  return (
    <div
      className={`glass-card p-4 w-fit transition-all duration-300 hover:scale-110 hover:rotate-3 ${className}`}
    >
      {children}
    </div>
  );
}

interface LiquidBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function LiquidBadge({ children, variant = 'primary' }: LiquidBadgeProps) {
  const baseClasses =
    'inline-flex items-center px-3 py-1 rounded-liquid text-sm font-medium transition-all duration-300';
  const variantClasses =
    variant === 'primary'
      ? 'bg-gradient-accent text-white'
      : 'glass-card text-fg border border-glass-border';

  return <span className={`${baseClasses} ${variantClasses}`}>{children}</span>;
}
