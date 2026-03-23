import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export const metadata: Metadata = generatePageMetadata({
  title: 'Selected Works',
  description: 'Software architecture, AI experimentation, and technical narratives by Varshini Akula.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black">
      <ProjectGrid />
    </main>
  );
}
