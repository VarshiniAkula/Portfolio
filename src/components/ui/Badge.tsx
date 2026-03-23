import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-mono tracking-wide',
        {
          'bg-[#1a1a1a] text-[#fff6e4]/80': variant === 'default',
          'bg-[#00F2FF]/10 text-[#00F2FF] border border-[#00F2FF]/20': variant === 'accent',
          'border border-white/10 text-[#fff6e4]/60': variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  );
}
