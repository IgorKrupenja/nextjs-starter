import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

import { Button } from '@/components/ui/button';
import { PropsWithClassName } from '@/interfaces/props-with-class-name.interface';
import { cn } from '@/lib/utils';

export default function BackButton({ className }: PropsWithClassName): ReactElement {
  return (
    <Button
      asChild
      variant="outline"
      className={cn('mb-10 text-primary hover:text-primary', className)}
    >
      <Link href="/">
        <ArrowLeft className="mr-2 h-[1.2rem] w-[1.2rem]" />
        Back
      </Link>
    </Button>
  );
}
