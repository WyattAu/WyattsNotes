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
    setupFiles: ['./vitest.docusaurus-mocks.ts', './src/__tests__/setup.ts'],
    css: {
      modules: {
        classNameStrategy: 'non-scoped',
      },
    },
    alias: [
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
      {
        find: /^@theme-original\/(.*)/,
        replacement: path.join(mocksDir, 'theme-original/$1'),
      },
      {
        find: /^@theme\/(.*)/,
        replacement: path.join(mocksDir, 'theme/$1'),
      },
    ],
    deps: {
      interopDefault: true,
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
});
