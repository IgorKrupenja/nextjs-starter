import path from 'path';

import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [path.resolve(__dirname, 'src/test/setup.ts')],
    exclude: [...configDefaults.exclude, 'src/e2e'],
    coverage: {
      provider: 'v8',
      include: ['src'],
      exclude: [...(configDefaults.coverage.exclude ?? []), 'src/interfaces', 'src/components/ui'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/public': path.resolve(__dirname, './public'),
    },
  },
});
