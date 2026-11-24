'use client';

import Image from 'next/image';
import { useState } from 'react';
import { lifePhotos } from '@/content/life';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';

function Polaroid({ photo, hidden }: { photo: (typeof lifePhotos)[number]; hidden?: boolean }) {
  return (
    <li
      className="w-[150px] shrink-0 px-2.5 sm:w-[190px] sm:px-3.5 lg:w-[210px]"
      aria-hidden={hidden || undefined}
    >
      <figure
        className="rounded-[3px] bg-[#fbf8f2] p-2 pb-9 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.8)] transition-transform duration-300 hover:scale-[1.04] sm:pb-11"
        style={{ transform: `rotate(${photo.rotate})` }}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e3de]">
          <Image
            src={photo.image}
            alt={hidden ? '' : photo.label}
            fill
            sizes="(max-width: 640px) 150px, 210px"
            className="object-cover"
            style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
          />
        </div>
        <figcaption className="mt-2 truncate text-center font-handwriting text-[17px] leading-none text-[#3a3330] sm:text-[20px]">
          {photo.label}
        </figcaption>
      </figure>
    </li>
  );
}

export function LifesGreat() {
  const prefersReduced = useReducedMotion();
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const paused = userPaused || hovering;
  const animate = !prefersReduced;

  return (
    <section className="relative pb-24 pt-4" aria-labelledby="life-heading">
      <div className="mx-auto max-w-[1240px] px-4 text-center sm:px-6">
        <p className="eyebrow">Life</p>
        <h2 id="life-heading" className="mt-4 font-label text-[clamp(40px,6vw,72px)] font-light leading-none tracking-[-0.03em] text-[var(--fg)]">
          Life&apos;s <em className="italic text-[var(--cream)]">great</em>
        </h2>
        <p className="mx-auto mt-4 max-w-md font-label text-[15px] font-light text-[var(--muted)]">
          Hackathons, conferences, mountains and a lot of coffee. The moments behind the work.
        </p>
      </div>

      <div className="relative mt-12">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[var(--page-bg)] to-transparent sm:w-24" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[var(--page-bg)] to-transparent sm:w-24" aria-hidden="true" />

        <div
          className={cn('py-6', animate ? 'overflow-hidden' : 'no-scrollbar overflow-x-auto')}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onTouchStart={() => setHovering(true)}
          onTouchEnd={() => setHovering(false)}
        >
          <ul
            className={cn('flex w-max', animate && 'life-marquee')}
            style={animate ? { animationPlayState: paused ? 'paused' : 'running' } : undefined}
            aria-label="Photos from Varshini's life"
          >
            {lifePhotos.map((p) => (
              <Polaroid key={p.image} photo={p} />
            ))}
            {/* Second copy makes the loop seamless */}
            {animate && lifePhotos.map((p) => <Polaroid key={`${p.image}-copy`} photo={p} hidden />)}
          </ul>
        </div>

        {animate && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setUserPaused((v) => !v)}
              aria-pressed={userPaused}
              className="caps flex items-center gap-2 rounded-full border border-[var(--line2)] px-4 py-2 text-[10.5px] text-[var(--text)] hover:bg-white/[0.06]"
            >
              {userPaused ? '▶ Play' : '❚❚ Pause'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
