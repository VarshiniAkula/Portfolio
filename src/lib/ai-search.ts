import Fuse from 'fuse.js';
import { curatedResponses } from '@/content/prompts';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { research } from '@/content/research';
import { leadership } from '@/content/leadership';
import { milestones } from '@/content/story-milestones';

interface ContentChunk {
  text: string;
  source: string;
  section: string;
}

function buildContentIndex(): ContentChunk[] {
  const chunks: ContentChunk[] = [];

  // Profile
  chunks.push({
    text: `${profile.name} is an ${profile.title}. ${profile.bio.recruiter} ${profile.bio.explorer}`,
    source: 'profile',
    section: 'home',
  });

  // Metrics
  profile.highlights.forEach((m) => {
    chunks.push({
      text: `${m.label}: ${m.value} ${m.unit}${m.context ? ` — ${m.context}` : ''}`,
      source: 'metrics',
      section: 'home',
    });
  });

  // Projects
  projects.forEach((p) => {
    chunks.push({
      text: `Project: ${p.title}. ${p.description.recruiter} Tech: ${p.techStack.join(', ')}. Metrics: ${p.metrics.map((m) => `${m.value} ${m.unit}`).join(', ')}`,
      source: p.slug,
      section: 'projects',
    });
  });

  // Research
  research.forEach((r) => {
    chunks.push({
      text: `Research: ${r.title}. ${r.abstract} Status: ${r.status}. Tags: ${r.tags.join(', ')}`,
      source: r.id,
      section: 'research',
    });
  });

  // Leadership
  leadership.forEach((l) => {
    chunks.push({
      text: `Leadership: ${l.title} at ${l.organization}. ${l.description} Impact: ${l.impact}`,
      source: l.id,
      section: 'leadership',
    });
  });

  // Milestones
  milestones.forEach((m) => {
    chunks.push({
      text: `${m.date}: ${m.title} — ${m.description.explorer}`,
      source: m.id,
      section: 'journey',
    });
  });

  return chunks;
}

let fuse: Fuse<ContentChunk> | null = null;

function getFuse() {
  if (!fuse) {
    const chunks = buildContentIndex();
    fuse = new Fuse(chunks, {
      keys: ['text'],
      threshold: 0.4,
      includeScore: true,
    });
  }
  return fuse;
}

export function findAnswer(query: string): { response: string; section?: string } {
  const q = query.toLowerCase().trim();

  // Check curated responses first
  for (const curated of curatedResponses) {
    if (curated.triggers.some((trigger) => q.includes(trigger))) {
      return { response: curated.response, section: curated.section };
    }
  }

  // Fall back to fuzzy search
  const results = getFuse().search(query, { limit: 3 });

  if (results.length === 0) {
    return {
      response:
        "I don't have a specific answer for that, but I'd recommend exploring the Projects, Research, or Journey sections. You can also reach out directly through the Contact page.",
    };
  }

  const topResults = results.map((r) => r.item.text).join('\n\n');
  const section = results[0].item.section;

  return {
    response: `Based on Varshini's profile:\n\n${topResults}\n\nYou can find more details in the ${section.charAt(0).toUpperCase() + section.slice(1)} section.`,
    section,
  };
}
