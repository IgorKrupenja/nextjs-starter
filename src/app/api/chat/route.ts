import { openai } from '@ai-sdk/openai';
import { Message, convertToCoreMessages, streamText } from 'ai';

export const runtime = 'edge';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(request: Request): Promise<Response> {
  if (!process.env.OPENAI_API_KEY)
    return new Response('OpenAI API key is not set', { status: 500 });

  const { messages } = (await request.json()) as {
    messages: Message[];
  };

  const result = await streamText({
    model: openai('gpt-4o'),
    system: 'You are a helpful assistant.',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
