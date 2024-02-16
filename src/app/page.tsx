import Image from 'next/image';
import { ReactElement } from 'react';

import { ChatForm } from '@/components/forms/chat-form';

export default function Home(): ReactElement {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      <ChatForm className="m-4" />
    </main>
  );
}
