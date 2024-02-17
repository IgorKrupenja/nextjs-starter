import { POST } from './route';

import * as utils from '@/lib/utils';
import { feedbackFormSchema } from '@/schemas/feedback';

vi.mock('@/schemas/feedback', () => ({
  feedbackFormSchema: {
    safeParse: vi.fn(),
  },
}));

describe('POST', () => {
  it('should return a successful response if form submission is valid', async () => {
    const data = {
      name: 'John Doe',
      eMail: 'johndoe@example.com',
      message: 'Hello, World!',
    };
    const request = {
      json: vi.fn().mockResolvedValueOnce(data),
    } as unknown as Request;
    const getErrorsFromParseResultSpy = vi
      .spyOn(utils, 'getErrorsFromParseResult')
      .mockReturnValueOnce({});
    const mockSafeParse = vi.mocked(feedbackFormSchema.safeParse);

    const response = await POST(request);

    expect(mockSafeParse).toHaveBeenCalledWith(data);
    expect(getErrorsFromParseResultSpy).toHaveBeenCalled();
    expect(response.status).toBe(200);
    expect(await response.text()).toBe('Form submitted!');
  });

  it('should return a response with errors if form submission is invalid', async () => {
    const data = { name: '', eMail: 'johndoe@example.com', message: '' };
    const request = {
      json: vi.fn().mockResolvedValueOnce(data),
    } as unknown as Request;
    const getErrorsFromParseResultSpy = vi
      .spyOn(utils, 'getErrorsFromParseResult')
      .mockReturnValueOnce({
        name: 'Name is required',
        message: 'Message is required',
      });
    const mockSafeParse = vi.mocked(feedbackFormSchema.safeParse);

    const response = await POST(request);

    expect(mockSafeParse).toHaveBeenCalledWith(data);
    expect(getErrorsFromParseResultSpy).toHaveBeenCalled();
    expect(response.status).toBe(400);
    expect(await response.json()).toEqual({
      errors: {
        name: 'Name is required',
        message: 'Message is required',
      },
    });
  });
});
