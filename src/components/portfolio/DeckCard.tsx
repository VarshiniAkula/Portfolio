import Link from 'next/link';
import Image from 'next/image';
import type { DeckCard as DeckCardData, DeckLink } from '@/types/content';
import { ArrowUpRight, Diamond } from './icons';
import { cn } from '@/lib/utils';

function CardLink({ link }: { link: DeckLink }) {
  const cls = cn(
    'inline-flex flex-1 items-center justify-center rounded-xl px-4 py-3 font-label text-[14px] transition-colors min-w-[120px]',
    link.primary
      ? 'bg-[var(--cream)] text-[#1a1110] hover:bg-white'
      : 'border border-[var(--line)] bg-white/[0.04] text-[var(--fg)] hover:border-[var(--line2)]'
  );
  if (link.href.startsWith('/') && !link.download && !link.href.endsWith('.pdf')) {
    return (
      <Link href={link.href} className={cls}>
        {link.label}
      </Link>
    );
  }
  const external = link.href.startsWith('http');
  return (
    <a
      href={link.href}
      className={cls}
      download={link.download}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {link.label}
    </a>
  );
}

export function DeckCard({ card, priority }: { card: DeckCardData; priority?: boolean }) {
  const [g1, g2] = card.glow;
  const isInternal = card.href?.startsWith('/');

  return (
    <article className="flex min-h-[600px] flex-col overflow-hidden rounded-[22px] border border-[var(--line2)] bg-[#171111] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.95)]">
      {/* Visual */}
      <div className={cn('relative overflow-hidden', card.image ? 'h-[330px] sm:h-[360px]' : 'h-[280px] sm:h-[300px]')}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 55% at 32% 70%, ${g1}e6, transparent 70%), radial-gradient(55% 60% at 80% 22%, ${g2}e6, transparent 72%), linear-gradient(180deg, #0b0707, #140d0d)`,
          }}
          aria-hidden="true"
        />
        <div className="dot-grain absolute inset-0" aria-hidden="true" />

        <div className="relative flex h-full flex-col p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <span className="caps rounded-full bg-black/60 px-3 py-1.5 text-[10.5px] text-[var(--cream)]">{card.kicker}</span>
            {card.href ? (
              isInternal ? (
                <Link href={card.href} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/70 text-[var(--cream)] hover:bg-black" aria-label={`Open ${card.title}`}>
                  <ArrowUpRight />
                </Link>
              ) : (
                <a href={card.href} target="_blank" rel="noopener noreferrer" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/70 text-[var(--cream)] hover:bg-black" aria-label={`Open ${card.title}`}>
                  <ArrowUpRight />
                </a>
              )
            ) : (
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-black/70 text-[var(--cream)]" aria-hidden="true">
                <Diamond />
              </span>
            )}
          </div>

          <div className="mt-5">
            <h3 className="break-words font-label text-[24px] font-normal leading-tight text-white sm:text-[28px]">{card.title}</h3>
            <p className="caps mt-2 text-[10.5px] text-[var(--text)]">{card.subtitle}</p>
            {!card.image && <div className="mt-4 h-px w-8 bg-[var(--line2)]" aria-hidden="true" />}
          </div>

          {card.image && (
            <div className="mx-auto mt-4 w-[64%] overflow-hidden rounded-lg border border-white/15 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.9)]">
              <div className="relative aspect-[16/10]">
                <Image src={card.image} alt="" fill sizes="360px" className="object-cover" priority={priority} />
              </div>
            </div>
          )}

          {card.stat && (
            <div className="mt-auto pt-4">
              <p className="font-label text-[30px] font-light leading-none tracking-[-0.01em] text-white sm:text-[36px]">{card.stat.value}</p>
              <p className="caps mt-2 text-[10.5px] text-[var(--text)]">{card.stat.caption}</p>
            </div>
          )}
        </div>
      </div>

      {/* Text panel */}
      <div className="flex flex-1 flex-col bg-[#1d1413] p-5 sm:p-6">
        <p className="caps text-[var(--cream)]">{card.meta}</p>
        <p className="mt-3 text-[14.5px] leading-relaxed text-[var(--text)]">{card.body}</p>
        <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tags">
          {card.tags.map((t) => (
            <li key={t} className="rounded-md border border-[var(--line)] bg-white/[0.03] px-2 py-1 text-[11.5px] text-[var(--muted)]">
              {t}
            </li>
          ))}
        </ul>
        {card.links && card.links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2.5 pt-6">
            {card.links.map((l) => (
              <CardLink key={l.label} link={l} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
