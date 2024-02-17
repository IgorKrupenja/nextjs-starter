'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useChat } from 'ai/react';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PropsWithClassName } from '@/interfaces/props-with-class-name.interface';

export const ChatForm = ({ className }: PropsWithClassName): ReactElement => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const formSchema = z.object({
    message: z.string().min(1).max(4096),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: '',
    },
  });

  return (
    <div className={className}>
      {messages.map((m) => (
        <div key={m.id}>
          {m.role}: {m.content}
        </div>
      ))}

      {/* todo texts */}
      <Form {...form}>
        <form onSubmit={handleSubmit} className="space-y-8">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Message your AI pet"
                    {...field}
                    value={input}
                    onChange={handleInputChange}
                  />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>

      {/* <Button
        className="mt-4"
        onClick={() =>
          void fetch('/api/chat', {
            method: 'POST',
            body: JSON.stringify({ name: 'test', salary: '123', age: '23' }),
            headers: {
              'Content-Type': 'application/json',
            },
          })
        }
      >
        Test POST, bad request
      </Button> */}
    </div>
  );
};
