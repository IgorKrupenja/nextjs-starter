import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Chat } from '@/components/chat/chat';

export default function Home(): ReactElement {
  return (
    <>
      <Rocket size={100} role="img" aria-label="Logo of a rocket" className="text-foreground" />

      <Chat className="m-4 w-full" />

      <span className="text-sm">
        Have feedback?{' '}
        <Link className="underline hover:text-foreground" href="/feedback">
          Get in touch!
        </Link>
      </span>
    </>
  );
}
