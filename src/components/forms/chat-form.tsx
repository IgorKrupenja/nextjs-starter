'use client';

import { useChat } from 'ai/react';
import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import { PropsWithClassName } from '@/interfaces/props-with-class-name.interface';

export const ChatForm = ({ className }: PropsWithClassName): ReactElement => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className={className}>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} placeholder="Say something..." onChange={handleInputChange} />
      </form>

      <Button
        className="mt-4"
        onClick={() =>
          void fetch('/api/chat', {
            method: 'POST',
            body: JSON.stringify({ name: 'test', salary: '123', age: '23' }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
        }
      >
        Test POST, bad request
      </Button>
    </div>
  );
};
