'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'motion/react';
import { profile } from '@/content/profile';
import { homeContent } from '@/content/home';
import { disciplines, disciplineAccent } from '@/content/disciplines';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

const { hero } = homeContent;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  // Pointer-following spotlight and gentle card tilt
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.4);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const spotX = useTransform(sx, (v) => `${v * 100}%`);
  const spotY = useTransform(sy, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(650px circle at ${spotX} ${spotY}, rgba(0,242,255,0.11), transparent 60%)`;
  const rotateY = useTransform(sx, [0, 1], [-6, 6]);
  const rotateX = useTransform(sy, [0, 1], [5, -5]);

  const handleMove = (e: React.PointerEvent<HTMLElement>) => {
    if (prefersReduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      ref={sectionRef}
      onPointerMove={handleMove}
      className="relative min-h-[100svh] flex items-center overflow-hidden bg-black pt-24"
      aria-labelledby="hero-heading"
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff6e4 1px, transparent 1px), linear-gradient(to bottom, #fff6e4 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden="true"
      />
      {/* Spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: prefersReduced
            ? 'radial-gradient(600px circle at 70% 40%, rgba(0,242,255,0.10), transparent 60%)'
            : spotlight,
        }}
        aria-hidden="true"
      />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#B79CFF] opacity-[0.07] blur-[140px] pointer-events-none" aria-hidden="true" />
      <div className="absolute -bottom-40 right-0 w-[520px] h-[520px] rounded-full bg-[#FFB950] opacity-[0.05] blur-[140px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-center">
          {/* Copy */}
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 pl-2 pr-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-8">
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[#fff6e4]/80 text-xs font-label font-semibold tracking-wide">
                  {hero.availability}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <p className="font-mono text-xs sm:text-sm text-[#fff6e4]/40 mb-3 tracking-wide">
                {profile.name}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1
                id="hero-heading"
                className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-[-0.04em] text-[#fff6e4] mb-8"
              >
                {hero.title.split(' ')[0]}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fff6e4] via-[#9ff9ff] to-[#00F2FF]">
                  {hero.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="text-[#fff6e4]/70 text-lg sm:text-xl leading-relaxed max-w-xl mb-5">
                {hero.lead}
              </p>
            </Reveal>

            {/* Three disciplines: interactive chips that jump to the switcher */}
            <Reveal delay={0.24}>
              <ul className="flex flex-wrap gap-2.5 mb-10" aria-label="Disciplines">
                {disciplines.map((d) => {
                  const accent = disciplineAccent[d.id];
                  return (
                    <li key={d.id}>
                      <a
                        href={`#discipline-${d.id}`}
                        className={cn(
                          'group inline-flex items-center gap-2 rounded-full border bg-white/[0.03] px-4 py-2 text-sm font-medium text-[#fff6e4]/90 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-0.5',
                          accent.border,
                          accent.hoverGlow
                        )}
                      >
                        <span className={cn('h-1.5 w-1.5 rounded-full', accent.bg)} />
                        {d.label}
                        <span className={cn('opacity-0 -ml-1 transition-all group-hover:opacity-100 group-hover:ml-0', accent.text)} aria-hidden="true">
                          &rarr;
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap gap-3">
                <Button href="#projects" size="lg">
                  Explore Projects
                </Button>
                <Button href="#story" variant="secondary" size="lg">
                  Read My Story
                </Button>
                <Button
                  href={profile.resumeUrl}
                  download={homeContent.resume.fileName}
                  variant="ghost"
                  size="lg"
                  className="underline-offset-8 hover:underline"
                >
                  <DownloadIcon />
                  Résumé
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Profile card */}
          <Reveal delay={0.2} direction="left">
            <div className="[perspective:1200px]">
              <motion.div
                style={prefersReduced ? undefined : { rotateX, rotateY }}
                className="relative mx-auto max-w-sm rounded-[28px] p-px bg-gradient-to-br from-white/25 via-white/5 to-white/10"
              >
                <div className="relative rounded-[27px] bg-[#0b0b0b]/95 backdrop-blur-xl overflow-hidden">
                  <div className="relative aspect-[4/4.2]">
                    <Image
                      src="/varshini.jpg"
                      alt="Portrait of Varshini Akula"
                      fill
                      priority
                      sizes="(max-width: 1024px) 384px, 384px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-[#0b0b0b]/10 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="font-serif text-2xl font-bold text-[#fff6e4]">{profile.name}</p>
                      <p className="text-sm text-[#fff6e4]/60">{profile.location}</p>
                    </div>
                  </div>
                  <ul className="px-5 pb-5 pt-2 space-y-2">
                    {hero.credentials.map((c) => (
                      <li key={c} className="flex items-center gap-2.5 text-sm text-[#fff6e4]/75">
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="text-[#00F2FF] shrink-0">
                          <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>

        {/* Stat strip */}
        <Reveal delay={0.4}>
          <dl className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl border border-white/10 bg-white/10 overflow-hidden">
            {hero.stats.map((s) => (
              <div key={s.label} className="p-5 sm:p-6 bg-[#050505]">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-mono text-2xl sm:text-3xl font-medium text-[#fff6e4] tracking-tight">{s.value}</span>
                  <span className="block mt-1 text-sm text-[#fff6e4]/60">{s.label}</span>
                  <span className="block mt-0.5 text-xs text-[#fff6e4]/35">{s.context}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3v10m0 0l-4-4m4 4l4-4M4 16h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
