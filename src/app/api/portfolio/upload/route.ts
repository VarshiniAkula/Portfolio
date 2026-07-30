import { NextResponse } from 'next/server';
import fs from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';

const PHOTO_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);
const VIDEO_EXT = new Set(['.mp4', '.webm', '.mov', '.m4v', '.ogg']);
const MAX_BYTES = 100 * 1024 * 1024; // 100 MB per file

function sanitize(name: string): string {
  const ext = path.extname(name).toLowerCase();
  const base = path
    .basename(name, path.extname(name))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'upload';
  return `${base}${ext}`;
}

async function uniquePath(dir: string, filename: string): Promise<string> {
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);
  let candidate = filename;
  let i = 1;
  // Avoid clobbering an existing file.
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      await fs.access(path.join(dir, candidate));
      candidate = `${base}-${i++}${ext}`;
    } catch {
      return candidate;
    }
  }
}

export async function POST(req: Request) {
  // Uploads write to the local filesystem. This works in `next dev` / `next start`,
  // but NOT on serverless hosts (e.g. Vercel) where the filesystem is read-only.
  if (process.env.VERCEL) {
    return NextResponse.json(
      {
        error:
          'Uploads are disabled on the deployed site (read-only filesystem). Run the site locally to add media, or wire up a storage provider like Vercel Blob.',
      },
      { status: 501 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: 'Expected multipart form data.' }, { status: 400 });
  }

  const files = form.getAll('files').filter((f): f is File => f instanceof File);
  if (files.length === 0) {
    return NextResponse.json({ error: 'No files provided.' }, { status: 400 });
  }

  const saved: { name: string; src: string; type: 'photo' | 'video' }[] = [];
  const skipped: { name: string; reason: string }[] = [];

  for (const file of files) {
    const ext = path.extname(file.name).toLowerCase();
    const isPhoto = PHOTO_EXT.has(ext);
    const isVideo = VIDEO_EXT.has(ext);

    if (!isPhoto && !isVideo) {
      skipped.push({ name: file.name, reason: 'Unsupported file type' });
      continue;
    }
    if (file.size > MAX_BYTES) {
      skipped.push({ name: file.name, reason: 'File exceeds 100 MB' });
      continue;
    }

    const subdir = isPhoto ? 'photos' : 'videos';
    const dir = path.join(process.cwd(), 'public', 'portfolio', subdir);
    await fs.mkdir(dir, { recursive: true });

    const filename = await uniquePath(dir, sanitize(file.name));
    const buffer = Buffer.from(await file.arrayBuffer());
    await fs.writeFile(path.join(dir, filename), buffer);

    saved.push({
      name: file.name,
      src: `/portfolio/${subdir}/${filename}`,
      type: isPhoto ? 'photo' : 'video',
    });
  }

  return NextResponse.json({ saved, skipped });
}
