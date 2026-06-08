# Keystone Tax Advisory — Final CRO Implementation Plan

**Goal:** One conversion path — book the free 15-minute consultation.  
**Primary audiences:** Families · Freelancers · Small businesses  
**Scope:** Copy, trust, conversion psychology, design/UX, and metadata. No code in this document — implementation checklist only.

**Current baseline (audit summary):** Dark single-page Next.js site with hero dashboard card, credentials strip, services/pricing/testimonials/FAQ/booking sections, 3-step booking wizard, partial glassmorphism and scroll reveal, placeholder phone `(616) 555-0123`, no practitioner photo, no calculator/quiz/case studies/logo band, incomplete social metadata, `about-section.tsx` unused, navbar hydration error in dev.

---

## Priority Legend

| Priority | Meaning |
|----------|---------|
| **P0 — Critical** | Directly affects conversion above the fold or blocks booking |
| **P1 — High** | Strong trust/psychology lift; implement in same sprint as P0 |
| **P2 — Medium** | Polish, consistency, and secondary conversion support |
| **P3 — Low** | Nice-to-have refinements after core CRO ship |

---

## P0 — Critical (Ship First)

### Copy & Messaging

- [ ] **Rewrite hero headline for loss aversion** (`components/hero-section.tsx`)
  - Replace benefit framing ("Tax Preparation That Saves You Money") with fear-of-loss framing.
  - Recommended direction: *"Stop Overpaying the IRS — Before an Audit or Notice Forces Your Hand"*
  - Highlight the penalty/risk phrase in emerald; keep Grand Rapids local anchor in badge.
- [ ] **Rewrite hero subheadline for procrastinator urgency** (`components/hero-section.tsx`)
  - Add cost-of-waiting and deadline proximity.
  - Recommended direction: *"Every week you wait costs deductions, increases audit risk, and shrinks your refund window. Families, freelancers, and small businesses in Grand Rapids get a clear plan in one free 15-minute call."*
- [ ] **Unify primary CTA copy to reduce accountant skepticism** (all touchpoints)
  - Standardize on: **"Book Your Free 15-Min Call — Flat Rate, No Pressure"**
  - Supporting micro-copy everywhere: *"You decide after the call. No obligation. No hourly surprises."*
  - Files: `hero-section.tsx`, `navbar.tsx`, `mobile-menu.tsx`, `pricing-section.tsx`, `booking-section.tsx`, `footer.tsx`, `mobile-sticky-cta.tsx`, `components/ui/cta-button.tsx`
- [ ] **Remove competing CTA language**
  - Change pricing tier buttons from **"Get Started"** → **"Book Free Call"** (opens same booking modal).
  - Ensure no secondary goals (email-only, download PDF, etc.) appear anywhere on the page.

### Trust & Proof (Above the Fold)

- [ ] **Add Marcus Vance photo placeholder above the fold** (`components/hero-section.tsx`)
  - Circular headshot placeholder (e.g. `public/marcus-vance.jpg` or styled initials avatar with "Photo coming" alt).
  - Caption: *"Marcus Vance, EA — Your Grand Rapids Enrolled Agent"*
  - Position: left column, between badge and headline or beside subheadline.
- [ ] **Move trust badges above the fold on mobile** (`components/hero-section.tsx` + `components/credentials-strip.tsx`)
  - On `max-lg`: render compact credentials strip (EA · 15+ years · 500+ clients) directly under hero CTA, before dashboard card.
  - On `lg+`: keep current layout or integrate strip into hero left column.
- [ ] **Add named local client proof line near primary CTA** (`components/hero-section.tsx`, repeat near `#booking`)
  - Example: *"Trusted by 40+ Grand Rapids families and freelancers — including Sarah M., owner of a local design studio."*
  - Use real or placeholder name with city/neighborhood; link to testimonials section.

### Conversion Psychology (Hero)

- [ ] **Add tax savings calculator in hero** (new `components/tax-calculator.tsx`, import in `hero-section.tsx`)
  - Inputs: annual income (number), filing status (single / married / head of household).
  - Output: estimated refund range or "potential missed deductions" dollar band (clearly labeled *estimate, not tax advice*).
  - CTA directly below result: **"See Your Full Picture — Book Free Call"** → opens booking modal.
  - Replace or sit above the static dashboard card on mobile; side-by-side on desktop.

### Design & UX (Blocking Issues)

- [ ] **Fix mobile hamburger menu** (`components/navbar.tsx`, `components/mobile-menu.tsx`)
  - Resolve hydration error at `navbar.tsx` (~line 36) — likely client-only state mismatch.
  - Verify: open/close toggle, focus trap, body scroll lock, anchor nav scrolls to correct sections, CTA opens booking modal.
- [ ] **Ensure back-to-top button is visible** (`components/back-to-top.tsx`)
  - Confirm `z-index` above sticky elements; emerald button visible after ~400px scroll on mobile and desktop.
  - Do not overlap mobile sticky CTA bar — adjust `bottom` offset when sticky CTA is active.

### Metadata (Launch Blockers)

- [ ] **Wire favicon** (`app/layout.tsx`, `public/icon.svg`)
  - Add `icons` in Next.js `metadata` export.
- [ ] **Add OpenGraph title and description** (`app/layout.tsx`)
  - Align with loss-aversion headline; include Grand Rapids + EA credential.
- [ ] **Add `og:image` for social sharing** (`app/layout.tsx`, `public/og-image.svg` or new `public/og-image.png` 1200×630)
  - Must show brand, headline hook, and Marcus/name trust line.
- [ ] **Add Twitter Card tags** (`app/layout.tsx`)
  - `summary_large_image`, matching title/description/image.

---

## P1 — High (Same Release)

### Copy & Messaging — Audience Mapping

- [ ] **Tag every section with a single primary audience** (add subtle label or H3 qualifier)
  - **Families** → Personal pricing tier, family testimonial, W-2/dependents service card.
  - **Freelancers** → Freelancer pricing (Most Popular), Schedule C service, freelance testimonial.
  - **Small businesses** → Business pricing, bookkeeping/S-Corp service, business testimonial.
  - Files: `services-section.tsx`, `pricing-section.tsx`, `testimonials-section.tsx`, `faq-section.tsx`
- [ ] **Rewrite services section intros per audience** (`components/services-section.tsx`)
  - One card headline each: *"For Families"*, *"For Freelancers"*, *"For Small Businesses"* (+ IRS resolution as cross-audience fear hook).

### Trust & Proof

- [ ] **Add EA credential explanation in plain language** (`components/credentials-strip.tsx` or new tooltip in hero)
  - *"Enrolled Agent (EA) = federally licensed tax specialist, tested by the IRS, authorized to represent you in audits."*
  - Link to FAQ item #3 for depth.
- [ ] **Add real phone number and Grand Rapids street address** (`components/footer.tsx`, `components/booking-section.tsx`, `app/layout.tsx` JSON-LD if added)
  - Replace `(616) 555-0123` with client-provided number.
  - Full address format: street, city, state, ZIP (e.g. `123 Monroe Ave NW, Grand Rapids, MI 49503`) — confirm with client.
  - Make phone `tel:` link; address links to Google Maps.
- [ ] **Add privacy/security line near booking form** (`components/booking-wizard.tsx`, step 3)
  - *"Your information is encrypted and never sold. We only use it to confirm your consultation."*
  - Optional lock icon; mention IRS-compliant document handling if true.

### Conversion Psychology

- [ ] **Add 3-question tax health check before CTA** (new `components/tax-health-check.tsx`)
  - Place between testimonials and `#booking` (or inside booking section above wizard).
  - Questions (yes/no or quick select):
    1. Are you self-employed or have 1099 income?
    2. Did you miss deductions or credits last year?
    3. Have you received IRS notices or owe back taxes?
  - Dynamic result line: *"Based on your answers, a consultation could save you $X–$Y"* (ranges by answer combo).
  - Final button: **"Book Free Call — Get Your Plan"** → booking modal with service type pre-selected.
- [ ] **Add mini case study section** (new `components/case-studies-section.tsx`, add to `app/page.tsx`)
  - 3 cards, one per audience, **Problem → Solution → Outcome** format.
  - Example (freelancer): *Problem: Schedule C errors triggered IRS notice · Solution: EA review + amended return · Outcome: $3,200 refund recovered, notice closed.*
  - Each card ends with **"Book Free Call"** (same modal).
- [ ] **Add trusted-by logos band** (new `components/trust-logos.tsx`, place below credentials or above testimonials)
  - BBB, IRS (EA program), Google Reviews, NATP — use grayscale logos, `public/logos/`.
  - Alt text and `rel="noopener"` outbound links where appropriate.
- [ ] **Add real urgency without fake scarcity** (`components/hero-section.tsx`, `components/booking-section.tsx`)
  - Seasonal copy tied to actual calendar (update via constant or env):
    - *"Federal filing deadline: April 15 — consultation slots fill fastest in March."*
    - *"IRS audit response windows are strict — waiting weeks can forfeit appeal rights."*
  - Remove or relabel generic "Tax Season Progress 67%" unless tied to real capacity data.

### Design & UX

- [ ] **Redesign dashboard card as real client outcome** (`components/hero-section.tsx`)
  - Replace generic "Your Tax Savings" UI mock with a specific client snapshot:
    - Client: *"James T., Freelance Developer, Grand Rapids"*
    - Outcome: *"$4,200 recovered in missed home-office + mileage deductions"*
    - Before/after or single highlighted savings line; small disclaimer *"Individual results vary."*
- [ ] **Activate or merge `about-section.tsx`**
  - Either add `#about` to `app/page.tsx` with Marcus bio + EA story, or fold bio into hero photo block and delete dead code.

---

## P2 — Medium (Polish Pass)

### Design & UX

- [ ] **Apply glassmorphism consistently on services and pricing cards** (`components/services-section.tsx`, `components/pricing-section.tsx`)
  - Standardize: `bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl`
  - Hover: `border-emerald-500/30` + subtle `shadow-emerald-500/10`
  - Ensure text contrast passes WCAG AA on dark backgrounds.
- [ ] **Subtle scroll animations on section entry** (`components/section-reveal.tsx`)
  - Audit all sections wrapped in `SectionReveal`; add to case studies, health check, trust logos if missing.
  - Keep motion subtle: `opacity` + `translateY(12px)`, `duration-500`, respect `prefers-reduced-motion`.
- [ ] **Fix / verify mobile sticky CTA** (`components/mobile-sticky-cta.tsx`)
  - Sticky bottom bar on scroll with unified CTA copy; appears after hero exits viewport.
  - Coordinate z-index and bottom offset with back-to-top button.
- [ ] **Consolidate duplicate CTA sections**
  - `cta-section.tsx` vs `booking-section.tsx` — use one component to avoid drift.

### Trust & Proof

- [ ] **Upgrade testimonials with local specificity** (`components/testimonials-section.tsx`)
  - Add neighborhood or business type; optional star rating visual aligned with Google badge in trust band.
- [ ] **Add structured data** (`app/layout.tsx` or `app/page.tsx`)
  - `LocalBusiness` + `AccountingService` schema: name, address, phone, aggregateRating, priceRange.

### Metadata

- [ ] **Complete OpenGraph set** (`app/layout.tsx`)
  - `og:url`, `og:site_name`, `og:locale` (`en_US`), `og:image:width`, `og:image:height`, `og:image:alt`
- [ ] **Add `robots` and canonical URL** if deploying to production domain.

---

## P3 — Low (Post-Launch Optimization)

- [ ] A/B test headline variants (loss aversion vs refund maximization) — track booking modal opens.
- [ ] Add post-booking confirmation email mention in wizard step 3.
- [ ] Replace photo placeholder with professional headshot when available.
- [ ] Swap calculator estimates for bracket-based logic or integrate with simple tax table constants annually.
- [ ] Add analytics events: `cta_click`, `calculator_submit`, `health_check_complete`, `booking_step_complete`.
- [ ] Performance: lazy-load trust logos and case study images; verify LCP on hero photo/calculator.

---

## Implementation Order (Suggested Sprint Sequence)

```
Day 1 — P0 copy + CTA unification + metadata + navbar/menu fix
Day 2 — P0 hero photo, mobile trust badges, calculator component
Day 3 — P1 health check, case studies, trust logos, address/phone/privacy
Day 4 — P1 dashboard card redesign, audience copy pass, urgency copy
Day 5 — P2 glassmorphism, scroll animations, sticky CTA, schema, QA
```

---

## File Change Map

| File | Changes |
|------|---------|
| `app/page.tsx` | Add case studies, health check, trust logos; reorder sections |
| `app/layout.tsx` | Full metadata: OG, Twitter, favicon, optional JSON-LD |
| `components/hero-section.tsx` | Headline, subhead, photo, calculator, mobile badges, urgency, dashboard redesign |
| `components/tax-calculator.tsx` | **New** — income + filing status → estimate |
| `components/tax-health-check.tsx` | **New** — 3 questions → pre-qualify → CTA |
| `components/case-studies-section.tsx` | **New** — problem/solution/outcome × 3 |
| `components/trust-logos.tsx` | **New** — BBB, IRS, Google, NATP band |
| `components/credentials-strip.tsx` | EA plain-language; mobile placement |
| `components/navbar.tsx` | CTA copy; hydration fix |
| `components/mobile-menu.tsx` | CTA copy; menu behavior QA |
| `components/mobile-sticky-cta.tsx` | Unified CTA; visibility fix |
| `components/services-section.tsx` | Audience labels; glassmorphism |
| `components/pricing-section.tsx` | Audience alignment; CTA → book; glassmorphism |
| `components/testimonials-section.tsx` | Local proof; audience tags |
| `components/booking-section.tsx` | Urgency copy; client proof line |
| `components/booking-wizard.tsx` | Privacy line; health-check pre-fill |
| `components/booking-modal.tsx` | Title/copy alignment |
| `components/footer.tsx` | Real phone, full address |
| `components/back-to-top.tsx` | z-index / offset vs sticky CTA |
| `components/section-reveal.tsx` | Coverage audit |
| `components/about-section.tsx` | Integrate or remove |
| `components/cta-section.tsx` | Merge into booking or delete |
| `public/icon.svg` | Wire in metadata |
| `public/og-image.svg` | Replace or export PNG; wire in metadata |
| `public/marcus-vance.jpg` | **New placeholder** headshot |
| `public/logos/*` | **New** trust badge assets |

---

## Acceptance Criteria (Definition of Done)

1. **One goal:** Every primary button opens the same booking modal with consistent copy.
2. **Above the fold (mobile):** Photo placeholder, loss-aversion headline, urgency subhead, trust badges, calculator, skepticism-reducing CTA.
3. **Trust:** Real phone + street address, EA explanation, privacy line on form, named local proof near CTAs.
4. **Psychology:** Calculator, 3-question health check, 3 mini case studies, logo band, real deadline-based urgency only.
5. **UX:** Working hamburger, visible back-to-top, glassmorphism on services/pricing, scroll reveal on all major sections.
6. **Metadata:** Favicon, OG title/description/image, Twitter large image card — verified via Facebook Sharing Debugger and Twitter Card Validator.
7. **Audiences:** Each major section clearly speaks to families, freelancers, or small businesses (one primary per section).
8. **No regressions:** Booking wizard completes all 3 steps; no hydration errors in console.

---

## Copy Bank (Ready-to-Implement)

### Hero headline options (pick one in implementation)
- *"Stop Overpaying the IRS — Before an Audit or Notice Forces Your Hand"*
- *"Are You Leaving Thousands on the Table — or One Notice Away from Penalties?"*

### Hero subheadline
- *"Every week you wait costs deductions and increases audit risk. Grand Rapids families, freelancers, and small businesses get a flat-rate plan in one free 15-minute call — no pressure, you decide after."*

### Unified CTA
- **Button:** Book Your Free 15-Min Call — Flat Rate, No Pressure
- **Micro:** You decide after the call. No obligation. No hourly surprises.

### Privacy line (booking step 3)
- *"Encrypted & confidential. Your info is never sold — only used to confirm your consultation."*

### Urgency lines (rotate seasonally)
- *"April 15 deadline: March consultation slots book first."*
- *"IRS notice? Response deadlines are fixed — delaying can limit your options."*

---

*Document version: Final · Ready for implementation · No code changes in this file.*
