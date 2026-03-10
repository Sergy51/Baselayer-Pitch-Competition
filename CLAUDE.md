# ClearTerms Pitch Deck — Project Context

## What This Is

Sergio is building a pitch deck for Baselayer's AI Summer Venture Lab competition (10 min pitch + 5 min Q&A). The pitch proposes **ClearTerms** — a trade credit underwriting product that Baselayer could add to its existing suite. It's positioned as a product extension ("Powered by Baselayer"), not a separate startup.

## Project Structure

```
Baselayer/
├── clearterms_deck.html           # The slide deck (single self-contained HTML file)
├── ClearTerms_Pitch_Deck.pdf      # Exported PDF (15 pages, generated via export_pdf.mjs)
├── export_pdf.mjs                 # Playwright script to export deck → PDF with step captures
├── Export/                        # Individual slide PNGs (page_01.png … page_15.png)
├── Research/
│   └── market_research.md         # All sourced data points with citations
├── Work/
│   ├── implementation_plan.md     # Original implementation plan
│   ├── History artifact.html      # Interactive problem story (iframe, slide 1) — has postMessage bridge
│   ├── clearterms_slide_gap.html  # "The Gap" timeline slide (iframe, slide 2) — has postMessage bridge
│   ├── Demo artifact v2.html      # Product demo app v2 (iframe, slide 7)
│   ├── Demo artifact.html         # Product demo app v1 (superseded by v2)
│   ├── Data Layer artifact.html   # Data layer mapping (iframe, slide 8)
│   └── Solution Slide.html        # Removed from deck — HTML+CSS preserved for reference
├── Inputs/
│   ├── baselayerhq_logo.png                    # Baselayer logo (cover slide)
│   ├── Profile pic_professional.JPEG           # Sergio's headshot (Team slide)
│   ├── Profile_Picture_Gabriela.jpeg           # Gabriela's headshot (Team slide)
│   ├── MITSloanLogo_MASTER_Print.png           # MIT Sloan logo (Team slide, both members)
│   ├── McKinsey_&_Company-Logo.wine.png        # McKinsey logo (Sergio, Team slide)
│   ├── outpayce-logo.png                       # Outpayce/Amadeus logo (Sergio, Team slide)
│   ├── Boston_Consulting_Group_2020_logo.svg.png # BCG logo (Gabriela, Team slide)
│   └── ...                                     # Other reference materials
└── Brainstorming/
    └── ClearTerms_Pitch_Brief.md  # Original brief
```

## Current Slide Deck State (11 slides, 15 PDF pages)

| Slide | Label | Title | Notes |
|---|---|---|---|
| 0 | Cover | Baselayer ClearTerms | Two-column: logo on left (blue bg), title on right |
| 1 | Problem | (4-step animated story) | Iframe → `Work/History artifact.html`. 4 manual steps + auto signal sequence. PostMessage bridge for deck integration. PDF exports each step as separate page (4 pages). |
| 2 | The Gap | Creditworthiness isn't a moment — it's a trajectory | Iframe → `Work/clearterms_slide_gap.html`. 6 signal blocks centered between anchor labels, timeline animation. PostMessage bridge. PDF exports 2 pages (timeline + signals/quote). |
| 3 | Problem | B2B sellers extend trillions in credit… | 4 horizontal stat cards: ~60% credit terms, $4.5T outstanding, 2-8% bad debt, +12% insolvencies |
| 4 | ICP | We start with mid-market B2B sellers | Two-column: Financial Services (left) vs B2B Sellers (right). Footnote removed. |
| 5 | Market | Massive market, growing urgency | Waterfall blocks left, concentric TAM/SAM bubbles right |
| 6 | Why Baselayer | Baselayer's data and existing network… redefine credit decisions | 3 moat cards (Data Moat, Network, Performance) — "The Timing" removed. Cards have 2 bullets each with smart bolding. Titles 26px/700, bullets 20px. |
| 7 | Demo | (Full product demo) | Iframe → `Work/Demo artifact v2.html` (updated from v1) |
| 8 | Data Layer | Every signal in that demo runs on data Baselayer already has | Iframe → `Work/Data Layer artifact.html`. Field name tags (sos_registrations etc.) set to white font. |
| 9 | GTM | We suggest a double go-to-market approach… | 3-column layout. Removed industry detail parenthetical from Target Customer column. |
| 10 | Team | We are the team that can help you achieve this vision | Both members complete (see Team Slide Details below) |

**Solution slide was removed** from the deck. HTML+CSS preserved in `Work/Solution Slide.html`.

## Slide Deck Technical Details

- **Single HTML file**, self-contained, no build step
- **External dependencies**: Google Fonts only (Inter + JetBrains Mono)
- **Navigation**: Arrow keys, spacebar, click (left 1/3 = back, right 2/3 = forward), nav dots, Home/End
- **Branding**: Baselayer colors (`--blue: #384CE3`), light/clean aesthetic
- **Nav dot repositioning**: On `demo-slide` slides (iframes), nav dots and slide counter move to **top-right** via `.nav-top-right` CSS class, toggled in `goTo()`. This prevents the iframe from covering the navigation.
- **Iframe slides with internal navigation (postMessage bridge)**:
  - Slides 1 and 2 are listed in `INTERACTIVE_SLIDES` Set in the deck JS
  - Parent sends `'next'`, `'prev'`, `'reset'`, `'showDone'` messages to iframe
  - Iframe sends `{ action: 'next' }` or `{ action: 'prev' }` back to parent when it needs the deck to advance
  - Both `History artifact.html` and `clearterms_slide_gap.html` implement: `next()`, `prev()`, `reset()`, `showDone()` functions triggered via `window.addEventListener('message', ...)`
  - When navigating backward to an interactive slide, deck sends `'showDone'` to show completed state; forward sends `'reset'`
- **Other iframe slides** (Demo at 7, Data Layer at 8): Use `demo-slide` class but are NOT in `INTERACTIVE_SLIDES` — no postMessage needed, just static display
- **Git repo**: `https://github.com/Sergy51/Baselayer-Pitch-Competition.git`

## PDF Export

- **Script**: `export_pdf.mjs` using Playwright (chromium)
- **Dependencies**: `npm install playwright` + `npx playwright install chromium`
- **Run**: `node export_pdf.mjs`
- **Output**: `ClearTerms_Pitch_Deck.pdf` (15 pages) + individual PNGs in `Export/`
- **How it works**: Screenshots each slide at 1280×720 @2x. For interactive iframe slides, steps through each internal state via postMessage. Combines all PNGs into PDF using base64-embedded images (not file:// URLs — those break in PDF viewers). Nav dots/counter hidden during capture.
- **Re-run after any deck changes** to update the PDF

## Sergio's Formatting & Design Preferences

### Layout Rules
- **1cm margin on all 4 sides** of every slide
- All content slides have the **same structure**: slide-label (section tracker) at top, then h2 title, then p.lead subtitle (optional), then `.slide-body` for remaining content
- Cover slide is the only exception (centered layout)
- Titles and subtitles must **span the full content area width** — no `<br>` tags or `max-width` constraints
- Content must **never overflow** the bottom of the slide — use `overflow: hidden` on `.slide-body`
- Footnotes/sources sit at the bottom, pushed down via `margin-top: auto`

### Content Style
- Cards/boxes should **fill all available space** — stretch to the bottom margin
- When multiple cards are shown, they should be **equal size and evenly distributed**
- Font sizes inside cards should be **large enough to fill the space** the card provides
- Add **spacing between paragraphs** within cards for readability
- Use `icp-block-label` (mono, uppercase, small) as section headers within columns
- Column titles: mono, uppercase, blue, with a **border-bottom line** spanning the column width

### Structural Preferences
- Prefers **two-column layouts** with clear labels for each column (e.g., "Financial Services" vs "B2B Sellers")
- Also uses **three-column layouts** (e.g., GTM slide) with adjustable column ratios
- Likes cards organized in **logical groupings** rather than flat grids
- Prefers concise bullet points in lists
- Emoji icons in card headers are fine (e.g., data moat, network, performance)
- Slide labels should be short (single word or two words, not "The Problem" — just "Problem")
- For middle columns with boxes/blocks, keep them **tight around content** — don't let them stretch to fill space

### Content Preferences
- Stats should always have **footnote citations** with source
- Use `&sup1;` `&sup2;` `&sup3;` for superscript 1-3; use `<sup>4</sup>` etc. for 4+ (no `&sup4;` — it's not a valid HTML entity)
- Titles are **narrative/strategic** — not generic labels but full sentences describing the slide's argument
- Subtitles provide supporting context in one line (but some slides omit subtitles)
- Sergio edits content directly in the HTML file in his IDE — changes appear as file modifications between turns
- Prefers **smart bolding** on key phrases in bullet points for scannability

## Key Data Points (with citations)

All sourced data is in `Research/market_research.md`. Key stats used across slides:
- ~60% of US B2B sales on credit terms (Atradius 2024)
- $4.5T trade credit outstanding, 21% of GDP (Federal Reserve IFDP)
- 55% of B2B invoices paid late; 2-8% bad debt (Atradius 2024, HighRadius)
- Trade credit insurance: $11.67B → $23.73B by 2032, 9.4% CAGR (Grand View Research / Fortune BI)
- US insolvencies +12% in 2025, after 10% surge in 2024 (Allianz Trade)
- Baselayer: 120M+ businesses, 2,200+ FIs, sub-5s verification, 98% match rates, 72% less manual review

## Strategic Notes

1. ClearTerms credit score is **different from** Baselayer's existing `risk_score` (which is verification-quality — all companies score A). ClearTerms is credit-specific.
2. Positioned as **product extension**, not startup — "Powered by Baselayer."
3. Primary target: **mid-market B2B sellers** ($10M-$500M revenue) — highest pain, most underserved.
4. The "~60% of B2B sales on credit" is the clean stat. Avoid the "64%" figure (that's about DSO >100 days, different meaning).

## Team Slide Details

- **Gabriela Aldana**: Photo (`Inputs/Profile_Picture_Gabriela.jpeg`), 3 bullets:
  - 4.5 years at BCG (Financial Services, Digital Products)
  - Led launch of Chile's first digital bank, 1M users in year one
  - B2B contracting and margin optimization in U.S. retail clients
  - Logos: MIT Sloan, BCG (60px height)
- **Sergio Sanchez**: Photo (`Inputs/Profile pic_professional.JPEG`), 3 bullets:
  - Developed venture in credit management during Fall 2025
  - 2+ years in B2B payments startups (Growth & Strategy)
  - 2+ years in McKinsey (Financial Services, Venture Building)
  - Logos: MIT Sloan, McKinsey (60px height), Outpayce

## GTM Slide Details

Three-column layout (1.3fr / 0.6fr / 1.3fr, 48px gap):
1. **Target Customer**: Size, Industry (Wholesale distribution, Manufacturing, Construction materials), Buyer persona bullets (19px font)
2. **Business Model**: Two stacked blocks (dark blue subscription + light blue per-volume) with `+` sign, centered vertically
3. **GTM Motion**: Two numbered items (circled blue numbers 34px) — Direct Sales and Partnerships with sub-bullets

## Workflow

- Sergio reviews changes by **refreshing the HTML file in his browser**
- He also edits the HTML directly in his IDE — watch for file modification notifications
- When making changes, edit the existing `clearterms_deck.html` — never create a new file
- Open the file with `open clearterms_deck.html` when he needs to see it in browser
- **Git**: repo at `https://github.com/Sergy51/Baselayer-Pitch-Competition.git` — commit and push when asked
- **Embedding external artifacts**: Use iframes with `demo-slide` + `demo-iframe` classes for all complex standalone HTML. Add to `INTERACTIVE_SLIDES` Set if the iframe has internal step navigation requiring postMessage bridge.
- **PDF export**: Run `node export_pdf.mjs` after changes. Requires `playwright` npm package.
