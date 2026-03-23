import { NextRequest, NextResponse } from 'next/server';
import { findAnswer } from '@/lib/ai-search';

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const result = findAnswer(message);

    return NextResponse.json({
      response: result.response,
      section: result.section,
    });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
