import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

import { PostMessagesBody } from '@/interfaces/post-message-body.interface';

export const runtime = 'edge';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request): Promise<Response> {
  const { messages } = (await request.json()) as PostMessagesBody;

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
