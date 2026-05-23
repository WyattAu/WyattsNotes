import path from 'path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

const mocksDir = path.resolve(__dirname, 'src/__tests__/__mocks__');

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
      // Docusaurus module mocks (used by both test files and source files)
      {
        find: '@docusaurus/ExecutionEnvironment',
        replacement: path.join(mocksDir, 'ExecutionEnvironment.ts'),
      },
      {
        find: '@docusaurus/Link',
        replacement: path.join(mocksDir, 'docusaurus/Link.tsx'),
      },
      {
        find: '@docusaurus/useDocusaurusContext',
        replacement: path.join(mocksDir, 'docusaurus/useDocusaurusContext.ts'),
      },
      // Docusaurus theme swizzle mocks
      {
        find: '@theme-original/Layout',
        replacement: path.join(mocksDir, 'theme-original/Layout.tsx'),
      },
      {
        find: '@theme-original/DocItemFooter',
        replacement: path.join(mocksDir, 'theme-original/DocItemFooter.tsx'),
      },
      {
        find: '@theme/Layout',
        replacement: path.join(mocksDir, 'theme/Layout.tsx'),
      },
      {
        find: '@theme/Heading',
        replacement: path.join(mocksDir, 'theme/Heading.tsx'),
      },
      // Catch-all for @theme-original and @theme bare imports
      {
        find: '@theme-original',
        replacement: path.join(mocksDir, 'theme-original'),
      },
      {
        find: '@theme',
        replacement: path.join(mocksDir, 'theme'),
      },
    ],
  },
});
