'use client';

import { profile } from '@/content/profile';
import { socials } from '@/content/social';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            title="Let's Build Something Useful"
            subtitle="Open to AI engineering roles, research collaborations, internships, and product opportunities."
            label="// Get in Touch"
            align="center"
          />

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-espresso/10 bg-paper p-8 sm:p-10 text-center">
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <span className="font-mono text-xs tracking-widest text-copper uppercase block mb-2">
                    Email
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-lg text-espresso hover:text-copper transition-colors font-medium"
                  >
                    {profile.email}
                  </a>
                </div>

                {/* Social links */}
                <div>
                  <span className="font-mono text-xs tracking-widest text-copper uppercase block mb-3">
                    Connect
                  </span>
                  <div className="flex justify-center gap-4">
                    {socials.map((social) => (
                      <a
                        key={social.platform}
                        href={social.url}
                        target={social.platform !== 'Email' ? '_blank' : undefined}
                        rel={social.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cream border border-espresso/5 text-sm text-espresso hover:border-copper/20 hover:text-copper transition-colors"
                      >
                        {social.label}
                        {social.platform !== 'Email' && (
                          <span aria-hidden="true" className="text-xs">↗</span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resume */}
                <div>
                  <span className="font-mono text-xs tracking-widest text-copper uppercase block mb-3">
                    Resume
                  </span>
                  <Button href={profile.resumeUrl} variant="primary">
                    Download Resume &darr;
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* What I'm looking for */}
          <Reveal delay={0.2}>
            <div className="mt-10 text-center">
              <h3 className="font-serif text-xl font-semibold text-espresso mb-4">
                What I&apos;m Looking For
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  'AI Engineering Roles',
                  'Research Collaborations',
                  'Product Opportunities',
                  'Startup Conversations',
                  'Open Source Projects',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full border border-espresso/10 text-sm text-graphite bg-cream"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-10 text-center text-sm text-warm-gray">
              Currently based in {profile.location}. Available for remote and
              on-site opportunities.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
