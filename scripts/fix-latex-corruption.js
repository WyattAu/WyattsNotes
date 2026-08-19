#!/usr/bin/env node
/**
 * Repair LaTeX corruption introduced by the Docusaurus-era MDX brace-escaping
 * migrations (see CODE_QUALITY_MATRIX.md, "Content pipeline" section).
 *
 * Damage layers reversed (in order):
 *   1. Diamond sentinels:      ◆LB◆ -> {   ◆RB◆ -> }
 *   2. Doubled brace groups:   \mathcal{{'}P{}'}} -> \mathcal{P}   (also {{"} variant)
 *   3. Stray empty groups:     \mathrm{Cov}{}     -> \mathrm{Cov}
 *   4. Asterisk subscripts:    \sup*{x} / L*s     -> \sup_{x} / L_s
 *   5. Backslash-asterisk:     x\*i               -> x_i
 *
 * Usage: node scripts/fix-latex-corruption.js <file...> [--dry-run]
 * Exits 1 if any file changed (or would change, with --dry-run).
 */
const fs = require('node:fs')

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const files = args.filter(a => !a.startsWith('--'))

if (files.length === 0) {
  console.error('usage: fix-latex-corruption.js <file...> [--dry-run]')
  process.exit(2)
}

const TRANSFORMS = [
  {
    name: 'diamond sentinels',
    regex: /◆LB◆/g,
    replace: '{',
  },
  {
    name: 'diamond sentinels',
    regex: /◆RB◆/g,
    replace: '}',
  },
  {
    name: "doubled brace group {{'}X{}'}",
    regex: /\{\{'\}([A-Za-z0-9]+)\{\}'\}/g,
    replace: '{$1}',
  },
  {
    name: 'doubled brace group {{"}X{\'} }',
    regex: /\{\{"\}([A-Za-z0-9]+)\{\}'\}/g,
    replace: '{$1}',
  },
  {
    name: 'stray empty group after complete group',
    regex: /(\\(?:mathrm|mathcal|mathbb|mathbf|mathscr|text|operatorname)\{[^{}]+\})\{\}/g,
    replace: '$1',
  },
  {
    name: 'backslash-asterisk subscript',
    regex: /([A-Za-z])\\\*([A-Za-z])/g,
    replace: '$1_$2',
  },
  {
    name: 'letter-brace asterisk subscript',
    regex: /([A-Za-z])\*\{/g,
    replace: '$1_{',
  },
  {
    name: 'letter-command asterisk subscript',
    regex: /([A-Za-z})])\*(\\[a-zA-Z]+)/g,
    replace: '$1_{$2}',
  },
  {
    name: 'letter-letter asterisk subscript',
    regex: /([A-Za-z])\*([A-Za-z])/g,
    replace: '$1_$2',
  },
]

let anyChanged = false

for (const file of files) {
  const before = fs.readFileSync(file, 'utf8')
  let after = before
  const changes = []

  for (const t of TRANSFORMS) {
    const matches = [...after.matchAll(t.regex)]
    if (matches.length > 0) {
      for (const m of matches) changes.push(`${t.name}: ${m[0]}`)
      after = after.replace(t.regex, t.replace)
    }
  }

  // Markdown emphasis is never letter*letter, so remaining single stars
  // adjacent to letters inside math are reported for manual review.
  const suspicious = [...after.matchAll(/[A-Za-z]\*[A-Za-z{\\]/g)]
  for (const m of suspicious) {
    console.warn(`WARN ${file}: possible asterisk damage remains: ${m[0]}`)
  }

  if (after !== before) {
    anyChanged = true
    if (!dryRun) fs.writeFileSync(file, after)
    console.log(`${file}: ${changes.length} fixes${dryRun ? ' (dry run)' : ''}`)
    for (const c of changes.slice(0, 10)) console.log(`  ${c}`)
    if (changes.length > 10) console.log(`  ... and ${changes.length - 10} more`)
  } else {
    console.log(`${file}: clean`)
  }
}

process.exit(anyChanged ? 1 : 0)
