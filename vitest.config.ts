import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    setupFiles: ['./src/__tests__/setup.ts'],
  },
  resolve: {
    alias: {
      '@theme-original': path.resolve(__dirname, 'src/__tests__/__mocks__/theme-original.ts'),
      '@theme': path.resolve(__dirname, 'src/__tests__/__mocks__/theme.ts'),
      '@docusaurus/ExecutionEnvironment': path.resolve(
        __dirname,
        'src/__tests__/__mocks__/ExecutionEnvironment.ts',
      ),
    },
  },
});
