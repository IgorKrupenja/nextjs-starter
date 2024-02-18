import { getErrorsFromParseResult } from '@/lib/utils';
import { FeedbackFormValues, feedbackFormSchema } from '@/schemas/feedback';

export const runtime = 'edge';

export async function POST(request: Request): Promise<Response> {
  const { name, email, message } = (await request.json()) as FeedbackFormValues;

  const parseResult = feedbackFormSchema.safeParse({ name, email, message });

  const errors = getErrorsFromParseResult(parseResult);

  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  return new Response('Form submitted!');
}
