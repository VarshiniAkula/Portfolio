'use client';

import { research, publications, certifications, hackathons } from '@/content/research';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

export function ResearchPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        {/* ── Page Header ── */}
        <Reveal>
          <div className="mb-24 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-8 text-[#fff6e4]">
              Credentials &amp;{' '}
              <br className="hidden sm:block" />
              <span className="text-[#00F2FF] tech-glow-text">The Archives</span>
            </h1>
            <p className="text-[#fff6e4]/60 text-lg md:text-xl max-w-xl italic">
              A record of continuous learning and applied research. Fusing cloud-scale infrastructure with neural network inquiry.
            </p>
          </div>
        </Reveal>

        {/* ── Certifications 2x2 Grid ── */}
        <div className="mb-24">
          <div className="flex items-baseline gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff6e4]">
              Holographic Certifications
            </h2>
            <div className="h-px flex-grow bg-gradient-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={cert.id} delay={i * 0.1}>
                <div className="group relative p-7 rounded-lg bg-[#141414] border border-white/5 overflow-hidden hover:border-[#00F2FF]/30 transition-all duration-500 h-full flex flex-col">
                  {/* Glow orb */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F2FF]/5 rounded-full -mr-16 -mt-16 blur-3xl transition-all duration-700 group-hover:bg-[#00F2FF]/15 pointer-events-none" />

                  <div className="relative z-10 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#fff6e4] mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-[#fff6e4]/50 text-sm mb-8 flex-1">
                      {cert.description}
                    </p>
                    <div className="flex justify-between items-center">
                      {cert.credentialId && (
                        <span className="text-[10px] font-label uppercase tracking-widest text-[#00F2FF]/50">
                          ID: {cert.credentialId}
                        </span>
                      )}
                      <button className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-[#00F2FF] px-4 py-2 border border-[#00F2FF]/20 rounded-full bg-[#00F2FF]/5 hover:bg-[#00F2FF]/10 hover:border-[#00F2FF]/40 hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                        Verify
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Publications Archive ── */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff6e4]">
              Digital Archive:{' '}
              <span className="text-[#00F2FF]">Publications</span>
            </h2>
            <span className="text-xs font-label uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full text-[#fff6e4]/60">
              Index 2023 &ndash; 2024
            </span>
          </div>

          <div className="space-y-4">
            {publications.map((pub, i) => (
              <Reveal key={pub.id} delay={i * 0.1}>
                <div className="group flex flex-col md:flex-row md:items-center bg-[#0d0d0d] border-l-4 border-[#00F2FF] p-6 gap-6 hover:bg-[#141414] transition-colors">
                  <div className="flex-grow">
                    <div className="flex gap-4 mb-2">
                      <span className="text-[10px] text-[#00F2FF] font-label uppercase tracking-widest">
                        Research Paper
                      </span>
                      <span className="text-[10px] text-[#fff6e4]/40 font-label uppercase tracking-widest">
                        {pub.date}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold italic text-[#fff6e4] mb-2">
                      {pub.title}
                    </h3>
                    <p className="text-[#fff6e4]/50 text-sm max-w-2xl">
                      {pub.abstract}
                    </p>
                    <p className="mt-2 text-xs text-[#fff6e4]/30">
                      {pub.venue}
                    </p>
                  </div>
                  <div className="w-full md:w-auto flex-shrink-0">
                    {pub.url ? (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full md:w-auto text-center px-6 py-3 border border-white/10 hover:border-[#00F2FF] hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] text-xs uppercase tracking-widest text-[#fff6e4]/80 hover:text-[#00F2FF] transition-all"
                      >
                        Read Manuscript
                      </a>
                    ) : (
                      <span className="inline-block w-full md:w-auto text-center px-6 py-3 border border-white/10 text-xs uppercase tracking-widest text-[#fff6e4]/40 cursor-default">
                        Read Manuscript
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Active Research ── */}
        <div className="mb-24">
          <SectionHeading
            title="Active Research"
            label="// Lab Notebook"
            subtitle="Investigating the boundaries of AI reliability, reasoning, and security."
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {research.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="group rounded-xl border border-white/5 bg-[#141414] p-6 h-full flex flex-col hover:border-[#00F2FF]/20 transition-colors">
                  {/* Status & date */}
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant={
                        item.status === 'in-progress'
                          ? 'accent'
                          : item.status === 'published'
                          ? 'accent'
                          : 'default'
                      }
                    >
                      {item.status === 'in-progress' ? 'Active' : item.status}
                    </Badge>
                    <span className="font-mono text-[10px] text-[#fff6e4]/40">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#fff6e4] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#fff6e4]/50 leading-relaxed flex-1 mb-4">
                    {item.abstract}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>

                  {item.venue && (
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="text-xs text-[#fff6e4]/40">
                        Venue: <span className="text-[#fff6e4]/70">{item.venue}</span>
                      </span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Hackathons & Wins ── */}
        <Reveal>
          <div className="bg-[#111111] p-8 sm:p-12 rounded-lg relative overflow-hidden border border-white/5">
            {/* Cyan accent bar */}
            <div className="absolute top-0 left-0 w-1 h-full bg-[#00F2FF]" />
            {/* Background glow */}
            <div className="absolute -right-24 -top-24 w-96 h-96 bg-[#00F2FF]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left: Hackathon entries */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff6e4] mb-2">
                  Hackathons <span className="text-[#00F2FF]">&amp; Wins</span>
                </h2>
                <p className="text-[#fff6e4]/50 italic mb-10">
                  Combat-tested engineering in high-stakes competitive environments.
                </p>

                <div className="space-y-10">
                  {hackathons.map((hack, i) => (
                    <Reveal key={hack.id} delay={i * 0.12}>
                      <div>
                        <div className="flex justify-between items-end mb-4">
                          <div>
                            <h4 className="text-lg sm:text-xl font-bold italic text-[#fff6e4]">
                              {hack.title}
                            </h4>
                            <p className="text-xs text-[#fff6e4]/40 uppercase tracking-[0.1em]">
                              {hack.location}
                            </p>
                          </div>
                          <span className="text-[#00F2FF] font-black text-xl sm:text-2xl tech-glow-text whitespace-nowrap ml-4">
                            {hack.result}
                          </span>
                        </div>

                        {/* Progress bar */}
                        <div className="w-full h-1.5 bg-[#1c1c1c] rounded-full mb-4 overflow-hidden">
                          <div
                            className="h-full bg-[#00F2FF] rounded-full"
                            style={{
                              width: hack.resultType === 'winner' ? '100%' : '80%',
                              filter: 'drop-shadow(0 0 4px rgba(0, 242, 255, 0.5))',
                            }}
                          />
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                          {hack.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-[#1a1a1a] text-[10px] uppercase font-bold tracking-widest text-[#00F2FF] border border-[#00F2FF]/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Right: Achievement highlight */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-sm">
                  <div className="absolute inset-0 border-2 border-[#00F2FF]/20 rounded-full animate-pulse shadow-[inset_0_0_30px_rgba(0,242,255,0.05)]" />
                  <div className="absolute inset-4 border border-white/10 rounded-full" />
                  <div className="absolute inset-0 flex items-center justify-center flex-col text-center p-8">
                    <svg className="w-16 h-16 text-[#00F2FF] mb-4 tech-glow-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-4.5A3.375 3.375 0 0 0 13.125 10.875h-2.25A3.375 3.375 0 0 0 7.5 14.25v4.5m6-6V6.375a3.375 3.375 0 0 0-3-3.357A3.375 3.375 0 0 0 7.5 6.375v1.875" />
                    </svg>
                    <div className="text-4xl font-black italic tracking-tighter text-[#fff6e4]">
                      3 Wins
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-[#fff6e4]/40 mt-1">
                      Competitions &amp; Hackathons
                    </div>
                    <div className="mt-8 flex gap-4">
                      <div className="w-1.5 h-1.5 bg-[#00F2FF] rounded-full shadow-[0_0_5px_#00f2ff]" />
                      <div className="w-1.5 h-1.5 bg-[#00F2FF] rounded-full shadow-[0_0_5px_#00f2ff]" />
                      <div className="w-1.5 h-1.5 bg-[#00F2FF] rounded-full shadow-[0_0_5px_#00f2ff]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
