import { render } from '@testing-library/react';

import { ThemeProvider } from './theme-provider';

describe('ThemeProvider', () => {
  it('should render children', () => {
    const { getByText } = render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>,
    );

    expect(getByText('Test')).toBeDefined();
  });
});
