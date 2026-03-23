import { Space_Grotesk, Inter, Plus_Jakarta_Sans, Fira_Code, Caveat } from 'next/font/google';

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-label',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});

export const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwriting',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
