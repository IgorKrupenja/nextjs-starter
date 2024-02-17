import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

// TODO: fix these tests
describe('Home', () => {
  it('should render Rocket component with correct class', () => {
    render(<Home />);
    const rocketElement = screen.getByLabelText(
      'Logo of a stylised purple rocket flying towards top-right',
    ) as HTMLOrSVGImageElement;

    expect(rocketElement).toBeDefined();
    expect(rocketElement.classList.contains('text-primary')).toBe(true);
  });

  // it('should render ChatForm component with correct class', () => {
  //   render(<Home />);
  //   const chatFormElement = screen.getByRole('form', { name: 'Chat Form' });
  //   expect(chatFormElement).toHaveClass('m-4 w-full');
  // });

  it('should render feedback link with correct text, href and classes', () => {
    render(<Home />);
    const feedbackLinkElement = screen.getByRole('link', { name: 'Get in touch!' });

    expect(feedbackLinkElement.textContent).toBeDefined();
    expect(feedbackLinkElement.classList.contains('underline')).toBe(true);
    expect(feedbackLinkElement.classList.contains('hover:text-primary')).toBe(true);
    expect(feedbackLinkElement.getAttribute('href')).toBe('/feedback');
  });
});
