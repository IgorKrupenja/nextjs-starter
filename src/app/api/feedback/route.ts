import { FeedbackFormValues, feedbackFormSchema } from '@/schemas/feedback';

export async function POST(request: Request): Promise<Response> {
  const { name, eMail, message } = (await request.json()) as FeedbackFormValues;

  feedbackFormSchema.safeParse({ name, eMail, message });

  console.log({ name, eMail, message });

  return new Response('Form submitted!');
}
