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
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
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
    alias: [
      {
        find: /^@theme-original\/(.*)$/,
        replacement: path.resolve(__dirname, 'src/__tests__/__mocks__/theme-original/$1'),
      },
      {
        find: /^@theme\/(.*)$/,
        replacement: path.resolve(__dirname, 'src/__tests__/__mocks__/theme/$1'),
      },
      {
        find: '@theme-original',
        replacement: path.resolve(__dirname, 'src/__tests__/__mocks__/theme-original'),
      },
      {
        find: '@theme',
        replacement: path.resolve(__dirname, 'src/__tests__/__mocks__/theme'),
      },
      {
        find: '@docusaurus/ExecutionEnvironment',
        replacement: path.resolve(__dirname, 'src/__tests__/__mocks__/ExecutionEnvironment.ts'),
      },
      {
        find: /^@docusaurus\/Link$/,
        replacement: path.resolve(__dirname, 'src/__tests__/__mocks__/docusaurus/Link.tsx'),
      },
      {
        find: '@docusaurus/useDocusaurusContext',
        replacement: path.resolve(
          __dirname,
          'src/__tests__/__mocks__/docusaurus/useDocusaurusContext.ts',
        ),
      },
    ],
  },
});
