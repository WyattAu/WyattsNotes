#!/usr/bin/env node
// Generate per-site social card images using ImageMagick.
// Usage: node scripts/generate-social-cards.mjs

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const WIDTH = 1200;
const HEIGHT = 630;
const BG_COLOR = '#1a1a2e';
const ACCENT_COLOR = '#e94560';
const TEXT_COLOR = '#ffffff';
const SUBTITLE_COLOR = '#aaaacc';
const LOGO = 'static/img/WyattsNotes/WyattsNotesLogo.png';
const OUT_DIR = 'static/img/social-cards';

const sites = [
  { id: 'main', title: "Wyatt's Notes", subtitle: 'Infrastructure & Tools' },
  { id: 'ib', title: "Wyatt's Notes", subtitle: 'IB Diploma' },
  { id: 'dse', title: "Wyatt's Notes", subtitle: 'HKDSE' },
  { id: 'alevel-mp', title: "Wyatt's Notes", subtitle: 'A-Level Maths & Physics' },
  { id: 'alevel-sciences', title: "Wyatt's Notes", subtitle: 'A-Level Sciences' },
  { id: 'qualifications', title: "Wyatt's Notes", subtitle: 'GCSE & AP' },
  { id: 'programming', title: "Wyatt's Notes", subtitle: 'Programming' },
  { id: 'university', title: "Wyatt's Notes", subtitle: 'University' },
  { id: 'academics', title: "Wyatt's Notes", subtitle: 'Academics' },
];

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

for (const site of sites) {
  const outFile = join(OUT_DIR, `${site.id}.png`);

  // Escape quotes for ImageMagick
  const title = site.title.replace(/'/g, "'\\''");
  const subtitle = site.subtitle.replace(/'/g, "'\\''");

  const cmd = [
    'convert',
    `-size ${WIDTH}x${HEIGHT}`,
    `xc:"${BG_COLOR}"`,
    existsSync(LOGO) ? `\\( ${LOGO} -resize 80x80 \\) -gravity NorthWest -geometry +60+60 -composite` : '',
    `-gravity NorthWest`,
    `-fill "${TEXT_COLOR}" -font DejaVu-Sans-Bold -pointsize 56 -annotate +60+170 "${title}"`,
    `-gravity NorthWest`,
    `-fill "${SUBTITLE_COLOR}" -font DejaVu-Sans -pointsize 36 -annotate +60+260 "${subtitle}"`,
    `-fill "${ACCENT_COLOR}" -draw "rectangle 60,320 320,324"`,
    `-gravity SouthWest`,
    `-fill "${SUBTITLE_COLOR}" -font DejaVu-Sans -pointsize 24 -annotate +60+50 "wyattsnotes.wyattau.com"`,
    `-quality 90`,
    outFile,
  ].join(' ');

  try {
    execSync(cmd, { stdio: 'pipe' });
    console.log(`Generated: ${outFile}`);
  } catch (err) {
    console.error(`Failed: ${site.id}: ${err.message}`);
  }
}

console.log('Done.');
