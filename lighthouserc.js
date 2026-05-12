module.exports = {
  ci: {
    collect: {
      startServerCommand: 'pnpm start:main',
      url: ['http://localhost:3000/'],
      numberOfRuns: 1,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['warn', { minScore: 0.9 }],
      },
    },
    budgets: [
      {
        resourceSizes: [
          {
            resourceType: 'script',
            budget: 500 * 1024,
          },
          {
            resourceType: 'stylesheet',
            budget: 100 * 1024,
          },
        ],
      },
    ],
  },
};

