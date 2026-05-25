#!/usr/bin/env node
// Profile Docusaurus webpack build to identify slow loaders/plugins.
// Usage: node scripts/profile-build.mjs [config-file]
// Example: node scripts/profile-build.mjs docusaurus.config.ts

import { execSync } from 'child_process';
import { existsSync } from 'fs';

const config = process.argv[2] || 'docusaurus.config.ts';

if (!existsSync(config)) {
  console.error(`Config file not found: ${config}`);
  process.exit(1);
}

console.log(`Profiling build with config: ${config}`);
console.log('');

// Run the build with WEBPACK_PROFILE env var
const startTime = Date.now();

try {
  execSync(
    `NODE_OPTIONS="--max-old-space-size=4096" npx docusaurus build --config ${config}`,
    {
      stdio: 'inherit',
      timeout: 600000, // 10 min max
      env: {
        ...process.env,
        WEBPACK_PROFILE: '1',
        NODE_OPTIONS: '--max-old-space-size=4096',
      },
    },
  );
} catch (err) {
  // Build might still output useful timing info
}

const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(`\nBuild completed in ${elapsed}s with config ${config}`);
