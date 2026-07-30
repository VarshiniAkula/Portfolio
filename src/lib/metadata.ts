import type { Metadata } from 'next';

const siteUrl = 'https://varshiniakula.com';

interface PageMetaArgs {
  title?: string;
  description?: string;
  path?: string;
  type?: 'website' | 'article';
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  type = 'website',
}: PageMetaArgs): Metadata {
  const fullTitle = title
    ? `${title} - Varshini Akula`
    : 'Varshini Akula - Backend & Software Engineer';
  const desc =
    description ||
    'Backend and software engineer who ships secure, production-oriented AI systems. M.S. CS at ASU, former SDE at JPMorgan Chase.';

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${siteUrl}${path}`,
      siteName: 'Varshini Akula',
      type,
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
    alternates: {
      canonical: `${siteUrl}${path}`,
    },
  };
}

export function generatePersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Varshini Akula',
    jobTitle: 'Backend & Software Engineer',
    url: siteUrl,
    alumniOf: [
      {
        '@type': 'CollegeOrUniversity',
        name: 'Arizona State University',
      },
      {
        '@type': 'CollegeOrUniversity',
        name: 'GNITS',
      },
    ],
    knowsAbout: [
      'Backend Engineering',
      'Software Engineering',
      'Distributed Systems',
      'Cloud Infrastructure',
      'Production AI Systems',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Application Security',
    ],
    sameAs: [
      'https://github.com/varshiniakula',
      'https://linkedin.com/in/varshiniakula',
    ],
  };
}

export function generateArticleJsonLd(article: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: {
      '@type': 'Person',
      name: 'Varshini Akula',
    },
    url: `${siteUrl}/projects/${article.slug}`,
  };
}
