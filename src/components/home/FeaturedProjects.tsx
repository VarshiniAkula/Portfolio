'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { projects } from '@/content/projects';
import { homeContent } from '@/content/home';
import { disciplines, disciplineAccent, getDisciplinesForProject } from '@/content/disciplines';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { cn } from '@/lib/utils';
import type { DisciplineId, ProjectMeta } from '@/types/content';

const projectImages: Record<string, string> = {
  'rasa-virtual-assistant': '/projects/rasa-virtual-assistant.jpg',
  'llm-incident-chatbot': '/projects/llm-incident-chatbot.jpg',
  'memory-augmented-llm': '/projects/memory-augmented-llm.jpg',
  'deepfake-detection': '/projects/deepfake-detection.jpg',
  'star-reasoning': '/projects/star-reasoning.jpg',
  'kafka-streaming': '/projects/kafka-streaming.jpg',
  'clickless-ai': '/projects/clickless-ai.jpg',
  'construction-intelligence': '/projects/construction-intelligence.jpg',
  'flowmind': '/projects/flowmind.png',
};

type Filter = 'all' | DisciplineId;

export function FeaturedProjects() {
  const [filter, setFilter] = useState<Filter>('all');
  const prefersReduced = useReducedMotion();
  const copy = homeContent.projects;

  const featured = useMemo(
    () =>
      copy.featuredSlugs
        .map((slug) => projects.find((p) => p.slug === slug))
        .filter((p): p is ProjectMeta => Boolean(p)),
    [copy.featuredSlugs]
  );

  const visible = filter === 'all' ? featured : featured.filter((p) => getDisciplinesForProject(p.slug).includes(filter));

  const filters: { id: Filter; label: string; count: number }[] = [
    { id: 'all', label: 'All', count: featured.length },
    ...disciplines.map((d) => ({
      id: d.id as Filter,
      label: d.short,
      count: featured.filter((p) => getDisciplinesForProject(p.slug).includes(d.id)).length,
    })),
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#050505] border-y border-white/5 scroll-mt-16" aria-labelledby="projects-heading">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#fff6e4]/40 mb-4">{copy.eyebrow}</p>
            <h2 id="projects-heading" className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#fff6e4] max-w-2xl">
              {copy.title}
            </h2>
            <p className="mt-4 text-[#fff6e4]/55 max-w-xl text-lg">{copy.subtitle}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div role="group" aria-label="Filter projects by discipline" className="inline-flex flex-wrap gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
              {filters.map((f) => {
                const selected = filter === f.id;
                return (
                  <button
                    key={f.id}
                    onClick={() => setFilter(f.id)}
                    aria-pressed={selected}
                    className={cn(
                      'relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
                      selected ? 'text-black' : 'text-[#fff6e4]/65 hover:text-[#fff6e4]'
                    )}
                  >
                    {selected && (
                      <motion.span
                        layoutId={prefersReduced ? undefined : 'project-filter'}
                        className="absolute inset-0 rounded-full bg-[#fff6e4]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    <span className="relative">
                      {f.label} <span className={cn('font-mono text-xs', selected ? 'text-black/50' : 'text-[#fff6e4]/30')}>{f.count}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.ul layout={!prefersReduced} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout={!prefersReduced}
                initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={prefersReduced ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[#fff6e4] hover:border-white/40 hover:bg-white/[0.04] transition-colors"
          >
            Browse all {projects.length} projects
            <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ProjectCard({ project }: { project: ProjectMeta }) {
  const tags = getDisciplinesForProject(project.slug);
  const primary = disciplineAccent[tags[0] ?? 'software'];
  const image = projectImages[project.slug];
  const metric = project.metrics[0];

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0a0a0a] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <GeneratedCover title={project.title} hex={primary.hex} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.status === 'ongoing' && (
            <span className="rounded-full bg-black/70 backdrop-blur px-2.5 py-1 text-[10px] font-label font-bold uppercase tracking-wider text-emerald-300 border border-emerald-300/30">
              In progress
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-1.5 mb-3">
          {tags.map((t) => (
            <span key={t} className={cn('inline-flex items-center gap-1.5 text-[11px] font-label font-semibold', disciplineAccent[t].text)}>
              <span className={cn('h-1.5 w-1.5 rounded-full', disciplineAccent[t].bg)} />
              {disciplines.find((d) => d.id === t)?.short}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-xl font-bold text-[#fff6e4] leading-snug">{project.title}</h3>
        <p className="mt-2 text-sm text-[#fff6e4]/55 leading-relaxed line-clamp-2">{project.subtitle}</p>

        <div className="mt-auto pt-6 flex items-end justify-between gap-4">
          {metric && (
            <div>
              <p className="font-mono text-xl text-[#fff6e4]">{metric.value}</p>
              <p className="text-xs text-[#fff6e4]/40">{metric.unit}</p>
            </div>
          )}
          <span className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#fff6e4]/70 transition-all group-hover:bg-[#fff6e4] group-hover:text-black group-hover:border-transparent">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Abstract cover for projects without a screenshot. */
function GeneratedCover({ title, hex }: { title: string; hex: string }) {
  const initials = title
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('');
  return (
    <div className="absolute inset-0 bg-[#0d0d0d]" aria-hidden="true">
      <div className="absolute inset-0" style={{ background: `radial-gradient(circle at 75% 20%, ${hex}40, transparent 55%), radial-gradient(circle at 10% 100%, ${hex}1a, transparent 50%)` }} />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, ${hex}55 1px, transparent 1px), linear-gradient(to bottom, ${hex}55 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
          maskImage: 'linear-gradient(to bottom, black, transparent)',
        }}
      />
      <span className="absolute left-6 top-1/2 -translate-y-1/2 font-serif text-6xl font-bold tracking-tighter" style={{ color: `${hex}cc` }}>
        {initials}
      </span>
    </div>
  );
}
