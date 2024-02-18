'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Rocket } from 'lucide-react';
import { HTMLInputTypeAttribute, ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { FeedbackFormValues, feedbackFormSchema } from '@/schemas/feedback';

const inputFormFields: {
  name: keyof FeedbackFormValues;
  label: string;
  type: HTMLInputTypeAttribute;
}[] = [
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'email', label: 'E-mail', type: 'email' },
];

export function FeedbackForm(): ReactElement {
  const { toast } = useToast();
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(values: FeedbackFormValues): Promise<void> {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      form.reset();
      toast({
        title: 'Feedback sent!',
        description: 'To do: implement in route handler',
      });
    } else {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        className="grid w-full grid-cols-2 gap-7"
      >
        {inputFormFields.map((item) => {
          return (
            <FormField
              key={item.name}
              control={form.control}
              name={item.name}
              render={({ field }) => (
                <FormItem className="relative col-span-2 space-y-0 sm:col-span-1">
                  <FormLabel>{item.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={item.label}
                      type={item.type}
                      autoComplete={item.name}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="absolute -bottom-5" />
                </FormItem>
              )}
            />
          );
        })}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="relative col-span-2 space-y-0">
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" className="min-h-40 resize-none" {...field} />
              </FormControl>
              <FormMessage className="absolute -bottom-5" />
            </FormItem>
          )}
        />

        <Button type="submit" className="col-span-2 sm:col-span-1 sm:col-start-2">
          <Rocket className="mr-2 h-5 w-5" />
          Submit
        </Button>
      </form>
    </Form>
  );
}
