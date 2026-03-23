import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <span className="font-mono text-6xl text-[#00F2FF]/30 font-bold block mb-6">
            404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#fff6e4] mb-4">
            Lost in the Atlas
          </h1>
          <p className="text-[#fff6e4]/60 text-lg leading-relaxed mb-8">
            This page doesn&apos;t exist yet — but there&apos;s plenty to explore.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/projects" variant="secondary" size="lg">
              View Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
