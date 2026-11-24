'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { disciplines, disciplineAccent } from '@/content/disciplines';
import { projects } from '@/content/projects';
import { homeContent } from '@/content/home';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { DisciplineId } from '@/types/content';

const ids = disciplines.map((d) => d.id);

function idFromHash(hash: string): DisciplineId | null {
  const match = hash.match(/^#discipline-(\w+)$/);
  return match && ids.includes(match[1] as DisciplineId) ? (match[1] as DisciplineId) : null;
}

export function Disciplines() {
  const [active, setActive] = useState<DisciplineId>('software');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const prefersReduced = useReducedMotion();

  // Hero chips link to #discipline-<id>; select the matching tab.
  useEffect(() => {
    const sync = () => {
      const id = idFromHash(window.location.hash);
      if (id) setActive(id);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  const current = disciplines.find((d) => d.id === active)!;
  const accent = disciplineAccent[active];
  const relatedProjects = current.projectSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter((p): p is (typeof projects)[number] => Boolean(p));

  const onKeyDown = (e: React.KeyboardEvent) => {
    const i = ids.indexOf(active);
    let next: number | null = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % ids.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + ids.length) % ids.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = ids.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(ids[next]);
    tabRefs.current[ids[next]]?.focus();
  };

  const { disciplines: copy } = homeContent;

  return (
    <section id="disciplines" className="relative py-24 sm:py-32 scroll-mt-20" aria-labelledby="disciplines-heading">
      {ids.map((id) => (
        <span key={id} id={`discipline-${id}`} className="absolute -top-20" aria-hidden="true" />
      ))}
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#fff6e4]/40 mb-4">{copy.eyebrow}</p>
          <h2 id="disciplines-heading" className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#fff6e4] max-w-2xl">
            {copy.title}
          </h2>
          <p className="mt-4 text-[#fff6e4]/55 max-w-xl text-lg">{copy.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-[320px_1fr] gap-6">
          {/* Tabs */}
          <div role="tablist" aria-label="Disciplines" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 lg:mx-0 lg:px-0">
            {disciplines.map((d, i) => {
              const a = disciplineAccent[d.id];
              const selected = d.id === active;
              return (
                <button
                  key={d.id}
                  ref={(el) => {
                    tabRefs.current[d.id] = el;
                  }}
                  role="tab"
                  id={`tab-${d.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${d.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(d.id)}
                  className={cn(
                    'relative shrink-0 lg:w-full text-left rounded-2xl border px-5 py-4 lg:py-5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                    selected ? cn('bg-white/[0.05]', a.border) : 'border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span className={cn('font-mono text-xs', selected ? a.text : 'text-[#fff6e4]/30')}>0{i + 1}</span>
                    <span className={cn('font-serif text-base lg:text-lg font-semibold whitespace-nowrap lg:whitespace-normal', selected ? 'text-[#fff6e4]' : 'text-[#fff6e4]/55')}>
                      {d.label}
                    </span>
                  </span>
                  {selected && !prefersReduced && (
                    <motion.span
                      layoutId="discipline-indicator"
                      className={cn('absolute left-0 top-4 bottom-4 w-[3px] rounded-full hidden lg:block', a.bg)}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Panel */}
          <div className="relative rounded-3xl border border-white/10 bg-[#070707] overflow-hidden min-h-[460px]">
            <div
              className="absolute inset-0 pointer-events-none transition-[background] duration-700"
              style={{ background: `radial-gradient(700px circle at 100% 0%, ${accent.hex}1f, transparent 55%)` }}
              aria-hidden="true"
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.id}
                role="tabpanel"
                id={`panel-${current.id}`}
                aria-labelledby={`tab-${current.id}`}
                initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative p-6 sm:p-10"
              >
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                  <div className="max-w-xl">
                    <p className={cn('font-mono text-xs uppercase tracking-[0.2em] mb-3', accent.text)}>{current.label}</p>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fff6e4] leading-tight">{current.headline}</h3>
                    <p className="mt-4 text-[#fff6e4]/65 leading-relaxed">{current.summary}</p>
                  </div>
                  <div className={cn('shrink-0 rounded-2xl border p-5 xl:w-56', accent.border, accent.soft)}>
                    <p className="text-xs text-[#fff6e4]/50">{current.proof.label}</p>
                    <p className={cn('font-mono text-4xl font-medium mt-1', accent.text)}>{current.proof.value}</p>
                    <p className="text-xs text-[#fff6e4]/55 mt-1">{current.proof.unit}</p>
                  </div>
                </div>

                <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {current.capabilities.map((c) => (
                    <div key={c} className="flex items-start gap-3 text-sm text-[#fff6e4]/80">
                      <span className={cn('mt-2 h-1 w-3 rounded-full shrink-0', accent.bg)} />
                      {c}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {current.tools.map((t) => (
                    <span key={t} className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-[#fff6e4]/70">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#fff6e4]/40 mb-4 font-label font-semibold">Proof of work</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {relatedProjects.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 hover:border-white/20 hover:bg-white/[0.05] transition-colors"
                      >
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold text-[#fff6e4] truncate">{p.title}</span>
                          <span className="block text-xs text-[#fff6e4]/45 truncate">
                            {p.metrics[0] ? `${p.metrics[0].value} ${p.metrics[0].unit}` : p.role}
                          </span>
                        </span>
                        <span className={cn('shrink-0 transition-transform group-hover:translate-x-1', accent.text)} aria-hidden="true">
                          &rarr;
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
