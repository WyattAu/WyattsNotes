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
