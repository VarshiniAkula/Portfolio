import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black',
    {
      'bg-[#00F2FF] text-black hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] active:scale-[0.97]': variant === 'primary',
      'border border-[#00F2FF]/20 text-[#fff6e4] hover:border-[#00F2FF]/40 hover:bg-[#00F2FF]/5': variant === 'secondary',
      'text-[#fff6e4] hover:text-[#00F2FF]': variant === 'ghost',
    },
    {
      'px-4 py-1.5 text-sm gap-1.5': size === 'sm',
      'px-6 py-2.5 text-sm gap-2': size === 'md',
      'px-8 py-3.5 text-base gap-2.5': size === 'lg',
    },
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
