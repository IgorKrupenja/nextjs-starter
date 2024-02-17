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

      <form className="flex w-full items-center space-x-2" onSubmit={handleSubmit}>
        <Input value={input} placeholder="Message your AI pet" onChange={handleInputChange} />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
