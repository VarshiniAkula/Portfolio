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
  'flowmind': '/projects/flowmind.png',
};

export function ProjectGrid() {
  return (
    <section className="pt-32 pb-24 overflow-hidden">
      <Container>
        {/* Page Header */}
        <Reveal>
          <header className="mb-20">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fff6e4] tracking-tight mb-6">
              Selected <span className="text-[#00F2FF]">Works</span>
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-[#fff6e4]/40 max-w-2xl">
              A curation of software architecture, AI experimentation, and technical narratives.
            </p>
          </header>
        </Reveal>

        {/* Square tiles: 2 per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block relative aspect-[3/2] rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-[#00F2FF]/20 hover:shadow-[0_0_40px_rgba(0,242,255,0.1)]"
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
                  {/* Category + metric row */}
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#00F2FF]/15 text-[#00F2FF] text-[10px] font-label font-bold uppercase tracking-widest border border-[#00F2FF]/20">
                      {project.category}
                    </span>
                    {project.metrics[0] && (
                      <div className="text-right">
                        <span className="font-mono text-lg font-bold text-[#00F2FF]">{project.metrics[0].value}</span>
                        <span className="block text-[9px] text-[#fff6e4]/40">{project.metrics[0].unit}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#fff6e4] mb-2 group-hover:text-[#00F2FF] transition-colors leading-snug">
                    {project.title}
                  </h2>

                  {/* Subtitle */}
                  <p className="text-sm text-[#fff6e4]/60 leading-relaxed line-clamp-2 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Date + Tech stack */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-sm text-[#00F2FF] border border-[#00F2FF]/15 font-label text-[10px] uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2.5 py-0.5 rounded-full bg-black/40 text-[#fff6e4]/30 font-label text-[10px]">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                    <span className="text-[#fff6e4]/30 text-xs font-label">{project.date}</span>
                  </div>
                </div>

                {/* Hover arrow */}
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
