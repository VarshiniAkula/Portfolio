import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { JourneyMap } from '@/components/journey/JourneyMap';

export const metadata: Metadata = generatePageMetadata({
  title: 'Journey',
  description: 'From a summer in C to building production AI systems — the story of an AI engineer.',
  path: '/journey',
});

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-black">
      <JourneyMap />
    </main>
  );
}
