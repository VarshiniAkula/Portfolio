import type { MetadataRoute } from 'next';
import { projects } from '@/content/projects';

const baseUrl = 'https://varshiniakula.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/journey',
    '/projects',
    '/research',
    '/leadership',
    '/library',
    '/travel',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
