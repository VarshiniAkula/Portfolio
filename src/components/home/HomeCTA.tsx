import Link from 'next/link';
import { profile } from '@/content/profile';
import { homeContent } from '@/content/home';
import { disciplines, disciplineAccent } from '@/content/disciplines';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function HomeCTA() {
  const copy = homeContent.resume;
  return (
    <section id="resume" className="py-24 sm:py-32 scroll-mt-16" aria-labelledby="resume-heading">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#070707]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(600px circle at 0% 0%, rgba(0,242,255,0.10), transparent 55%), radial-gradient(500px circle at 100% 100%, rgba(183,156,255,0.10), transparent 55%)',
            }}
            aria-hidden="true"
          />
          <div className="relative grid lg:grid-cols-2 gap-12 p-8 sm:p-14 items-center">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#fff6e4]/40 mb-4">{copy.eyebrow}</p>
              <h2 id="resume-heading" className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#fff6e4]">
                {copy.title}
              </h2>
              <p className="mt-5 text-lg text-[#fff6e4]/60 leading-relaxed max-w-lg">{copy.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={profile.resumeUrl} download={copy.fileName} size="lg">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M10 3v10m0 0l-4-4m4 4l4-4M4 16h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download PDF
                </Button>
                <Button href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                  Open in browser
                </Button>
              </div>
              <p className="mt-10 text-[#fff6e4]/70">
                {copy.roles}{' '}
                <Link href="/contact" className="font-semibold text-[#00F2FF] hover:underline underline-offset-4">
                  Contact me &rarr;
                </Link>
              </p>
            </Reveal>

            {/* Résumé preview card */}
            <Reveal delay={0.15} direction="left">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block mx-auto max-w-md rotate-[1.5deg] hover:rotate-0 transition-transform duration-500"
                aria-label="Open résumé PDF"
              >
                <div className="rounded-2xl bg-[#fbf8f2] p-8 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] ring-1 ring-black/5">
                  <p className="font-serif text-2xl font-bold text-[#111]">{profile.name}</p>
                  <p className="text-sm text-[#444] mt-1">{profile.title} · {profile.location}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {disciplines.map((d) => (
                      <span key={d.id} className="inline-flex items-center gap-1.5 rounded-full bg-black/[0.05] px-2.5 py-1 text-[11px] font-medium text-[#222]">
                        <span className={cn('h-1.5 w-1.5 rounded-full', disciplineAccent[d.id].bg)} />
                        {d.label}
                      </span>
                    ))}
                  </div>
                  {['Experience', 'Projects', 'Education'].map((section, i) => (
                    <div key={section} className="mt-6">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#666]">{section}</p>
                      <div className="mt-2 space-y-1.5">
                        {Array.from({ length: 3 - (i === 2 ? 1 : 0) }).map((_, j) => (
                          <div key={j} className="h-2 rounded-full bg-black/10" style={{ width: `${92 - j * 14 - i * 4}%` }} />
                        ))}
                      </div>
                    </div>
                  ))}
                  <p className="mt-8 text-xs font-semibold text-[#111] opacity-60 group-hover:opacity-100 transition-opacity">
                    resume.pdf &rarr;
                  </p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
