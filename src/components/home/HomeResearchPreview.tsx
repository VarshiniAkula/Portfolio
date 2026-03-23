'use client';

import Link from 'next/link';
import { research, publications } from '@/content/research';
import { useExperienceMode } from '@/providers/ExperienceModeProvider';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export function HomeResearchPreview() {
  const { mode } = useExperienceMode();
  const highlighted = research.slice(0, 3);

  return (
    <section className="py-24" aria-labelledby="research-preview-heading">
      <Container>
        <SectionHeading
          title="Research & AI Lab"
          subtitle="Exploring the frontier of AI reliability, reasoning, and safety."
          label="// Current Investigations"
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {highlighted.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <div className="rounded-xl border border-espresso/5 bg-paper/50 p-5 sm:p-6 h-full flex flex-col card-tilt">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={item.status === 'in-progress' ? 'accent' : 'default'}>
                    {item.status === 'in-progress' ? 'Active' : item.status}
                  </Badge>
                </div>
                <h3 className="font-serif text-lg font-semibold text-espresso">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-warm-gray leading-relaxed flex-1 line-clamp-3">
                  {item.abstract}
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Publications — always visible but emphasized in recruiter mode */}
        <Reveal delay={0.25}>
          <div className="mt-10 rounded-xl border border-espresso/5 bg-paper/50 p-6">
            <h3 className="font-mono text-xs tracking-widest text-sunset uppercase mb-4">
              Publications
            </h3>
            <div className="space-y-3">
              {publications.map((pub) => (
                <div key={pub.id} className="flex items-start gap-3">
                  <Badge variant="accent" className="flex-shrink-0 mt-0.5">Published</Badge>
                  <div>
                    <p className="text-sm font-semibold text-espresso leading-tight">
                      {pub.title}
                    </p>
                    <p className="text-xs text-warm-gray mt-0.5">
                      {pub.venue} &middot; {pub.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <Button href="/research" variant="secondary">
              Explore Research
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
