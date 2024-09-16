import { CoreTool, StreamTextResult, convertToCoreMessages, streamText } from 'ai';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { POST } from './route';

describe('POST', () => {
  beforeEach(() => {
    vi.mock('@ai-sdk/openai', () => ({
      openai: vi.fn(),
    }));
    vi.mock('ai', () => ({
      convertToCoreMessages: vi.fn(),
      streamText: vi.fn(),
    }));
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  it('should return a 500 response if OPENAI_API_KEY is not set', async () => {
    delete process.env.OPENAI_API_KEY;
    const request = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ messages: [] }),
    });

    const response = await POST(request);

    expect(response.status).toBe(500);
    expect(await response.text()).toBe('OpenAI API key is not set');
  });

  it('should process messages and return a stream response', async () => {
    process.env.OPENAI_API_KEY = 'test-key';
    const mockMessages = [{ role: 'user', content: 'Hello' }];
    const mockRequest = new Request('http://localhost', {
      method: 'POST',
      body: JSON.stringify({ messages: mockMessages }),
    });
    const mockStreamResult = {
      toDataStreamResponse: vi.fn().mockReturnValue(new Response()),
      body: 'test',
    };
    vi.mocked(streamText).mockResolvedValue(
      mockStreamResult as unknown as StreamTextResult<Record<string, CoreTool>>,
    );

    const response = await POST(mockRequest);

    expect(convertToCoreMessages).toHaveBeenCalledWith(mockMessages);
    expect(streamText).toHaveBeenCalledWith({
      system: 'You are a helpful assistant.',
    });
    expect(mockStreamResult.toDataStreamResponse).toHaveBeenCalled();
    expect(response).toBeInstanceOf(Response);
  });
});
