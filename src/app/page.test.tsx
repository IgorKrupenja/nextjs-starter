import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import Home from '@/app/page';

// TODO: Replace with a real tests
it.skip('should render Next.js logo', () => {
  render(<Home />);
  expect(screen.getByRole('svg')).toBeDefined();
});
