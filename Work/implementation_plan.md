# ClearTerms Pitch Deck — Implementation Plan

## Context

Sergio is competing in Baselayer's AI Summer Venture Lab pitch competition (10 min pitch + 5 min Q&A). He's proposing **ClearTerms** — a trade credit underwriting product that Baselayer could add to its existing suite. The deliverable is an HTML slide deck that can be iterated quickly, styled to match Baselayer's brand, with cited data points.

---

## Step 0: Save This Plan

Write this plan as a markdown file at `Work/implementation_plan.md` so it persists and can be referenced during execution.

## Step 1: Research Report

Before building slides, compile a standalone research document at `Research/market_research.md` with all sourced data points organized by slide need. This ensures every number on every slide has a traceable citation. Key sources identified:

| Data Point | Value | Source |
|---|---|---|
| % B2B sales on credit | ~60% | Atradius 2024, Nickel |
| US trade credit outstanding | $4.5T (21% of GDP) | Federal Reserve IFDP |
| B2B invoices paid late (US) | 55% past due | Atradius 2024 |
| Average bad debt rate | 8-9% of credit sales | Atradius 2024 |
| Trade credit insurance market | $11.67B (2024) → $23.73B (2032) | Grand View Research / Fortune BI |
| US B2B payments market | ~$35T | eMarketer |
| Global insolvency surge | +10% in 2024, +12% US in 2025 | Allianz Trade |
| Median DSO | 56 days | Upflow 2024 |
| Top-risk sectors | Construction, Wholesale/Distribution, Manufacturing, Chemicals | Atradius, Allianz Trade |

**Note:** The "64%" claim needs refinement. Atradius says 64% of companies experienced extended payment delays (DSO >100 days), not that 64% of sales are on credit. The cleaner stat is "~60% of US B2B sales are on credit terms" or use both figures for different points.

---

## Step 2: Slide Structure & Content

**Slide order:** Cover → Problem → ICP → Market → Solution → Why Baselayer → GTM → Team

**Format:** Full-screen presentation (16:9, arrow-key navigation) + print-friendly CSS for PDF export

### Slide 0 — Cover
- Logo placeholder
- Title: "ClearTerms: Trade Credit Intelligence"
- Subtitle: "A new product for the Baselayer platform"

### Slide 1 — The Problem
- ~60% of US B2B sales on credit terms
- $4.5T trade credit outstanding (21% of GDP)
- 55% invoices paid late; 8-9% become bad debt
- Current tools verify identity but not financial health

### Slide 2 — Ideal Customer Profile
- B2B Lenders (already Baselayer's core)
- Trade Credit Insurers (later)
- Enterprise B2B sellers (later)
- **Mid-market B2B sellers** ($10M-$500M) — PRIMARY
- SMB B2B sellers (not now)

### Slide 3 — The Market
- TAM waterfall: $35T → $21T → $12T → $3-5T
- Trade credit insurance market: $11.67B → $23.73B (9.4% CAGR)

### Slide 4 — The Solution
- Real-time creditworthiness scoring
- 0-100 credit risk score with A/B/C/F rating
- Three benefits: Better Economics, Expanded TAM, Lower OpEx
- Live demo placeholder

### Slide 5 — Why Baselayer
- Data moat, network, infrastructure, customer base, timing

### Slide 6 — Go-to-Market
- Target: Mid-market B2B sellers
- Direct sales + partnership sales
- Tiered pricing model

### Slide 7 — Team
- Placeholder

---

## Step 3: Branding

- Primary: `#384CE3` (blue)
- Secondary: Teal, Forest Green, Sky Blue
- Typography: Inter + JetBrains Mono (web-safe fallbacks)
- Aesthetic: Light mode, clean/minimal, enterprise-grade

## Step 4: Build Order

1. Research document
2. HTML slide deck (scaffold → slides → charts → navigation)
3. Review and iterate

## Strategic Notes

1. ClearTerms credit score ≠ existing verification risk_score
2. Position as product extension, not startup
3. Use "~60% of US B2B sales on credit" (cleaner stat)
