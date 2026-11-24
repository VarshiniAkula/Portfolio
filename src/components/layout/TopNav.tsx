'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { portfolios, socialLinks } from '@/content/portfolios';
import { profile } from '@/content/profile';
import { LinkedInIcon, GitHubIcon } from '@/components/portfolio/icons';
import { cn } from '@/lib/utils';

const pill =
  'inline-flex items-center gap-2 rounded-full border border-[var(--line)] px-4 py-2.5 text-[13px] text-[var(--fg)] transition-colors hover:border-[var(--line2)] hover:bg-white/[0.04]';

export function TopNav() {
  const pathname = usePathname();
  const current = portfolios.find((p) => pathname === `/${p.id}`);

  return (
    <header className="relative z-40">
      <nav className="mx-auto flex max-w-[1240px] flex-wrap items-center gap-3 px-4 py-5 sm:px-6 sm:py-6" aria-label="Main">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-full focus-visible:outline-2"
          aria-label={current ? 'All portfolios' : `${profile.name}, home`}
          title={current ? 'All portfolios' : 'Home'}
        >
          <Image src="/avatar.svg" alt="" width={38} height={38} unoptimized className="rounded-full ring-1 ring-[var(--line2)]" />
          <span className="hidden text-sm text-[var(--fg)] md:inline">{profile.name}</span>
        </Link>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          {current && (
            <div className="order-last flex w-full justify-center rounded-full border border-[var(--line)] p-1 sm:order-none sm:w-auto" role="group" aria-label="Switch portfolio">
              {portfolios.map((p) => (
                <Link
                  key={p.id}
                  href={`/${p.id}`}
                  aria-current={p.id === current.id ? 'page' : undefined}
                  className={cn(
                    'flex-1 rounded-full px-3 py-1.5 text-center text-[11px] font-medium uppercase tracking-[0.16em] transition-colors sm:flex-none sm:px-4',
                    p.id === current.id ? 'bg-[var(--cream)] text-[#141010]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                  )}
                >
                  {p.short}
                </Link>
              ))}
            </div>
          )}
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className={pill} aria-label="LinkedIn">
            <LinkedInIcon />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className={pill} aria-label="GitHub">
            <GitHubIcon />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a href={profile.resumeUrl} download="Varshini_Akula_Resume.pdf" className={cn(pill, 'border-transparent bg-[var(--cream)] text-[#141010] hover:bg-white')}>
            Résumé ↓
          </a>
        </div>
      </nav>
    </header>
  );
}
