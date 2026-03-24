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
    : 'Varshini Akula - AI Engineer';
  const desc =
    description ||
    'AI Engineer building intelligent systems from prototype to production. M.S. CS at ASU, former SDE at JPMorgan Chase.';

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
    jobTitle: 'AI Engineer',
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
      'Artificial Intelligence',
      'Machine Learning',
      'Natural Language Processing',
      'Large Language Models',
      'Software Engineering',
      'Conversational AI',
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
