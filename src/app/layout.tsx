import type { Metadata } from 'next';
import { spaceGrotesk, inter, jakarta, firaCode, caveat } from '@/lib/fonts';
import { generatePersonJsonLd } from '@/lib/metadata';
import { ExperienceModeProvider } from '@/providers/ExperienceModeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { AskVarshini } from '@/components/ai-assistant/AskVarshini';
import './globals.css';

export const metadata: Metadata = {
  title: 'Varshini Akula',
  description:
    'AI & Software Developer building intelligent systems from prototype to production. M.S. CS at ASU (4.0 GPA), former SDE at JPMorgan Chase. Research in LLMs, agentic workflows, and conversational AI.',
  metadataBase: new URL('https://varshiniakula.com'),
  openGraph: {
    title: 'Varshini Akula',
    description:
      'AI & Software Developer building intelligent systems from prototype to production.',
    siteName: 'Varshini Akula',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varshini Akula',
    description:
      'AI & Software Developer building intelligent systems from prototype to production.',
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
      <body className="font-sans antialiased bg-black text-[#fff6e4]">
        <ExperienceModeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="grain" aria-hidden="true" />
          <div className="ambient-glow" aria-hidden="true" />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <AskVarshini />
        </ExperienceModeProvider>
      </body>
    </html>
  );
}
