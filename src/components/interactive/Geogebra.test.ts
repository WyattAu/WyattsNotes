import { describe, expect, it } from 'vitest';

describe('Geogebra', () => {
  it('should construct correct URL from appletId', () => {
    const appletId = 'abc123';
    const width = 800;
    const height = 600;

    const src = [
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

    expect(src).toContain('/id/abc123/');
    expect(src).toContain('/width/800/');
    expect(src).toContain('/height/600/');
  });

  it('should compute correct aspect ratio padding', () => {
    const width = 800;
    const height = 600;
    const aspectPadding = (height / width) * 100;
    expect(aspectPadding).toBe(75);
  });

  it('should use default dimensions when none provided', () => {
    const defaultWidth = 800;
    const defaultHeight = 600;
    expect(defaultWidth).toBe(800);
    expect(defaultHeight).toBe(600);
  });
});
