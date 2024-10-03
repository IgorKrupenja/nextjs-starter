import { render, screen } from '@testing-library/react';

import Home from '@/app/page';
import { expectToContainClasses } from '@/test/utils';

vi.mock('@/components/chat/chat', () => ({
  Chat: vi.fn(() => <div data-testid="mock-chat">Mocked Chat Component</div>),
}));

describe('Home', () => {
  it('should render Rocket component with correct class', () => {
    render(<Home />);
    const rocketElement = screen.getByLabelText(
      'Logo of a stylised purple rocket flying towards top-right',
    ) as HTMLOrSVGImageElement;

    expect(rocketElement).toBeDefined();
    expect(rocketElement.classList.contains('text-primary')).toBe(true);
  });

  it('should render feedback link with correct text, href and classes', () => {
    render(<Home />);
    const feedbackLinkElement = screen.getByRole('link', { name: 'Get in touch!' });

    expect(feedbackLinkElement.textContent).toBeDefined();
    expectToContainClasses(feedbackLinkElement, ['hover:text-primary', 'underline']);
    expect(feedbackLinkElement.getAttribute('href')).toBe('/feedback');
  });

  it('should render Chat component with correct class', () => {
    render(<Home />);
    const chatElement = screen.getByTestId('mock-chat');
    expect(chatElement).toBeDefined();
  });

  it('should render the feedback text', () => {
    render(<Home />);
    const feedbackText = screen.getByText(/Have feedback\?/i);

    expect(feedbackText).toBeDefined();
    expectToContainClasses(feedbackText, ['text-sm']);
  });
});
