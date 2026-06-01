# Print-on-Demand PDFs

Generate print-ready PDF study guides from WyattsNotes content.

## Popular Subjects

| Subject           | Slug                   | Estimated Pages |
| ----------------- | ---------------------- | --------------- |
| IB Mathematics HL | `ib-mathematics-hl`    | ~120            |
| IB Chemistry HL   | `ib-chemistry-hl`      | ~90             |
| A-Level Maths     | `alevel-maths-physics` | ~100            |
| DSE Physics       | `dse-physics`          | ~80             |
| DSE Chemistry     | `dse-chemistry`        | ~75             |

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

3. **Output**: The script produces a PDF with cover page, table of contents, content pages, and page
   numbers.

## Distribution

- **GitHub Releases**: Tagged releases include pre-generated PDFs as assets.
- **Gumroad**: Pay-what-you-want downloads for premium print-ready versions.
- **On-site**: Direct download links from each subject's landing page.

## Print-on-Demand Service Comparison

| Feature           | IngramSpark                                              | KDP (Amazon)                               | Lulu                                     |
| ----------------- | -------------------------------------------------------- | ------------------------------------------ | ---------------------------------------- |
| Setup cost        | $49 (waived with promo)                                  | Free                                       | Free                                     |
| ISBN provision    | Free (Ingram) or bring your own                          | Free (KDP-assigned)                        | Free (Lulu) or bring your own            |
| Distribution      | Ingram retail network, bookstores, libraries             | Amazon only (unless expanded distribution) | Lulu bookstore, Amazon, Barnes and Noble |
| Print quality     | High (offset-quality printing)                           | Adequate                                   | Adequate                                 |
| Royalty structure | Variable (list price minus print cost and dist discount) | 60% of list price (minus print cost)       | 80% author revenue (minus print cost)    |
| Cover upload      | PDF with bleed                                           | PDF with bleed                             | PDF with bleed                           |
| Interior upload   | PDF (flowable or fixed)                                  | PDF (re-flowable or fixed)                 | PDF (fixed layout)                       |
| Proof copy        | Ordered and shipped before listing goes live             | Digital proof or ordered proof             | Digital proof or ordered proof           |
| Time to market    | 4-6 weeks (after proof approval)                         | 3-5 business days (after proof approval)   | 3-7 business days                        |

### When to Use Each Service

- **IngramSpark**: Use when you need bookstore and library distribution. Ingram's network reaches
  physical bookstores and libraries that Amazon alone cannot. The trade-off is higher setup
  complexity and a per-title fee.
- **KDP**: Use for maximum Amazon reach and fastest time to market. The zero setup cost and direct
  Amazon integration make it the default choice for most self-published titles.
- **Lulu**: Use for niche titles where you want control over pricing and a simple upload process.
  Lulu's author revenue share is the highest of the three, but distribution reach is narrower.

A common strategy is to publish on KDP for Amazon sales and IngramSpark for non-Amazon retail
distribution, ensuring the ISBN matches across both platforms.

## ISBN Assignment

Each ISBN uniquely identifies an edition and format of a book. Rules:

- One ISBN per format (paperback, hardcover, ebook each need separate ISBNs).
- If you use a free publisher-assigned ISBN (from KDP or Lulu), the publisher of record is that
  platform, not you. This limits your ability to distribute the same edition through other channels.
- Purchasing your own ISBN through your national ISBN agency (e.g., Bowker in the US, Nielsen in the
  UK) gives you full control. You can then use the same ISBN across multiple print-on-demand
  platforms.
- Register the ISBN in relevant bibliographic databases (Books in Print, Nielsen BookData) so
  retailers and libraries can discover the title.

## Cover Design Specifications

Regardless of the service, covers must meet these technical requirements:

- **Bleed**: Add 3mm (0.125 inches) of bleed on all sides. Critical content (title, author name)
  must be at least 5mm inside the trim line to avoid being cut off.
- **Colour mode**: CMYK, not RGB. RGB colours will shift unpredictably when converted to print.
  Design in CMYK from the start or convert and proof carefully.
- **Resolution**: 300 DPI minimum. Lower resolution produces visible pixelation in print.
- **Spine width**: Calculated by the service based on page count and paper type. The cover template
  ( downloadable from each service's dashboard) includes the correct spine width. Do not estimate
  it.
- **File format**: PDF/X-1a:2001 is the safest choice for consistent rendering across services.

## Interior Formatting

- **Fonts**: Use serif fonts (Garamond, Minion Pro, Caslon) for body text and sans-serif (Helvetica,
  Myriad) for headings. Avoid decorative fonts. Ensure fonts are embedded in the PDF.
- **Body text size**: 10-11pt for most trade paperback sizes (5.5 x 8.5 inches or 6 x 9 inches).
  Larger page sizes can accommodate 11-12pt.
- **Margins**: Minimum 15mm (0.6 inches) on all sides. The inner (gutter) margin should be wider for
  page counts above 200 to account for spine curvature -- use 20mm gutter for thick books.
- **Page numbering**: Front matter (title page, table of contents, preface) uses Roman numerals (i,
  ii, iii). Body text uses Arabic numerals starting from 1. Page numbers appear centred in the
  footer.
- **Paragraph spacing**: Use first-line indentation (5mm) rather than extra spacing between
  paragraphs for fiction-style content. For reference material (like study guides), use block
  paragraphs with 6pt spacing between them.
- **Image resolution**: All diagrams and figures must be at least 300 DPI. Vector graphics (SVG
  exported to PDF) are preferred for charts and diagrams because they scale without loss.

## Royalty Structures

Royalties are calculated differently across services:

- **KDP**: Royalty = (60% of list price) - (per-page print cost) - (fixed charge). Print cost varies
  by page count, page size, and colour (black-and-white interior vs. full colour).
- **IngramSpark**: Royalty = (list price) - (wholesale discount, typically 40-55%) - (print cost).
  The wholesale discount is configurable but affects whether retailers will stock the book.
- **Lulu**: Revenue = (list price) - (print cost). Lulu takes no additional percentage on direct
  sales through the Lulu bookstore. For distribution to Amazon and other retailers, Lulu applies a
  distribution fee.

For a 120-page black-and-white 6x9 paperback priced at $15:

- KDP royalty is approximately $3.50-$4.00 after print costs.
- IngramSpark royalty is approximately $2.00-$3.00 (depending on wholesale discount setting).
- Lulu direct revenue is approximately $6.00-$7.00.

## Marketing Considerations

- **Amazon listing optimisation**: Use the book description, author page, and categories to maximise
  discoverability. Include keywords in the subtitle.
- **ISBN registration**: Register with Books in Print and Nielsen BookData so library systems and
  bookstore databases index the title.
- **Review copies**: Order author copies at print cost and distribute to subject-specific reviewers,
  IB coordinators, and education bloggers.
- **Bundle strategy**: Offer the PDF freely on WyattsNotes and sell the print copy as a convenience
  product. This drives traffic to the site while monetising the format that has production cost.

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

The script fetches pages from the live site, renders each with Puppeteer, and assembles them into a
single PDF with a cover page and table of contents.

### Example 2: Generating a Custom Subject PDF Locally

**Problem:** Generate a PDF for DSE Chemistry using your local dev server. **Solution:** First start
the server (`npm run serve`), then run:

```bash
node scripts/generate-pdf.mjs --subject dse-chemistry --output ./pdfs/dse-chem.pdf
```

The script defaults to `http://localhost:3000` when `PDF_BASE_URL` is not set.

## Common Pitfalls

- **Forgetting to start the dev server:** The PDF script needs a running Docusaurus instance to
  render pages. If the server is not running, all pages will be blank or fail.
- **Wrong subject slug:** The `--subject` flag must match a valid slug exactly (e.g.,
  `ib-mathematics-hl`, not `ib-math-hl`). Check the Popular Subjects table for valid slugs.
- **Large PDFs timing out:** Subjects with many pages (e.g., IB Math HL at ~120 pages) take longer
  to render. Increase the Puppeteer timeout if generating large PDFs.

## Summary

Print-on-demand PDFs are generated via a Puppeteer-based script that renders Docusaurus pages into a
single print-ready document. The process requires a running Docusaurus server, Node.js >= 22, and
the correct subject slug. Output is distributed via GitHub Releases, Gumroad, and direct on-site
downloads.
