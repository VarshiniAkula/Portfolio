import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({ title, subtitle, label, align = 'left', className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', align === 'center' && 'text-center', className)}>
      {label && (
        <span className="font-mono text-xs tracking-[0.2em] text-[#00F2FF] uppercase mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fff6e4] tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[#fff6e4]/60 text-lg max-w-2xl leading-relaxed" style={align === 'center' ? { margin: '0.75rem auto 0' } : undefined}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
