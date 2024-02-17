import { z } from 'zod';

export const feedbackFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  eMail: z.string().email({ message: 'Invalid email' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;
