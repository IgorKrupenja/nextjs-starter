import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

import { ChatForm } from '@/components/forms/chat-form';

export default function Home(): ReactElement {
  return (
    <main className="m-4 flex w-[600px] flex-col items-center justify-between">
      <Rocket size={100} />

      <ChatForm className="m-4 w-full" />

      <span className="text-sm">
        Have feedback?{' '}
        <Link className="underline hover:text-muted-foreground" href="/feedback">
          Get in touch!
        </Link>
      </span>
    </main>
  );
}
