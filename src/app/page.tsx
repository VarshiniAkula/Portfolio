import { Hero } from '@/components/home/Hero';
import { LifesGreat } from '@/components/home/LifesGreat';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { HomeCTA } from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <LifesGreat />
      <HomeCTA />
    </>
  );
}
