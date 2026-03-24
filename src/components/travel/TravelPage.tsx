'use client';

import { useState } from 'react';
import { travels } from '@/content/travel';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

function TravelStats() {
  const countries = new Set(travels.map((t) => t.country));
  return (
    <Reveal delay={0.1}>
      <div className="grid grid-cols-3 gap-4 mb-12 max-w-lg mx-auto">
        {[
          { value: travels.length, label: 'Cities' },
          { value: countries.size, label: 'Countries' },
          { value: '1000+', label: 'Memories' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-serif text-3xl font-bold gradient-text">
              {stat.value}
            </div>
            <div className="font-mono text-xs text-[#fff6e4]/60 tracking-widest uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function PhotoPlaceholder({ city, color }: { city: string; color: string }) {
  return (
    <div
      className="rounded-xl aspect-[4/3] flex flex-col items-center justify-center gap-2 border-2 border-dashed opacity-60 hover:opacity-80 transition-opacity"
      style={{ borderColor: color, background: `${color}10` }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color }}>
        {city} photo
      </span>
    </div>
  );
}

export function TravelPage() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="From Cities to Systems"
          subtitle="Every city teaches something that code alone cannot."
          label="// Stamp Collection"
        />

        <TravelStats />

        {/* World map SVG decoration */}
        <Reveal delay={0.15}>
          <div className="mb-12 rounded-2xl bg-[#111111]/50 border border-white/5 p-6 sm:p-10 overflow-hidden relative">
            <svg viewBox="0 0 800 400" className="w-full h-auto opacity-20" aria-hidden="true">
              {/* Simplified world map paths */}
              <ellipse cx="400" cy="200" rx="380" ry="180" fill="none" stroke="#fff6e4" strokeWidth="0.5" strokeDasharray="4 4" />
              <ellipse cx="400" cy="200" rx="380" ry="180" fill="none" stroke="#fff6e4" strokeWidth="0.5" strokeDasharray="4 4" transform="rotate(30 400 200)" />
              <ellipse cx="400" cy="200" rx="380" ry="180" fill="none" stroke="#fff6e4" strokeWidth="0.5" strokeDasharray="4 4" transform="rotate(60 400 200)" />
              <line x1="20" y1="200" x2="780" y2="200" stroke="#fff6e4" strokeWidth="0.5" strokeDasharray="4 4" />
              <line x1="400" y1="20" x2="400" y2="380" stroke="#fff6e4" strokeWidth="0.5" strokeDasharray="4 4" />
            </svg>
            {/* Pinned locations */}
            {travels.map((stamp, i) => {
              const positions = [
                { x: '55%', y: '45%' },  // Hyderabad
                { x: '52%', y: '35%' },  // Chandigarh
                { x: '50%', y: '48%' },  // Mumbai
                { x: '53%', y: '50%' },  // Bangalore
                { x: '22%', y: '38%' },  // Tempe
                { x: '20%', y: '36%' },  // Phoenix
              ];
              const pos = positions[i] || { x: '50%', y: '50%' };
              return (
                <div
                  key={stamp.id}
                  className="absolute"
                  style={{ left: pos.x, top: pos.y }}
                >
                  <div
                    className="w-3 h-3 rounded-full animate-pulse"
                    style={{ backgroundColor: stamp.stampColor, animationDelay: `${i * 0.3}s` }}
                  />
                  <span className="absolute top-4 left-0 font-mono text-[9px] text-[#fff6e4]/60 whitespace-nowrap">
                    {stamp.city}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Travel stamps grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {travels.map((stamp, i) => (
            <Reveal key={stamp.id} delay={i * 0.08}>
              <div
                className={cn(
                  'group relative rounded-2xl border-2 border-dashed p-6 transition-all duration-300 cursor-pointer card-tilt',
                  expanded === stamp.id
                    ? 'border-[#00F2FF]/40 bg-[#111111]'
                    : 'border-white/10 bg-black hover:border-[#00F2FF]/30 hover:bg-[#111111]'
                )}
                onClick={() => setExpanded(expanded === stamp.id ? null : stamp.id)}
              >
                {/* Stamp circle */}
                <div
                  className="absolute -top-3 -right-3 w-12 h-12 rounded-full flex items-center justify-center text-[#fff6e4] text-xs font-mono font-bold opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all"
                  style={{ backgroundColor: stamp.stampColor }}
                  aria-hidden="true"
                >
                  {stamp.date.slice(0, 4)}
                </div>

                <div className="mb-3">
                  <h3 className="font-serif text-xl font-semibold text-[#fff6e4]">
                    {stamp.city}
                  </h3>
                  <span className="font-mono text-xs text-[#00F2FF] tracking-widest uppercase">
                    {stamp.country} &middot; {stamp.date}
                  </span>
                </div>

                <p className="text-sm text-[#fff6e4]/80 leading-relaxed">
                  {stamp.memory}
                </p>

                {stamp.connection && (
                  <div className="mt-3 pt-3 border-t border-white/5">
                    <span className="font-mono text-[10px] text-[#fff6e4]/60 tracking-widest uppercase">
                      Connected to:
                    </span>
                    <p className="text-xs text-[#00F2FF] mt-0.5">
                      {stamp.connection}
                    </p>
                  </div>
                )}

                {/* Photo gallery placeholder (expanded) */}
                {expanded === stamp.id && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <h4 className="font-mono text-[10px] text-[#fff6e4]/60 tracking-widest uppercase mb-3">
                      Photo Gallery
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      <PhotoPlaceholder city={stamp.city} color={stamp.stampColor} />
                      <PhotoPlaceholder city={stamp.city} color={stamp.stampColor} />
                    </div>
                    <p className="mt-2 text-[10px] text-[#fff6e4]/40 text-center font-mono">
                      Photos coming soon
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-[#fff6e4]/60 leading-relaxed">
              Travel is how I calibrate perspective. Every new city is a lesson
              in adaptability, every journey a reminder that the best systems -
              like the best trips - are designed for the humans who use them.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
