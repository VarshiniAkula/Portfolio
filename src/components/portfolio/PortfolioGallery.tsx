'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import type { MediaItem } from '@/lib/portfolio-media';

type Filter = 'all' | 'photo' | 'video';

interface PortfolioGalleryProps {
  photos: MediaItem[];
  videos: MediaItem[];
  showUploader?: boolean;
}

export function PortfolioGallery({ photos, videos, showUploader = true }: PortfolioGalleryProps) {
  const all = [...photos, ...videos];
  const [filter, setFilter] = useState<Filter>('all');
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  const visible = filter === 'all' ? all : filter === 'photo' ? photos : videos;

  const tabs: { key: Filter; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: all.length },
    { key: 'photo', label: 'Photos', count: photos.length },
    { key: 'video', label: 'Videos', count: videos.length },
  ];

  return (
    <section className="py-16 sm:py-24">
      <Container>
        {/* Hero */}
        <Reveal>
          <span className="font-mono text-xs tracking-[0.2em] text-[#00F2FF] uppercase mb-4 block">
            // Photography &amp; Content Portfolio
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl">
            A creative eye for <span className="gradient-text">stories worth sharing</span>.
          </h1>
          <p className="mt-6 font-serif text-xl sm:text-2xl italic text-[#fff6e4] max-w-2xl leading-snug">
            Hi, I&apos;m Varshini. I shoot and edit the everyday moments that make people stop scrolling.
          </p>
          <p className="mt-5 text-[#fff6e4]/70 text-lg max-w-2xl leading-relaxed">
            Photos and short-form video I&apos;ve shot, edited, and published across
            campus life, travel, and events. Curated for the{' '}
            <span className="text-[#fff6e4]">ASU Brand Social Media</span> team,
            built to move fast and look sharp on Instagram, Threads, and beyond.
          </p>
          <a
            href="https://www.instagram.com/crazy.flies"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#00F2FF]/25 px-4 py-2 text-sm font-semibold text-[#fff6e4] hover:border-[#00F2FF]/50 hover:text-[#00F2FF] hover:bg-[#00F2FF]/5 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            @crazy.flies
          </a>
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-lg">
            {[
              { value: photos.length, label: 'Photos' },
              { value: videos.length, label: 'Videos' },
              { value: '4', label: 'ASU Campuses' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-serif text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="font-mono text-xs text-[#fff6e4]/60 tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Uploader (local only, hidden on the deployed site) */}
        {showUploader && (
          <Reveal delay={0.15}>
            <Uploader />
          </Reveal>
        )}

        {/* Filter tabs */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-2 mt-16 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={cn(
                  'rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300',
                  filter === tab.key
                    ? 'bg-[#00F2FF] text-black shadow-[0_0_20px_rgba(0,242,255,0.3)]'
                    : 'border border-[#00F2FF]/20 text-[#fff6e4]/80 hover:border-[#00F2FF]/40 hover:text-[#00F2FF]'
                )}
              >
                {tab.label}
                <span className="ml-2 font-mono text-xs opacity-70">{tab.count}</span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Gallery grid (masonry via CSS columns) */}
        {visible.length === 0 ? (
          <EmptyState filter={filter} />
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {visible.map((item, i) => (
              <MediaCard key={item.src} item={item} index={i} onOpen={() => setLightbox(item)} />
            ))}
          </div>
        )}
      </Container>

      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}

function MediaCard({
  item,
  index,
  onOpen,
}: {
  item: MediaItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      style={{ animationDelay: `${Math.min(index, 12) * 0.05}s` }}
      className="stagger-item group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-[#0f0f0f] card-hover text-left focus-visible:ring-2 focus-visible:ring-[#00F2FF]"
    >
      {item.type === 'photo' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      ) : (
        <div className="relative">
          <video
            src={item.src}
            muted
            playsInline
            preload="metadata"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/10 transition-colors">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00F2FF] text-black shadow-[0_0_24px_rgba(0,242,255,0.5)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </div>
        </div>
      )}
    </button>
  );
}

function Lightbox({ item, onClose }: { item: MediaItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#fff6e4]/70 hover:text-[#00F2FF] transition-colors"
        aria-label="Close"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      </button>
      <div className="max-w-6xl max-h-[85vh] w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        {item.type === 'photo' ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.src} alt={item.title} className="max-h-[80vh] w-auto rounded-lg object-contain" />
        ) : (
          <video src={item.src} controls autoPlay className="max-h-[80vh] w-auto rounded-lg" />
        )}
      </div>
    </div>
  );
}

function EmptyState({ filter }: { filter: Filter }) {
  const noun = filter === 'video' ? 'videos' : filter === 'photo' ? 'photos' : 'media';
  return (
    <div className="rounded-2xl border-2 border-dashed border-[#00F2FF]/20 bg-[#0f0f0f]/50 py-20 text-center">
      <p className="font-serif text-xl text-[#fff6e4]/80">No {noun} yet</p>
      <p className="mt-2 text-[#fff6e4]/50 text-sm">
        Drop files in the uploader above (running locally) or add them to{' '}
        <code className="font-mono text-[#00F2FF]/80">public/portfolio/</code>.
      </p>
    </div>
  );
}

function Uploader() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'done' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const upload = useCallback(
    async (fileList: FileList | File[]) => {
      const files = Array.from(fileList);
      if (files.length === 0) return;

      setStatus('uploading');
      setMessage(`Uploading ${files.length} file${files.length > 1 ? 's' : ''}…`);

      const body = new FormData();
      files.forEach((f) => body.append('files', f));

      try {
        const res = await fetch('/api/portfolio/upload', { method: 'POST', body });
        const data = await res.json();
        if (!res.ok) {
          setStatus('error');
          setMessage(data.error || 'Upload failed.');
          return;
        }
        const savedCount = data.saved?.length ?? 0;
        const skippedCount = data.skipped?.length ?? 0;
        setStatus('done');
        setMessage(
          `Added ${savedCount} item${savedCount === 1 ? '' : 's'}` +
            (skippedCount ? ` · skipped ${skippedCount}` : '')
        );
        router.refresh();
      } catch {
        setStatus('error');
        setMessage('Could not reach the server.');
      }
    },
    [router]
  );

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files) upload(e.dataTransfer.files);
      }}
      className={cn(
        'mt-14 rounded-2xl border-2 border-dashed p-8 sm:p-10 text-center transition-all duration-300 glass-panel',
        dragOver
          ? 'border-[#00F2FF] bg-[#00F2FF]/5 shadow-[0_0_30px_rgba(0,242,255,0.15)]'
          : 'border-[#00F2FF]/25 hover:border-[#00F2FF]/40'
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        multiple
        hidden
        onChange={(e) => e.target.files && upload(e.target.files)}
      />
      <svg
        className="mx-auto mb-4"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00F2FF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
      <p className="font-serif text-lg text-[#fff6e4]">Upload your photos &amp; videos</p>
      <p className="mt-1 text-sm text-[#fff6e4]/55">
        Drag &amp; drop here, or{' '}
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="text-[#00F2FF] underline underline-offset-2 hover:brightness-110"
        >
          browse files
        </button>
        . JPG, PNG, WebP, MP4, WebM, MOV.
      </p>
      {status !== 'idle' && (
        <p
          className={cn(
            'mt-4 font-mono text-xs tracking-wide',
            status === 'error' ? 'text-red-400' : status === 'done' ? 'text-[#00F2FF]' : 'text-[#fff6e4]/60'
          )}
        >
          {status === 'uploading' && '⏳ '}
          {status === 'done' && '✓ '}
          {status === 'error' && '⚠ '}
          {message}
        </p>
      )}
    </div>
  );
}
