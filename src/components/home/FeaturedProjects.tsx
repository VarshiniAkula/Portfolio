'use client';

import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/content/projects';
import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';

const projectImages: Record<string, string> = {
  'rasa-virtual-assistant': '/projects/rasa-virtual-assistant.jpg',
  'llm-incident-chatbot': '/projects/llm-incident-chatbot.jpg',
  'memory-augmented-llm': '/projects/memory-augmented-llm.jpg',
  'deepfake-detection': '/projects/deepfake-detection.jpg',
  'star-reasoning': '/projects/star-reasoning.jpg',
  'kafka-streaming': '/projects/kafka-streaming.jpg',
  'clickless-ai': '/projects/clickless-ai.jpg',
  'construction-intelligence': '/projects/construction-intelligence.jpg',
};

const homeFeaturedSlugs = [
  'rasa-virtual-assistant',
  'memory-augmented-llm',
  'star-reasoning',
  'llm-incident-chatbot',
];

export function FeaturedProjects() {
  const featured = homeFeaturedSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;

  return (
    <section className="py-12 bg-white/[0.02] border-y border-white/5" aria-labelledby="featured-projects-heading">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <Reveal>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fff6e4]">Curated Work.</h2>
              <p className="text-[#fff6e4]/50 mt-3 text-sm">Selected engineering artifacts and research prototypes.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/projects"
              className="font-label text-sm uppercase tracking-widest text-[#00F2FF] font-bold flex items-center gap-2 group"
            >
              View All
              <span className="inline-block transition-transform group-hover:translate-x-2">&rarr;</span>
            </Link>
          </Reveal>
        </div>

        {/* 2×2 grid with reduced aspect ratio */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={0.06 + i * 0.05}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/5 card-hover"
              >
                {/* Project image */}
                {projectImages[project.slug] ? (
                  <Image
                    src={projectImages[project.slug]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#141414]" />
                )}

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/50 transition-all duration-500" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  {/* Category badge */}
                  <span className="inline-block self-start px-3 py-1 rounded-full bg-[#00F2FF]/15 text-[#00F2FF] text-[10px] font-label font-bold uppercase tracking-widest border border-[#00F2FF]/20 mb-3">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#fff6e4] mb-2 group-hover:text-[#00F2FF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-[#fff6e4]/60 leading-relaxed line-clamp-2 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="font-label text-[10px] uppercase tracking-widest text-[#00F2FF]/70">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="font-label text-[10px] uppercase tracking-widest text-[#fff6e4]/30">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover arrow indicator */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#00F2FF]/10 border border-[#00F2FF]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#00F2FF]">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
