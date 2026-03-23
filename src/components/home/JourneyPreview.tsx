'use client';

import Link from 'next/link';
import { milestones } from '@/content/story-milestones';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function JourneyPreview() {
  const previewMilestones = milestones.filter((m) =>
    ['summer-in-c', 'code-for-good', 'jpmc-fulltime', 'asu-journey'].includes(m.id)
  );

  return (
    <section className="py-24 bg-paper/40" aria-labelledby="journey-preview-heading">
      <Container>
        <SectionHeading
          title="The Journey So Far"
          subtitle="From a summer in C to building production AI systems."
          label="// Atlas Route"
        />

        <div className="relative">
          {/* Vertical route line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-copper/40 via-copper/20 to-transparent" aria-hidden="true" />

          <div className="space-y-8">
            {previewMilestones.map((milestone, i) => (
              <Reveal key={milestone.id} delay={i * 0.1}>
                <div className="relative flex gap-5 sm:gap-7 items-start">
                  {/* Stamp node */}
                  <div className="relative z-10 flex-shrink-0 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl bg-cream border-2 border-copper/20 text-2xl shadow-sm">
                    {milestone.icon}
                  </div>

                  {/* Content */}
                  <div className="pb-6 pt-1">
                    <span className="font-mono text-[10px] tracking-widest text-copper uppercase">
                      {milestone.date}
                    </span>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-espresso">
                      {milestone.title}
                    </h3>
                    <p className="mt-1 text-sm text-warm-gray leading-relaxed">
                      {milestone.subtitle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-10 text-center">
            <Button href="/journey" variant="secondary">
              Explore Full Journey
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
