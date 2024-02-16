import OpenAI from 'openai';

export interface PostMessagesBody {
  messages: OpenAI.ChatCompletionMessageParam[];
}
