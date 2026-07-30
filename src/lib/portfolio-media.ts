import 'server-only';
import fs from 'node:fs';
import path from 'node:path';

export type MediaType = 'photo' | 'video';

export interface MediaItem {
  /** Public URL, e.g. /portfolio/photos/arizona.jpg */
  src: string;
  /** Human-friendly title derived from the filename */
  title: string;
  type: MediaType;
}

const PHOTO_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov', '.m4v', '.ogg']);

function titleFromFilename(file: string): string {
  return file
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim();
}

function readDir(subdir: string, type: MediaType, allowed: Set<string>): MediaItem[] {
  const dir = path.join(process.cwd(), 'public', 'portfolio', subdir);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return [];
  }

  return files
    .filter((f) => allowed.has(path.extname(f).toLowerCase()) && !f.startsWith('.'))
    .sort((a, b) => a.localeCompare(b))
    .map((f) => ({
      src: `/portfolio/${subdir}/${f}`,
      title: titleFromFilename(f),
      type,
    }));
}

/** Reads whatever media currently lives in public/portfolio at request/build time. */
export function getPortfolioMedia(): { photos: MediaItem[]; videos: MediaItem[]; all: MediaItem[] } {
  const photos = readDir('photos', 'photo', PHOTO_EXT);
  const videos = readDir('videos', 'video', VIDEO_EXT);
  return { photos, videos, all: [...photos, ...videos] };
}
