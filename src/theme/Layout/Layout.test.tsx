import { describe, expect, it } from 'vitest';

// Logic-only test: Layout is a simple wrapper around @theme-original/Layout and
// ReadingProgress. Testing the render requires Docusaurus internals that cannot
// be reliably mocked in vitest (alias resolution of @theme-original/*).
// See Root.test.ts for the same pattern.
describe('Layout (logic-only)', () => {
  it('module exists and exports default', async () => {
    const mod = await import('./index');
    expect(mod.default).toBeDefined();
    expect(typeof mod.default).toBe('function');
  });
});
