import { z } from 'zod';

export const feedbackFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required' }),
  eMail: z.string().trim().email({ message: 'Invalid email' }),
  message: z.string().trim().min(1, { message: 'Message is required' }),
});

export type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;
