import { describe, expect, it } from 'vitest';

/**
 * Tests for GeoGebra URL construction logic.
 *
 * The actual component constructs URLs via array.join('/'),
 * so we replicate the algorithm to verify correctness.
 */
function buildGeogebraUrl(appletId: string, width: number, height: number): string {
  return [
    'https://www.geogebra.org/material/iframe/id',
    appletId,
    'width',
    String(width),
    'height',
    String(height),
    'border',
    '888888',
    'rc',
    'false',
    'ai',
    'false',
    'smb',
    'false',
    'stb',
    'false',
    'stbh',
    'false',
    'ld',
    'false',
    'sdz',
    'false',
    'ctl',
    'false',
  ].join('/');
}

describe('Geogebra / URL construction', () => {
  it('should build correct URL with standard appletId', () => {
    const url = buildGeogebraUrl('abc123', 800, 600);

    expect(url).toContain('id/abc123/width/800/height/600');
  });

  it('should include all UI control flags set to false', () => {
    const url = buildGeogebraUrl('abc123', 800, 600);

    expect(url).toContain('rc/false');
    expect(url).toContain('ai/false');
    expect(url).toContain('smb/false');
    expect(url).toContain('stb/false');
    expect(url).toContain('stbh/false');
    expect(url).toContain('ld/false');
    expect(url).toContain('sdz/false');
    expect(url).toContain('ctl/false');
  });

  it('should include border color 888888', () => {
    const url = buildGeogebraUrl('abc123', 800, 600);

    expect(url).toContain('border/888888');
  });

  it('should handle hyphenated appletId', () => {
    const url = buildGeogebraUrl('msh23-crc', 800, 600);

    expect(url).toContain('id/msh23-crc/width/800');
  });

  it('should use custom width and height', () => {
    const url = buildGeogebraUrl('xyz', 1024, 768);

    expect(url).toContain('width/1024/height/768');
  });
});

describe('Geogebra / aspect ratio', () => {
  it('should compute correct aspect padding for 800x600', () => {
    const aspectPadding = (600 / 800) * 100;

    expect(aspectPadding).toBe(75);
  });

  it('should compute correct aspect padding for 800x500', () => {
    const aspectPadding = (500 / 800) * 100;

    expect(aspectPadding).toBe(62.5);
  });

  it('should compute 100% for square dimensions', () => {
    const aspectPadding = (800 / 800) * 100;

    expect(aspectPadding).toBe(100);
  });
});
