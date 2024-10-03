import { FeedbackFormValues, feedbackFormSchema } from './feedback';

describe('feedbackFormSchema', () => {
  it('should validate a correct feedback form', () => {
    const validFeedback: FeedbackFormValues = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message',
    };

    const result = feedbackFormSchema.safeParse(validFeedback);
    expect(result.success).toBe(true);
  });

  it('should reject an empty name', () => {
    const invalidFeedback = {
      name: '',
      email: 'john@example.com',
      message: 'This is a valid message',
    };

    const result = feedbackFormSchema.safeParse(invalidFeedback);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Name is required');
    }
  });

  it('should reject an invalid email', () => {
    const invalidFeedback = {
      name: 'John Doe',
      email: 'invalid-email',
      message: 'This is a valid message',
    };

    const result = feedbackFormSchema.safeParse(invalidFeedback);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Invalid email');
    }
  });

  it('should reject an empty message', () => {
    const invalidFeedback = {
      name: 'John Doe',
      email: 'john@example.com',
      message: '',
    };

    const result = feedbackFormSchema.safeParse(invalidFeedback);
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe('Message is required');
    }
  });

  it('should trim whitespace from all fields', () => {
    const feedbackWithWhitespace = {
      name: '  John Doe  ',
      email: '  john@example.com  ',
      message: '  This is a valid message  ',
    };

    const result = feedbackFormSchema.safeParse(feedbackWithWhitespace);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data).toEqual({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'This is a valid message',
      });
    }
  });
});
