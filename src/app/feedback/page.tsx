import { ReactElement } from 'react';

import BackButton from '@/components/common/back-button';
import { FeedbackForm } from '@/components/feedback/feedback-form';

export default function FeedbackPage(): ReactElement {
  return (
    <>
      <BackButton className="absolute left-0 top-3" />

      <h1 className="mb-10 text-4xl font-extrabold sm:ml-auto sm:mr-0">Let&apos;s get in touch!</h1>
      <FeedbackForm />
    </>
  );
}
