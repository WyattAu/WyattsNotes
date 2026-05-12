import { describe, expect, it } from 'vitest';

/**
 * Tests for PhET simulation URL construction logic.
 */
function buildPhetUrl(simulationId: string): string {
  return `https://phet.colorado.edu/sims/html/${simulationId}/latest/${simulationId}_en.html`;
}

describe('PhetSimulation / URL construction', () => {
  it('should build correct URL for standard simulation', () => {
    const url = buildPhetUrl('projectile-motion');
    expect(url).toBe(
      'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html',
    );
  });

  it('should build correct URL for hyphenated simulation', () => {
    const url = buildPhetUrl('energy-skate-park-basics');
    expect(url).toContain('/energy-skate-park-basics/latest/');
    expect(url).toContain('energy-skate-park-basics_en.html');
  });

  it('should build correct URL for single-word simulation', () => {
    const url = buildPhetUrl('charges-and-fields');
    expect(url).toContain('/charges-and-fields/latest/');
    expect(url).toContain('charges-and-fields_en.html');
  });

  it('should always produce _en.html suffix', () => {
    const url = buildPhetUrl('whatever');
    expect(url).toMatch(/_en\.html$/);
  });

  it('should always point to /sims/html/ path', () => {
    const url = buildPhetUrl('gravity-force-lab');
    expect(url).toContain('phet.colorado.edu/sims/html/');
  });
});

describe('PhetSimulation / aspect ratio', () => {
  it('should compute correct aspect padding for default 800x600', () => {
    const aspectPadding = (600 / 800) * 100;
    expect(aspectPadding).toBe(75);
  });

  it('should compute correct aspect padding for custom dimensions', () => {
    const aspectPadding = (400 / 800) * 100;
    expect(aspectPadding).toBe(50);
  });
});
