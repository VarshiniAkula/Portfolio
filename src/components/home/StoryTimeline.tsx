'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { milestones } from '@/content/story-milestones';
import { homeContent } from '@/content/home';
import { useExperienceMode } from '@/providers/ExperienceModeProvider';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

export function StoryTimeline() {
  const copy = homeContent.story;
  const stops = copy.milestoneIds
    .map((id) => milestones.find((m) => m.id === id))
    .filter((m): m is (typeof milestones)[number] => Boolean(m));
  const [activeIndex, setActiveIndex] = useState(stops.length - 1);
  const { mode } = useExperienceMode();
  const prefersReduced = useReducedMotion();
  const active = stops[activeIndex];
  const progress = stops.length > 1 ? (activeIndex / (stops.length - 1)) * 100 : 0;

  return (
    <section id="story" className="relative py-24 sm:py-32 scroll-mt-16 overflow-hidden" aria-labelledby="story-heading">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#fff6e4]/40 mb-4">{copy.eyebrow}</p>
          <h2 id="story-heading" className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#fff6e4] max-w-2xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-[#fff6e4]/55 max-w-xl text-lg">{copy.subtitle}</p>
        </Reveal>

        {/* Route */}
        <div className="mt-14 relative">
          <div className="absolute left-0 right-0 top-[19px] h-px bg-white/10" aria-hidden="true" />
          <motion.div
            className="absolute left-0 top-[19px] h-px bg-gradient-to-r from-[#00F2FF] via-[#B79CFF] to-[#FFB950]"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ duration: prefersReduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <ol className="relative grid grid-flow-col auto-cols-[minmax(120px,1fr)] gap-2 overflow-x-auto no-scrollbar pb-2">
            {stops.map((m, i) => {
              const selected = i === activeIndex;
              const passed = i <= activeIndex;
              return (
                <li key={m.id}>
                  <button
                    onClick={() => setActiveIndex(i)}
                    aria-current={selected ? 'step' : undefined}
                    className="group w-full text-left focus-visible:outline-none"
                  >
                    <span
                      className={cn(
                        'relative flex h-10 w-10 items-center justify-center rounded-full border text-lg transition-all duration-300 group-focus-visible:ring-2 group-focus-visible:ring-white/50',
                        selected
                          ? 'bg-[#fff6e4] border-transparent scale-110 shadow-[0_0_30px_rgba(255,246,228,0.35)]'
                          : passed
                            ? 'bg-[#111] border-white/30'
                            : 'bg-black border-white/10 group-hover:border-white/30'
                      )}
                      aria-hidden="true"
                    >
                      {m.icon}
                    </span>
                    <span className={cn('mt-4 block font-mono text-[11px]', selected ? 'text-[#fff6e4]/80' : 'text-[#fff6e4]/35')}>
                      {m.date}
                    </span>
                    <span className={cn('mt-1 block text-sm font-semibold leading-snug pr-2', selected ? 'text-[#fff6e4]' : 'text-[#fff6e4]/50 group-hover:text-[#fff6e4]/80')}>
                      {m.title}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Detail */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-10" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              initial={prefersReduced ? false : { opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12"
            >
              <div>
                <p className="font-mono text-xs text-[#fff6e4]/40">
                  Stop {activeIndex + 1} of {stops.length}
                </p>
                <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#fff6e4] leading-tight">{active.title}</h3>
                <p className="mt-2 text-[#fff6e4]/55">{active.subtitle}</p>
              </div>
              <div>
                <p className="text-[#fff6e4]/75 text-lg leading-relaxed">
                  {mode === 'recruiter' ? active.description.recruiter : active.description.explorer}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveIndex((i) => Math.max(0, i - 1))}
                    disabled={activeIndex === 0}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#fff6e4]/80 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none"
                  >
                    &larr; Previous
                  </button>
                  <button
                    onClick={() => setActiveIndex((i) => Math.min(stops.length - 1, i + 1))}
                    disabled={activeIndex === stops.length - 1}
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-[#fff6e4]/80 hover:border-white/40 disabled:opacity-30 disabled:pointer-events-none"
                  >
                    Next &rarr;
                  </button>
                  {active.linkedProject && (
                    <Link href={`/projects/${active.linkedProject}`} className="text-sm font-semibold text-[#00F2FF] hover:underline underline-offset-4">
                      See the project &rarr;
                    </Link>
                  )}
                  <Link href="/journey" className="ml-auto text-sm font-semibold text-[#fff6e4]/70 hover:text-[#fff6e4]">
                    Read the full story &rarr;
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
