import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { LibraryPage } from '@/components/library/LibraryPage';

export const metadata: Metadata = generatePageMetadata({
  title: 'Library',
  description: 'Books that shaped how I think about systems, people, and problems.',
  path: '/library',
});

export default function Library() {
  return <LibraryPage />;
}
