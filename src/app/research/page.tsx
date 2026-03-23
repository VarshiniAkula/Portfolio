import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { ResearchPage } from '@/components/research/ResearchPage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Credentials & The Archives',
  description: 'Certifications, publications, active research, and hackathon wins in AI/ML, LLM security, and agentic systems.',
  path: '/research',
});

export default function Research() {
  return <ResearchPage />;
}
