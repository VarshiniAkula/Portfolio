import { Hero } from '@/components/home/Hero';
import { Disciplines } from '@/components/home/Disciplines';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { StoryTimeline } from '@/components/home/StoryTimeline';
import { LifesGreat } from '@/components/home/LifesGreat';
import { HomeCTA } from '@/components/home/HomeCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Disciplines />
      <FeaturedProjects />
      <StoryTimeline />
      <LifesGreat />
      <HomeCTA />
    </>
  );
}
