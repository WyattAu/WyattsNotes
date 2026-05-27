#!/usr/bin/env node
/**
 * Fix unclosed \mathrm{} in university math/physics files.
 *
 * The LLM-generated content consistently writes \mathrm{word without closing }.
 * After the escape-latex-braces preprocessing, these become \mathrm◆LB◆word
 * without ◆RB◆.
 *
 * This script finds unclosed \mathrm◆LB◆ and adds ◆RB◆:
 * 1. \mathrm◆LB◆word( → \mathrm◆LB◆word◆RB◆(  (close before paren)
 * 2. \mathrm◆LB◆word$ → \mathrm◆LB◆word◆RB◆$  (close before dollar)
 * 3. \mathrm◆LB◆word◆LB◆ → \mathrm◆LB◆word◆RB◆◆LB◆  (close before nested brace)
 * 4. \mathrm◆LB◆word followed by space/escaped-space → close after word
 * 5. \mathrm◆LB◆word at end of line → close after word
 *
 * Usage:
 *   node scripts/fix-unclosed-mathrm.mjs <file-or-directory> [--dry-run]
 */

import fs from 'fs';
import path from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const LBRACE = '◆LB◆';
const RBRACE = '◆RB◆';

// Commands that commonly have unclosed braces in LLM-generated content
const UNCLOSED_CMDS = new Set([
  'mathrm',
  'mathbf',
  'mathit',
  'mathsf',
  'mathtt',
  'text',
  'textrm',
  'textbf',
  'textit',
  'operatorname',
  'boldsymbol',
  'mathcal',
  'mathbb',
]);

function fixUnclosedBraces(content) {
  let fixes = 0;
  const result = [];
  let i = 0;

  while (i < content.length) {
    // Look for \cmd◆LB◆ pattern
    if (
      content[i] === '\\' &&
      i + 1 < content.length
    ) {
      // Read the command name
      let cmdEnd = i + 1;
      while (cmdEnd < content.length && /[a-zA-Z]/.test(content[cmdEnd])) {
        cmdEnd++;
      }

      const cmdName = content.substring(i + 1, cmdEnd);

      // Check if followed by ◆LB◆ (opening brace placeholder)
      if (
        cmdEnd + LBRACE.length <= content.length &&
        content.substring(cmdEnd, cmdEnd + LBRACE.length) === LBRACE &&
        UNCLOSED_CMDS.has(cmdName)
      ) {
        // We have \cmd◆LB◆ — now find where the argument should end
        const argStart = cmdEnd + LBRACE.length;

        // Read the argument: word characters, possibly with escaped spaces
        let argEnd = argStart;
        while (argEnd < content.length) {
          const ch = content[argEnd];

          // Word chars continue the argument
          if (/[a-zA-Z0-9_]/.test(ch)) {
            argEnd++;
            continue;
          }

          // Escaped space (\ ) continues the argument (multi-word like "subgroups\ of\ G")
          if (
            ch === '\\' &&
            argEnd + 1 < content.length &&
            /\s/.test(content[argEnd + 1])
          ) {
            argEnd += 2; // skip \ and the space
            continue;
          }

          // Digits after _ continue (like Syl_2)
          // Already handled by [a-zA-Z0-9_]

          // Anything else ends the argument
          break;
        }

        if (argEnd > argStart) {
          // Check if there's already a ◆RB◆ after the argument
          const afterArg = content.substring(argEnd, argEnd + RBRACE.length);
          if (afterArg === RBRACE) {
            // Already closed — don't touch
            result.push(content.substring(i, argEnd + RBRACE.length));
            i = argEnd + RBRACE.length;
            continue;
          }

          // Unclosed — insert ◆RB◆ right after the argument word.
          // The argument is always just the word(s) read above.
          // Do NOT try to find a "matching" ◆RB◆ because other ◆LB◆/◆RB◆
          // in the expression (e.g., ^{N(\sigma)}) can confuse depth tracking.
          result.push(content.substring(i, argEnd));
          result.push(RBRACE);
          fixes++;
          i = argEnd;
          continue;
        }
      }

      // Not an unclosed command — push as-is
      result.push(content.substring(i, cmdEnd));
      i = cmdEnd;
      continue;
    }

    result.push(content[i]);
    i++;
  }

  return { content: result.join(''), fixes };
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { content, fixes } = fixUnclosedBraces(raw);

  if (fixes > 0) {
    if (DRY_RUN) {
      console.log(`  [DRY-RUN] ${filePath}: ${fixes} fixes`);
    } else {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`  [FIXED] ${filePath}: ${fixes} fixes`);
    }
    return fixes;
  }
  return 0;
}

function processDirectory(dirPath) {
  let totalFixes = 0;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      totalFixes += processDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      totalFixes += processFile(fullPath);
    }
  }

  return totalFixes;
}

export { fixUnclosedBraces };

// Main (only run when executed directly)
if (process.argv[1] && import.meta.url === `file://${process.argv[1]}`) {
  const nonFlagArgs = process.argv.slice(2).filter(a => !a.startsWith('--'));
  const target = nonFlagArgs[0];
  if (!target) {
    console.error('Usage: node scripts/fix-unclosed-mathrm.mjs <file-or-directory> [--dry-run]');
    process.exit(1);
  }

  const targetPath = path.resolve(target);
  if (!fs.existsSync(targetPath)) {
    console.error(`Error: ${targetPath} does not exist`);
    process.exit(1);
  }

  console.error(`Fixing unclosed \\mathrm{} in: ${targetPath}${DRY_RUN ? ' (DRY RUN)' : ''}`);

  const stat = fs.statSync(targetPath);
  let totalFixes;
  if (stat.isDirectory()) {
    totalFixes = processDirectory(targetPath);
  } else {
    totalFixes = processFile(targetPath);
  }

  console.error(`\nTotal fixes: ${totalFixes}`);
}
