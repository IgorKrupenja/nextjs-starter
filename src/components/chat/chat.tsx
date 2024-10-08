'use client';

import { useChat } from 'ai/react';
import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PropsWithClassName } from '@/interfaces/props-with-class-name';

export function Chat({ className }: PropsWithClassName): ReactElement {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    // TODO: Implement proper chat UI
    <div className={className}>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form className="flex w-full items-center space-x-2" onSubmit={handleSubmit}>
        <Input
          value={input}
          placeholder="Message the AI"
          onChange={handleInputChange}
          aria-label="Message"
        />
        <Button type="submit" disabled={input.length === 0}>
          Submit
        </Button>
      </form>
    </div>
  );
}
