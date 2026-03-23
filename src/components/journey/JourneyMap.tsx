'use client';

import { milestones } from '@/content/story-milestones';
import { useExperienceMode } from '@/providers/ExperienceModeProvider';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';
import type { Milestone } from '@/types/content';

const timelineTypes = new Set(['achievement', 'leadership', 'transition']);
const educationTypes = new Set(['education']);
const workIds = new Set(['jpmc-internship', 'jpmc-fulltime']);

export function JourneyMap() {
  const { mode } = useExperienceMode();

  const education = milestones.filter((m) => educationTypes.has(m.type));
  const workExperience = milestones.filter((m) => workIds.has(m.id));
  const timeline = milestones.filter(
    (m) => timelineTypes.has(m.type) || (m.type === 'work' && !workIds.has(m.id))
  );

  return (
    <section className="pt-32 sm:pt-48 pb-24">
      <Container>
        {/* Full-width editorial header */}
        <Reveal delay={0} direction="up">
          <header className="mb-24 space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#fff6e4] leading-tight">
              From Curiosity to{' '}
              <span className="text-[#00F2FF]">Production-Grade AI</span>{' '}
              — One Milestone at a Time.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#fff6e4]/50 font-sans max-w-2xl leading-relaxed">
              From a summer in C to building production AI systems — every
              milestone is a stamp on the map.
            </p>
          </header>
        </Reveal>

        {/* Education Block */}
        <Reveal delay={0.1} direction="up">
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/20 flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff6e4]">
                  Education
                </h2>
                <p className="text-sm text-[#fff6e4]/40 font-label uppercase tracking-widest mt-1">
                  Academic Foundation
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {education.map((milestone, i) => (
                <Reveal key={milestone.id} delay={i * 0.1}>
                  <EducationCard milestone={milestone} mode={mode} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Work Experience Block */}
        <Reveal delay={0.1} direction="up">
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/20 flex items-center justify-center text-2xl">
                💼
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff6e4]">
                  Work Experience
                </h2>
                <p className="text-sm text-[#fff6e4]/40 font-label uppercase tracking-widest mt-1">
                  Professional Roles
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {workExperience.map((milestone, i) => (
                <Reveal key={milestone.id} delay={i * 0.1}>
                  <WorkCard milestone={milestone} mode={mode} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Timeline Block Header */}
        <Reveal delay={0.1} direction="up">
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-[#00F2FF]/10 border border-[#00F2FF]/20 flex items-center justify-center text-2xl">
                🏆
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff6e4]">
                  Milestones
                </h2>
                <p className="text-sm text-[#fff6e4]/40 font-label uppercase tracking-widest mt-1">
                  Achievements, Leadership &amp; Research
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Milestones Timeline */}
        <div className="relative">
          {/* Central vertical cyan line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 opacity-30"
            style={{
              background:
                'linear-gradient(to bottom, transparent, #00F2FF 15%, #00F2FF 85%, transparent)',
            }}
            aria-hidden="true"
          />

          {/* Timeline entries */}
          <div className="space-y-20 md:space-y-32">
            {timeline.map((milestone, i) => {
                const isLeft = i % 2 === 0;

                return (
                  <div
                    key={milestone.id}
                    className="relative flex flex-col md:flex-row items-start md:items-center justify-between w-full group"
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#00F2FF] shadow-[0_0_20px_rgba(0,242,255,0.5)] -translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-150"
                      aria-hidden="true"
                    />

                    {/* Card — alternates sides on desktop */}
                    {isLeft ? (
                      <>
                        <div className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-16 text-left md:text-right order-2 md:order-1">
                          <Reveal
                            delay={i * 0.08}
                            direction="left"
                            blur
                          >
                            <TimelineCard
                              milestone={milestone}
                              mode={mode}
                              align="right"
                            />
                          </Reveal>
                        </div>
                        <div className="hidden md:block md:w-[45%] order-2" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block md:w-[45%] order-1" />
                        <div className="w-full md:w-[45%] pl-12 md:pl-16 text-left order-2">
                          <Reveal
                            delay={i * 0.08}
                            direction="right"
                            blur
                          >
                            <TimelineCard
                              milestone={milestone}
                              mode={mode}
                              align="left"
                            />
                          </Reveal>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        </div>

        {/* Closing quote section */}
        <Reveal delay={0.2} direction="up">
          <div className="mt-32 sm:mt-48 text-center max-w-3xl mx-auto space-y-12">
            <div
              className="h-px w-24 bg-[#00F2FF] mx-auto mb-12"
              aria-hidden="true"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#fff6e4] leading-tight italic">
              Carpe. Carpe. <span className="text-[#00F2FF]">Carpedium.</span>
            </h2>
            <div className="pt-8">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#00F2FF] text-black px-8 py-4 rounded-full font-label font-bold uppercase tracking-widest text-xs transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,242,255,0.3)]"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Education Card                                                     */
/* ------------------------------------------------------------------ */

interface EducationCardProps {
  milestone: Milestone;
  mode: 'recruiter' | 'explorer';
}

function EducationCard({ milestone, mode }: EducationCardProps) {
  return (
    <div className="bg-[#111111] p-6 sm:p-8 rounded-xl border border-white/5 hover:border-[#00F2FF]/20 transition-all duration-300 h-full flex flex-col">
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{milestone.icon}</span>
          <span className="font-label text-[#00F2FF] uppercase tracking-widest text-xs font-bold">
            {milestone.date}
          </span>
        </div>
        <Badge variant="accent">Education</Badge>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff6e4] mb-1">
        {milestone.title}
      </h3>
      <p className="text-sm text-[#fff6e4]/50 mb-4">{milestone.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-[#fff6e4]/70 leading-relaxed mb-5 flex-1">
        {mode === 'recruiter'
          ? milestone.description.recruiter
          : milestone.description.explorer}
      </p>

      {/* Tags */}
      {milestone.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {milestone.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Work Experience Card                                               */
/* ------------------------------------------------------------------ */

interface WorkCardProps {
  milestone: Milestone;
  mode: 'recruiter' | 'explorer';
}

function WorkCard({ milestone, mode }: WorkCardProps) {
  return (
    <div className="bg-[#111111] p-6 sm:p-8 rounded-xl border border-white/5 hover:border-[#00F2FF]/20 transition-all duration-300 h-full flex flex-col hover:shadow-[0_0_30px_rgba(0,242,255,0.1)]">
      {/* Terminal header */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00F2FF]/40" />
        </div>
        <span className="text-[10px] font-mono text-[#fff6e4]/40 uppercase tracking-wider ml-1">
          jpmorgan-chase.log
        </span>
      </div>

      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{milestone.icon}</span>
          <span className="font-label text-[#00F2FF] uppercase tracking-widest text-xs font-bold">
            {milestone.date}
          </span>
        </div>
        <Badge variant="accent">Professional</Badge>
      </div>

      {/* Title */}
      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#fff6e4] mb-1">
        {milestone.title}
      </h3>
      <p className="text-sm text-[#fff6e4]/50 mb-4">{milestone.subtitle}</p>

      {/* Description */}
      <p className="text-sm text-[#fff6e4]/70 leading-relaxed mb-5 flex-1">
        {mode === 'recruiter'
          ? milestone.description.recruiter
          : milestone.description.explorer}
      </p>

      {/* Tags */}
      {milestone.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {milestone.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Linked project */}
      {milestone.linkedProject && (
        <a
          href={`/projects/${milestone.linkedProject}`}
          className="inline-flex items-center gap-1 mt-4 text-sm text-[#00F2FF] hover:text-[#fff6e4] transition-colors font-sans"
        >
          View related project &rarr;
        </a>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Timeline Card                                                      */
/* ------------------------------------------------------------------ */

interface TimelineCardProps {
  milestone: Milestone;
  mode: 'recruiter' | 'explorer';
  align: 'left' | 'right';
}

function TimelineCard({ milestone, mode, align }: TimelineCardProps) {
  const typeLabels: Record<string, string> = {
    work: 'Professional',
    achievement: 'Achievement',
    leadership: 'Leadership',
    transition: 'Transition',
  };

  return (
    <div className="experience-card bg-[#111111] p-6 sm:p-8 rounded-xl border border-white/5 transition-all duration-400 hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] hover:border-[#00F2FF]/30 hover:-translate-y-1">
      {/* Terminal-style header bar */}
      <div className="flex items-center gap-2 mb-5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#00F2FF]/40" />
        </div>
        <span className="text-[10px] font-mono text-[#fff6e4]/40 uppercase tracking-wider ml-1">
          {milestone.type}.log
        </span>
      </div>

      {/* Date + type badge */}
      <div className={cn('flex items-center gap-3 mb-2 flex-wrap', align === 'right' && 'md:justify-end')}>
        <span className="font-label text-[#00F2FF] uppercase tracking-widest text-xs">
          {milestone.date}
        </span>
        <Badge variant="accent">{typeLabels[milestone.type] || milestone.type}</Badge>
      </div>

      {/* Title */}
      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#fff6e4] mb-2">
        {milestone.title}
      </h3>

      {/* Subtitle */}
      <p className="text-base font-sans text-[#fff6e4]/50 mb-5">
        {milestone.subtitle}
      </p>

      {/* Description — switches on mode */}
      <p className="text-sm sm:text-base font-sans text-[#fff6e4]/80 leading-relaxed mb-6">
        {mode === 'recruiter'
          ? milestone.description.recruiter
          : milestone.description.explorer}
      </p>

      {/* Tech / skill tags */}
      {milestone.tags.length > 0 && (
        <div
          className={cn(
            'flex flex-wrap gap-2',
            align === 'right' && 'md:justify-end'
          )}
        >
          {milestone.tags.map((tag) => (
            <Badge key={tag} variant="accent">
              {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* Linked project */}
      {milestone.linkedProject && (
        <a
          href={`/projects/${milestone.linkedProject}`}
          className="inline-flex items-center gap-1 mt-4 text-sm text-[#00F2FF] hover:text-[#fff6e4] transition-colors font-sans"
        >
          View related project &rarr;
        </a>
      )}
    </div>
  );
}
