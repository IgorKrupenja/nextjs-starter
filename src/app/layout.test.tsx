import { render, screen } from '@testing-library/react';

import RootLayout from '@/app/layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

describe('RootLayout', () => {
  beforeEach(() => Promise.resolve());

  it('should render children', () => {
    render(
      <RootLayout>
        <div data-testid="child-element">Child Element</div>
      </RootLayout>,
    );

    const childElement = screen.getByTestId('child-element');
    expect(childElement).toBeDefined();
  });

  it('should render ThemeToggle component', () => {
    render(<RootLayout />);
    const themeToggleElement = screen.getByRole('button', { name: 'Toggle color theme' });

    expect(themeToggleElement).toBeDefined();
    ['absolute', 'right-0', 'top-0'].forEach((className) => {
      expect(themeToggleElement.classList.contains(className)).toBe(true);
    });
  });

  it('should render main with correct classes', () => {
    render(<RootLayout />);
    const mainElement = screen.getByRole('main');

    expect(mainElement).toBeDefined();
    ['relative', 'flex', 'flex-col', 'items-center', 'justify-center'].forEach((className) => {
      expect(mainElement.classList.contains(className)).toBe(true);
    });
  });
});
