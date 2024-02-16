'use client';

import { useChat } from 'ai/react';
import { ReactElement } from 'react';

export const ChatForm = (): ReactElement => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input value={input} placeholder="Say something..." onChange={handleInputChange} />
      </form>
    </div>
  );
};
