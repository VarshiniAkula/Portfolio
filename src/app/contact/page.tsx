'use client';

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { socials } from '@/content/social';
import { profile } from '@/content/profile';
import Image from 'next/image';

const socialIcons: Record<string, string> = {
  LinkedIn: 'share',
  GitHub: 'code',
  Email: 'mail',
  Twitter: 'tag',
  Instagram: 'camera',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#fff6e4] pt-32 pb-24">
      <Container>
        {/* Hero heading */}
        <Reveal direction="up" delay={0}>
          <header className="mb-20">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#fff6e4] tracking-tight leading-tight max-w-4xl">
              Let&apos;s build something soulful
            </h1>
            <div className="mt-8 flex items-center gap-3 text-[#00F2FF] font-label font-medium tracking-wide">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.827 3.024ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Tempe, Arizona</span>
            </div>
          </header>
        </Reveal>

        {/* Asymmetric two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Contact Form */}
          <Reveal direction="up" delay={0.1} className="lg:col-span-7">
            <section className="bg-[#111111] p-8 md:p-12 rounded">
              <form action="#" method="POST" className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="font-label text-xs uppercase tracking-widest text-[#00F2FF] font-bold"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="How should I address you?"
                    className="w-full bg-[#222222] border-none focus:ring-1 focus:ring-[#00F2FF] focus:outline-none text-[#fff6e4] p-4 rounded transition-all placeholder:text-[#d3c3bd]/50"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="font-label text-xs uppercase tracking-widest text-[#00F2FF] font-bold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full bg-[#222222] border-none focus:ring-1 focus:ring-[#00F2FF] focus:outline-none text-[#fff6e4] p-4 rounded transition-all placeholder:text-[#d3c3bd]/50"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="font-label text-xs uppercase tracking-widest text-[#00F2FF] font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your vision..."
                    className="w-full bg-[#222222] border-none focus:ring-1 focus:ring-[#00F2FF] focus:outline-none text-[#fff6e4] p-4 rounded transition-all resize-none placeholder:text-[#d3c3bd]/50"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="group flex items-center justify-between w-full md:w-auto md:min-w-[240px] bg-[#00F2FF] text-black font-label font-bold py-5 px-8 rounded-full hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_0_20px_2px_rgba(0,242,255,0.4)] active:scale-95 transition-all duration-300"
                >
                  <span>Get in touch</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 ml-4 group-hover:translate-x-1 transition-transform"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </section>
          </Reveal>

          {/* Right Column: Details & Visuals */}
          <aside className="lg:col-span-5 space-y-16">
            {/* Polaroid-style image frame */}
            <Reveal direction="up" delay={0.2}>
              <div className="relative group">
                <div className="bg-[#050505] p-4 pb-12 shadow-[0px_20px_40px_rgba(0,0,0,0.5)] transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-square bg-[#222222] overflow-hidden">
                    <Image
                      src="/coffee-brewing.jpg"
                      alt="Coffee brewing"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <p className="mt-6 font-serif italic text-[#d3c3bd] text-center opacity-70">
                    Fuelling the next big idea.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Social links & Current Focus */}
            <Reveal direction="up" delay={0.3} className="space-y-12 pl-4">
              {/* Social links */}
              <div className="space-y-4">
                <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[#d3c3bd] font-bold">
                  Connect
                </h3>
                <ul className="space-y-6">
                  {socials.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 text-2xl font-serif text-[#fff6e4] hover:text-[#00F2FF] transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          {social.platform === 'GitHub' && (
                            <path
                              fillRule="evenodd"
                              d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06ZM7.28 6.22a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                              clipRule="evenodd"
                            />
                          )}
                          {social.platform === 'LinkedIn' && (
                            <path
                              fillRule="evenodd"
                              d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                              clipRule="evenodd"
                            />
                          )}
                          {social.platform === 'Email' && (
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67ZM22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                          )}
                        </svg>
                        <span>{social.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Current Focus */}
              <div className="space-y-4 pt-4">
                <h3 className="font-label text-xs uppercase tracking-[0.2em] text-[#d3c3bd] font-bold">
                  Current Focus
                </h3>
                <p className="font-sans text-[#d3c3bd] leading-relaxed">
                  Currently exploring the intersection of{' '}
                  <span className="text-[#00F2FF] font-medium">LLM orchestration</span> and{' '}
                  <span className="text-[#00F2FF] font-medium">agentic workflows</span>. Always
                  open to discussing interesting{' '}
                  <span className="text-[#00F2FF] font-medium">AI engineering</span> challenges
                  over a cortado.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </Container>
    </main>
  );
}
