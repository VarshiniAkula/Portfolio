'use client';

import { leadership } from '@/content/leadership';
import { useExperienceMode } from '@/providers/ExperienceModeProvider';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function LeadershipPage() {
  const { mode } = useExperienceMode();

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          title="Leadership & Community"
          subtitle="Building communities that connect, elevate, and last."
          label="// Marginalia of Leadership"
        />

        {/* Visual intro — explorer mode */}
        {mode === 'explorer' && (
          <Reveal>
            <div className="mb-16 max-w-2xl">
              <p className="text-lg text-[#fff6e4]/60 leading-relaxed">
                Leadership, for me, has always been about creating space — for
                ideas, for voices, for the kind of conversations that don&apos;t happen
                unless someone makes room for them. From a literature club to a
                leadership conclave, the medium changed but the mission stayed
                the same.
              </p>
            </div>
          </Reveal>
        )}

        <div className="grid gap-8 sm:grid-cols-2">
          {leadership.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-white/5 bg-[#111111]/50 p-6 sm:p-8 h-full hover:border-[#00F2FF]/20 transition-all duration-300 hover:shadow-lg hover:shadow-[#00F2FF]/5">
                {/* Metaphor badge — explorer mode */}
                {mode === 'explorer' && (
                  <div className="absolute -top-3 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F2FF] text-black text-xs font-medium">
                    <span>{item.metaphor.icon}</span>
                    <span>{item.metaphor.label}</span>
                  </div>
                )}

                {/* Role header */}
                <div className="mb-4">
                  <span className="font-mono text-[10px] tracking-widest text-[#00F2FF] uppercase">
                    {item.period}
                  </span>
                  <h3 className="mt-2 font-serif text-xl font-semibold text-[#fff6e4]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#fff6e4]/60">
                    {item.organization}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-[#fff6e4]/80 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Impact */}
                <div className="pt-4 border-t border-white/5">
                  <span className="font-mono text-[10px] tracking-widest text-[#00F2FF] uppercase">
                    Impact
                  </span>
                  <p className="mt-1 text-sm text-[#fff6e4] font-medium">
                    {item.impact}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Leadership philosophy */}
        <Reveal delay={0.4}>
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <blockquote className="font-serif text-xl sm:text-2xl text-[#fff6e4] leading-relaxed italic">
              &ldquo;Good leadership feels like good editing — you make others&apos; work shine.&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
