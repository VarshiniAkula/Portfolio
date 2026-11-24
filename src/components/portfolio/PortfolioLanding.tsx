import Link from 'next/link';
import { portfolios } from '@/content/portfolios';
import { profile } from '@/content/profile';
import { Diamond } from './icons';

export function PortfolioLanding() {
  return (
    <section className="relative px-4 pb-20 pt-10 sm:pt-16" aria-labelledby="landing-name">
      <div
        className="pointer-events-none absolute inset-0 -top-24"
        style={{ background: 'radial-gradient(1000px 700px at 70% 10%, rgba(40,90,100,0.18), transparent 60%), radial-gradient(900px 600px at 20% 80%, rgba(120,70,40,0.14), transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1240px] text-center">
        <p className="eyebrow">Portfolio</p>
        <h1 id="landing-name" className="mt-6 font-label text-[clamp(52px,9vw,104px)] font-light leading-none tracking-[-0.03em] text-[var(--fg)]">
          {profile.name}
        </h1>
        <div className="mx-auto mt-8 h-px w-14 bg-[var(--line2)]" aria-hidden="true" />
        <p className="mt-6 text-[17px] text-[var(--muted)] font-label">Choose a portfolio</p>

        <ul className="mx-auto mt-10 grid max-w-[760px] gap-6 sm:grid-cols-2">
          {portfolios.map((p) => (
            <li key={p.id}>
              <Link
                href={`/${p.id}`}
                className="group block overflow-hidden rounded-[22px] border border-[var(--line2)] bg-[#161211] text-left shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cream)]"
              >
                <div className="relative h-[230px] overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                    style={{
                      background: `radial-gradient(55% 60% at 35% 62%, ${p.glow[0]}f2, transparent 70%), radial-gradient(55% 65% at 78% 28%, ${p.glow[1]}f2, transparent 72%), linear-gradient(180deg, #0e0808, #171010 70%, #141010)`,
                    }}
                  />
                  <div className="dot-grain absolute inset-0" />
                  <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                    <span className="caps rounded-full bg-black/55 px-3.5 py-2 text-[var(--cream)]">
                      {p.index} · {p.short}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-black/70 text-[var(--cream)]">
                      <Diamond />
                    </span>
                  </div>
                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="font-label text-[26px] font-normal leading-tight text-white sm:text-[28px]">{p.name}</p>
                    <p className="caps mt-2 text-[var(--text)]">{p.tagline}</p>
                  </div>
                </div>
                <div className="p-5">
                  <span className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--cream)] px-4 py-3.5 font-label text-[15px] text-[#1a1110] transition group-hover:bg-white">
                    Enter portfolio <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
