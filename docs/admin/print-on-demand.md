# Print-on-Demand PDFs

Generate print-ready PDF study guides from WyattsNotes content.

## Popular Subjects

| Subject | Slug | Estimated Pages |
|---|---|---|
| IB Mathematics HL | `ib-mathematics-hl` | ~120 |
| IB Chemistry HL | `ib-chemistry-hl` | ~90 |
| A-Level Maths | `alevel-maths-physics` | ~100 |
| DSE Physics | `dse-physics` | ~80 |
| DSE Chemistry | `dse-chemistry` | ~75 |

## PDF Generation Process

1. **Start the dev server**:
   ```bash
   npm run serve
   ```

2. **Generate a PDF**:
   ```bash
   node scripts/generate-pdf.mjs --subject ib-mathematics-hl --output ./pdfs/ib-math-hl.pdf
   ```

   Set `PDF_BASE_URL` to target a different server:
   ```bash
   PDF_BASE_URL=https://wyattsnotes.wyattau.com node scripts/generate-pdf.mjs --subject ib-chemistry-hl
   ```

3. **Output**: The script produces a PDF with cover page, table of contents, content pages, and page numbers.

## Distribution

- **GitHub Releases**: Tagged releases include pre-generated PDFs as assets.
- **Gumroad**: Pay-what-you-want downloads for premium print-ready versions.
- **On-site**: Direct download links from each subject's landing page.

## Requirements

- Node.js >= 22
- Puppeteer (`npm install puppeteer`)
- Running Docusaurus server (for dynamic content)

## Worked Examples

### Example 1: Generating IB Math HL PDF for Production
**Problem:** Create a print-ready PDF from the live production site for IB Mathematics HL.
**Solution:**
```bash
PDF_BASE_URL=https://wyattsnotes.wyattau.com node scripts/generate-pdf.mjs --subject ib-mathematics-hl --output ./pdfs/ib-math-hl.pdf
```
The script fetches pages from the live site, renders each with Puppeteer, and assembles them into a single PDF with a cover page and table of contents.

### Example 2: Generating a Custom Subject PDF Locally
**Problem:** Generate a PDF for DSE Chemistry using your local dev server.
**Solution:** First start the server (`npm run serve`), then run:
```bash
node scripts/generate-pdf.mjs --subject dse-chemistry --output ./pdfs/dse-chem.pdf
```
The script defaults to `http://localhost:3000` when `PDF_BASE_URL` is not set.

## Common Pitfalls

- **Forgetting to start the dev server:** The PDF script needs a running Docusaurus instance to render pages. If the server is not running, all pages will be blank or fail.
- **Wrong subject slug:** The `--subject` flag must match a valid slug exactly (e.g., `ib-mathematics-hl`, not `ib-math-hl`). Check the Popular Subjects table for valid slugs.
- **Large PDFs timing out:** Subjects with many pages (e.g., IB Math HL at ~120 pages) take longer to render. Increase the Puppeteer timeout if generating large PDFs.

## Summary

Print-on-demand PDFs are generated via a Puppeteer-based script that renders Docusaurus pages into a single print-ready document. The process requires a running Docusaurus server, Node.js >= 22, and the correct subject slug. Output is distributed via GitHub Releases, Gumroad, and direct on-site downloads.
