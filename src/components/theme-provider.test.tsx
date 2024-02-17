import { render, screen } from '@testing-library/react';

import { ThemeProvider } from './theme-provider';

describe('ThemeProvider', () => {
  it('should render children', () => {
    render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>,
    );
    const child = screen.getByText('Test');

    expect(child).toBeDefined();
  });
});
