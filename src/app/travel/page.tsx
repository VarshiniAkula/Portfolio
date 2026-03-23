import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { TravelPage } from '@/components/travel/TravelPage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Travel',
  description: 'Cities, journeys, and the curiosity that connects them.',
  path: '/travel',
});

export default function Travel() {
  return <TravelPage />;
}
