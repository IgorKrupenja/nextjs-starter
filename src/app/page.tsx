import { Rocket } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Chat } from '@/components/chat/chat';

export default function Home(): ReactElement {
  return (
    <>
      <Rocket
        size={100}
        aria-label="Logo of a stylised purple rocket flying towards top-right"
        className="text-primary"
      />

      <Chat className="m-4 w-full" />

      <span className="text-sm">
        Have feedback?{' '}
        <Link className="underline hover:text-primary" href="/feedback">
          Get in touch!
        </Link>
      </span>
    </>
  );
}
