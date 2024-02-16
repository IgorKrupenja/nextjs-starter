import Image from 'next/image';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
    </main>
  );
}
