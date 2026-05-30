#!/usr/bin/env node

// Description quality gate for markdown files.
// By default, checks only git-changed .md files (staged + uncommitted).
// Pass "all" as argument to scan the entire docs/ tree.

import { readFile } from "node:fs/promises";
import { relative } from "node:path";
import { execSync } from "node:child_process";

const MIN_DESC_LENGTH = 20;

function getChangedFiles(baseDir) {
  try {
    // Get files staged + modified (not yet staged)
    const output = execSync(
      'git diff --name-only HEAD --diff-filter=ACMR "*.md"',
      { encoding: "utf-8", cwd: baseDir },
    );
    return output
      .split("\n")
      .map((f) => f.trim())
      .filter(Boolean);
  } catch {
    // If not in a git repo, return empty
    return [];
  }
}

async function checkFile(filepath, baseDir) {
  let content;
  try {
    content = await readFile(filepath, "utf-8");
  } catch {
    return { rel: relative(baseDir, filepath), issue: "cannot read file" };
  }

  const rel = relative(baseDir, filepath);
  const lines = content.split("\n").slice(0, 15);

  if (!lines[0]?.startsWith("---")) {
    return { rel, issue: "missing frontmatter" };
  }

  const fmEnd = lines.slice(1).findIndex((l) => l.startsWith("---"));
  if (fmEnd === -1) {
    return { rel, issue: "missing frontmatter" };
  }

  // Read more lines for multi-line descriptions (up to 30 lines for frontmatter)
  const allLines = content.split("\n").slice(0, 30);
  const fmEndAll = allLines.slice(1).findIndex((l) => l.startsWith("---"));
  if (fmEndAll === -1) {
    return { rel, issue: "missing frontmatter" };
  }

  const fmLines = allLines.slice(1, 1 + fmEndAll);
  const descIdx = fmLines.findIndex((l) => /^description\s*:/i.test(l));

  if (descIdx === -1) {
    return { rel, issue: "missing description" };
  }

  // Handle multi-line descriptions (subsequent indented lines)
  let desc = "";
  const firstLine = fmLines[descIdx];
  const firstMatch = firstLine.match(/^description\s*:\s*["']?(.*)["']?\s*$/i);
  if (firstMatch) {
    desc = firstMatch[1];
  }
  // Collect continuation lines (indented)
  for (let i = descIdx + 1; i < fmLines.length; i++) {
    const line = fmLines[i];
    if (/^\s{2,}/.test(line) || /^  /.test(line)) {
      desc += " " + line.trim();
    } else {
      break;
    }
  }

  if (desc.length < MIN_DESC_LENGTH) {
    return {
      rel,
      issue: `description too short (${desc.length} chars, min ${MIN_DESC_LENGTH})`,
    };
  }

  return null;
}

async function main() {
  const baseDir = process.cwd();
  const scanAll = process.argv[2] === "all";

  let files;
  if (scanAll) {
    // Collect all .md files from docs/
    const { readdir } = await import("node:fs/promises");
    const { join } = await import("node:path");

    async function collect(dir) {
      const entries = await readdir(dir, { withFileTypes: true });
      const result = [];
      for (const entry of entries) {
        const full = join(dir, entry.name);
        if (entry.isDirectory() && !entry.name.startsWith(".")) {
          result.push(...(await collect(full)));
        } else if (entry.isFile() && entry.name.endsWith(".md")) {
          result.push(full);
        }
      }
      return result;
    }
    files = await collect("docs/");
    console.log(`Full scan: ${files.length} .md files in docs/`);
  } else {
    const changed = getChangedFiles(baseDir);
    files = changed.filter((f) => f.startsWith("docs/") && f.endsWith(".md"));

    if (files.length === 0) {
      console.log("No changed .md files to check.");
      process.exit(0);
    }
    console.log(`Checking ${files.length} changed .md file(s)...`);
  }

  const violations = [];

  for (const file of files) {
    const result = await checkFile(file, baseDir);
    if (result) {
      violations.push(result);
    }
  }

  if (violations.length > 0) {
    console.log(`\n${violations.length} description violation(s) found:`);
    for (const v of violations) {
      console.log(`  ${v.rel}: ${v.issue}`);
    }
    process.exit(1);
  }

  console.log("All descriptions OK.");
  process.exit(0);
}

main();
