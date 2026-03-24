'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Reveal } from '@/components/ui/Reveal';

const lifeCards: { label: string; image: string; rotate: string; objectPosition?: string }[] = [
  // Achievements
  { label: 'NASA Space Apps medal', image: '/life/1655792141440.jpeg', rotate: '-2deg' },
  { label: 'at the PMO office', image: '/life/1668267351952.jpeg', rotate: '1.5deg' },
  { label: 'chairing the conclave', image: '/life/1678550404119.jpeg', rotate: '-1deg' },
  { label: 'day one at JPMorgan', image: '/life/1684667945041.jpeg', rotate: '2deg' },
  { label: 'hackathon in Chandigarh', image: '/life/hackathon-in-chandigarh---nasa-space-apps.jpeg', rotate: '-1.5deg' },
  { label: 'head of research, IIITH', image: '/life/head-of-research-and-incubation-iiith.jpeg', rotate: '1deg', objectPosition: 'center 30%' },
  { label: 'with Anna Roy at PMO', image: '/life/picture-in-pmo-office-ms.anna-roy.jpeg', rotate: '-2.5deg' },
  { label: 'with AICTE chairman', image: '/life/picture-with-aicte-chairman.jpeg', rotate: '1.5deg' },
  { label: 'WLC speaker moment', image: '/life/img_1873.jpg', rotate: '-1deg' },
  { label: 'graduation day', image: '/life/bachelor-s-grad.jpg', rotate: '-2deg' },
  { label: 'Women\'s Leadership 2024', image: '/life/img_0143.jpg', rotate: '1.5deg' },
  { label: 'with ISRO scientist', image: '/life/picture-with-isro-scientist.jpg', rotate: '-1.5deg' },
  { label: 'with GMR CEO', image: '/life/picture-with-mr.-rama-iyer-gmr-ceo.jpg', rotate: '1deg' },
  // Travel
  { label: 'Arizona arches', image: '/life/arizona.jpg', rotate: '-2.5deg' },
  { label: 'sunset reads', image: '/life/beach-sunsets-and-book.jpg', rotate: '2deg' },
  { label: 'Chopta valley snow', image: '/life/chopta-valley.jpg', rotate: '-1deg' },
  { label: 'conquering fears', image: '/life/conquering-fears.jpg', rotate: '1.5deg' },
  { label: 'fall in Colorado', image: '/life/fall-in-love-with-colorado.jpg', rotate: '-2deg' },
  { label: 'girl in the city', image: '/life/girl-in-the-city.jpg', rotate: '1deg' },
  { label: 'I fly', image: '/life/i-fly.jpg', rotate: '-1.5deg' },
  { label: 'doors of old towns', image: '/life/img_3562.jpg', rotate: '2.5deg' },
  { label: 'Udaipur sunsets', image: '/life/udaipur-sunsets.jpg', rotate: '-1deg' },
  { label: 'last day at JPMC', image: '/life/last-day-at-jpmc.jpg', rotate: '1.5deg' },
  { label: 'Nariman Point, Mumbai', image: '/life/nariman-point-mumbai.jpg', rotate: '-2deg' },
  { label: 'Mumbai heritage', image: '/life/mumbai.jpg', rotate: '2deg' },
  { label: 'Rocky Mountain lakes', image: '/life/rocky-mountains.jpg', rotate: '-1.5deg' },
  { label: 'A Mountain, Tempe', image: '/life/tempe---a-mountain.jpg', rotate: '1deg' },
  { label: 'the Ganges', image: '/life/the-ganges.jpg', rotate: '-2.5deg' },
  { label: 'the Sphere, Vegas', image: '/life/the-sphere.jpg', rotate: '1.5deg' },
  { label: 'art in Vegas', image: '/life/vegas.jpg', rotate: '-1deg' },
  { label: 'Western Ghats of India', image: '/life/western-ghats-of-india.jpg', rotate: '2deg' },
  // Other
  { label: 'hot chocolate and cake', image: '/life/img_1529-2.jpg', rotate: '-2deg' },
  { label: 'coffee and croissants', image: '/life/img_3148-2.jpg', rotate: '1.5deg' },
  { label: 'Irani chai mornings', image: '/life/img_5772-2.jpg', rotate: '-1.5deg' },
  { label: 'Hyderabad sunset', image: '/life/img_0320.jpg', rotate: '1deg' },
  { label: 'golden hour palms', image: '/life/img_0550-2.jpg', rotate: '-2.5deg' },
  { label: 'sunset by the sea', image: '/life/img_1154-2.jpg', rotate: '2deg' },
  { label: 'starry nights', image: '/life/img_2049.jpg', rotate: '-1deg' },
  { label: 'Tempe skies', image: '/life/img_7405.jpg', rotate: '1.5deg' },
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
                      style={card.objectPosition ? { objectPosition: card.objectPosition } : undefined}
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
