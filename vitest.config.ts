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
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json-summary'],
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.test.{ts,tsx}',
        'src/**/__mocks__/**',
        'src/__tests__/**',
        'src/plugins/**/webpack-loader.ts',
      ],
      thresholds: {
        lines: 40,
        branches: 30,
        functions: 40,
        statements: 40,
      },
    },
  },
  resolve: {
    alias: {
      '@theme-original': path.resolve(__dirname, 'src/__tests__/__mocks__/theme-original'),
      '@theme': path.resolve(__dirname, 'src/__tests__/__mocks__/theme'),
      '@docusaurus/ExecutionEnvironment': path.resolve(
        __dirname,
        'src/__tests__/__mocks__/ExecutionEnvironment.ts',
      ),
      '@docusaurus/Link': path.resolve(__dirname, 'src/__tests__/__mocks__/docusaurus/Link.tsx'),
      '@docusaurus/useDocusaurusContext': path.resolve(
        __dirname,
        'src/__tests__/__mocks__/docusaurus/useDocusaurusContext.ts',
      ),
    },
  },
});
