import type { Metadata } from 'next';
import { getPortfolio } from '@/content/portfolios';
import { generatePageMetadata } from '@/lib/metadata';
import { PortfolioView } from '@/components/portfolio/PortfolioView';

const portfolio = getPortfolio('software');

export const metadata: Metadata = generatePageMetadata({
  title: portfolio.name,
  description: portfolio.sections[0].intro,
  path: '/software',
});

export default function Page() {
  return <PortfolioView portfolio={portfolio} />;
}
