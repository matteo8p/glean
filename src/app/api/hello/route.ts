import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ hello: 'Next.js' });
}

// To handle a POST request to /api/analysis
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({ content: body.hoe }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to get a response from OpenAI' },
      { status: 500 }
    );
  }
}
