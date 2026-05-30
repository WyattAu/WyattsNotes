import fs from 'node:fs';

const summaryPath = process.env.GITHUB_STEP_SUMMARY;

if (!summaryPath) {
  console.error('GITHUB_STEP_SUMMARY not set');
  process.exit(0);
}

const siteName = process.env.SITE_NAME || 'Unknown';
const deployUrl = process.env.DEPLOY_URL || 'N/A';
const buildDuration = parseFloat(process.env.BUILD_DURATION || '0');
const gitSha = process.env.GIT_SHA || 'unknown';
const trigger = process.env.TRIGGER || 'unknown';
const deployOutcome = process.env.DEPLOY_OUTCOME || 'unknown';

const durationFormatted = buildDuration > 0 ? `${buildDuration.toFixed(1)}s` : 'N/A';
const shortSha = gitSha.length > 7 ? gitSha.slice(0, 7) : gitSha;
const statusEmoji = deployOutcome === 'success' ? ':white_check_mark:' : ':x:';

const warnings = process.env.DEPLOY_WARNINGS || '';
const warningsBlock = warnings.trim()
  ? `\n### Warnings\n${warnings
      .trim()
      .split('\n')
      .map((w) => `- ${w}`)
      .join('\n')}`
  : '';

const markdown = `## Deployment Summary ${statusEmoji}

| Field | Value |
|-------|-------|
| Sub-site | ${siteName} |
| URL | [${deployUrl}](${deployUrl}) |
| Git SHA | \`${shortSha}\` |
| Trigger | ${trigger} |
| Build Duration | ${durationFormatted} |
| Status | ${deployOutcome} |
${warningsBlock}
`;

fs.appendFileSync(summaryPath, markdown);
console.log(`Deployment summary written for ${siteName}`);
