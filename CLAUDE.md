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
│   ├── implementation_plan.md   # Original implementation plan
│   ├── History artifact.html    # Interactive problem story (embedded as slide 1)
│   ├── Demo artifact.html       # Product demo app (embedded as slide 7 via iframe)
│   └── Data Layer artifact.html # Data layer mapping slide (embedded as slide 8 via iframe)
├── Inputs/
│   ├── baselayerhq_logo.png                    # Baselayer logo (used in cover slide)
│   ├── Profile pic_professional.JPEG           # Sergio's headshot (used in Team slide)
│   ├── MITSloanLogo_MASTER_Print.png           # MIT Sloan logo (Team slide)
│   ├── McKinsey_&_Company-Logo.wine.png        # McKinsey logo (Team slide)
│   ├── outpayce-logo.png                       # Outpayce/Amadeus logo (Team slide)
│   ├── Screen Shot 2026-03-08 at 21.41.34.png  # POC screenshot (Solution slide)
│   └── ...                                     # Other reference materials
└── Brainstorming/
    └── ClearTerms_Pitch_Brief.md  # Original brief
```

## Current Slide Deck State (11 slides)

| # | Label | Title | Status |
|---|---|---|---|
| 0 | Cover | Baselayer ClearTerms | Done — two-column: logo on left (blue bg), title on right |
| 1 | Interactive Story | (4-step animated problem narrative) | Done — embedded standalone HTML with internal navigation |
| 2 | Problem | (3 stat cards) | Done — horizontal stat cards with data points |
| 3 | ICP | We start with mid-market B2B sellers | Done — two-column: Financial Services (left) vs B2B Sellers (right) |
| 4 | Market | Massive market, growing urgency | Done — waterfall blocks left, concentric TAM/SAM bubbles right |
| 5 | Why Baselayer | Baselayer's data and existing network... redefine credit decisions | Done — 4 equal moat cards in a row |
| 6 | Solution | Optimized B2B credit decisions powered by Baselayer AI risk platform | Done — "What we build" card left + 3 benefit cards right |
| 7 | Demo | (Full product demo) | Done — iframe embedding `Work/Demo artifact.html` |
| 8 | Data Layer | Every signal in that demo runs on data Baselayer already has | Done — iframe embedding `Work/Data Layer artifact.html` |
| 9 | GTM | We suggest a double go-to-market approach... | Done — 3-column layout: Target Customer, Business Model, GTM Motion |
| 10 | Team | We are the team that can help you achieve this vision | Done — Sergio complete, Gabriela placeholder |

## Slide Deck Technical Details

- **Single HTML file**, self-contained, no build step
- **External dependencies**: Google Fonts only (Inter + JetBrains Mono)
- **Navigation**: Arrow keys, spacebar, click (left 1/3 = back, right 2/3 = forward), nav dots, Home/End
- **Print CSS**: Each slide = one page for PDF export
- **Branding**: Baselayer colors (`--blue: #384CE3`), light/clean aesthetic
- **Iframe slides**: Demo (slide 7) and Data Layer (slide 8) use `<iframe>` with class `demo-iframe` and `demo-slide` on the parent — this preserves all original functionality without CSS/JS conflicts
- **Interactive slide (slide 1)**: Embedded inline with CSS scoped under `.slide.interactive` and `is-` prefixed classes; has internal step navigation that integrates with deck's `next()`/`prev()`
- **Git repo**: Initialized and pushed to `https://github.com/Sergy51/Baselayer-Pitch-Competition.git`

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
- Emoji icons in card headers are fine (e.g., data moat, network, timing)
- Slide labels should be short (single word or two words, not "The Problem" — just "Problem")
- For middle columns with boxes/blocks, keep them **tight around content** — don't let them stretch to fill space

### Content Preferences
- Stats should always have **footnote citations** with source
- Use `&sup1;` `&sup2;` `&sup3;` for superscript 1-3; use `<sup>4</sup>` etc. for 4+ (no `&sup4;` — it's not a valid HTML entity)
- Titles are **narrative/strategic** — not generic labels but full sentences describing the slide's argument
- Subtitles provide supporting context in one line (but some slides omit subtitles)
- Sergio edits content directly in the HTML file in his IDE — changes appear as file modifications between turns

## Key Data Points (with citations)

All sourced data is in `Research/market_research.md`. Key stats used across slides:
- ~60% of US B2B sales on credit terms (Atradius 2024)
- $4.5T trade credit outstanding, 21% of GDP (Federal Reserve IFDP)
- 55% of B2B invoices paid late; 2-8% bad debt (Atradius 2024, HighRadius)
- Trade credit insurance: $11.67B → $23.73B by 2032, 9.4% CAGR (Grand View Research / Fortune BI)
- US insolvencies +12% in 2025 (Allianz Trade)
- Baselayer: 120M+ businesses, 2,200+ FIs, sub-5s verification, 98% match rates, 72% less manual review

## Strategic Notes

1. ClearTerms credit score is **different from** Baselayer's existing `risk_score` (which is verification-quality — all companies score A). ClearTerms is credit-specific.
2. Positioned as **product extension**, not startup — "Powered by Baselayer."
3. Primary target: **mid-market B2B sellers** ($10M-$500M revenue) — highest pain, most underserved.
4. The "~60% of B2B sales on credit" is the clean stat. Avoid the "64%" figure (that's about DSO >100 days, different meaning).

## Team Slide Details

- **Sergio Sanchez**: Photo (`Inputs/Profile pic_professional.JPEG`), 3 bullets:
  - Developed venture in credit management during Fall 2025
  - 2+ years in B2B payments startups (Growth & Strategy)
  - 2+ years in McKinsey (Financial Services, Venture Building)
  - Logos: MIT Sloan, McKinsey (60px height), Outpayce
- **Gabriela Aldana**: Placeholder photo, placeholder bullets, placeholder logos — TBD

## GTM Slide Details

Three-column layout (1.3fr / 0.6fr / 1.3fr, 48px gap):
1. **Target Customer**: Size, Industry, Buyer persona bullets (19px font)
2. **Business Model**: Two stacked blocks (dark blue subscription + light blue per-volume) with `+` sign, centered vertically
3. **GTM Motion**: Two numbered items (circled blue numbers 34px) — Direct Sales and Partnerships with sub-bullets

## Workflow

- Sergio reviews changes by **refreshing the HTML file in his browser**
- He also edits the HTML directly in his IDE — watch for file modification notifications
- When making changes, edit the existing `clearterms_deck.html` — never create a new file
- Open the file with `open clearterms_deck.html` when he needs to see it in browser
- **Git**: repo at `https://github.com/Sergy51/Baselayer-Pitch-Competition.git` — commit and push when asked
- **Embedding external artifacts**: Use iframes for complex standalone HTML apps (like Demo and Data Layer) to avoid CSS/JS conflicts; use inline embedding with scoped CSS for simpler content (like the interactive story slide)
