import { render, screen } from '@testing-library/react';

import RootLayout from '@/app/layout';
import { expectToContainClasses } from '@/test/utils';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

vi.mock('@/components/ui/toaster', () => ({
  Toaster: vi.fn(() => <div data-testid="mock-toaster" />),
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
    expectToContainClasses(themeToggleElement, ['absolute', 'right-0', 'top-0']);
  });

  it('should render main with correct classes', () => {
    render(<RootLayout />);
    const mainElement = screen.getByRole('main');

    expect(mainElement).toBeDefined();
    expectToContainClasses(mainElement, [
      'relative',
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
    ]);
  });

  it('should render Toaster component', () => {
    render(<RootLayout />);
    const toasterElement = screen.getByTestId('mock-toaster');

    expect(toasterElement).toBeDefined();
  });
});
