import { render, screen } from '@testing-library/react';

import BackButton from './back-button';

import { expectToContainClasses } from '@/test/utils';

vi.mock('lucide-react', () => ({
  ArrowLeft: vi.fn(() => <span data-testid="arrow-left-icon" />),
}));

describe('BackButton', () => {
  it('renders a button with correct text', () => {
    render(<BackButton />);
    const button = screen.getByRole('link', { name: /back/i });
    expect(button).toBeDefined();
  });

  it('renders a link to the home page', () => {
    render(<BackButton />);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/');
  });

  it('renders the ArrowLeft icon', () => {
    render(<BackButton />);
    const icon = screen.getByTestId('arrow-left-icon');
    expect(icon).toBeDefined();
  });

  it('applies the provided className', () => {
    const testClass = 'test-class';
    render(<BackButton className={testClass} />);
    const button = screen.getByRole('link');

    expectToContainClasses(button, [testClass]);
  });
});
