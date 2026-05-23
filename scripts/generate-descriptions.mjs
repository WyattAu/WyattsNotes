#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const DOCS_DIR = join(PROJECT_ROOT, 'docs');

function walkDir(dir, results = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      walkDir(fullPath, results);
    } else if (entry.name.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  if (!content.startsWith('---\n') && !content.startsWith('---\r\n')) return null;
  const end = content.indexOf('\n---', 3);
  if (end === -1) return null;

  const fmStart = content.indexOf('\n') + 1;
  const fmEnd = end + 4;
  const fmText = content.slice(fmStart, end);
  const body = content.slice(fmEnd);

  return { fmText, body, fmStart, fmEnd };
}

function extractDescriptionInfo(fmText) {
  const lines = fmText.split('\n');
  let descIdx = -1;

  for (let i = 0; i < lines.length; i++) {
    if (/^description:\s*/.test(lines[i])) {
      descIdx = i;
      break;
    }
  }

  if (descIdx === -1) {
    return { found: false, isEmpty: false, startLine: -1, endLine: -1, quoteChar: "'" };
  }

  const afterColon = lines[descIdx].replace(/^description:\s*/, '');

  if (afterColon) {
    const trimmed = afterColon.trim();
    if (trimmed === "''" || trimmed === '""') {
      const quoteChar = trimmed[0];
      return { found: true, isEmpty: true, startLine: descIdx, endLine: descIdx, quoteChar };
    }
    const unquoted = trimmed.replace(/^['"]/, '').replace(/['"]$/, '');
    if (unquoted.length === 0) {
      const quoteChar = trimmed[0] === '"' ? '"' : "'";
      return { found: true, isEmpty: true, startLine: descIdx, endLine: descIdx, quoteChar };
    }
    const quoteChar = (trimmed.startsWith('"') ? '"' : "'");
    return { found: true, isEmpty: false, startLine: descIdx, endLine: descIdx, quoteChar };
  }

  let endLine = descIdx;
  for (let i = descIdx + 1; i < lines.length; i++) {
    if (/^\s{2,}/.test(lines[i]) || /^\t/.test(lines[i])) {
      endLine = i;
    } else {
      break;
    }
  }

  if (descIdx === endLine) {
    return { found: true, isEmpty: true, startLine: descIdx, endLine: descIdx, quoteChar: "'" };
  }

  let combined = '';
  for (let i = descIdx + 1; i <= endLine; i++) {
    combined += lines[i].trim();
  }
  combined = combined.replace(/^['"]/, '').replace(/['"]\s*$/, '');

  const firstIndent = lines[descIdx + 1];
  const quoteChar = firstIndent && firstIndent.trim().startsWith('"') ? '"' : "'";

  const isEmpty = combined.length === 0;
  return { found: true, isEmpty, startLine: descIdx, endLine, quoteChar };
}

function stripMarkdown(text) {
  text = text.replace(/`{3}[\s\S]*?`{3}/g, '');
  text = text.replace(/`([^`]+)`/g, '$1');
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1');
  text = text.replace(/__([^_]+)__/g, '$1');
  text = text.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '$1');
  text = text.replace(/(?<!_)_([^_]+)_(?!_)/g, '$1');
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  text = text.replace(/\$\{([^}]*)\}/g, '$1');
  text = text.replace(/\$([^$\s][^$]*?)\$/g, (_, m) => m);
  text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '$1');
  text = text.replace(/~~([^~]+)~~/g, '$1');
  return text;
}

function generateDescriptionFromBody(body) {
  const lines = body.split('\n');
  let inCodeBlock = false;
  const textParts = [];

  for (const line of lines) {
    const trimmed = line.trim();

    if (/^```/.test(trimmed) || /^~~~/.test(trimmed)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    if (trimmed === '') {
      if (textParts.length > 0) break;
      continue;
    }
    if (/^#/.test(trimmed)) continue;
    if (/^!/.test(trimmed)) continue;
    if (/^>/.test(trimmed)) continue;
    if (/^\|/.test(trimmed)) continue;
    if (/^-/.test(trimmed)) continue;
    if (/^\*/.test(trimmed)) continue;
    if (/^import\s/.test(trimmed)) continue;

    const stripped = stripMarkdown(trimmed);
    textParts.push(stripped);
  }

  if (textParts.length === 0) return null;

  let desc = textParts.join(' ').replace(/\s+/g, ' ').trim();

  if (desc.length === 0) return null;

  if (desc.length > 160) {
    let bestSentenceEnd = -1;
    for (let i = 0; i < Math.min(desc.length, 161); i++) {
      if ('.!?'.includes(desc[i])) {
        const end = i + 1;
        if (end >= 100 && end <= 160) {
          bestSentenceEnd = end;
        }
      }
    }
    if (bestSentenceEnd !== -1) {
      desc = desc.slice(0, bestSentenceEnd).trim();
    } else {
      const segment = desc.slice(0, 161);
      const lastSpace = segment.lastIndexOf(' ');
      const cutPoint = lastSpace >= 119 ? lastSpace : 160;
      desc = desc.slice(0, cutPoint).trim();
    }
  }

  if (desc && !/[.!?]$/.test(desc)) {
    desc += '.';
  }

  return desc;
}

function escapeYamlString(text, quoteChar) {
  if (quoteChar === "'") {
    return text.replace(/'/g, "''");
  }
  return text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function updateDescription(content, info, newDesc) {
  const lines = content.split('\n');
  const q = info.quoteChar;
  const escaped = escapeYamlString(newDesc, q);
  const newLine = `description: ${q}${escaped}${q}`;

  const offset = 1;
  const startIdx = info.startLine + offset;
  const removeCount = info.endLine - info.startLine;
  lines.splice(startIdx, removeCount + 1, newLine);

  return lines.join('\n');
}

function main() {
  const files = walkDir(DOCS_DIR);
  let processed = 0;
  let updated = 0;
  let skipped = 0;

  for (const filepath of files) {
    const content = readFileSync(filepath, 'utf-8');
    const fm = parseFrontmatter(content);
    if (!fm) {
      processed++;
      skipped++;
      continue;
    }

    const info = extractDescriptionInfo(fm.fmText);
    processed++;

    if (!info.found) {
      // No description field at all - add one after title line
      const newDesc = generateDescriptionFromBody(fm.body);
      if (!newDesc) {
        skipped++;
        continue;
      }

      // Find the title line and insert description after it
      const lines = content.split('\n');
      let titleIdx = -1;
      for (let i = 0; i < lines.length; i++) {
        if (/^title:/.test(lines[i])) {
          titleIdx = i;
          break;
        }
      }
      if (titleIdx === -1) {
        skipped++;
        continue;
      }

      const escaped = escapeYamlString(newDesc, "'");
      lines.splice(titleIdx + 1, 0, `description: '${escaped}'`);
      const updatedContent = lines.join('\n');
      writeFileSync(filepath, updatedContent, 'utf-8');
      updated++;
      console.log(`  Added: ${filepath} (${newDesc.length} chars)`);
      continue;
    }

    if (!info.isEmpty) {
      skipped++;
      continue;
    }

    const newDesc = generateDescriptionFromBody(fm.body);
    if (!newDesc) {
      skipped++;
      continue;
    }

    const updatedContent = updateDescription(content, info, newDesc);
    writeFileSync(filepath, updatedContent, 'utf-8');
    updated++;
    console.log(`  Updated: ${filepath} (${newDesc.length} chars)`);
  }

  console.log(`\nSummary:`);
  console.log(`  Files processed: ${processed}`);
  console.log(`  Descriptions updated: ${updated}`);
  console.log(`  Skipped: ${skipped}`);
}

main();
