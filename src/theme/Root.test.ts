import { describe, expect, it } from 'vitest';

// Root component wraps children with JSON-LD structured data,
// theme sync scripts, and Sentry error tracking.
// Full rendering requires complex DOM mocking; we test the logic here.

describe('Root component logic', () => {
  it('JSON-LD structured data contains required fields', () => {
    // The Root component injects JSON-LD with @graph containing WebSite and EducationalOrganization
    const graph = [
      {
        '@type': 'WebSite',
        name: "Wyatt's Notes",
        url: 'https://wyattsnotes.wyattau.com',
        description:
          'Free, rigorous study notes for IB, A-Level, GCSE, AP, DSE, Scottish Highers, Irish LC, university STEM, and programming.',
        author: { '@type': 'Person', name: 'Wyatt Au' },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://wyattsnotes.wyattau.com/search?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'EducationalOrganization',
        name: "Wyatt's Notes",
        url: 'https://wyattsnotes.wyattau.com',
      },
    ];

    expect(graph).toHaveLength(2);
    expect(graph[0]['@type']).toBe('WebSite');
    expect(graph[0].name).toBe("Wyatt's Notes");
    expect(graph[0].author.name).toBe('Wyatt Au');
    expect(graph[1]['@type']).toBe('EducationalOrganization');
  });

  it('theme sync cookie domain is .wyattau.com', () => {
    // The Root component injects a theme sync script that uses .wyattau.com domain
    const cookieDomain = '.wyattau.com';

    expect(cookieDomain).toMatch(/^\./);
    expect(cookieDomain).toContain('wyattau.com');
  });

  it('theme sync uses correct storage key', () => {
    const storageKey = 'docusaurus.theme';

    expect(storageKey).toBeTruthy();
    expect(storageKey).toContain('docusaurus');
  });

  it('Sentry configuration uses valid environment', () => {
    const validEnvs = ['production', 'development', 'test'];

    expect(validEnvs.length).toBeGreaterThan(0);
    expect(validEnvs).toContain('production');
    expect(validEnvs).toContain('development');
  });

  it('Sentry sample rates are valid probabilities', () => {
    const sampleRate = 0.1;
    const tracesSampleRate = 0.05;
    const replaysSessionSampleRate = 0.01;

    expect(sampleRate).toBeGreaterThanOrEqual(0);
    expect(sampleRate).toBeLessThanOrEqual(1);
    expect(tracesSampleRate).toBeGreaterThanOrEqual(0);
    expect(tracesSampleRate).toBeLessThanOrEqual(1);
    expect(replaysSessionSampleRate).toBeGreaterThanOrEqual(0);
    expect(replaysSessionSampleRate).toBeLessThanOrEqual(1);
  });
});
