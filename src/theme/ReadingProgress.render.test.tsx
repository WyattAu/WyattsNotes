import { describe, expect, it } from 'vitest';

// Logic-only test: ReadingProgress render tests cannot reliably run in vitest
// because @docusaurus/ExecutionEnvironment alias resolution differs between
// local (vite 7.x with regex alias) and CI. The computation logic is fully
// covered in ReadingProgress.test.ts.
describe('ReadingProgress (module check)', () => {
  it('module exists and exports default', async () => {
    const mod = await import('./ReadingProgress');
    expect(mod.default).toBeDefined();
    expect(typeof mod.default).toBe('function');
  });
});
