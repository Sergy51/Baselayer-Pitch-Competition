# ClearTerms Pitch Deck — Project Context

## What This Is

Sergio is building a pitch deck for Baselayer's AI Summer Venture Lab competition (10 min pitch + 5 min Q&A). The pitch proposes **ClearTerms** — a trade credit underwriting product that Baselayer could add to its existing suite. It's positioned as a product extension ("Powered by Baselayer"), not a separate startup.

## Project Structure

```
Baselayer/
├── clearterms_deck.html    # The slide deck (single self-contained HTML file)
├── Research/
│   └── market_research.md  # All sourced data points with citations
├── Work/
│   └── implementation_plan.md  # Original implementation plan
├── Inputs/
│   └── Screen Shot 2026-03-08 at 21.41.34.png  # POC screenshot used in Solution slide
└── Brainstorming/
    └── ClearTerms_Pitch_Brief.md  # Original brief
```

## Current Slide Deck State (8 slides)

| # | Label | Title | Status |
|---|---|---|---|
| 0 | Cover | ClearTerms | Done |
| 1 | Problem | B2B sellers extend trillions in credit with no visibility into buyer health | Done — two-column layout: stats left, high-risk industries right |
| 2 | ICP | We start with mid-market B2B sellers | Done — two-column: Financial Services (left) vs B2B Sellers (right) |
| 3 | Market | Massive market, growing urgency | Done — TAM funnel left, CAGR + insolvency stats right |
| 4 | Solution | Optimized B2B credit decisions powered by Baselayer AI risk platform | Done — 2/3 content cards + 1/3 POC screenshot |
| 5 | Why Baselayer | Baselayer's data and existing network... redefine credit decisions | Done — 4 equal cards in a row (Data Moat, Network, Performance, Timing) |
| 6 | GTM | Expand into B2B sellers... battle-tested business model | Done — 1/3 target+pricing, 2/3 GTM approaches |
| 7 | Team | Built to ship this | Placeholder — team members TBD |

## Slide Deck Technical Details

- **Single HTML file**, self-contained, no build step
- **External dependencies**: Google Fonts only (Inter + JetBrains Mono)
- **Navigation**: Arrow keys, spacebar, click (left 1/3 = back, right 2/3 = forward), nav dots, Home/End
- **Print CSS**: Each slide = one page for PDF export
- **Branding**: Baselayer colors (`--blue: #384CE3`), light/clean aesthetic

## Sergio's Formatting & Design Preferences

### Layout Rules
- **1cm margin on all 4 sides** of every slide
- All content slides have the **same structure**: slide-label (section tracker) at top, then h2 title, then p.lead subtitle, then `.slide-body` for remaining content
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

### Structural Preferences
- Prefers **two-column layouts** with clear labels for each column (e.g., "Financial Services" vs "B2B Sellers")
- Likes cards organized in **logical groupings** rather than flat grids
- Prefers concise bullet points in lists
- Emoji icons in card headers are fine (e.g., data moat, network, timing)
- Slide labels should be short (single word or two words, not "The Problem" — just "Problem")

### Content Preferences
- Stats should always have **footnote citations** with source
- Use `&sup1;` `&sup2;` `&sup3;` for superscript 1-3; use `<sup>4</sup>` etc. for 4+ (no `&sup4;` — it's not a valid HTML entity)
- Titles are **narrative/strategic** — not generic labels but full sentences describing the slide's argument
- Subtitles provide supporting context in one line
- Sergio edits content directly in the HTML file in his IDE — changes appear as file modifications between turns

## Key Data Points (with citations)

All sourced data is in `Research/market_research.md`. Key stats used across slides:
- ~60% of US B2B sales on credit terms (Atradius 2024)
- $4.5T trade credit outstanding, 21% of GDP (Federal Reserve IFDP)
- 55% of B2B invoices paid late; 8-9% bad debt (Atradius 2024)
- Trade credit insurance: $11.67B → $23.73B by 2032, 9.4% CAGR (Grand View Research / Fortune BI)
- US insolvencies +12% in 2025 (Allianz Trade)
- Baselayer: 120M+ businesses, 2,200+ FIs, sub-5s verification, 98% match rates, 72% less manual review

## Strategic Notes

1. ClearTerms credit score is **different from** Baselayer's existing `risk_score` (which is verification-quality — all companies score A). ClearTerms is credit-specific.
2. Positioned as **product extension**, not startup — "Powered by Baselayer."
3. Primary target: **mid-market B2B sellers** ($10M-$500M revenue) — highest pain, most underserved.
4. The "~60% of B2B sales on credit" is the clean stat. Avoid the "64%" figure (that's about DSO >100 days, different meaning).

## Workflow

- Sergio reviews changes by **refreshing the HTML file in his browser**
- He also edits the HTML directly in his IDE — watch for file modification notifications
- When making changes, edit the existing `clearterms_deck.html` — never create a new file
- Open the file with `open clearterms_deck.html` when he needs to see it in browser
