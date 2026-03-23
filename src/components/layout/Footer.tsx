import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { socials } from '@/content/social';

export function Footer() {
  return (
    <footer className="border-t border-[#00F2FF]/5 bg-black mt-24">
      <Container className="py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center sm:items-start gap-2">
            <Link href="/" className="font-serif text-lg font-bold italic text-[#fff6e4]">
              Varshini Akula
            </Link>
            <p className="text-sm text-[#fff6e4]/60">
              Built over coffee and conviction.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target={social.platform !== 'Email' ? '_blank' : undefined}
                rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                className="text-sm text-[#fff6e4]/60 hover:text-[#00F2FF] transition-colors duration-300"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-[#fff6e4]/40">
            &copy; {new Date().getFullYear()} Varshini Akula. Crafted with care.
          </p>
        </div>
      </Container>
    </footer>
  );
}
