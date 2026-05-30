#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function parseArgs(argv) {
  const args = {};
  for (let i = 2; i < argv.length; i++) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      if (i + 1 < argv.length && !argv[i + 1].startsWith('--')) {
        args[key] = argv[++i];
      } else {
        args[key] = true;
      }
    }
  }
  return args;
}

function collectMdFiles(dir) {
  const files = [];
  const queue = [dir];
  while (queue.length > 0) {
    const current = queue.shift();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
        queue.push(full);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(full);
      }
    }
  }
  return files.sort();
}

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':');
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    fm[key] = val;
  }
  return fm;
}

function extractHeadings(content) {
  const lines = content.split('\n');
  const headings = [];
  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.+)/);
    if (match) {
      headings.push({ level: match[1].length, text: match[2].trim() });
    }
  }
  return headings;
}

function extractFirstParagraph(content) {
  const withoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = withoutFrontmatter.split('\n').filter((l) => l.trim() && !l.startsWith('#'));
  return lines.length > 0 ? lines[0].trim() : '';
}

function extractFromFile(filePath, sourceDir) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rel = path.relative(sourceDir, filePath);
  const fm = extractFrontmatter(content);
  const headings = extractHeadings(content);
  const firstParagraph = extractFirstParagraph(content);
  return {
    title: fm.title || '',
    description: fm.description || '',
    slug: fm.slug || '',
    headings,
    firstParagraph,
    wordCount: content.split(/\s+/).filter(Boolean).length,
  };
}

function doExtract(sourceDir, output) {
  const absSourceDir = path.resolve(sourceDir);
  if (!fs.existsSync(absSourceDir)) {
    console.error(`Error: source directory not found: ${absSourceDir}`);
    process.exit(1);
  }
  const files = collectMdFiles(absSourceDir);
  const translations = {};
  for (const file of files) {
    translations[path.relative(absSourceDir, file)] = extractFromFile(file, absSourceDir);
  }
  const result = { generatedAt: new Date().toISOString(), sourceDir, files: translations };
  const outPath = output || path.join(absSourceDir, 'i18n', 'extracted.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(`Extracted ${files.length} files -> ${outPath}`);
}

function doImport(sourceDir, locale, output) {
  const absSourceDir = path.resolve(sourceDir);
  const inputFile = output || path.join(absSourceDir, 'i18n', `${locale}.json`);
  if (!fs.existsSync(inputFile)) {
    console.error(`Error: translation file not found: ${inputFile}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
  const localeDir = path.join(absSourceDir, 'i18n', locale);
  let imported = 0;
  for (const [relPath, strings] of Object.entries(data.translations || data.files || {})) {
    if (!strings.title && !strings.firstParagraph) continue;
    const srcFile = path.join(absSourceDir, relPath);
    if (!fs.existsSync(srcFile)) continue;
    const original = fs.readFileSync(srcFile, 'utf-8');
    let translated = original;
    if (strings.title) {
      translated = translated.replace(/^(---\ntitle: ).*$/m, `$1'${strings.title}'`);
    }
    if (strings.description) {
      const descMatch = translated.match(/^(description:\s*)[\s\S]*?(?=\n\w)/m);
      if (descMatch) {
        translated = translated.replace(
          descMatch[0],
          descMatch[0].split('\n')[0] + ` '${strings.description}'\n`,
        );
      }
    }
    const destPath = path.join(localeDir, relPath);
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.writeFileSync(destPath, translated);
    imported++;
  }
  console.log(`Imported ${imported} files -> ${localeDir}`);
}

function doDiff(sourceDir, locale) {
  const absSourceDir = path.resolve(sourceDir);
  const extractedPath = path.join(absSourceDir, 'i18n', 'extracted.json');
  const translatedPath = path.join(absSourceDir, 'i18n', `${locale}.json`);
  if (!fs.existsSync(extractedPath)) {
    console.error('Error: run --extract first to generate extracted.json');
    process.exit(1);
  }
  const extracted = JSON.parse(fs.readFileSync(extractedPath, 'utf-8'));
  const translated = fs.existsSync(translatedPath)
    ? JSON.parse(fs.readFileSync(translatedPath, 'utf-8'))
    : {};
  const srcFiles = extracted.files || {};
  const trFiles = translated.translations || translated.files || {};
  let totalFields = 0;
  let filledFields = 0;
  const missing = [];
  const partial = [];
  for (const [file, src] of Object.entries(srcFiles)) {
    const tr = trFiles[file] || {};
    const fields = ['title', 'description', 'firstParagraph'];
    const fileTotal = fields.length;
    const fileFilled = fields.filter((f) => tr[f] && tr[f] !== src[f] && tr[f].trim()).length;
    totalFields += fileTotal;
    filledFields += fileFilled;
    if (fileFilled === 0) missing.push(file);
    else if (fileFilled < fileTotal) partial.push(file);
  }
  const pct = totalFields > 0 ? ((filledFields / totalFields) * 100).toFixed(1) : 0;
  console.log(`Translation coverage for "${locale}": ${pct}% (${filledFields}/${totalFields} fields)`);
  if (missing.length > 0) {
    console.log(`\nMissing translations (${missing.length} files):`);
    for (const f of missing) console.log(`  - ${f}`);
  }
  if (partial.length > 0) {
    console.log(`\nPartial translations (${partial.length} files):`);
    for (const f of partial) console.log(`  - ${f}`);
  }
}

function doStats(sourceDir) {
  const absSourceDir = path.resolve(sourceDir);
  const files = collectMdFiles(absSourceDir);
  let totalWords = 0;
  const locales = [];
  const i18nDir = path.join(absSourceDir, 'i18n');
  if (fs.existsSync(i18nDir)) {
    for (const entry of fs.readdirSync(i18nDir, { withFileTypes: true })) {
      if (entry.isDirectory()) locales.push(entry.name);
    }
  }
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf-8');
    totalWords += content.split(/\s+/).filter(Boolean).length;
  }
  console.log(`Source: ${absSourceDir}`);
  console.log(`Files: ${files.length}`);
  console.log(`Total words: ${totalWords}`);
  console.log(`Locales: ${locales.length > 0 ? locales.join(', ') : 'none'}`);
  for (const locale of locales) {
    const trDir = path.join(i18nDir, locale);
    const trFiles = collectMdFiles(trDir);
    let trWords = 0;
    for (const f of trFiles) trWords += fs.readFileSync(f, 'utf-8').split(/\s+/).filter(Boolean).length;
    const coverage = files.length > 0 ? (((trFiles.length / files.length) * 100).toFixed(1) + '%') : 'N/A';
    console.log(`\n  [${locale}] ${trFiles.length}/${files.length} files (${coverage})`);
    console.log(`  [${locale}] ${trWords} words`);
    const missingFiles = files.filter((f) => !trFiles.includes(path.join(trDir, path.relative(absSourceDir, f))));
    if (missingFiles.length > 0) {
      console.log(`  [${locale}] Missing (${missingFiles.length}):`);
      for (const m of missingFiles.slice(0, 10)) console.log(`    - ${path.relative(absSourceDir, m)}`);
      if (missingFiles.length > 10) console.log(`    ... and ${missingFiles.length - 10} more`);
    }
  }
}

const args = parseArgs(process.argv);
const mode = args.mode;

if (!mode || !['extract', 'import', 'diff', 'stats'].includes(mode)) {
  console.error('Usage: node translation-pipeline.mjs --mode <extract|import|diff|stats> [options]');
  console.error('  --source-dir <dir>   Source docs directory');
  console.error('  --locale <code>      Target locale code (e.g. zh)');
  console.error('  --output <file>      Output file path');
  process.exit(1);
}

const sourceDir = args['source-dir'];
if (!sourceDir && mode !== 'stats') {
  console.error('Error: --source-dir is required');
  process.exit(1);
}

switch (mode) {
  case 'extract':
    doExtract(sourceDir, args.output);
    break;
  case 'import':
    if (!args.locale) {
      console.error('Error: --locale is required for import');
      process.exit(1);
    }
    doImport(sourceDir, args.locale, args.output);
    break;
  case 'diff':
    if (!args.locale) {
      console.error('Error: --locale is required for diff');
      process.exit(1);
    }
    doDiff(sourceDir, args.locale);
    break;
  case 'stats':
    doStats(sourceDir || 'docs');
    break;
}
