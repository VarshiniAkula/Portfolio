'use client';

import { cn } from '@/lib/utils';

interface VarshiniBotAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  speaking?: boolean;
  className?: string;
}

export function VarshiniBotAvatar({ size = 'md', speaking = false, className }: VarshiniBotAvatarProps) {
  const dims = { sm: 32, md: 48, lg: 80 };
  const s = dims[size];

  return (
    <div
      className={cn('relative inline-flex items-center justify-center', className)}
      style={{ width: s, height: s, animation: 'bot-bob 3s ease-in-out infinite' }}
    >
      <svg
        viewBox="0 0 80 80"
        width={s}
        height={s}
        fill="none"
        aria-hidden="true"
      >
        {/* Background circle */}
        <circle cx="40" cy="40" r="38" fill="#00F2FF" opacity="0.12" />
        <circle cx="40" cy="40" r="36" fill="#111111" />

        {/* Robot head */}
        <rect x="24" y="24" width="32" height="28" rx="6" fill="#1a1a1a" stroke="#00F2FF" strokeWidth="1.5" opacity="0.9" />

        {/* Antenna */}
        <line x1="40" y1="24" x2="40" y2="16" stroke="#00F2FF" strokeWidth="1.5" />
        <circle cx="40" cy="14" r="3" fill="#00F2FF" opacity={speaking ? '1' : '0.6'}>
          {speaking && (
            <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" repeatCount="indefinite" />
          )}
        </circle>

        {/* Eyes */}
        <g style={{ animation: 'bot-blink 4s ease infinite' }}>
          <rect x="30" y="32" width="7" height="6" rx="1.5" fill="#00F2FF" opacity="0.9" />
          <rect x="43" y="32" width="7" height="6" rx="1.5" fill="#00F2FF" opacity="0.9" />
        </g>

        {/* Mouth */}
        {speaking ? (
          <rect x="33" y="44" width="14" height="4" rx="2" fill="#00F2FF" opacity="0.6">
            <animate attributeName="height" values="4;6;2;4" dur="0.5s" repeatCount="indefinite" />
          </rect>
        ) : (
          <rect x="33" y="44" width="14" height="3" rx="1.5" fill="#00F2FF" opacity="0.4" />
        )}

        {/* Body hint */}
        <rect x="30" y="54" width="20" height="10" rx="3" fill="#1a1a1a" stroke="#00F2FF" strokeWidth="1" opacity="0.6" />

        {/* Chest light */}
        <circle cx="40" cy="59" r="2" fill="#00F2FF" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </circle>

        {/* Border ring */}
        <circle cx="40" cy="40" r="38" stroke="#00F2FF" strokeWidth="1.5" fill="none" opacity="0.2" />
      </svg>
    </div>
  );
}
