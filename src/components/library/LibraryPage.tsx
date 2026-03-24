'use client';

import { useState } from 'react';
import { books } from '@/content/books';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'ai-ml', label: 'AI & ML' },
  { key: 'engineering', label: 'Engineering' },
  { key: 'leadership', label: 'Leadership' },
  { key: 'philosophy', label: 'Philosophy' },
  { key: 'fiction', label: 'Fiction' },
  { key: 'mystery', label: 'Mystery' },
  { key: 'history', label: 'History & War' },
];

export function LibraryPage() {
  const [filter, setFilter] = useState('all');
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  const filtered =
    filter === 'all' ? books : books.filter((b) => b.category === filter);

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fff6e4] tracking-tight mb-4">
              The Book<span className="text-[#00F2FF]">shelf</span>
            </h1>
            <p className="text-[#fff6e4]/60 text-lg max-w-2xl leading-relaxed">
              Books that shaped how I think about systems, people, and problems.
            </p>
          </div>
        </Reveal>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key)}
              role="tab"
              aria-selected={filter === cat.key}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                filter === cat.key
                  ? 'bg-[#141414] text-[#fff6e4]'
                  : 'bg-[#111111] text-[#fff6e4]/60 hover:text-[#fff6e4] hover:bg-[#1a1a1a]/30'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bookshelf */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((book, i) => {
            const isSelected = selectedBook === book.id;
            return (
              <Reveal key={book.id} delay={i * 0.05}>
                <button
                  onClick={() =>
                    setSelectedBook(isSelected ? null : book.id)
                  }
                  className="group w-full text-left"
                  aria-expanded={isSelected}
                >
                  {/* Book spine visual */}
                  <div
                    className={cn(
                      'relative rounded-lg aspect-[3/4] flex flex-col justify-end p-4 transition-all duration-300 overflow-hidden book-pull',
                      isSelected
                        ? 'shadow-xl shadow-black/10 scale-[1.02]'
                        : 'group-hover:shadow-lg group-hover:-translate-y-1'
                    )}
                    style={{ backgroundColor: book.coverColor }}
                  >
                    {/* Spine texture */}
                    <div
                      className="absolute top-0 left-0 w-3 h-full opacity-30"
                      style={{ backgroundColor: book.spineColor }}
                      aria-hidden="true"
                    />

                    {/* Book info */}
                    <div className="relative z-10">
                      <h3 className="text-white font-serif font-semibold text-sm sm:text-base leading-tight">
                        {book.title}
                      </h3>
                      <p className="text-white/70 text-xs mt-1">
                        {book.author}
                      </p>
                    </div>

                    {/* Category badge */}
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-white/20 text-white text-[10px] font-mono uppercase tracking-wider">
                      {book.category}
                    </span>
                  </div>

                  {/* Expanded takeaway */}
                  {isSelected && (
                    <div className="mt-3 p-4 rounded-lg bg-[#111111] border border-white/5">
                      <p className="text-sm text-[#fff6e4]/80 leading-relaxed italic">
                        &ldquo;{book.takeaway}&rdquo;
                      </p>
                    </div>
                  )}
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Reading philosophy */}
        <Reveal delay={0.3}>
          <div className="mt-16 max-w-2xl mx-auto text-center">
            <p className="text-[#fff6e4]/60 leading-relaxed">
              Reading isn&apos;t separate from engineering - it&apos;s where I
              learn to think in narratives, understand systems at scale, and
              find the patterns that connect technology to human experience.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
