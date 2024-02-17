import { ReactElement } from 'react';

import { FeedbackForm } from '@/components/feedback/feedback-form';

export default function FeedbackPage(): ReactElement {
  return (
    <>
      <FeedbackForm />
      {/* TODO: Replace with a better example */}
      {/* TODO: Also use form, like for feedback? */}
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
    </>
  );
}
