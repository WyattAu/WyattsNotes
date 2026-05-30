# Keyboard Navigation Test Plan (2026-05-30)

Manual testing checklist for keyboard accessibility across all WyattsNotes sub-sites.

## 1. Test Environment

| Component | Options |
|-----------|---------|
| Browser | Chrome 148+, Firefox 138+, Safari 18+ |
| OS | macOS 15+, Windows 11, Ubuntu 24.04 |
| Screen Reader | NVDA (Windows), VoiceOver (macOS/iOS), Orca (Linux) |
| Keyboard | Physical keyboard required; no on-screen keyboard testing |
| Viewport | 1280×720 (desktop), 375×812 (mobile with keyboard) |

## 2. Tab Order Navigation

### 2.1 Navbar

- [ ] Tab reaches the logo/brand link first
- [ ] Tab order follows visual order: logo → nav links → theme toggle → search
- [ ] Dropdown menus (if any) open with Enter/Space and close with Escape
- [ ] Tabbing past last navbar item moves to page content (or skip link target)

### 2.2 Sidebar

- [ ] Sidebar links are reachable via Tab
- [ ] Expanded/collapsed sections toggle with Enter/Space
- [ ] Active/expanded sections have `aria-expanded` correctly set
- [ ] Tab order within sidebar follows document outline order

### 2.3 Search Modal

- [ ] Ctrl+K / Cmd+K opens the search modal
- [ ] Focus moves to search input when modal opens
- [ ] Tab cycles within modal only (focus trap active)
- [ ] Escape closes the modal and returns focus to trigger element
- [ ] Search results are navigable with arrow keys and Enter

### 2.4 Doc Content

- [ ] All in-page links receive focus
- [ ] Tab order follows visual reading order
- [ ] Code blocks with copy buttons are keyboard operable
- [ ] Admonitions/alerts with interactive elements are reachable
- [ ] Table of contents links work with Enter

### 2.5 Footer

- [ ] Footer links are reachable via Tab
- [ ] Tab order is logical (not jumping back to mid-page elements)

## 3. Interactive Component Tests

### 3.1 DesmosGraph

- [ ] Component has a visible focus indicator on mount
- [ ] Tab enters the Desmos iframe/embed boundary with clear indication
- [ ] Focus management: when component is focused, keyboard events route correctly
- [ ] Escape exits the component and returns focus to the previous element
- [ ] Screen reader announces the graph description (via aria-label or aria-describedby)

### 3.2 CircuitBuilder

- [ ] All circuit elements are keyboard-selectable (arrow keys to navigate)
- [ ] Enter/Space activates selected element
- [ ] Delete/Backspace removes selected element
- [ ] Component palette is navigable via Tab and arrow keys
- [ ] Escape exits edit mode
- [ ] State changes are announced to screen readers (aria-live regions)

### 3.3 PracticeProblem

- [ ] Arrow keys navigate between answer options (if multiple choice)
- [ ] Enter/Space submits selected answer
- [ ] Tab reaches the check/hint/reveal buttons
- [ ] Feedback messages are announced (aria-live)
- [ ] After submission, focus moves to the feedback area
- [ ] "Next question" button receives focus after answering

### 3.4 PeriodicTable

- [ ] Arrow keys navigate between elements
- [ ] Tab navigates into and out of the interactive table
- [ ] Enter/Space opens the element detail modal
- [ ] Detail modal traps focus (Tab cycles within modal)
- [ ] Escape closes the detail modal
- [ ] Screen reader announces element name and symbol on focus
- [ ] Category filtering (if keyboard-operable) responds to key input

## 4. Skip Links

- [ ] "Skip to content" link appears on first Tab press (hidden visually, visible on focus)
- [ ] Pressing Enter jumps focus past the navbar to main content
- [ ] Skip link target matches the `id` of the main content landmark (`<main id="__docusaurus_skipToContent_fallback">`)
- [ ] Multiple skip links present if sidebar exists (skip to sidebar, skip to content)

## 5. Focus Indicators

- [ ] All links show a visible focus ring on Tab (`:focus-visible`)
- [ ] All buttons show a visible focus ring
- [ ] Custom components (DesmosGraph, CircuitBuilder, etc.) show focus indicators
- [ ] Focus indicator has sufficient contrast (≥3:1 against adjacent colors)
- [ ] Focus indicator is at least 2px thick (or meets minimum area requirements)
- [ ] No `outline: none` without a replacement `:focus-visible` style
- [ ] Focus moves smoothly (no jarring jumps) between elements

## 6. Modal Behavior

### 6.1 Search Modal

- [ ] Focus is trapped within the modal while open
- [ ] Tab cycles: search input → results list → close button → back to search input
- [ ] Shift+Tab cycles in reverse
- [ ] Escape closes modal and restores focus
- [ ] Clicking outside modal closes it (focus returns to trigger)
- [ ] `aria-modal="true"` is set
- [ ] Background content has `aria-hidden="true"` while modal is open

### 6.2 PeriodicTable Detail Modal

- [ ] Same focus trap behavior as search modal
- [ ] Element details are readable by screen reader
- [ ] Close button is focused when modal opens (or first focusable element)

## 7. Form Elements

### 7.1 Search Input

- [ ] Search input is labeled (visible label or `aria-label`)
- [ ] Autocomplete/suggestions are announced as listbox
- [ ] Arrow keys navigate suggestions
- [ ] Escape closes suggestion dropdown
- [ ] Form validation errors are announced via `aria-live` or `aria-describedby`

## 8. Results Template

| ID | Test | Site(s) | Browser | Pass/Fail | Notes |
|----|------|---------|---------|-----------|-------|
| K01 | Navbar tab order | All | | | |
| K02 | Sidebar navigation | All | | | |
| K03 | Search modal (Ctrl+K) | All | | | |
| K04 | Search focus trap | All | | | |
| K05 | Search Escape close | All | | | |
| K06 | Skip-to-content link | All | | | |
| K07 | Focus indicators (links) | All | | | |
| K08 | Focus indicators (buttons) | All | | | |
| K09 | DesmosGraph focus | IB, A-Level | | | |
| K10 | DesmosGraph screen reader | IB, A-Level | | | |
| K11 | CircuitBuilder arrow keys | IB, A-Level | | | |
| K12 | CircuitBuilder Delete | IB, A-Level | | | |
| K13 | PracticeProblem arrows | All | | | |
| K14 | PracticeProblem submit | All | | | |
| K15 | PracticeProblem feedback | All | | | |
| K16 | PeriodicTable arrow keys | IB, A-Level | | | |
| K17 | PeriodicTable modal open | IB, A-Level | | | |
| K18 | PeriodicTable modal trap | IB, A-Level | | | |
| K19 | PeriodicTable Escape close | IB, A-Level | | | |
| K20 | Footer tab order | All | | | |
| K21 | Code block copy button | Programming | | | |
| K22 | Admonition interactivity | All | | | |
| K23 | TOC keyboard navigation | All | | | |

## 9. WCAG 2.4 Criteria Mapping

| WCAG Criterion | Level | Related Tests | Notes |
|----------------|-------|---------------|-------|
| 2.4.1 Bypass Blocks | A | K06 | Skip navigation mechanism |
| 2.4.2 Page Titled | A | — | Already verified via Lighthouse |
| 2.4.3 Focus Order | A | K01, K02, K20, K22, K23 | Logical tab order |
| 2.4.4 Link Purpose (in Context) | A | K01, K02, K20 | Link text is descriptive |
| 2.4.5 Multiple Ways | AA | — | Multiple navigation paths exist |
| 2.4.6 Headings and Labels | AA | K23 | TOC and heading structure |
| 2.4.7 Focus Visible | AA | K07, K08 | Visible focus indicator |
| 2.4.11 Focus Not Obscured (Minimum) | AA | K07, K08 | Focus not hidden by sticky elements |
| 3.2.1 On Focus | A | K03, K09, K16 | No change of context on focus |
| 2.1.1 Keyboard | A | All interactive tests | All functionality keyboard-operable |
| 2.1.2 No Keyboard Trap | A | K04, K18 | Can Tab away from all components |
| 2.5.7 Dragging Movements | AA | K11, K12 | CircuitBuilder drag → keyboard alt |
