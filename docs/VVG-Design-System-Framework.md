# VVG Design System Framework

**Companion to:** VVG UI Style Guide v1.0, ADR-001 (Website Architecture)
**Purpose:** Govern how the existing tokens and components get applied consistently across every page type for the next 20 years — not just describe them once.
**Status:** Proposed · Plan only, no build

---

## 1. Why a framework, not just a style guide

The style guide (colour system, type roles, buttons, cards, forms, navigation, tags, icons, grid, motion, accessibility) defines *what exists*. This framework defines *where each piece is used, by whom, and how drift gets caught* — the difference between a system that survives contact with a CMS full of well-meaning content editors over two decades, and one that slowly degrades into "close enough."

---

## 2. Component taxonomy

Organized bottom-up, so every page is assembled from the same finite set of parts — no page ever invents a new button style or a new card shape.

**Atoms** — the token layer, already defined in the style guide: 10 colour tokens (foundation + semantic), 5 type roles, the 8px spacing scale, the line-icon set, focus states.

**Molecules** — small reusable units built from atoms:
- Button (Primary / Accent / Disabled / Outline-on-dark)
- Tag (content-category: News, Event, Publication · system-state: Published, Draft, Error, Notice)
- Form field (label-above, helper text, error state)
- Nav item (underline active-state, never colour alone)

**Organisms** — page-section-level components, each built once and reused everywhere it applies:
- **Universal Card** — one base card component (maroon-tinted hover lift, 4px, never scale) with swappable content slots. Every content type in the CMS — Subject, Faculty, Publication, News, Event, Alumni — renders through this one card, not five different card designs.
- **Hero** — Fraunces display headline on either ivory or maroon-deep surface, one CTA maximum.
- **Timeline** — the Dinacharya (daily routine) pattern: time-stamped vertical rhythm, reused for History and any other chronological content.
- **Trust-stat strip** — 3–4 numeric markers (years of tradition, students taught, countries reached), grove-green accent.
- **Long-form editorial block** — Source Serif 4, 680px max measure, for History, Guru–Śiṣya Tradition, Vision & Mission.
- **Form module** — Admissions application, Contact inquiry, Donation — all the same underlying form organism with different fields.

No page-type below introduces anything outside this list.

---

## 3. Page-type → component mapping

| Page | Primary organisms used | Type roles in play | Colour/CTA rule |
|---|---|---|---|
| **Home** | Hero (maroon-deep) · Trust-stat strip · Universal Card ×3 (latest news) · one CTA banner | Fraunces (hero) · Manrope (nav, cards) | One accent-gold CTA maximum for the page — "Seek Admission" or "Support & Seva," never both |
| **About** | Long-form editorial · Universal Card (Leadership) · Timeline (History) | Source Serif 4 (body) · Fraunces (section heads) | No accent gold; maroon-primary links only |
| **Academics / Subjects** | Universal Card grid (one card per Subject: Veda Adhyayana, Sanskrit, Vedānta…) | Fraunces (card titles) · Manrope (descriptions) | Parchment surface for card grid, alternating with ivory-base |
| **Admissions** | Form module · Universal Card (FAQs as expandable) | Manrope (forms) | Primary maroon "Seek Admission"; Disabled state ("Applications Closed") is a first-class state, not an afterthought |
| **Guru–Śiṣya Tradition** | Long-form editorial · pull-quote block | Tiro Devanagari Sanskrit (mūla quotes only) · Source Serif 4 (body) | Maroon-deep dark section permitted here specifically, for the pull-quote moment |
| **Campus Life** | Timeline (Dinacharya) · Universal Card grid (Festivals, Seva, Dining) | Manrope · Fraunces (headers) | Grove-green accent for Seva-related content specifically |
| **Faculty** | Universal Card (photo, Fraunces name, Noto Serif Devanagari name, tags for subjects taught) | Noto Serif Devanagari (Devanagari name) · Manrope (credentials) | Tag component reused from News/Event tags, new "Subject" tag colour added to the semantic set only after contrast-testing |
| **Research & Publications** | Universal Card (list-style variant) · download icon from icon set | Manrope | Publication tag; author name links to Faculty card |
| **News & Events** | Universal Card grid · Tag (News/Event) · Published/Draft state (admin-only) | Manrope | Draft state never renders publicly — CMS enforces this, not the frontend |
| **Gallery** | Media grid · fade/rise reveal on scroll | — | Motion respects `prefers-reduced-motion`; no exceptions |
| **Alumni** | Universal Card (photo, quote, batch year — same shape as Faculty card) | Fraunces (name) · Source Serif 4 (quote) | — |
| **Donate & Support** | Hero (maroon-deep) · Form module | Fraunces (headline) | The one page where the accent-gold CTA is expected and correct |
| **Contact** | Form module · map embed | Manrope | Routed by inquiry type (general/admissions/press/donor) at the form level, per ADR content model |

---

## 4. Cross-page consistency rules

These apply everywhere, with no page-level exceptions:

1. **One accent-gold (`gold-decorative` fill) CTA moment per page, maximum.** Two accent buttons on one screen is the single most common way this system gets diluted — the style guide already flags this for buttons; this framework extends it to the whole page.
2. **Fraunces only at 20px and above.** Never body text, never form labels, never captions.
3. **Devanagari script rule:** `Tiro Devanagari Sanskrit` is reserved exclusively for quoted mūla verse text. `Noto Serif Devanagari` is used for every other Devanagari instance (names, general text). These are never interchanged.
4. **Every card on the site is the Universal Card organism.** A new content type does not get a new card design — it gets new fields inside the existing card.
5. **8px spacing scale, no exceptions.** Any spacing value not on the scale (8/16/24/32/48/64/96) is a bug, not a design choice.
6. **Hover = 4px lift with maroon-tinted shadow, never scale/zoom.** This is already a stated rule; the framework makes it non-negotiable across every organism, not just buttons.
7. **Navigation stays at 7 primary items + 1 CTA**, site-wide, permanently — new sections get folded into existing menu groups or the footer, not added as new top-level items.
8. **Minimum 44×44px tap targets, visible focus states, no colour-only signaling** — carried from the style guide's accessibility section into every organism without exception.

---

## 5. Governance and enforcement

**Versioning.** The style guide is already marked "Version 1.0" and states it should be updated whenever a token changes. This framework adds the trigger: any new organism (not just token) requires a version bump and a changelog entry, so five years from now it's traceable why a component exists.

**New-component proposal process.** Before any new UI pattern is introduced:
- Can it be built from existing atoms/molecules? If yes, it's not a new component — reuse.
- If a genuinely new organism is needed, it must be reviewed against the WCAG contrast math the way the original colour tokens were, before approval.
- New Devanagari or English type roles are not added without a stated reason, the way Fraunces replacing Cormorant Garamond was justified in writing.

**Pre-launch QA checklist**, run against every new page before it ships:
- [ ] Zero or one accent-gold CTA on the page
- [ ] All cards are the Universal Card organism, no bespoke card markup
- [ ] Devanagari font usage follows the mūla-quote vs. general-text rule
- [ ] Spacing values are all on the 8px scale
- [ ] Navigation item count is still ≤7 + 1 CTA
- [ ] Keyboard focus visible on every interactive element
- [ ] Reduced-motion respected

**CMS-level enforcement (ties to ADR-001).** Because the admin CMS is being built rather than bought off-the-shelf, the rich-text and layout editors given to Office Staff, Faculty, and Media Team roles should be deliberately constrained — a limited style palette, no free-form colour picker, no font selector — so an editor physically cannot introduce an off-system colour or typeface. This is the real long-term enforcement mechanism; a written rule is only a backstop.

---

## 6. What this framework does not cover

Page-by-page copywriting, the CMS schema field list (that's ADR-001, Part 1), and the build sequence (also ADR-001, Action Items). This document governs consistency of the visual system only, across a site that will be edited by six different roles over twenty years.
