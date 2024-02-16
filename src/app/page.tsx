import { Rocket } from 'lucide-react';
import { ReactElement } from 'react';

import { ChatForm } from '@/components/forms/chat-form';

export default function Home(): ReactElement {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Rocket size={100} />
      <ChatForm className="m-4" />
    </main>
  );
}
