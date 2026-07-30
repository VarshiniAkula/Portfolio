import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { getPortfolioMedia } from '@/lib/portfolio-media';
import { PortfolioGallery } from '@/components/portfolio/PortfolioGallery';

export const metadata: Metadata = generatePageMetadata({
  title: 'Photography Portfolio',
  description:
    'Photos and short-form video by Varshini Akula — a creative-eye content portfolio built for the ASU Brand Social Media team.',
  path: '/portfolio',
});

// Read the media folder on each request so newly uploaded files show up.
export const dynamic = 'force-dynamic';

export default function PortfolioPage() {
  const { photos, videos } = getPortfolioMedia();
  // Uploader shows only when running locally. On the deployed site (Vercel),
  // it's hidden automatically — so the manager-facing version has no upload UI.
  const showUploader = !process.env.VERCEL;
  return <PortfolioGallery photos={photos} videos={videos} showUploader={showUploader} />;
}
