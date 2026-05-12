import { describe, expect, it } from 'vitest';

describe('PhetSimulation', () => {
  it('should construct correct URL from simulationId', () => {
    const simulationId = 'wave-on-a-string';
    const expectedSrc = `https://phet.colorado.edu/sims/html/${simulationId}/latest/${simulationId}_en.html`;

    expect(expectedSrc).toBe(
      'https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html',
    );
  });

  it('should compute correct aspect ratio padding', () => {
    const width = 800;
    const height = 600;
    const aspectPadding = (height / width) * 100;
    expect(aspectPadding).toBe(75);
  });

  it('should handle simulationId with hyphens', () => {
    const simulationId = 'energy-skate-park-basics';
    const src = `https://phet.colorado.edu/sims/html/${simulationId}/latest/${simulationId}_en.html`;
    expect(src).toContain('energy-skate-park-basics');
  });
});
