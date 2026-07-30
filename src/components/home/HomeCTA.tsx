'use client';

import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { profile } from '@/content/profile';

export function HomeCTA() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fff6e4] mb-10 tracking-tight">
            Looking for someone who ships?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xl text-white/60 mb-14">
            I&apos;m actively seeking full-time and internship/co-op roles in AI and software engineering. Ready to make an impact from day one. Let&apos;s talk.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
            <Button
              href={profile.resumeUrl}
              variant="secondary"
              size="lg"
              download="Varshini_Akula_Resume.pdf"
            >
              Download Résumé
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
