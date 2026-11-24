import { NextRequest, NextResponse } from 'next/server';
import { findAnswer } from '@/lib/ai-search';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string' || message.length > 500) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    return NextResponse.json(findAnswer(message));
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
