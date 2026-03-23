'use client';

import { cn } from '@/lib/utils';
import type { Metric } from '@/types/content';

interface MetricDisplayProps {
  metric: Metric;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MetricDisplay({ metric, size = 'md', className }: MetricDisplayProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      <span
        className={cn('font-mono font-medium text-espresso tracking-tight', {
          'text-xl': size === 'sm',
          'text-3xl': size === 'md',
          'text-4xl sm:text-5xl': size === 'lg',
        })}
      >
        {metric.value}
      </span>
      <span
        className={cn('text-warm-gray', {
          'text-xs mt-0.5': size === 'sm',
          'text-sm mt-1': size === 'md',
          'text-base mt-1.5': size === 'lg',
        })}
      >
        {metric.unit}
      </span>
      {metric.label && (
        <span
          className={cn('font-medium text-graphite', {
            'text-xs mt-0.5': size === 'sm',
            'text-sm mt-1': size === 'md',
            'text-base mt-1': size === 'lg',
          })}
        >
          {metric.label}
        </span>
      )}
    </div>
  );
}
