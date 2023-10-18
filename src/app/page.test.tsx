import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import Home from '@/app/page';

it('should render Next.js logo', () => {
  render(<Home />);
  expect(screen.getByRole('img', { name: 'Next.js Logo' })).toBeDefined();
});
