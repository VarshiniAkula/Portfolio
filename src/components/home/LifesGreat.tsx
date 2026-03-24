'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Reveal } from '@/components/ui/Reveal';

const lifeCards = [
  { label: 'tempe sunsets', image: '/life/tempe-sunsets.jpg', rotate: '-2deg' },
  { label: 'beach smiles', image: '/life/beach-smiles.jpg', rotate: '1.5deg' },
  { label: 'street art finds', image: '/life/street-art.jpg', rotate: '-1deg' },
  { label: 'Hollywood dreams', image: '/life/hollywood.jpg', rotate: '2deg' },
  { label: 'ocean walks', image: '/life/ocean-walks.jpg', rotate: '-1.5deg' },
  { label: 'golden hours', image: '/life/golden-hours.jpg', rotate: '1deg' },
  { label: 'Hollywood hills', image: '/life/hollywood-hills.jpg', rotate: '-2.5deg' },
];

export function LifesGreat() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-black">
      {/* Heading */}
      <Reveal>
        <h2 className="text-center font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fff6e4] mb-12 sm:mb-16">
          Life&apos;s great
        </h2>
      </Reveal>

      {/* Horizontal scrolling polaroid row */}
      <div className="relative group/scroll">
        {/* Left arrow */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 shadow-lg items-center justify-center text-[#fff6e4] hover:bg-white/20 transition-all opacity-0 group-hover/scroll:opacity-100"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 shadow-lg items-center justify-center text-[#fff6e4] hover:bg-white/20 transition-all opacity-0 group-hover/scroll:opacity-100"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Cards container */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar px-6 sm:px-12 lg:px-20 pb-4"
        >
          {lifeCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 0.06} direction="up">
              <div
                className="flex-shrink-0 w-48 sm:w-56 cursor-default transition-transform duration-300 hover:scale-105"
                style={{ transform: `rotate(${card.rotate})` }}
              >
                {/* Polaroid frame */}
                <div className="bg-white p-2 pb-12 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] relative">
                  {/* Photo */}
                  <div className="aspect-[3/4] relative overflow-hidden bg-[#e8e3de]">
                    <Image
                      src={card.image}
                      alt={card.label}
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </div>

                  {/* Handwritten label */}
                  <p className="absolute bottom-2.5 left-0 right-0 text-center text-base sm:text-lg text-[#333] italic font-serif">
                    {card.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
