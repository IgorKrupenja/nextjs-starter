import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

// todo broken with aliased paths
import Home from './page';

test('App Router: Works with Server Components', () => {
  render(<Home />);
  expect(screen.getByRole('img', { name: 'Next.js Logo' })).toBeDefined();
});
