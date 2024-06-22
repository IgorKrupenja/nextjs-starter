import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request): Promise<Response> {
  if (!openai.apiKey) return new Response('OpenAI API key is not set', { status: 500 });

  const { messages } = (await request.json()) as {
    messages: OpenAI.ChatCompletionMessageParam[];
  };

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
