import { render, screen } from '@testing-library/react';

import FeedbackPage from './page';

import { expectToContainClasses } from '@/test/utils';

describe('FeedbackPage', () => {
  it('renders the back button with correct class', () => {
    render(<FeedbackPage />);
    const backButton = screen.getByRole('link', { name: 'Back' });
    expect(backButton).toBeDefined();
    expectToContainClasses(backButton, ['absolute', 'left-0', 'top-0', 'sm:top-3']);
  });

  it('renders the heading with correct text and classes', () => {
    render(<FeedbackPage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toBe("Let's get in touch!");
    expectToContainClasses(heading, [
      'mb-10',
      'mt-14',
      'text-4xl',
      'font-extrabold',
      'sm:ml-auto',
      'sm:mr-0',
    ]);
  });

  it('renders the FeedbackForm component', () => {
    render(<FeedbackPage />);
    const feedbackForm = screen.getByText('Submit');
    expect(feedbackForm).toBeDefined();
  });
});
