import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { LeadershipPage } from '@/components/leadership/LeadershipPage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Leadership',
  description: 'Leading communities from literature clubs to ACM chapters — building movements, not just teams.',
  path: '/leadership',
});

export default function Leadership() {
  return <LeadershipPage />;
}
