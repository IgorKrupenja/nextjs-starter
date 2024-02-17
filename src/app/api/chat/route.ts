import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request): Promise<Response> {
  const { messages } = (await request.json()) as {
    messages: OpenAI.ChatCompletionMessageParam[];
  };

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
