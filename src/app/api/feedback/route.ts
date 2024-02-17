import { getErrorsFromParseResult } from '@/lib/utils';
import { FeedbackFormValues, feedbackFormSchema } from '@/schemas/feedback';

export async function POST(request: Request): Promise<Response> {
  const { name, eMail, message } = (await request.json()) as FeedbackFormValues;

  const parseResult = feedbackFormSchema.safeParse({ name, eMail, message });

  const errors = getErrorsFromParseResult(parseResult);

  if (Object.keys(errors).length > 0) {
    return Response.json({ errors }, { status: 400 });
  }

  console.log({ name, eMail, message });

  return new Response('Form submitted!');
}