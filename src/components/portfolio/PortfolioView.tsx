'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Portfolio } from '@/types/content';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { DeckCard } from './DeckCard';
import { cn } from '@/lib/utils';

const AUTO_MS = 7000;
const pad = (n: number) => String(n).padStart(2, '0');

export function PortfolioView({ portfolio }: { portfolio: Portfolio }) {
  const { sections } = portfolio;
  const [sectionIndex, setSectionIndex] = useState(0);
  const [cardIndex, setCardIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [auto, setAuto] = useState(true);
  const [hovering, setHovering] = useState(false);
  const prefersReduced = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const section = sections[sectionIndex];
  const total = section.cards.length;
  const playing = auto && !prefersReduced && !hovering;

  const goSection = useCallback(
    (i: number, updateHash = true) => {
      const next = (i + sections.length) % sections.length;
      setSectionIndex(next);
      setCardIndex(0);
      setDirection(1);
      if (updateHash) history.replaceState(null, '', `#${sections[next].id}`);
    },
    [sections]
  );

  const step = useCallback(
    (delta: number) => {
      setDirection(delta);
      setCardIndex((c) => (c + delta + total) % total);
    },
    [total]
  );

  // Section from URL hash (also used by chatbot links).
  useEffect(() => {
    const sync = () => {
      const id = window.location.hash.slice(1);
      const i = sections.findIndex((s) => s.id === id);
      if (i >= 0) goSection(i, false);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [sections, goSection]);

  // Auto-advance.
  useEffect(() => {
    if (!playing || total < 2) return;
    const t = setTimeout(() => step(1), AUTO_MS);
    return () => clearTimeout(t);
  }, [playing, cardIndex, sectionIndex, total, step]);

  // Keyboard: arrows navigate, space pauses, number keys pick a section.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (el.closest('input, textarea, select, [contenteditable="true"], [role="dialog"]')) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        step(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        step(-1);
      } else if (e.key === ' ' && !el.closest('button, a')) {
        e.preventDefault();
        setAuto((a) => !a);
      } else if (/^[1-9]$/.test(e.key) && Number(e.key) <= sections.length) {
        goSection(Number(e.key) - 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [step, goSection, sections.length]);

  const onTabKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    e.stopPropagation();
    const next = (sectionIndex + (e.key === 'ArrowRight' ? 1 : -1) + sections.length) % sections.length;
    goSection(next);
    tabRefs.current[next]?.focus();
  };

  const card = section.cards[cardIndex];

  return (
    <div className="relative overflow-x-clip">
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 bottom-0"
        style={{ background: `radial-gradient(1100px 800px at 78% 15%, ${portfolio.glow[1]}22, transparent 62%)` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1240px] px-4 pb-16 sm:px-6">
        {/* Section tabs */}
        <div className="flex justify-center">
          <div
            role="tablist"
            aria-label={`${portfolio.name} sections`}
            onKeyDown={onTabKey}
            className="no-scrollbar flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-[var(--line)] bg-white/[0.02] p-1.5"
          >
            {sections.map((s, i) => {
              const selected = i === sectionIndex;
              return (
                <button
                  key={s.id}
                  ref={(el) => {
                    tabRefs.current[i] = el;
                  }}
                  role="tab"
                  id={`tab-${s.id}`}
                  aria-selected={selected}
                  aria-controls="portfolio-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => goSection(i)}
                  className={cn(
                    'flex shrink-0 items-baseline gap-2 rounded-xl px-3.5 py-2.5 font-label text-[15px] transition-colors sm:px-4 sm:text-[16px]',
                    selected ? 'bg-[var(--cream)] text-[#1a1110]' : 'text-[var(--text)] hover:text-white'
                  )}
                >
                  <span className={cn('text-[11px]', selected ? 'text-[#1a1110]/60' : 'text-[var(--dim)]')}>{pad(i + 1)}</span>
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        <div id="portfolio-panel" role="tabpanel" aria-labelledby={`tab-${section.id}`} className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
          {/* Headline column */}
          <div className="flex flex-col lg:min-h-[600px] lg:pt-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={section.id}
                initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReduced ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="eyebrow">
                  {pad(sectionIndex + 1)} / {section.label}
                </p>
                <h1 className="mt-6 break-words font-label text-[clamp(48px,6.4vw,88px)] font-light leading-[0.98] tracking-[-0.035em] text-[var(--fg)]">
                  {section.headline[0]}
                  <br />
                  <em className="font-light italic" style={{ color: portfolio.accent }}>
                    {section.headline[1]}
                  </em>
                </h1>
                <p className="mt-6 max-w-[380px] font-label text-[16.5px] font-light leading-relaxed text-[var(--text)]">{section.intro}</p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 border-t border-[var(--line)] pt-8 lg:mt-auto">
              <p className="font-label font-light text-[var(--fg)]" aria-live="polite">
                <span className="text-[52px] leading-none">{pad(cardIndex + 1)}</span>
                <span className="ml-3 text-[18px] text-[var(--dim)]">/ {pad(total)}</span>
              </p>
              <div className="mt-4 h-[2px] w-full bg-[var(--line)]">
                <div className="h-full bg-[var(--cream)] transition-[width] duration-500" style={{ width: `${((cardIndex + 1) / total) * 100}%` }} />
              </div>
            </div>
          </div>

          {/* Card deck */}
          <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} onFocusCapture={() => setHovering(true)} onBlurCapture={() => setHovering(false)}>
            <div className="relative mx-auto max-w-[560px] lg:mx-0">
              {/* Shells of the next cards */}
              {[2, 1].map((k) =>
                total > k ? (
                  <div
                    key={k}
                    className="absolute inset-0 rounded-[22px] border border-[var(--line)] bg-[#140f0f]"
                    style={{
                      transform: `translateX(${k * 22}px) rotate(${k * 2.2}deg) scale(${1 - k * 0.035})`,
                      transformOrigin: 'bottom left',
                      opacity: 0.75 - k * 0.2,
                    }}
                    aria-hidden="true"
                  />
                ) : null
              )}
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={`${section.id}-${cardIndex}`}
                  className="relative"
                  custom={direction}
                  initial={prefersReduced ? false : { opacity: 0, x: direction * 40, rotate: direction * 1.5 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={prefersReduced ? undefined : { opacity: 0, x: direction * -40, rotate: direction * -1.5 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <DeckCard card={card} priority={cardIndex === 0} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="mx-auto mt-8 flex max-w-[560px] items-center gap-4 lg:mx-0">
              <button onClick={() => step(-1)} className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line2)] text-[var(--fg)] hover:bg-white/[0.06]" aria-label="Previous card">
                ←
              </button>
              <div className="flex flex-1 flex-wrap items-center justify-center gap-1.5">
                {section.cards.map((c, i) => (
                  <button
                    key={c.title + i}
                    onClick={() => {
                      setDirection(i > cardIndex ? 1 : -1);
                      setCardIndex(i);
                    }}
                    aria-label={`Card ${i + 1}: ${c.title}`}
                    aria-current={i === cardIndex ? 'true' : undefined}
                    className={cn('h-1.5 rounded-full transition-all', i === cardIndex ? 'w-6 bg-[var(--cream)]' : 'w-1.5 bg-[var(--dim)] hover:bg-[var(--muted)]')}
                  />
                ))}
              </div>
              <button
                onClick={() => setAuto((a) => !a)}
                aria-pressed={auto}
                className="caps flex items-center gap-2 rounded-full border border-[var(--line2)] px-3.5 py-2 text-[10.5px] text-[var(--text)] hover:bg-white/[0.06]"
              >
                <span className={cn('h-1.5 w-1.5 rounded-full', playing ? 'bg-[var(--cream)]' : 'bg-[var(--dim)]')} />
                Auto
              </button>
              <button onClick={() => step(1)} className="grid h-12 w-12 place-items-center rounded-full border border-[var(--line2)] text-[var(--fg)] hover:bg-white/[0.06]" aria-label="Next card">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Keyboard hints */}
        <div className="mt-14 hidden items-center justify-center gap-6 border-t border-[var(--line)] pt-6 text-[12px] text-[var(--dim)] md:flex">
          <span className="flex items-center gap-2">
            <kbd className="rounded border border-[var(--line2)] px-1.5 py-0.5 font-mono text-[11px]">←</kbd>
            <kbd className="rounded border border-[var(--line2)] px-1.5 py-0.5 font-mono text-[11px]">→</kbd> navigate
          </span>
          <span className="flex items-center gap-2">
            <kbd className="rounded border border-[var(--line2)] px-1.5 py-0.5 font-mono text-[11px]">Space</kbd> pause
          </span>
          <span className="flex items-center gap-2">
            <kbd className="rounded border border-[var(--line2)] px-1.5 py-0.5 font-mono text-[11px]">1-{sections.length}</kbd> section
          </span>
        </div>
      </div>
    </div>
  );
}
