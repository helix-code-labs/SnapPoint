# Product Requirements Document (PRD)
## SnapPoints — Zero-Touch Micro-CRM Loyalty Platform

**Version:** 2.0
**Date:** March 2, 2026
**Status:** Ready for Pilot Launch
**Tagline:** "Zero-Touch Loyalty: เพิ่มลูกค้าประจำได้จริง โดยที่คุณไม่ต้องขยับตัว"

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement](#2-problem-statement)
3. [Business Model Canvas](#3-business-model-canvas)
4. [Goals & Success Metrics](#4-goals--success-metrics)
5. [Target Users](#5-target-users)
6. [Product Scope](#6-product-scope)
7. [Functional Requirements](#7-functional-requirements)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [Technical Architecture](#9-technical-architecture)
10. [User Journey Maps](#10-user-journey-maps)
11. [Pricing Model](#11-pricing-model)
12. [Go-to-Market Phases](#12-go-to-market-phases)
13. [Launch FAQ (Handling Objections)](#13-launch-faq-handling-objections)
14. [Risks & Mitigations](#14-risks--mitigations)
15. [Open Questions](#15-open-questions)
16. [Appendix](#16-appendix)

---

## 1. Executive Summary

SnapPoints is a **zero-friction, QR-code-based loyalty platform** built specifically for small coffee shops and micro-businesses in Thailand. By leveraging LINE — already installed on virtually every Thai smartphone — SnapPoints lets customers collect loyalty points with a single scan, with no app download required. Merchants get a professional loyalty programme running in under 5 minutes for less than the cost of a bag of specialty coffee beans per month.

**Core Value Proposition:**
- **For merchants:** Affordable retention tool that runs itself (199 THB/month)
- **For customers:** Earn rewards instantly via LINE — no new app to install
- **For the platform:** Data-first pricing strategy; collect real usage data before optimising tier structure

---

## 2. Problem Statement

### "ทำไมร้านกาแฟส่วนใหญ่ ถึงยังไม่มีระบบสะสมแต้มที่เวิร์ค?"
### "Why do most coffee shops still not have a loyalty system that actually works?"

Field research has identified three structural barriers preventing small café owners from building customer loyalty:

| # | Problem | Root Cause | Current Workaround (and Why It Fails) |
|---|---------|-----------|--------------------------------------|
| 1 | **Cost Barrier** | POS-based loyalty costs 2,000–10,000 THB/month | Shops skip loyalty entirely — lose repeat customers |
| 2 | **Physical Friction** | Paper stamp cards get lost, forgotten, or faked | Cards abandoned; fraud erodes merchant trust |
| 3 | **Digital Friction** | New loyalty apps require customers to download and register | >70% of customers refuse at the download step |

**Business Impact:** Small cafés lose a significant portion of their potential repeat business each month — customers who *would* return with a small nudge, but drift away without one. Even one extra visit per customer per month compounds significantly over a customer lifetime.

---

## 3. Business Model Canvas

| Building Block | Details |
|---------------|---------|
| **Value Propositions** | Zero-Touch loyalty in <5 min setup; 199฿/mo (cheaper than 1 hr of minimum wage); no app download for customers |
| **Customer Segments** | Micro cafés (10–30 cups/day), Small cafés (31–80 cups/day), Medium cafés (81–200 cups/day) |
| **Channels** | Direct outreach to 5 pilot stores → Social proof → Word of mouth → Social media case studies |
| **Customer Relationships** | Automated onboarding, community support (Facebook Group), "Growth Partner" tone in all communications |
| **Revenue Streams** | Flat 199฿/mo (launch); usage-based tiers post-data-collection; paid add-ons |
| **Key Resources** | Lean tech stack (Cloudflare Workers + LINE LIFF), pilot store data |
| **Key Activities** | System development, real usage data collection (scan rate validation), merchant feedback loop |
| **Key Partners** | LINE Platform (LIFF SDK), Cloudflare, payment gateway (TBD) |
| **Cost Structure** | LINE API ~500฿/mo; hosting ~2,000฿/mo; support (founder time). **Break-even: ~13 paying merchants** |

---

## 4. Goals & Success Metrics

### 4.1 Product Goals

1. **Zero friction for customers** — Scan and earn via LINE; no registration, no download
2. **5-minute merchant setup** — Print a QR code, configure tiers, done
3. **Economically accessible** — Flat 199 THB/month; break-even at ~13 extra coffees sold/month
4. **Self-reinforcing trust** — Fraud protection and audit trail build merchant confidence

### 4.2 Phased Success Metrics

| Metric | Phase 1 — Pilot (Month 1) | Phase 2 — Optimisation (Month 2) | Phase 3 — Validation (Month 3) |
|--------|--------------------------|----------------------------------|-------------------------------|
| Active merchant stores | 5 | 15 | 30 |
| Critical bugs in production | 0 | 0 | 0 |
| Merchant monthly retention | — | >80% | >80% |
| Avg. scans/store/day | Baseline collected | Trend identified | Model validated |
| Scan data collected | Sufficient for baseline | Sufficient for trends | Sufficient to design usage tiers |

---

## 5. Target Users

### 5.1 Primary — Merchant (Café Owner)

**Profile:** Solo operator to small team, running a Thai café
**Tech literacy:** Moderate — comfortable with LINE, smartphones, basic printing
**Key pain:** Losing regulars; no affordable, low-hassle loyalty option
**Goal:** Grow repeat purchase rate without adding operational load

| Segment | Volume | Est. Monthly Revenue | Price Sensitivity |
|---------|--------|---------------------|------------------|
| Micro | 10–30 cups/day | <90,000 THB | Very high — needs <200฿/mo |
| Small | 31–80 cups/day | 90,000–240,000 THB | High — needs <300฿/mo |
| Medium | 81–200 cups/day | 240,000–600,000 THB | Medium — will pay for reliability |

### 5.2 Secondary — Customer (End User)

**Profile:** Thai consumer with LINE installed; regular café visitor
**Key desire:** Rewards without hassle; recognition for loyalty
**Goal:** Accumulate points passively; redeem rewards conveniently

**User Stories:**
- "As a **customer**, I want to collect points immediately **without filling in sign-up forms** or downloading anything."
- "As a **customer**, I want to know how close I am to my next reward every time I scan."

### 5.3 Tertiary — Platform Admin

**Profile:** SnapPoints internal team member
**Goal:** Manage merchant accounts, monitor platform health, handle fraud escalations

**User Stories:**
- "As an **admin**, I want to view all merchant accounts and their activity in one dashboard."
- "As an **admin**, I want to suspend a merchant account if fraud is detected."

---

## 6. Product Scope

### 6.1 In Scope — v1.0 MVP

#### Merchant Features
- Merchant onboarding (via LINE Open Chat or self-serve web form — TBD)
- Unique QR code generation per merchant
- Real-time scan notification with audio ("ting!") feedback
- Merchant dashboard: daily scans, unique customers, coupon issuance & redemption
- Fraud alerts: cooldown violations, suspicious scan patterns
- Digital shutter: configure business hours; block off-hours scans
- Multi-tier reward configuration (up to 3 tiers; point threshold + reward name + description)

#### Customer Features
- LINE LIFF scan experience — no app download required
- Point balance display after every scan
- Progress bar toward next reward tier
- Coupon wallet: store earned rewards; display for redemption
- Scan rejection messaging (cooldown, shutter closed, fraud block)

#### Admin Features
- Admin dashboard: all merchants, aggregate activity view
- Merchant account management (create, configure, suspend)
- System health monitoring

### 6.2 Out of Scope — v1.0

| Feature | Reason | Target Version |
|---------|--------|---------------|
| Payment processing / billing integration | Requires payment gateway decision | v1.1 |
| Multi-location merchant accounts | Complexity not needed at launch scale | v2 |
| LINE Bot push notifications | Adds operational complexity; LINE OA costs | v2 |
| Data export (CSV) | Available as paid add-on | Add-on |
| Custom branding / White-label | Available as paid add-on | Add-on |
| Automated CI/CD pipeline | Manual deployment adequate for pilot phase | v1.1 |
| Geofencing | Nice-to-have; shutter covers primary use case | v2 |

---

## 7. Functional Requirements

### 7.1 Scan & Point Credit Flow

**FR-01:** The system shall generate a unique, stable QR code URL for each merchant, encoding the merchant ID.

**FR-02:** When a customer scans a merchant QR code:
1. The LINE LIFF app shall initialise and authenticate the customer via LINE OAuth
2. The app shall POST a credit request to the API: `{ merchantId, lineUserId (hashed) }`
3. On success, the app shall display the updated point balance and tier progress bar
4. On failure, the app shall display a clear, friendly rejection message

**FR-03:** The API shall enforce a per-merchant, per-customer cooldown (default: 30 minutes, configurable per merchant) between point credits. Attempts within the cooldown window shall be rejected with reason `COOLDOWN_ACTIVE`.

**FR-04:** Within 3 seconds of a successful scan, the merchant web app shall play the "ting!" audio cue (requires the merchant browser tab to be open and not muted).

**FR-05:** Rejected scans (cooldown, shutter closed, fraud flag) shall return a reason code; the LIFF app shall display a localised, friendly explanation to the customer.

### 7.2 Reward Tiers

**FR-06:** Merchants shall be able to configure 1–3 reward tiers, each specifying:
- Point threshold (positive integer)
- Reward name (max 60 characters)
- Reward description (max 120 characters)
- Issuance mode: auto-issue or manual-approve

**FR-07:** When a customer's cumulative point balance reaches a tier threshold, the system shall automatically add a coupon to their coupon wallet (for auto-issue tiers).

**FR-08:** Coupon redemption flow:
1. Customer opens coupon in LIFF wallet and shows it to the merchant
2. Merchant taps "Confirm Redemption" in the dashboard
3. System marks coupon as redeemed and deducts associated points
4. Customer sees a confirmation screen

### 7.3 Digital Shutter

**FR-09:** Merchants shall be able to configure open/close times per day of week.

**FR-10:** Any scan attempt outside configured business hours shall be rejected with reason `SHUTTER_CLOSED`, and the customer shall see a message indicating the café is currently closed.

### 7.4 Fraud Protection

**FR-11:** The system shall log every scan attempt (accepted or rejected) with: timestamp, hashed customer LINE ID, merchant ID, outcome, and rejection reason (if applicable).

**FR-12:** If a single customer account generates ≥3 rejected scans within 10 minutes at the same merchant, the system shall:
1. Temporarily block that customer account at that merchant (1-hour block)
2. Send an alert to the merchant dashboard

**FR-13:** The merchant dashboard shall display the last 50 scan events with timestamp, outcome, and anonymised customer identifier.

### 7.5 Merchant Dashboard

**FR-14:** The dashboard shall display the following, refreshed at least every 60 seconds:
- Total scans today
- Unique customers today
- Coupons issued (today and all-time)
- Coupons redeemed (today and all-time)

### 7.6 Billing & Trial

**FR-15:** All new merchant accounts shall receive a 30-day free trial with full feature access; no credit card required at sign-up.

**FR-16:** After trial expiry, the account enters a 7-day grace period. After grace period, scan acceptance is blocked until a subscription is active.

**FR-17:** Merchants who subscribe during the launch period (first 3 months) shall be grandfathered at 199 THB/month for the lifetime of their account, with unlimited scans.

---

## 8. Non-Functional Requirements

### 8.1 Performance

| Requirement | Target |
|-------------|--------|
| API response — scan endpoint (P95) | < 500 ms |
| Dashboard data freshness | ≤ 60 seconds |
| LIFF app initial load (4G connection) | < 3 seconds |
| Monthly uptime SLA | ≥ 99.5% |

### 8.2 Security

- LINE user IDs stored in hashed form; no plaintext PII in logs
- API endpoints authenticated via short-lived JWT tokens issued post-LINE OAuth
- HTTPS enforced on all endpoints (Cloudflare handles TLS termination)
- Public scan endpoint rate-limited to 10 requests/minute per IP

### 8.3 Scalability

- Initial capacity target: 30 merchants × 200 scans/day = 6,000 scans/day
- Architecture (Cloudflare Workers + Hono) scales horizontally without code changes
- Database solution (TBD) must support read-heavy workload with low latency in APAC region

### 8.4 Localisation & Accessibility

- Primary language: Thai (th-TH)
- Admin interface: English (en)
- LIFF customer app: WCAG 2.1 AA compliant
- Target environments: iOS Safari and Android Chrome inside LINE's in-app browser

---

## 9. Technical Architecture

### 9.1 System Overview

```
┌─────────────────────────────────────────────────┐
│                  LINE App (Customer)             │
│           Scans QR code → LIFF opens             │
└──────────────────────┬──────────────────────────┘
                       │ HTTPS / REST
                       ▼
┌─────────────────────────────────────────────────┐
│          Hono API  (Cloudflare Worker)           │
│  /liff  ── loyalty logic, point credits          │
│  /merchant ── dashboard data, reward config      │
│  /admin ── account management                    │
└────────┬───────────────────────────┬────────────┘
         │                           │
         ▼                           ▼
┌─────────────────┐     ┌────────────────────────┐
│    Database     │     │   Merchant Web App     │
│  (loyalty data, │     │  (merchant-web, Vite)  │
│   merchants,    │     │  Polling for updates   │
│   coupons)      │     │  Plays "ting!" on scan │
└─────────────────┘     └────────────────────────┘
```

### 9.2 Monorepo Structure (Turborepo)

```
snappoints/
├── apps/
│   ├── landing/          # Marketing site (React 19 + Vite)
│   ├── customer-liff/    # Customer LINE LIFF app (React 19 + Vite)
│   ├── merchant-web/     # Merchant dashboard (React 19 + Vite)
│   ├── admin-web/        # Admin dashboard (React 19 + Vite)
│   └── api/              # Backend (Hono 4 on Bun)
└── packages/             # Shared workspace packages (planned)
```

### 9.3 Tech Stack

| Layer | Technology | Version | Rationale |
|-------|-----------|---------|-----------|
| Monorepo | Turborepo + pnpm | pnpm 9 | Unified pipeline, shared tooling |
| Frontend | React | 19.2.0 | Latest, concurrent rendering |
| Language | TypeScript | 5.9.3 | Type safety across all apps |
| Build | Vite | 7.2.4 | Fast HMR, optimised bundles |
| Styling | Tailwind CSS | 3.4.17 | Utility-first, consistent tokens |
| Backend | Hono | 4.10.1 | Lightweight, edge-first, fast cold starts |
| Runtime | Bun | latest | Fast build + run for API |
| Hosting | Cloudflare Workers | — | Global edge, low APAC latency |
| LINE SDK | @line/liff | 2.27.2 | Official SDK, handles OAuth + context |
| Animation | Framer Motion | — | Landing page UX polish |

### 9.4 Deployment

- **Per-app deployment:** Each app owns its `wrangler.toml` (Cloudflare config)
- **Deploy command:** `pnpm deploy:landing`, `pnpm deploy:api`, etc.
- **Environments:** Production, preview, dry-run
- **Runtime management:** mise (Node.js LTS, Bun latest)

---

## 10. User Journey Maps

### 10.1 New Customer — First Scan

```
Customer arrives at café
        │
        ▼
Sees QR code on counter / table tent card
        │
        ▼
Opens LINE → Scans QR code → LIFF app opens
        │
        ▼
LINE OAuth runs (automatic if already logged in)
        │
        ▼
API credits 1 point → App shows: "You have 1 point! 🎉"
Progress bar toward first reward appears
        │
        ▼
Merchant hears "ting!" ← confirms scan was accepted
        │
        ▼
Customer leaves with motivation to return
```

### 10.2 Returning Customer — Reward Redemption

```
Customer accumulates points over multiple visits
        │
        ▼
Hits reward threshold (e.g., 10 points)
        │
        ▼
Coupon automatically appears in LIFF coupon wallet
Customer receives visual confirmation in app
        │
        ▼
Next visit: Customer opens coupon wallet → shows coupon screen
        │
        ▼
Merchant taps "Confirm Redemption" in dashboard
        │
        ▼
Coupon marked redeemed; points deducted
Customer sees confirmation screen
        │
        ▼
Customer feels valued → loyalty cycle reinforced
```

### 10.3 Merchant — Daily Operations

```
Morning: Merchant opens merchant-web dashboard tab
        │
        ▼
Dashboard shows yesterday's summary:
  • Total scans, unique customers, coupons issued
        │
        ▼
During the day: Every accepted customer scan plays "ting!"
Merchant never needs to touch anything
        │
        ▼
Evening: Merchant reviews today's scan log
Checks for any fraud alerts
        │
        ▼
Month end: Merchant assesses loyalty impact on repeat business
```

---

## 11. Pricing Model

### 11.1 Plans (Launch Phase — First 3 Months)

| Plan | Price | What's Included |
|------|-------|----------------|
| **Free Trial** | 0 THB | 30-day full access, unlimited scans |
| **Starter** | 199 THB/month | Unlimited scans, up to 3 reward tiers, basic dashboard, fraud protection |

**Pricing Rationale:**
- Average café profit margin: ~15 THB/cup
- Monthly subscription cost: 199 THB
- Extra coffees needed to break even: **~13 cups/month** (~1 extra loyal customer returning every 2 days)
- ROI is immediate if even one lapsed customer returns per week

### 11.2 Optional Add-ons

| Add-on | Monthly Price | Description |
|--------|-------------|-------------|
| Custom Branding | +49 THB | Custom logo and brand colours in the LIFF app |
| White Label | +99 THB | Remove all SnapPoints branding |
| Membership Tiers | +119 THB | Bronze / Silver / Gold customer tier system |
| Data Export | +129 THB | CSV export of anonymised scan and customer data |

### 11.3 Grandfathering Commitment

Merchants who subscribe during the **Launch Period** (first 3 months) lock in the 199 THB/month Starter plan **forever** — unlimited scans, regardless of future pricing changes for new customers.

### 11.4 Future Pricing (Post Month 3)

After collecting 3 months of real usage data:
- Analyse actual scan volumes across merchant segments
- Design usage-based tiers that reflect real cost structure
- Migrate new customers to the new tier model
- Existing launch customers remain on grandfathered flat rate

---

## 12. Go-to-Market Phases

| Phase | Timeline | Merchant Target | Key Milestone | Key Activities |
|-------|----------|----------------|--------------|----------------|
| **Phase 1 — Pilot** | Month 1 | 5 stores | Zero critical bugs | White-glove onboarding; collect baseline scan data |
| **Phase 2 — Optimisation** | Month 2 | 15 stores | >80% merchant retention | Identify top friction points; iterate on UX |
| **Phase 3 — Validation** | Month 3 | 30 stores | Pricing model validated | Collect sufficient data to design usage tiers |
| **Phase 4 — Growth** | Month 4+ | 100+ stores | Sustainable growth | Launch referral programme; social proof; PR |

---

## 13. Launch FAQ (Handling Objections)

**Q: ทำไมถึงถูกจัง (199 บาท)? มีอะไรแอบแฝงไหม?**
*"Why is it so cheap (199 THB)? Is there a catch?"*

**A:** We deliberately priced this for small cafes by cutting out the complex POS features you don't need. The price is exactly what it says — no hidden fees — unless you choose optional add-ons in the future.

---

**Q: ถ้าในอนาคตมีคนสแกนเยอะๆ จะคิดเงินเพิ่มไหม?**
*"If usage grows a lot in the future, will you charge more?"*

**A:** Merchants who subscribe during the launch period get **Grandfathering** — they pay 199 THB/month with unlimited scans, forever. Future customers may see different pricing after we have real usage data, but launch customers are protected.

---

**Q: ต้องติดตั้งอุปกรณ์อะไรเพิ่มไหม?**
*"Do I need to install any new hardware?"*

**A:** Nothing. Just your existing smartphone and a printed QR code to place at your counter. That's it.

---

**Q: ลูกค้าต้องโหลดแอปไหม?**
*"Do my customers need to download an app?"*

**A:** No download required. Customers use the LINE app they already have — just scan and go.

---

## 14. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation Strategy |
|------|-----------|--------|-------------------|
| LINE LIFF API breaking changes | Low | High | Pin SDK to tested version; monitor LINE Developer changelog |
| Low merchant adoption in pilot | Medium | High | Recruit warm leads personally; offer hands-on setup support |
| Scan fraud undermines merchant trust | Medium | High | Cooldown system, fraud alerts, digital shutter |
| Cloudflare Worker cold-start latency | Low | Medium | Workers warm up quickly at low traffic; acceptable for MVP scale |
| Billing integration delay | Medium | Medium | Trial period buys time; subscription billing not needed until Month 2 |
| Competitors clone the concept | Medium | Low | Speed-to-market advantage + grandfathering creates switching cost |

---

## 15. Open Questions

| # | Question | Owner | Target Decision Date |
|---|---------|-------|---------------------|
| 1 | Which database will back the API? (Cloudflare D1, PlanetScale, Supabase?) | Tech Lead | Before Phase 1 |
| 2 | Should v1 include LINE Bot push notifications, or defer to v2? | Product | Before Phase 1 |
| 3 | Which Thai payment gateway for recurring billing? (Omise, 2C2P, PromptPay?) | Business | Before Phase 2 |
| 4 | Merchant onboarding channel: LINE Open Chat or self-serve web sign-up? | Product | Before Phase 1 |
| 5 | What are the exact usage thresholds for post-Month-3 pricing tiers? | Business | End of Phase 3 |
| 6 | Will a shared `packages/*` workspace layer be added before Phase 1? | Tech Lead | Before Phase 1 |

---

## 16. Appendix

### A. Glossary

| Term | Definition |
|------|-----------|
| LIFF | LINE Front-end Framework — allows web apps to run natively inside the LINE app |
| Shutter | Feature that automatically blocks scans outside configured business hours |
| Ting | The audio cue ("ting!") played on the merchant's device when a scan is accepted |
| Cooldown | Minimum elapsed time required between point credits for the same customer |
| Grandfathering | Locking launch-period customers at the introductory 199 THB/month price, indefinitely |
| Micro-CRM | A lightweight Customer Relationship Management tool designed for micro-businesses |

### B. Competitive Landscape

| Competitor | Price/Month | Customer App Download? | Primary Target |
|-----------|-------------|----------------------|----------------|
| POS-based loyalty (e.g., Loyverse) | 2,000–10,000 THB | Required (staff POS) | Medium–large businesses |
| Stamp Me / Stocard | Free–500 THB | Required (customer) | General retail |
| Paper stamp cards | ~0 THB | N/A | All sizes |
| **SnapPoints** | **199 THB** | **Not required (LINE)** | **Thai micro-cafes** |

### C. Key Differentiators

1. **No download friction** — LINE is pre-installed on ~95% of Thai smartphones
2. **Merchant simplicity** — No staff training needed; system runs itself
3. **Transparent pricing** — One flat price, no complexity, grandfathering guarantee
4. **Built for Thailand** — Thai language first, LINE integration, local pricing
5. **Data-first strategy** — Flat launch rate lets us collect real usage data before optimising pricing

---

*End of Product Requirements Document*
*SnapPoints v2.0 — March 2, 2026*
