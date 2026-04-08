'use client';

import Link from 'next/link';
import type { ProjectMeta } from '@/types/content';
import { useExperienceMode } from '@/providers/ExperienceModeProvider';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { caseStudyContent } from '@/content/projects/case-studies';

export function CaseStudyPage({ project }: { project: ProjectMeta }) {
  const { mode } = useExperienceMode();
  const content = caseStudyContent[project.slug];

  return (
    <article className="min-h-screen bg-black pt-16 sm:pt-24 pb-24">
      <Container>
        {/* Breadcrumb */}
        <Reveal>
          <nav
            className="mb-8 flex items-center gap-2 text-sm text-[#fff6e4]/40"
            aria-label="Breadcrumb"
          >
            <Link
              href="/projects"
              className="hover:text-[#00F2FF] transition-colors duration-300"
            >
              Projects
            </Link>
            <span aria-hidden="true" className="text-[#fff6e4]/20">
              /
            </span>
            <span className="text-[#fff6e4]/70">{project.title}</span>
          </nav>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.1}>
          <header className="mb-16 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="accent">{project.category}</Badge>
              <Badge
                variant={
                  project.status === 'completed' ? 'default' : 'accent'
                }
              >
                {project.status}
              </Badge>
              <span className="font-mono text-xs text-[#fff6e4]/40">
                {project.date}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#fff6e4] tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-xl text-[#fff6e4]/50 leading-relaxed">
              {project.subtitle}
            </p>

            <div className="mt-4 flex items-center gap-6 text-sm text-[#fff6e4]/40">
              <span>
                <strong className="text-[#fff6e4]/70">Role:</strong>{' '}
                {project.role}
              </span>
              <span>
                <strong className="text-[#fff6e4]/70">Duration:</strong>{' '}
                {project.duration}
              </span>
            </div>

            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00F2FF]/30 bg-[#00F2FF]/10 text-[#00F2FF] text-sm font-label uppercase tracking-widest hover:bg-[#00F2FF]/20 transition-colors"
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                ))}
              </div>
            )}
          </header>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_300px] gap-12">
          {/* Main content */}
          <div className="order-2 lg:order-1">
            {/* Overview */}
            <Reveal delay={0.2}>
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-semibold text-[#fff6e4] mb-4">
                  Overview
                </h2>
                <p className="text-[#fff6e4]/60 leading-relaxed">
                  {mode === 'recruiter'
                    ? project.description.recruiter
                    : project.description.explorer}
                </p>
              </section>
            </Reveal>

            {/* Dynamic case study sections */}
            {content &&
              content.sections.map((section, i) => (
                <Reveal key={section.title} delay={0.1 * (i + 3)}>
                  <section className="mb-10">
                    <h2 className="font-serif text-2xl font-semibold text-[#fff6e4] mb-4">
                      {section.title}
                    </h2>
                    {section.content.map((paragraph, j) => (
                      <p
                        key={j}
                        className="text-[#fff6e4]/60 leading-relaxed mb-3"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </section>
                </Reveal>
              ))}

            {/* Tech stack detail */}
            <Reveal>
              <section className="mb-12">
                <h2 className="font-serif text-2xl font-semibold text-[#fff6e4] mb-4">
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#00F2FF]/20 font-mono text-sm text-[#00F2FF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>
            </Reveal>
          </div>

          {/* Sidebar */}
          <aside className="order-1 lg:order-2">
            <Reveal delay={0.2}>
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Metrics card */}
                <div className="rounded-xl border border-white/5 bg-[#111111] backdrop-blur-sm p-6">
                  <h3 className="font-label text-xs tracking-widest text-[#00F2FF] uppercase mb-5 font-bold">
                    Key Results
                  </h3>
                  <div className="space-y-5">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-mono text-2xl font-semibold text-[#fff6e4]">
                          {metric.value}
                        </div>
                        <div className="text-sm text-[#00F2FF]">
                          {metric.unit}
                        </div>
                        <div className="text-xs text-[#fff6e4]/40">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info card */}
                <div className="rounded-xl border border-white/5 bg-[#111111] backdrop-blur-sm p-6">
                  <h3 className="font-label text-xs tracking-widest text-[#00F2FF] uppercase mb-5 font-bold">
                    Details
                  </h3>
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-[#fff6e4]/40">Role</dt>
                      <dd className="text-[#fff6e4] font-medium">
                        {project.role}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#fff6e4]/40">Duration</dt>
                      <dd className="text-[#fff6e4] font-medium">
                        {project.duration}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#fff6e4]/40">Status</dt>
                      <dd className="text-[#fff6e4] font-medium capitalize">
                        {project.status}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[#fff6e4]/40 mb-1.5">Tags</dt>
                      <dd className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Navigation */}
                <Button
                  href="/projects"
                  variant="secondary"
                  className="w-full"
                >
                  &larr; All Projects
                </Button>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </article>
  );
}
