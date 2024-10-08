import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { FeedbackForm } from './feedback-form';

// Mock the useToast hook
const mockToast = vi.fn();
vi.mock('@/components/ui/use-toast', () => ({
  useToast: () => ({
    toast: mockToast,
  }),
}));

describe('FeedbackForm', () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it('renders the form with all fields', () => {
    render(<FeedbackForm />);

    expect(screen.getByLabelText('Name')).toBeDefined();
    expect(screen.getByLabelText('E-mail')).toBeDefined();
    expect(screen.getByLabelText('Message')).toBeDefined();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeDefined();
  });

  it('displays error messages for empty fields on submit', async () => {
    render(<FeedbackForm />);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeDefined();
    });
    expect(screen.getByText('Invalid email')).toBeDefined();
    expect(screen.getByText('Message is required')).toBeDefined();
  });

  it('submits the form with valid data', async () => {
    const mockFetch = vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      json: vi.fn().mockResolvedValueOnce({ test: 'test' }),
    } as unknown as Response);

    render(<FeedbackForm />);

    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('E-mail'), 'john@example.com');
    await userEvent.type(screen.getByLabelText('Message'), 'This is a test message');

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/feedback', {
        method: 'POST',
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'This is a test message',
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    });
  });

  it('disables the submit button while submitting', async () => {
    // Mock fetch to never resolve to simulate loading state
    vi.spyOn(global, 'fetch').mockImplementationOnce(() => new Promise(() => {}));

    render(<FeedbackForm />);

    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('E-mail'), 'john@example.com');
    await userEvent.type(screen.getByLabelText('Message'), 'This is a test message');

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(submitButton.attributes.getNamedItem('disabled')).toBeDefined();
    });
  });

  it('displays a success toast when the form is submitted successfully', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
    } as unknown as Response);

    render(<FeedbackForm />);

    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('E-mail'), 'john@example.com');
    await userEvent.type(screen.getByLabelText('Message'), 'This is a test message');

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Feedback sent!',
        description: 'To do: implement in route handler',
      });
    });
  });

  it('displays an error toast when the form submission fails', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: false,
    } as unknown as Response);

    render(<FeedbackForm />);

    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('E-mail'), 'john@example.com');
    await userEvent.type(screen.getByLabelText('Message'), 'This is a test message');

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      });
    });
  });

  it('resets the form after a successful submission', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce({
      ok: true,
    } as unknown as Response);

    render(<FeedbackForm />);

    await userEvent.type(screen.getByLabelText('Name'), 'John Doe');
    await userEvent.type(screen.getByLabelText('E-mail'), 'john@example.com');
    await userEvent.type(screen.getByLabelText('Message'), 'This is a test message');

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await userEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByRole<HTMLInputElement>('textbox', { name: 'Name' }).value).toBe('');
    });
    await waitFor(() => {
      expect(screen.getByRole<HTMLInputElement>('textbox', { name: 'E-mail' }).value).toBe('');
    });
    await waitFor(() => {
      expect(screen.getByRole<HTMLInputElement>('textbox', { name: 'Message' }).value).toBe('');
    });
  });
});
