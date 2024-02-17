'use client';

import { useChat } from 'ai/react';
import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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

      <form className="flex w-96 max-w-sm items-center space-x-2" onSubmit={handleSubmit}>
        <Input value={input} placeholder="Message your AI pet" onChange={handleInputChange} />
        <Button type="submit">Submit</Button>
      </form>

      {/* TODO: Replace with a better example */}
      {/* TODO: Also use form, like for feedback? */}
      {/* <Button
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
      </Button> */}
    </div>
  );
};
