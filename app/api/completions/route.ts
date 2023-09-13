import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const runtime = 'edge'; // 'nodejs' is the default

const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  // console.log(body.context.theme);

  try {
    const completion = await openai.chat.completions.create({
      messages: [...body.context.messages],
      model: 'gpt-3.5-turbo',
    });
    return NextResponse.json(completion);
  } catch (error) {
    console.log(error);
    return NextResponse.json(error);
  }
}
