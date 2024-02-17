import { ReactElement } from 'react';

export default function FeedbackPage(): ReactElement {
  return (
    <main>
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
      Feedback Page
    </main>
  );
}
