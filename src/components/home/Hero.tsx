'use client';

import { useExperienceMode } from '@/providers/ExperienceModeProvider';
import { profile } from '@/content/profile';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import Image from 'next/image';



export function Hero() {
  const { mode } = useExperienceMode();
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      {/* Ambient cyan glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-20 left-10 w-64 h-48 bg-[#00dbe7] blur-[120px] rounded-full mix-blend-screen opacity-20" />
        <div className="absolute bottom-20 right-10 w-80 h-64 bg-[#00F2FF] blur-[140px] rounded-full mix-blend-screen opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00F2FF] blur-[200px] rounded-full mix-blend-screen opacity-[0.04]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col items-start text-left">
            {/* System Online badge */}
            <Reveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222] border border-white/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse shadow-[0_0_8px_#00f2ff]" />
                <span className="text-[#00F2FF] text-xs font-bold uppercase tracking-[0.05em] font-label">
                  System Online
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={0.1}>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-[-0.02em] text-[#fff6e4] mb-4">
                AI &amp; Software{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e1fdff] to-[#00F2FF] drop-shadow-[0_0_16px_rgba(0,242,255,0.4)]">
                  Developer
                </span>
              </h1>
            </Reveal>

            {/* Tagline */}
            <Reveal delay={0.2}>
              <p className="text-[#fff6e4]/80 text-lg lg:text-xl font-normal leading-relaxed max-w-xl mb-4">
                Architecting high-performance digital ecosystems. Merging meticulous code with the art of technical storytelling.
              </p>
            </Reveal>

            {/* Bio */}
            <Reveal delay={0.25}>
              <p className="text-[#fff6e4]/50 text-base leading-relaxed max-w-lg mb-8">
                {mode === 'recruiter' ? profile.bio.recruiter : profile.bio.explorer}
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.3}>
              <div className="flex gap-4">
                <Button href="/projects" size="lg">
                  View My Work
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Me
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Photo with glowing ring + floating code */}
          <div className="relative w-full max-w-md lg:max-w-lg aspect-square flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[#00F2FF]/20 rounded-full blur-[80px] animate-pulse" />

            {/* Floating code snippet life.js - RIGHT side */}
            <div className="absolute top-8 -right-4 lg:-right-16 w-44 p-4 bg-[#111111]/90 backdrop-blur-[32px] rounded-2xl border border-[#00F2FF]/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-20 animate-float-slow">
              <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/10">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-[#00F2FF]" />
                <span className="ml-2 text-[9px] text-white/30 font-mono">life.js</span>
              </div>
              <p className="text-[#00F2FF] font-mono text-[11px] opacity-90 leading-relaxed">
                <span className="text-[#fff6e4]/40">while</span>(alive) {'{'}<br />
                &nbsp;&nbsp;code();<br />
                &nbsp;&nbsp;coffee();<br />
                {'}'}
              </p>
            </div>

            {/* Floating terminal - LEFT side */}
            <div className="absolute bottom-12 -left-4 lg:-left-16 w-52 p-4 bg-[#111111]/90 backdrop-blur-[32px] rounded-2xl border border-[#00F2FF]/15 shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-20 animate-float-delayed">
              <div className="flex items-center gap-1.5 mb-2 border-b border-white/10 pb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FF]" />
                <span className="ml-1 text-[9px] text-white/30 font-mono">terminal</span>
              </div>
              <p className="text-[#00dbe7] font-mono text-[11px] leading-relaxed">
                &gt; initiating...<br />
                &gt; status: <span className="text-green-400">optimal</span><br />
                &gt; uptime: 99.99%
              </p>
            </div>

            {/* Photo circle */}
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-full border-4 border-[#00F2FF]/20 overflow-hidden shadow-[0_0_50px_rgba(0,242,255,0.2)] z-10 p-2 bg-[#0a0a0a] ring-8 ring-[#00F2FF]/5">
              <Image
                src="/varshini.jpg"
                alt="Varshini Akula"
                width={384}
                height={384}
                className="w-full h-full object-cover rounded-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#00F2FF]/30 rounded-full pointer-events-none" />
            </div>

            {/* Monitor glow beneath */}
            <div className="absolute -bottom-10 w-full h-1/2 bg-gradient-to-t from-[#00F2FF]/20 to-transparent blur-3xl rounded-full opacity-40" />
          </div>
        </div>
      </div>

    </section>
  );
}
