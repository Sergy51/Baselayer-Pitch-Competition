# ClearTerms — Market Research & Data Citations

## 1. Trade Credit Market Size & Dynamics

### B2B Sales on Credit Terms
- **~60% of US B2B sales are made on credit terms** (net-30/60/90)
  - Source: Atradius Payment Practices Barometer 2024; Nickel (nickel.co) industry reports
  - Context: This is the standard operating model for B2B commerce. Sellers extend credit to buyers as a competitive necessity.

### US Trade Credit Outstanding
- **$4.5 trillion in trade credit outstanding in the US — representing 21% of GDP**
  - Source: Federal Reserve Board, International Finance Discussion Papers (IFDP)
  - Context: Trade credit is one of the largest sources of short-term financing for businesses, exceeding bank lending to non-financial firms.

### Total US B2B Payments Market
- **~$35 trillion in annual US B2B transactions**
  - Source: eMarketer 2024
  - Context: This is the total addressable universe before narrowing to credit-term transactions.

---

## 2. The Late Payment & Bad Debt Problem

### Late Payments
- **55% of B2B invoices in the US are paid past due**
  - Source: Atradius Payment Practices Barometer 2024
  - Note: This is the US-specific figure. Global average is similar (~49-55% depending on region).

- **64% of companies experienced extended payment delays (DSO >100 days)**
  - Source: Atradius 2024
  - Note: This stat refers to companies experiencing extended delays, NOT the percentage of sales on credit. Use carefully — better for illustrating severity of late payment problem.

### Bad Debt
- **8-9% of credit sales become bad debt (uncollectible)**
  - Source: Atradius Payment Practices Barometer 2024
  - Context: This is a material cost. For a company with $100M in credit sales, that's $8-9M in write-offs annually.

### Days Sales Outstanding (DSO)
- **Median DSO: 56 days**
  - Source: Upflow 2024 industry benchmarks
  - Context: While terms may be net-30, actual collection takes nearly double. The gap between terms and reality is where risk lives.

---

## 3. Insolvency & Macro Risk Trends

### Global Insolvency Surge
- **Global insolvencies increased +10% in 2024**
  - Source: Allianz Trade Global Insolvency Report 2024

- **US insolvencies expected to rise +12% in 2025**
  - Source: Allianz Trade forecast
  - Context: Post-COVID "zombie companies" (kept alive by stimulus/low rates) are now failing as rates stay elevated. This creates urgency for better credit risk tools.

### High-Risk Sectors
- **Construction** — Long project cycles, thin margins, heavy subcontractor dependency
- **Wholesale/Distribution** — High-volume, low-margin, concentrated buyer risk
- **Manufacturing** — Capital-intensive, supply chain exposure, cyclical demand
- **Chemicals** — Commodity price volatility, regulatory risk

Sources: Atradius sector reports 2024; Allianz Trade industry risk assessments

---

## 4. Trade Credit Insurance Market (Proxy for TAM)

### Market Size
- **$11.67 billion in 2024 → projected $23.73 billion by 2032**
  - CAGR: ~9.4%
  - Sources: Grand View Research; Fortune Business Insights

### Market Structure
- Dominated by three players: **Atradius, Euler Hermes (Allianz Trade), Coface**
- High concentration = high switching costs = opportunity for disruption from below
- Most trade credit insurance is sold to large enterprises; mid-market is underserved

---

## 5. Baselayer Platform Capabilities (Internal)

### Existing Data Assets
- Real-time Secretary of State registration data
- IRS business records
- UCC lien filings (critical for credit signals)
- Litigation and bankruptcy records
- Web presence analysis
- Coverage: 120M+ US businesses

### Existing Infrastructure
- Sub-5-second verification
- 98% match rates
- AI-powered entity matching and resolution

### Existing Network
- Fraud consortium with **2,200+ financial institutions** (~20% of US banks and credit unions)
- Identity verification network detecting cross-institutional patterns

### Existing Metrics
- AI agents achieve **72% less manual review** vs. traditional processes
- Source: Baselayer marketing materials / website

---

## 6. TAM Waterfall (for Slide 3)

| Level | Description | Value | Source |
|---|---|---|---|
| 1 | Total US B2B Sales | ~$35T | eMarketer 2024 |
| 2 | Sold on Credit Terms (~60%) | ~$21T | Atradius 2024 |
| 3 | Focus Industries (Wholesale, Manufacturing, Construction) | ~$12T | Census Bureau industry data |
| 4 | Mid-market segment ($10M-$500M revenue companies) | ~$3-5T | Derived estimate |
| 5 | SAM: Credit decisioning spend | $11.67B+ | Grand View Research |

---

## 7. Competitive Landscape (Background — not on slides)

| Player | What They Do | ClearTerms Differentiation |
|---|---|---|
| D&B (Dun & Bradstreet) | PAYDEX score, static credit reports | Stale data (monthly updates), expensive, designed for enterprise |
| Experian Business | Business credit scores | Consumer-credit methodology applied to businesses; limited real-time signals |
| Equifax Business | Business credit data | Similar to Experian; batch-oriented |
| CreditSafe | SMB-focused credit reports | Good for basic checks; lacks depth of public records analysis |
| Cortera | Trade credit data from AP/AR sharing | Dependent on data contribution; coverage gaps |
| **ClearTerms** | Real-time public records → credit risk score | Live signals (liens, litigation, registration changes), AI-powered, API-first, integrated into Baselayer platform |

---

## 8. Key Quotes & Framing

- "Trade credit is the largest source of short-term external finance for firms in the US." — Federal Reserve
- "Identity verified ≠ Can pay" — ClearTerms positioning
- "The FICO Score for Businesses" — Baselayer's stated vision (ClearTerms delivers on this)
- Baselayer's existing `risk_score` appears to be verification-quality (all companies score A). ClearTerms provides a fundamentally different, credit-specific score.

---

*Last updated: March 2026*
*Compiled for ClearTerms pitch deck preparation*
