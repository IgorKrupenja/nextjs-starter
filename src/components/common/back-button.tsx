import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import { PropsWithClassName } from '@/interfaces/props-with-class-name';

export default function BackButton({ className }: PropsWithClassName): ReactElement {
  return (
    <Button asChild variant="outline" className={className}>
      <Link href="/">
        <ArrowLeft className="mr-2 h-5 w-5" />
        Back
      </Link>
    </Button>
  );
}
