#!/usr/bin/env node
/**
 * Rendering Error Detection Script
 *
 * Crawls live Docusaurus pages and detects common rendering issues:
 * 1. Unrendered LaTeX: raw $, $$, \frac, \begin{...} visible in text
 * 2. Diamond placeholders leaked through: literal ◆LB◆ / ◆RB◆
 * 3. Unicode placeholder leaks: ⦃LB⦄ / ⦃RB⦄ / U+E000 / U+E001
 * 4. Escaped braces visible: literal \{ and \} outside code blocks
 * 5. Non-ending admonition blocks: missing closing tags
 * 6. MDX component errors: raw JSX visible
 * 7. Broken KaTeX: .katex elements with error classes
 * 8. Missing images: img elements with broken src
 * 9. Stale placeholder characters: any ◆ outside code blocks
 *
 * Usage:
 *   node scripts/audit-rendering.mjs [--base-url URL] [--pages N] [--timeout MS]
 *
 * Examples:
 *   node scripts/audit-rendering.mjs --base-url https://alevel-sciences.wyattau.com
 *   node scripts/audit-rendering.mjs --base-url https://ib.wyattau.com --pages 50
 */

import { JSDOM } from 'jsdom';

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const DEFAULT_BASE_URL = 'https://alevel-sciences.wyattau.com';
const DEFAULT_MAX_PAGES = 50;
const DEFAULT_TIMEOUT = 15000; // ms per page fetch
const DEFAULT_CONCURRENCY = 1; // Sequential to avoid OOM with JSDOM
const USER_AGENT =
  'Mozilla/5.0 (compatible; WyattsNotes-RenderingAudit/1.0; +https://github.com/WyattAu/WyattsNotes)';

// Enable global GC for memory management between pages
if (global.gc) {
  // Will be called between pages if --expose-gc is used
}

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs() {
  const args = process.argv.slice(2);
  const opts = {
    baseUrl: DEFAULT_BASE_URL,
    maxPages: DEFAULT_MAX_PAGES,
    timeout: DEFAULT_TIMEOUT,
    concurrency: DEFAULT_CONCURRENCY,
    verbose: false,
    json: false,
  };

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--base-url':
        opts.baseUrl = args[++i];
        break;
      case '--pages':
        opts.maxPages = parseInt(args[++i], 10);
        break;
      case '--timeout':
        opts.timeout = parseInt(args[++i], 10);
        break;
      case '--concurrency':
        opts.concurrency = parseInt(args[++i], 10);
        break;
      case '--verbose':
      case '-v':
        opts.verbose = true;
        break;
      case '--json':
        opts.json = true;
        break;
      case '--help':
      case '-h':
        printUsage();
        process.exit(0);
      default:
        console.error(`Unknown argument: ${args[i]}`);
        printUsage();
        process.exit(1);
    }
  }
  return opts;
}

function printUsage() {
  console.log(`
Usage: node scripts/audit-rendering.mjs [options]

Options:
  --base-url URL       Base URL to audit (default: ${DEFAULT_BASE_URL})
  --pages N            Max pages to crawl (default: ${DEFAULT_MAX_PAGES})
  --timeout MS         Fetch timeout per page in ms (default: ${DEFAULT_TIMEOUT})
  --concurrency N      Concurrent fetches (default: ${DEFAULT_CONCURRENCY})
  --verbose, -v        Show detailed output per issue
  --json               Output results as JSON
  --help, -h           Show this help

Examples:
  node scripts/audit-rendering.mjs --base-url https://alevel-sciences.wyattau.com
  node scripts/audit-rendering.mjs --base-url https://ib.wyattau.com --pages 50 --json
`);
}

// ---------------------------------------------------------------------------
// HTTP helpers
// ---------------------------------------------------------------------------

async function fetchPage(url, timeout) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      headers: { 'User-Agent': USER_AGENT },
      redirect: 'follow',
    });
    clearTimeout(timer);

    if (!res.ok) {
      return { url, status: res.status, error: `HTTP ${res.status}`, html: null };
    }

    const html = await res.text();
    return { url, status: res.status, error: null, html };
  } catch (err) {
    clearTimeout(timer);
    const msg = err.name === 'AbortError' ? `Timeout (${timeout}ms)` : err.message;
    return { url, status: 0, error: msg, html: null };
  }
}

// ---------------------------------------------------------------------------
// Page discovery (extract links from a page)
// ---------------------------------------------------------------------------

function extractLinks(html, baseUrl) {
  const links = new Set();
  try {
    const baseOrigin = new URL(baseUrl).origin;
    // Regex-based link extraction (avoids JSDOM overhead)
    const hrefRe = /<a\s+[^>]*href=["']([^"']+)["']/gi;
    let m;
    while ((m = hrefRe.exec(html)) !== null) {
      let href = m[1];
      if (!href) continue;

      try {
        href = new URL(href, baseUrl).href;
      } catch {
        continue;
      }

      if (!href.startsWith(baseOrigin)) continue;
      if (/\.(png|jpe?g|gif|svg|ico|css|js|woff2?|pdf|zip|tar)$/i.test(href)) continue;

      href = href.replace(/\/$/, '').replace(/#.*$/, '');
      if (href !== baseUrl.replace(/\/$/, '') && href.startsWith(baseOrigin)) {
        links.add(href);
      }
    }
  } catch {
    // ignore
  }
  return [...links];
}

// ---------------------------------------------------------------------------
// Detection rules
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Page analysis (single JSDOM instance per page)
// ---------------------------------------------------------------------------

function dedupIssues(issues) {
  const seen = new Set();
  return issues.filter((issue) => {
    const key = `${issue.rule}:${issue.message}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Extract visible text from article content, excluding code/pre/script/style.
 * Uses regex to strip non-visible elements, avoiding full DOM parsing for text.
 */
function extractVisibleText(html) {
  // Remove script, style, noscript blocks
  let text = html.replace(/<script[\s\S]*?<\/script>/gi, '');
  text = text.replace(/<style[\s\S]*?<\/style>/gi, '');
  text = text.replace(/<noscript[\s\S]*?<\/noscript>/gi, '');

  // Extract article content (Docusaurus wraps in <article>)
  const articleMatch = text.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) {
    text = articleMatch[1];
  }

  // Remove code blocks and inline code
  text = text.replace(/<pre[\s\S]*?<\/pre>/gi, '');
  text = text.replace(/<code[^>]*>[\s\S]*?<\/code>/gi, '');
  text = text.replace(/<kbd[^>]*>[\s\S]*?<\/kbd>/gi, '');

  // Remove KaTeX-rendered content (already processed correctly)
  text = text.replace(/<span[^>]*class="katex[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  text = text.replace(/<span[^>]*class="katex-html[^"]*"[^>]*>[\s\S]*?<\/span>/gi, '');
  // Remove entire .katex-display blocks
  text = text.replace(/<div[^>]*class="katex-display[^"]*"[^>]*>[\s\S]*?<\/div>/gi, '');
  // Remove .katex blocks (mathml + html)
  text = text.replace(/<span[^>]*class="katex[^"]*"[^>]*>[\s\S]*?<\/span>\s*(?:<\/span>)?/gi, '');

  // Strip remaining HTML tags
  text = text.replace(/<[^>]+>/g, ' ');

  // Decode common HTML entities
  text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ');

  // Collapse whitespace
  text = text.replace(/[ \t]+/g, ' ').replace(/\n\s*\n/g, '\n').trim();

  return text;
}

function analyzePage(url, html) {
  const issues = [];

  // Use regex-based text extraction (lightweight, no JSDOM)
  const visibleText = extractVisibleText(html);

  // Regex-based checks (no DOM needed)
  issues.push(...detectUnrenderedLatexRegex(url, visibleText, html));
  issues.push(...detectDiamondPlaceholdersRegex(url, visibleText));
  issues.push(...detectEscapedBracesRegex(url, visibleText));
  issues.push(...detectMdxErrorsRegex(url, visibleText));
  issues.push(...detectAdmonitionErrorsRegex(url, visibleText, html));
  issues.push(...detectTableErrorsRegex(url, visibleText));
  issues.push(...detectMermaidErrorsRegex(url, visibleText, html));

  // JSDOM-based checks (only for DOM-specific queries)
  try {
    const dom = new JSDOM(html, { url });
    const doc = dom.window.document;

    issues.push(...detectKatexErrorsDOM(url, doc));
    issues.push(...detectBrokenImagesDOM(url, doc));
    issues.push(...detectStructureIssuesDOM(url, doc));

    // Clean up JSDOM
    dom.window.close();
  } catch {
    // JSDOM parse error, skip DOM-based checks
  }

  return issues;
}

// ---------------------------------------------------------------------------
// Regex-based detection rules (lightweight, no JSDOM needed)
// ---------------------------------------------------------------------------

// 1. Unrendered LaTeX: raw dollar signs, backslash commands visible in text
function detectUnrenderedLatexRegex(url, text, html) {
  const issues = [];

  // Check for raw $$ delimiters in visible text
  const doubleDollarRe = /\$\$[^$]+?\$\$/g;
  let m;
  while ((m = doubleDollarRe.exec(text)) !== null) {
    if (/[\\{}_^]/.test(m[0])) {
      issues.push({
        rule: 'unrendered-latex',
        severity: 'critical',
        message: `Unrendered block LaTeX: "${truncate(m[0], 80)}"`,
        context: extractContext(text, m.index, 60),
      });
    }
  }

  // Check for raw $ delimiters (inline math)
  const singleDollarRe = /(?<!\$)\$(?!\$)([^$\n]+?)(?<!\$)\$(?!\$)/g;
  while ((m = singleDollarRe.exec(text)) !== null) {
    if (/[\\{}_^]/.test(m[0])) {
      issues.push({
        rule: 'unrendered-latex',
        severity: 'critical',
        message: `Unrendered inline LaTeX: "${truncate(m[0], 60)}"`,
        context: extractContext(text, m.index, 40),
      });
    }
  }

  // Check for bare LaTeX commands not inside rendered math
  const bareLatexRe = /(?:\\frac|\\begin\{|\\end\{|\\sqrt|\\sum|\\int|\\alpha|\\beta|\\gamma|\\delta|\\theta|\\pi|\\lambda|\\sigma|\\omega|\\partial|\\nabla|\\infty|\\pm|\\times|\\div|\\neq|\\leq|\\geq|\\approx|\\equiv|\\cdot|\\cdots|\\ldots|\\vec|\\hat|\\bar|\\dot|\\mathbb|\\mathbf|\\mathrm|\\text)(?![\w])/g;
  while ((m = bareLatexRe.exec(text)) !== null) {
    issues.push({
      rule: 'unrendered-latex',
      severity: 'critical',
      message: `Bare LaTeX command in text: "${m[0]}"`,
      context: extractContext(text, m.index, 40),
    });
  }

  // Check HTML for math blocks that weren't processed by KaTeX
  // KaTeX wraps rendered math in .katex elements. Raw math in MDX output
  // would appear as plain text between <p> tags
  const rawMathBlockRe = /<p[^>]*>\s*\$\$[\s\S]*?\$\$\s*<\/p>/g;
  while ((m = rawMathBlockRe.exec(html)) !== null) {
    // If the <p> does NOT contain a .katex element, the math wasn't rendered
    if (!m[0].includes('katex')) {
      issues.push({
        rule: 'unrendered-block-math',
        severity: 'critical',
        message: `Block math not rendered by KaTeX: "${truncate(m[0].replace(/<[^>]+>/g, ''), 80)}"`,
      });
    }
  }

  return issues;
}

// 2. Diamond placeholder leaks
function detectDiamondPlaceholdersRegex(url, text) {
  const issues = [];

  // Check for diamond placeholders (◆LB◆ / ◆RB◆)
  const diamondRe = /◆(?:LB|RB)◆/g;
  let m;
  while ((m = diamondRe.exec(text)) !== null) {
    issues.push({
      rule: 'diamond-placeholder',
      severity: 'critical',
      message: `Diamond placeholder leaked: "${m[0]}"`,
      context: extractContext(text, m.index, 40),
    });
  }

  // Check for bare diamond character outside rendered math
  const bareDiamondRe = /◆/g;
  while ((m = bareDiamondRe.exec(text)) !== null) {
    issues.push({
      rule: 'diamond-placeholder',
      severity: 'warning',
      message: `Bare diamond character (U+25C6) in visible text`,
      context: extractContext(text, m.index, 40),
    });
  }

  // Check for old Unicode placeholders
  const oldPlaceholderRe = /[⦃⦄]/g;
  while ((m = oldPlaceholderRe.exec(text)) !== null) {
    issues.push({
      rule: 'unicode-placeholder',
      severity: 'critical',
      message: `Old Unicode placeholder leaked: U+${m[0].codePointAt(0).toString(16)}`,
      context: extractContext(text, m.index, 40),
    });
  }

  return issues;
}

// 3. Escaped braces visible
function detectEscapedBracesRegex(url, text) {
  const issues = [];
  const escapedBraceRe = /\\[{}]/g;
  let m;
  while ((m = escapedBraceRe.exec(text)) !== null) {
    issues.push({
      rule: 'escaped-brace',
      severity: 'warning',
      message: `Escaped brace visible as literal "${m[0]}"`,
      context: extractContext(text, m.index, 40),
    });
  }
  return issues;
}

// 4. MDX component errors
function detectMdxErrorsRegex(url, text) {
  const issues = [];

  // Raw MDX component syntax
  const mdxComponentRe = /<[A-Z][a-zA-Z]+(?![\s/>])/g;
  let m;
  while ((m = mdxComponentRe.exec(text)) !== null) {
    issues.push({
      rule: 'mdx-component',
      severity: 'critical',
      message: `Raw MDX component syntax visible: "${m[0]}"`,
      context: extractContext(text, m.index, 40),
    });
  }

  // Raw import/export statements
  const importRe = /(?:^|\n)import\s+['{]/g;
  while ((m = importRe.exec(text)) !== null) {
    issues.push({
      rule: 'mdx-import',
      severity: 'critical',
      message: `Raw import statement visible`,
      context: extractContext(text, m.index, 60),
    });
  }

  const exportRe = /(?:^|\n)export\s+(?:default\s+)?(?:const|function|class|let|var)/g;
  while ((m = exportRe.exec(text)) !== null) {
    issues.push({
      rule: 'mdx-export',
      severity: 'critical',
      message: `Raw export statement visible`,
      context: extractContext(text, m.index, 60),
    });
  }

  return issues;
}

// 5. Admonition errors
function detectAdmonitionErrorsRegex(url, text, html) {
  const issues = [];

  // Raw ::: admonition syntax leaked into visible text
  const rawAdmonitionRe = /(?:^|\n):::(?:info|warning|danger|success|note|tip|caution)/gm;
  let m;
  while ((m = rawAdmonitionRe.exec(text)) !== null) {
    issues.push({
      rule: 'raw-admonition',
      severity: 'critical',
      message: `Raw admonition syntax visible: "${m[0].trim()}"`,
      context: extractContext(text, m.index, 40),
    });
  }

  // Check HTML for admonition structure issues
  const admRe = /<div[^>]*class="[^"]*admonition[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/gi;
  while ((m = admRe.exec(html)) !== null) {
    const content = m[1];
    if (!content.includes('admonition-heading') || !content.includes('admonition-content')) {
      issues.push({
        rule: 'broken-admonition',
        severity: 'warning',
        message: 'Admonition missing expected inner structure',
      });
    }
  }

  return issues;
}

// 6. Table rendering issues
function detectTableErrorsRegex(url, text) {
  const issues = [];

  // Raw markdown table syntax visible (pipe + separator row)
  const tableRe = /\|[^\n]+\|\s*\n\s*\|[-| :]+\|/g;
  let m;
  while ((m = tableRe.exec(text)) !== null) {
    issues.push({
      rule: 'unrendered-table',
      severity: 'critical',
      message: 'Raw markdown table syntax visible',
      context: truncate(m[0], 100),
    });
  }

  return issues;
}

// 7. Mermaid/interactive embed errors
function detectMermaidErrorsRegex(url, text, html) {
  const issues = [];

  // Raw mermaid diagram syntax visible
  const mermaidRe = /(?:graph|sequenceDiagram|classDiagram|stateDiagram|erDiagram|gantt|pie|flowchart)\s+(?:[A-Z]|TD|LR|RL|BT|TB)/g;
  let m;
  while ((m = mermaidRe.exec(text)) !== null) {
    issues.push({
      rule: 'unrendered-mermaid',
      severity: 'warning',
      message: `Possible unrendered Mermaid diagram: "${m[0]}"`,
      context: extractContext(text, m.index, 60),
    });
  }

  // Check for broken iframe src in HTML
  const iframeRe = /<iframe[^>]*src=["']([^"']+)["']/gi;
  while ((m = iframeRe.exec(html)) !== null) {
    if (m[1].includes('%7B') || m[1].includes('%7D') || m[1].includes('\u25C6')) {
      issues.push({
        rule: 'broken-iframe-src',
        severity: 'warning',
        message: `Iframe src contains encoded/placeholder characters`,
        context: truncate(m[1], 80),
      });
    }
  }

  return issues;
}

// ---------------------------------------------------------------------------
// DOM-based detection rules (require JSDOM, used sparingly)
// ---------------------------------------------------------------------------

// KaTeX error elements
function detectKatexErrorsDOM(url, doc) {
  const issues = [];

  const katexErrors = doc.querySelectorAll('.katex-error');
  for (const el of katexErrors) {
    issues.push({
      rule: 'katex-error',
      severity: 'critical',
      message: `KaTeX render error: "${truncate(el.textContent, 100)}"`,
      context: el.getAttribute('title') || undefined,
    });
  }

  // Check for .katex elements that have no rendered content
  const katexElements = doc.querySelectorAll('.katex');
  for (const el of katexElements) {
    if (el.textContent.trim().length === 0) {
      issues.push({
        rule: 'katex-empty',
        severity: 'warning',
        message: 'Empty KaTeX element (no rendered content)',
      });
    }
  }

  return issues;
}

// Broken images
function detectBrokenImagesDOM(url, doc) {
  const issues = [];
  const article = doc.querySelector('article') || doc.body;

  const images = article.querySelectorAll('img');
  for (const img of images) {
    const src = img.getAttribute('src') || '';
    if (src.startsWith('data:') && !src.startsWith('data:image/svg+xml')) {
      issues.push({
        rule: 'data-url-image',
        severity: 'info',
        message: `Image using data: URL (might be a placeholder)`,
        context: img.getAttribute('alt') || src.substring(0, 60),
      });
    }
    if (src === '' || src === undefined) {
      issues.push({
        rule: 'empty-image-src',
        severity: 'warning',
        message: 'Image with empty src attribute',
        context: img.getAttribute('alt') || '(no alt text)',
      });
    }
    if (/%7B|%7D|%3C|%3E|\u25C6/.test(src)) {
      issues.push({
        rule: 'broken-image-path',
        severity: 'warning',
        message: `Image src contains encoded/placeholder characters: "${truncate(src, 80)}"`,
      });
    }
  }

  return issues;
}

// Page structure issues
function detectStructureIssuesDOM(url, doc) {
  const issues = [];

  const headings = doc.querySelectorAll('article h1, article h2, article h3');
  const seen = {};
  for (const h of headings) {
    const key = `${h.tagName}:${h.textContent.trim()}`;
    if (seen[key]) {
      issues.push({
        rule: 'duplicate-heading',
        severity: 'info',
        message: `Duplicate heading: "${h.tagName} ${truncate(h.textContent.trim(), 50)}"`,
      });
    }
    seen[key] = true;
  }

  const paragraphs = doc.querySelectorAll('article p');
  for (const p of paragraphs) {
    const text = p.textContent.trim();
    if (text.length > 5000 && !text.includes('\n')) {
      issues.push({
        rule: 'long-paragraph',
        severity: 'info',
        message: `Very long paragraph (${text.length} chars) - might be missing line breaks`,
        context: truncate(text, 80),
      });
    }
  }

  for (const h of headings) {
    if (h.textContent.trim().length === 0) {
      issues.push({
        rule: 'empty-heading',
        severity: 'warning',
        message: `Empty ${h.tagName} heading`,
      });
    }
  }

  return issues;
}

// ---------------------------------------------------------------------------
// Utility functions
// ---------------------------------------------------------------------------

function truncate(str, maxLen) {
  if (str.length <= maxLen) return str;
  return str.substring(0, maxLen) + '...';
}

function extractContext(text, index, radius) {
  const start = Math.max(0, index - radius);
  const end = Math.min(text.length, index + radius);
  let ctx = text.substring(start, end).replace(/\n/g, ' ').trim();
  if (start > 0) ctx = '...' + ctx;
  if (end < text.length) ctx = ctx + '...';
  return ctx;
}

// ---------------------------------------------------------------------------
// Concurrent page fetcher
// ---------------------------------------------------------------------------

async function crawlSite(baseUrl, maxPages, timeout, concurrency) {
  const visited = new Set();
  const queue = [baseUrl.replace(/\/$/, '')];
  const results = [];

  // Deduplication of issues (same rule + same message on same page)
  function dedupIssues(issues) {
    const seen = new Set();
    return issues.filter((issue) => {
      const key = `${issue.rule}:${issue.message}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  while (queue.length > 0 && results.length < maxPages) {
    const url = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);

    const page = await fetchPage(url, timeout);
    if (!page || !page.html) {
      results.push({
        url: page?.url || url,
        status: page?.status || 0,
        error: page?.error || 'No response',
        issues: [],
      });
      if (global.gc) global.gc();
      continue;
    }

    // Extract links for further crawling (regex-based, no JSDOM)
    const links = extractLinks(page.html, baseUrl);
    for (const link of links) {
      if (!visited.has(link) && !queue.includes(link)) {
        queue.push(link);
      }
    }

    // Run all detection rules (single JSDOM instance per page)
    const allIssues = analyzePage(page.url, page.html);

    results.push({
      url: page.url,
      status: page.status,
      error: null,
      issues: dedupIssues(allIssues),
    });

    // Force GC between pages to prevent OOM
    if (global.gc) global.gc();
  }

  return results;
}

// ---------------------------------------------------------------------------
// Reporting
// ---------------------------------------------------------------------------

function printReport(results, opts) {
  const totalPages = results.length;
  const pagesWithIssues = results.filter((r) => r.issues.length > 0);
  const pagesWithErrors = results.filter((r) => r.error);
  const totalIssues = results.reduce((sum, r) => sum + r.issues.length, 0);

  // Count by severity
  const bySeverity = { critical: 0, warning: 0, info: 0 };
  const byRule = {};

  for (const r of results) {
    for (const issue of r.issues) {
      bySeverity[issue.severity]++;
      byRule[issue.rule] = (byRule[issue.rule] || 0) + 1;
    }
  }

  if (opts.json) {
    console.log(JSON.stringify({ totalPages, pagesWithIssues: pagesWithIssues.length, pagesWithErrors: pagesWithErrors.length, totalIssues, bySeverity, byRule, results }, null, 2));
    return;
  }

  console.log('='.repeat(70));
  console.log(`  RENDERING AUDIT REPORT: ${opts.baseUrl}`);
  console.log('='.repeat(70));
  console.log(`  Pages crawled:    ${totalPages}`);
  console.log(`  Pages with issues: ${pagesWithIssues.length}`);
  console.log(`  Pages with errors: ${pagesWithErrors}`);
  console.log(`  Total issues:      ${totalIssues}`);
  console.log(`  Critical:          ${bySeverity.critical}`);
  console.log(`  Warning:           ${bySeverity.warning}`);
  console.log(`  Info:              ${bySeverity.info}`);
  console.log();

  // Summary by rule
  if (Object.keys(byRule).length > 0) {
    console.log('  Issues by rule:');
    const sorted = Object.entries(byRule).sort((a, b) => b[1] - a[1]);
    for (const [rule, count] of sorted) {
      console.log(`    ${rule.padEnd(25)} ${count}`);
    }
    console.log();
  }

  // Fetch errors
  if (pagesWithErrors.length > 0) {
    console.log('  Fetch errors:');
    for (const r of pagesWithErrors) {
      console.log(`    [${r.status || 'ERR'}] ${r.url} - ${r.error}`);
    }
    console.log();
  }

  // Critical issues (always show)
  const criticalPages = results.filter((r) => r.issues.some((i) => i.severity === 'critical'));
  if (criticalPages.length > 0) {
    console.log('  CRITICAL ISSUES:');
    for (const r of criticalPages) {
      const criticalIssues = r.issues.filter((i) => i.severity === 'critical');
      console.log(`    ${r.url}`);
      for (const issue of criticalIssues) {
        console.log(`      [${issue.rule}] ${issue.message}`);
        if (issue.context && opts.verbose) {
          console.log(`        Context: ${issue.context}`);
        }
      }
    }
    console.log();
  }

  // Warning issues (show in verbose mode)
  if (opts.verbose) {
    const warningPages = results.filter((r) => r.issues.some((i) => i.severity === 'warning'));
    if (warningPages.length > 0) {
      console.log('  WARNINGS:');
      for (const r of warningPages) {
        const warningIssues = r.issues.filter((i) => i.severity === 'warning');
        console.log(`    ${r.url}`);
        for (const issue of warningIssues) {
          console.log(`      [${issue.rule}] ${issue.message}`);
          if (issue.context) {
            console.log(`        Context: ${issue.context}`);
          }
        }
      }
      console.log();
    }
  }

  // Info issues (show in verbose mode)
  if (opts.verbose) {
    const infoPages = results.filter((r) => r.issues.some((i) => i.severity === 'info'));
    if (infoPages.length > 0) {
      console.log('  INFO:');
      for (const r of infoPages) {
        const infoIssues = r.issues.filter((i) => i.severity === 'info');
        console.log(`    ${r.url}`);
        for (const issue of infoIssues) {
          console.log(`      [${issue.rule}] ${issue.message}`);
        }
      }
      console.log();
    }
  }

  // Pages with no issues
  const cleanPages = results.filter((r) => r.issues.length === 0 && !r.error);
  if (cleanPages.length > 0 && !opts.verbose) {
    console.log(`  Clean pages: ${cleanPages.length} (use --verbose to see warnings)`);
    console.log();
  }

  console.log('='.repeat(70));
  console.log(`  Exit code: ${bySeverity.critical > 0 ? 1 : 0} (${bySeverity.critical} critical issues)`);
  console.log('='.repeat(70));

  return bySeverity.critical > 0 ? 1 : 0;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const opts = parseArgs();

  console.error(`Crawling ${opts.baseUrl} (max ${opts.maxPages} pages, concurrency ${opts.concurrency})...`);

  const startTime = Date.now();
  const results = await crawlSite(opts.baseUrl, opts.maxPages, opts.timeout, opts.concurrency);
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);

  console.error(`Crawled ${results.length} pages in ${elapsed}s`);

  const exitCode = printReport(results, opts);
  process.exit(exitCode);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(2);
});
