import { ReactElement } from 'react';

import { FeedbackForm } from '@/components/feedback/feedback-form';

export default function FeedbackPage(): ReactElement {
  return (
    <>
      <h1 className="mb-10 ml-auto mr-0 text-4xl font-extrabold">Let&apos;s get in touch!</h1>
      <FeedbackForm />
    </>
  );
}
