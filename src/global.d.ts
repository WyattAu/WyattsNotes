/**
 * Global type declarations for runtime-only globals.
 *
 * These types correspond to libraries loaded via <script> tags in
 * Docusaurus headTags. They are not imported as npm dependencies
 * (no TypeScript module resolution), so we augment the Window
 * interface here.
 */

interface SentryBrowserSDK {
  init(options: {
    dsn?: string;
    environment?: string;
    sampleRate?: number;
    tracesSampleRate?: number;
    replaysSessionSampleRate?: number;
    integrations?: unknown[];
  }): void;
}

declare global {
  interface Window {
    Sentry?: SentryBrowserSDK;
    __SENTRY_DSN__?: string;
  }
}

export {};
