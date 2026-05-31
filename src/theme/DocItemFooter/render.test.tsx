import { describe, expect, it } from 'vitest';

// Logic-only test: DocItemFooter render tests cannot reliably run in vitest
// because @theme-original/DocItemFooter alias resolution differs between
// local (vite 7.x with regex alias) and CI. The reading-time computation
// is covered in DocItemFooter.test.ts.
describe('DocItemFooter (module check)', () => {
  it('module exists and exports default', async () => {
    const mod = await import('./index');
    expect(mod.default).toBeDefined();
    expect(typeof mod.default).toBe('function');
  });
});
