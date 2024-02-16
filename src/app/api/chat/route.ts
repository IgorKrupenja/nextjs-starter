import OpenAI from 'openai';

export const runtime = 'edge';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(request: Request): Promise<Response> {
  console.log('POST /api/ai', request.body);

  // TODO: https://github.com/vercel/ai
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4-turbo-preview',
  });

  console.log(chatCompletion);

  return new Response();
}
