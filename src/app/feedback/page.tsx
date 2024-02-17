import { Metadata } from 'next';
import { ReactElement } from 'react';

import BackButton from '@/components/common/back-button';
import { FeedbackForm } from '@/components/feedback/feedback-form';

export const metadata: Metadata = {
  title: 'Next.js Starter 🚀 — Get in touch',
};

export default function FeedbackPage(): ReactElement {
  return (
    <>
      <BackButton className="absolute left-0 top-0 sm:top-3" />

      <h1 className="mb-10 mt-14 text-4xl font-extrabold sm:ml-auto sm:mr-0">
        Let&apos;s get in touch!
      </h1>
      <FeedbackForm />
    </>
  );
}
