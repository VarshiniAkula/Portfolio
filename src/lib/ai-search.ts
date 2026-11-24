import Fuse from 'fuse.js';
import { curatedResponses } from '@/content/prompts';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { research } from '@/content/research';
import { leadership } from '@/content/leadership';
import { milestones } from '@/content/story-milestones';
import type { ChatLink, PromptChip } from '@/types/content';

export interface ChatAnswer {
  response: string;
  link?: ChatLink;
  followUps?: PromptChip[];
}

interface ContentChunk {
  title: string;
  text: string;
  link: ChatLink;
}

function buildContentIndex(): ContentChunk[] {
  const chunks: ContentChunk[] = [
    {
      title: profile.name,
      text: profile.bio.recruiter,
      link: { href: '/software#about', label: 'Open her portfolio' },
    },
  ];

  projects.forEach((p) => {
    chunks.push({
      title: p.title,
      text: `${p.description.recruiter} Tech: ${p.techStack.join(', ')}.`,
      link: { href: `/projects/${p.slug}`, label: `Open ${p.title}` },
    });
  });

  research.forEach((r) => {
    chunks.push({ title: r.title, text: r.abstract, link: { href: '/software#leadership', label: 'See publications' } });
  });

  leadership.forEach((l) => {
    chunks.push({
      title: `${l.title}, ${l.organization}`,
      text: `${l.description} ${l.impact}`,
      link: { href: '/software#leadership', label: 'See leadership' },
    });
  });

  milestones.forEach((m) => {
    chunks.push({
      title: `${m.title} (${m.date})`,
      text: m.description.recruiter,
      link: { href: '/software#experience', label: 'See her experience' },
    });
  });

  return chunks;
}

let fuse: Fuse<ContentChunk> | null = null;

function getFuse() {
  if (!fuse) {
    fuse = new Fuse(buildContentIndex(), {
      keys: [
        { name: 'title', weight: 2 },
        { name: 'text', weight: 1 },
      ],
      threshold: 0.35,
      ignoreLocation: true,
      includeScore: true,
    });
  }
  return fuse;
}

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Matches a trigger as a whole word or phrase, not inside other words. */
function matches(query: string, trigger: string): boolean {
  return new RegExp(`(^|[^a-z0-9])${escape(trigger)}([^a-z0-9]|$)`, 'i').test(query);
}

export function findAnswer(query: string): ChatAnswer {
  const q = query.toLowerCase().trim();

  // 1. Curated answers: score by the length of matched triggers, weighted by priority.
  let best: { score: number; index: number } | null = null;
  curatedResponses.forEach((c, index) => {
    const score =
      c.triggers.filter((t) => matches(q, t)).reduce((sum, t) => sum + t.length, 0) * (c.priority ?? 1);
    if (score > 0 && (!best || score > best.score)) best = { score, index };
  });

  if (best) {
    const c = curatedResponses[(best as { index: number }).index];
    return { response: c.response, link: c.link, followUps: c.followUps };
  }

  // 2. Fuzzy search over all site content.
  const results = getFuse().search(query, { limit: 2 });
  if (results.length > 0) {
    const [top, second] = results;
    let response = `${top.item.title}: ${top.item.text}`;
    if (second && second.item.title !== top.item.title) {
      response += `\n\nRelated: ${second.item.title}.`;
    }
    return { response, link: top.item.link };
  }

  return {
    response:
      "I don't have an answer for that yet. Try asking about her experience at JPMorgan Chase, a project by name, her skills, education or publications. You can also reach Varshini directly through the Contact page.",
    link: { href: '/software#contact', label: 'Contact Varshini' },
    followUps: [
      { label: 'Who is Varshini?', query: 'Tell me about Varshini' },
      { label: 'Projects', query: 'What projects has she built?' },
    ],
  };
}
