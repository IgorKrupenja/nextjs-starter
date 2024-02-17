import { FeedbackFormValues } from '@/components/feedback/feedback-form';

export async function POST(request: Request): Promise<Response> {
  const { name, eMail, message } = (await request.json()) as FeedbackFormValues;

  console.log({ name, eMail, message });

  return new Response('Form submitted!');
}
