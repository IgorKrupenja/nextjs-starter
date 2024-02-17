'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  eMail: z.string().email({ message: 'Invalid email' }),
  message: z.string().min(1, { message: 'Message is required' }),
});

export type FeedbackFormValues = z.infer<typeof formSchema>;

const inputFormFields: { name: keyof FeedbackFormValues; placeholder: string }[] = [
  { name: 'name', placeholder: 'Name' },
  { name: 'eMail', placeholder: 'E-mail' },
];

export function FeedbackForm(): ReactElement {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      eMail: '',
      message: '',
    },
  });

  async function onSubmit(values: FeedbackFormValues): Promise<void> {
    await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="grid w-full grid-cols-2 gap-4"
      >
        {inputFormFields.map((item) => {
          return (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="relative">
                  <FormMessage className="absolute -top-7" />
                  <FormControl>
                    <Input placeholder={item.placeholder} className="mt-0" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          );
        })}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative col-span-2">
              <FormControl>
                <Textarea placeholder="Message" className="resize-none" {...field} />
              </FormControl>
              <FormMessage className="absolute -bottom-7" />
            </FormItem>
          )}
        />

        <Button type="submit" className="col-start-2">
          Submit
        </Button>
      </form>
    </Form>
  );
}
