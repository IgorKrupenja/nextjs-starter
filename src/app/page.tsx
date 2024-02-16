import Image from 'next/image';
import { ReactElement } from 'react';

export const runtime = 'edge';

import { ChatForm } from '@/components/forms/chat-form';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Home(): ReactElement {
  return (
    <main className="flex w-full flex-col items-center justify-between">
      <Image src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />

      <ChatForm />

      <Accordion className="w-96" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
}
