import type { Metadata, Viewport } from 'next';
import { spaceGrotesk, inter, jakarta, firaCode, caveat } from '@/lib/fonts';
import { generatePersonJsonLd } from '@/lib/metadata';
import { ExperienceModeProvider } from '@/providers/ExperienceModeProvider';
import { TopNav } from '@/components/layout/TopNav';
import { AskVarshini } from '@/components/ai-assistant/AskVarshini';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0d0b0b',
  colorScheme: 'dark',
};

export const metadata: Metadata = {
  title: 'Varshini Akula · Portfolio',
  description:
    'Backend and software engineer who ships secure, production-oriented AI systems. M.S. CS at ASU (4.0 GPA), former SDE at JPMorgan Chase. Cloud-native services, real-time data pipelines, and LLM-powered assistants.',
  metadataBase: new URL('https://varshiniakula.com'),
  openGraph: {
    title: 'Varshini Akula',
    description:
      'Software engineer and software performance engineer. M.S. Computer Science at ASU (4.00 GPA), former Software Development Engineer I at JPMorgan Chase.',
    siteName: 'Varshini Akula',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varshini Akula',
    description:
      'Software engineer and software performance engineer. M.S. Computer Science at ASU (4.00 GPA), former Software Development Engineer I at JPMorgan Chase.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} ${jakarta.variable} ${firaCode.variable} ${caveat.variable}`}
      data-mode="explorer"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonJsonLd()),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-[var(--page-bg)] text-[var(--fg)]">
        <ExperienceModeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <TopNav />
          <main id="main-content">{children}</main>
          <AskVarshini />
        </ExperienceModeProvider>
      </body>
    </html>
  );
}
