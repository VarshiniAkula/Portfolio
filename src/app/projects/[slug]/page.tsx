import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects, getProjectBySlug } from '@/content/projects';
import { generatePageMetadata, generateArticleJsonLd } from '@/lib/metadata';
import { CaseStudyPage } from '@/components/projects/CaseStudyPage';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return generatePageMetadata({
    title: project.title,
    description: project.description.recruiter,
    path: `/projects/${project.slug}`,
    type: 'article',
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateArticleJsonLd({
              title: project.title,
              description: project.description.recruiter,
              date: project.date,
              slug: project.slug,
            })
          ),
        }}
      />
      <CaseStudyPage project={project} />
    </>
  );
}
