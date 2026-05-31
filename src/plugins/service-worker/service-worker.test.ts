import type { LoadedPlugin } from '@docusaurus/types';
import fs from 'fs';
import path from 'path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('workbox-build', () => ({
  generateSW: vi.fn().mockResolvedValue({ count: 42, size: 3_145_728 }),
}));

vi.mock('fs', async () => {
  const actual = await vi.importActual<typeof fs>('fs');

  return {
    default: {
      ...actual,
      existsSync: vi.fn(),
      readFileSync: vi.fn(),
      writeFileSync: vi.fn(),
    },
  };
});

import { generateSW } from 'workbox-build';
import serviceWorkerPlugin from './index';

const mockWriteFileSync = vi.mocked(fs.writeFileSync);
const mockExistsSync = vi.mocked(fs.existsSync);
const mockReadFileSync = vi.mocked(fs.readFileSync);

describe('service-worker-plugin', () => {
  const context = {} as Parameters<typeof serviceWorkerPlugin>[0];

  beforeEach(() => {
    vi.clearAllMocks();
    mockExistsSync.mockReturnValue(true);
    mockReadFileSync.mockReturnValue('<html><head></head><body></body></html>');
    (generateSW as ReturnType<typeof vi.fn>).mockResolvedValue({ count: 42, size: 3_145_728 });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should export a default function', () => {
    expect(typeof serviceWorkerPlugin).toBe('function');
  });

  it('should return a plugin with the correct name', () => {
    const plugin = serviceWorkerPlugin(context, {});

    expect(plugin.name).toBe('service-worker-plugin');
  });

  it('should return a plugin with a postBuild hook', () => {
    const plugin = serviceWorkerPlugin(context, {});

    expect(typeof plugin.postBuild).toBe('function');
  });

  const minimalBuild = { outDir: '/build', baseUrl: '/' } as Parameters<
    LoadedPlugin['postBuild']
  >[0];

  it('should skip generation when enable is false', async () => {
    const plugin = serviceWorkerPlugin(context, { enable: false });

    await plugin.postBuild(minimalBuild);

    expect(generateSW).not.toHaveBeenCalled();
    expect(mockWriteFileSync).not.toHaveBeenCalled();
  });

  it('should generate SW when enable is true', async () => {
    const plugin = serviceWorkerPlugin(context, { enable: true, buildId: 'test-sw' });

    await plugin.postBuild(minimalBuild);

    expect(generateSW).toHaveBeenCalledTimes(1);
    expect(generateSW).toHaveBeenCalledWith(
      expect.objectContaining({ swDest: path.join('/build', 'sw-test-sw.js') }),
    );
  });

  it('should use default cacheId when not provided', async () => {
    const plugin = serviceWorkerPlugin(context, {});

    await plugin.postBuild(minimalBuild);

    const callArgs = (generateSW as ReturnType<typeof vi.fn>).mock.calls[0][0];

    expect(callArgs.cacheId).toBe('wyattsnotes');
  });

  it('should use custom cacheId when provided', async () => {
    const plugin = serviceWorkerPlugin(context, { cacheId: 'my-custom-cache', buildId: 'b1' });

    await plugin.postBuild(minimalBuild);

    const callArgs = (generateSW as ReturnType<typeof vi.fn>).mock.calls[0][0];

    expect(callArgs.cacheId).toBe('my-custom-cache');
    expect(callArgs.swDest).toBe(path.join('/build', 'sw-b1.js'));
  });

  it('should include cacheId in HTML cache name', async () => {
    const plugin = serviceWorkerPlugin(context, { cacheId: 'test-cache', buildId: 'b2' });

    await plugin.postBuild(minimalBuild);

    const callArgs = (generateSW as ReturnType<typeof vi.fn>).mock.calls[0][0] as Parameters<
      typeof generateSW
    >[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const htmlCaching = (callArgs as any).runtimeCaching[0];

    expect(htmlCaching.options.cacheName).toBe('test-cache-html-b2');
  });

  it('should use navigateFallback with baseUrl', async () => {
    const plugin = serviceWorkerPlugin(context, {});
    const buildWithDocsBase = { outDir: '/build', baseUrl: '/docs/' } as Parameters<
      LoadedPlugin['postBuild']
    >[0];

    await plugin.postBuild(buildWithDocsBase);

    const callArgs = (generateSW as ReturnType<typeof vi.fn>).mock.calls[0][0] as Parameters<
      typeof generateSW
    >[0];

    expect(callArgs.navigateFallback).toBe('/docs/offline.html');
  });

  it('should inject SW registration script into index.html', async () => {
    const plugin = serviceWorkerPlugin(context, { buildId: 'test-reg' });

    await plugin.postBuild(minimalBuild);

    expect(mockExistsSync).toHaveBeenCalledWith(path.join('/build', 'index.html'));
    expect(mockWriteFileSync).toHaveBeenCalledTimes(1);

    const writtenContent = mockWriteFileSync.mock.calls[0][1] as string;

    expect(writtenContent).toContain("navigator.serviceWorker.register('/sw-test-reg.js')");
    expect(writtenContent).toContain('</head>');
  });

  it('should use baseUrl in SW registration script', async () => {
    const plugin = serviceWorkerPlugin(context, { buildId: 'test-base' });
    const buildWithMySiteBase = { outDir: '/build', baseUrl: '/my-site/' } as Parameters<
      LoadedPlugin['postBuild']
    >[0];

    await plugin.postBuild(buildWithMySiteBase);

    const writtenContent = mockWriteFileSync.mock.calls[0][1] as string;

    expect(writtenContent).toContain(
      "navigator.serviceWorker.register('/my-site/sw-test-base.js')",
    );
  });

  it('should not inject script when index.html does not exist', async () => {
    mockExistsSync.mockReturnValue(false);
    const plugin = serviceWorkerPlugin(context, {});

    await plugin.postBuild(minimalBuild);

    expect(mockWriteFileSync).not.toHaveBeenCalled();
  });

  describe('buildId cache versioning', () => {
    it('should include buildId in cache names when provided', async () => {
      const plugin = serviceWorkerPlugin(context, { cacheId: 'test-cache', buildId: 'abc123' });

      await plugin.postBuild(minimalBuild);

      const callArgs = (generateSW as ReturnType<typeof vi.fn>).mock.calls[0][0];

      expect(callArgs.cacheId).toBe('test-cache');
      expect(callArgs.swDest).toBe(path.join('/build', 'sw-abc123.js'));
      const htmlCaching = callArgs.runtimeCaching[0];

      expect(htmlCaching.options.cacheName).toBe('test-cache-html-abc123');
    });

    it('should use default buildId (Date.now() string) when not provided', async () => {
      const plugin = serviceWorkerPlugin(context, { cacheId: 'test-cache' });

      await plugin.postBuild(minimalBuild);

      const callArgs = (generateSW as ReturnType<typeof vi.fn>).mock.calls[0][0];
      const swBasename = path.basename(callArgs.swDest);

      expect(swBasename).toMatch(/^sw-\d+\.js$/);
      const htmlCaching = callArgs.runtimeCaching[0];

      expect(htmlCaching.options.cacheName).toMatch(/^test-cache-html-\d+$/);
    });

    it('should include buildId in SW registration script', async () => {
      const plugin = serviceWorkerPlugin(context, { buildId: 'v42' });

      await plugin.postBuild(minimalBuild);

      const writtenContent = mockWriteFileSync.mock.calls[0][1] as string;

      expect(writtenContent).toContain("navigator.serviceWorker.register('/sw-v42.js')");
    });
  });
});

describe('static/offline.html', () => {
  it('should exist and have proper content', async () => {
    const { existsSync, readFileSync } = await vi.importActual<typeof fs>('fs');
    const projectRoot = path.resolve(__dirname, '../../..');
    const offlinePath = path.join(projectRoot, 'static/offline.html');

    expect(existsSync(offlinePath)).toBe(true);

    const content = readFileSync(offlinePath, 'utf-8');

    expect(content).toContain('<!DOCTYPE html>');
    expect(content).toContain('lang="en"');
    expect(content).toContain('viewport');
    expect(content).toContain('Offline');
    expect(content).toContain('Return to Homepage');
    expect(content).toContain('href="/"');
  });
});

describe('static/manifest.json', () => {
  it('should exist and have required PWA fields', async () => {
    const { existsSync, readFileSync } = await vi.importActual<typeof fs>('fs');
    const projectRoot = path.resolve(__dirname, '../../..');
    const manifestPath = path.join(projectRoot, 'static/manifest.json');

    expect(existsSync(manifestPath)).toBe(true);

    const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8')) as Record<string, unknown>;

    expect(manifest.name).toBe("Wyatt's Notes");
    expect(manifest.short_name).toBe('WyattsNotes');
    expect(manifest.start_url).toBe('/');
    expect(manifest.display).toBe('standalone');
    expect(Array.isArray(manifest.icons)).toBe(true);
    const icons = manifest.icons as Array<Record<string, unknown>>;

    expect(icons.length).toBeGreaterThan(0);
    expect((manifest.icons as Array<Record<string, unknown>>)[0]).toHaveProperty('src');
    expect((manifest.icons as Array<Record<string, unknown>>)[0]).toHaveProperty('sizes');
    expect((manifest.icons as Array<Record<string, unknown>>)[0]).toHaveProperty('type');
  });
});
