'use client';

import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';

export const ChatForm = (): ReactElement => {
  return (
    <Button
      className="m-5"
      onClick={() => void fetch(`https://${process.env.VERCEL_URL}/api/chat`, { method: 'POST' })}
    >
      Click me
    </Button>
  );
};
