# ADR-001: Website Architecture for Veda Vijnana Gurukulam — a 20-Year Digital Foundation

**Status:** Proposed — updated (see Addendum at end for what's changed since first draft)
**Date:** 16 July 2026 · Addendum added 18 July 2026
**Deciders:** Vishweshwara N M (Web Architect), Veda Vijnana Gurukulam Management
**Scope:** Planning and architecture only. No implementation in this document.
**Companion documents (current as of the Addendum):** VVG-Design-System-Framework.md · VVG-Content-Schema.md · VVG-Phase0-Decisions.md · VVG-Brochure-Content-Extract.md · VVG-Content-Collection-Checklist.md / .xlsx

---

## Context

VVG currently runs on a legacy static PHP site (table-based layout, jQuery carousel, no CMS, stale content, Sanskrit-default navigation) that cannot be maintained without a developer. A prior proposal has already established the objectives, sitemap skeleton, admin module list, a 9-phase long-term roadmap, and a modest tools/hosting budget (₹75,000, 5–6 month build window).

Since that proposal, three things have advanced:

1. A visual design system has been built and published — maroon/gold/ivory palette with WCAG-verified contrast tokens, Fraunces + Source Serif 4 + Manrope + Noto Serif Devanagari / Tiro Devanagari Sanskrit typography, an 8px spacing grid, restrained motion rules, and documented accessibility standards (AA minimum, AAA for reading content).
2. Four reference institutions were studied — Isha Foundation, Amma.org, The Art of Living, and Prabodhini Gurukula (a sibling institution with the same Guru–Śiṣya methodology). Prabodhini in particular demonstrates a modern stack (Next.js, CMS-backed image pipeline) built and maintained by its own alumni — proof that a self-reliant technical model is realistic for an institution like this.
3. The horizon has changed: this is no longer a single redesign but explicitly a 20-year digital foundation, per the founder's direction.

This ADR describes the whole website — information architecture, content model, admin system, and technical foundation — as a single coherent plan, and records the technology decision needed before any building begins.

---

## Decision

Build VVG's website as a **decoupled system**: a fast, statically-rendered public frontend (Next.js) served independently from a **self-hosted headless CMS** (Payload CMS) that owns all content, media, and role-based admin access. English and Sanskrit are first-class content locales from day one. The admin CMS ships in phase 1, alongside the public site — not after, per the institution's explicit requirement.

This decision is elaborated below, after the full site description, since the "whole website" description determines which technology can actually support it.

---

## Part 1 — Information Architecture (the whole site, described once)

### Navigation spine (max 7 items + 1 CTA, per the design system's own navigation rule)

**About** · **Academics** · **Admissions** · **Guru–Śiṣya Tradition** · **Campus Life** · **Research & Publications** · **News & Events** — with **Support & Seva** as the single persistent CTA, and Faculty, Gallery, Alumni, and Contact reachable from About/footer rather than crowding the primary bar.

This is a refinement of the original proposal's flatter list, adopting the lesson from Amma.org and Isha: group by visitor intent, not by org chart, and keep the primary bar under eight items so it stays scannable on mobile.

### Section-by-section content model

**Home** — Not a summary page; a guided entry sequence. Hero (video or stills, Fraunces display type, single primary CTA), a "why a Gurukula, not a school" framing (borrowed from the Prabodhini/Isha pattern of stating philosophy before facts), 3–4 numeric trust markers (years of tradition, students taught globally, countries reached — Amma.org's "162 projects / 48 countries" pattern applied to VVG's own numbers), a Guru lineage strip, latest 3 news items, and one Seva/Support module. No stale hardcoded events — this pulls live from the CMS.

**About** — History, Vision & Mission, Founder, Leadership (Guru profiles with Fraunces headline + Source Serif bio), Campus, Legacy. Each is a CMS content type, not a hardcoded page, so leadership changes don't require developer involvement.

**Academics** — Veda, Sanskrit, Vedānta, Traditional Curriculum, Learning Methodology. Modeled as a repeatable "Subject" content type (title, Devanagari title, description, related faculty, related publications) so new subjects can be added by staff without new page templates — this is the single biggest lesson from Prabodhini's Panchamukhi Shikshana section, where five pillars are clearly one content type repeated five times.

**Admissions** — Eligibility, Admission Process, Prospectus, FAQs, Contact, and — new versus the original proposal — an actual online application form replacing the static PDF download. This is a conversion path, and per Art of Living's pattern, it should route differently for parents in India versus international parents (different logistics, different FAQs).

**Guru–Śiṣya Tradition** — A single rich editorial page explaining the philosophy; this is VVG's equivalent of Isha's "Sadhguru: Man / Mystic / Mission" section — the thing that makes an institutional visitor understand why this isn't a school.

**Campus Life** — Daily Routine (a real Dinacharya timeline component, exactly like Prabodhini's — 5:00 AM to lights-off, visually laid out, not a bullet list), Festivals, Yoga, Seva, Residential Life, Dining, Cultural Activities.

**Faculty** — A repeatable Faculty content type: name, Devanagari name, credentials, subjects taught, publications (relational link to Research & Publications), photo. This directly enables the "showcase institutional credibility" objective from the original proposal that the current site has no mechanism for.

**Research & Publications** — Research Projects, Books, Articles, Conferences, Manuscripts, Digital Resources — each a content type with author (relational link to Faculty), abstract, and downloadable file. This is the section that will matter most for the 20-year horizon: it's the seed of Phase 6–7 (Digital Library, Research Repository) in the original roadmap.

**News & Events** — Two content types (News, Event) with publish/schedule/archive states, category tags, and an event date field so upcoming events surface automatically and expire automatically — solving the exact staleness problem visible on the current live site (an event still showing as active eighteen months after it ended).

**Gallery** — Campus, Festivals, Students, Events, Videos — media-library backed, not a hardcoded image folder like the current site's `/gallery/scroller/`.

**Faculty, Alumni** — Alumni is a lighter content type initially (name, batch year, current role, quote, photo — modeled directly on Prabodhini's alumni cards), with a private portal deferred to a later phase per the roadmap.

**Donate & Support** — A transparent giving page with clear fund designations, modeled on Amma's directness ("Your Contribution can change someone's life") rather than a vague appeal.

**Contact** — Interactive map, office details, and a routed inquiry form (general / admissions / press / donor — so messages land with the right staff role in the CMS).

---

## Part 2 — Admin CMS (ships in phase 1, per your requirement)

Six roles carried over from the original proposal, mapped to actual CMS permission scopes rather than left abstract:

| Role | Can manage |
|---|---|
| Super Administrator | Everything, including user roles and site settings |
| Principal | All content, approval/publish rights |
| Office Staff | Admissions, Contact Messages, Announcements |
| Faculty | Own profile, own publications |
| Media Team | Photo Gallery, Video Gallery, Homepage media |
| Research Team | Research & Publications only |

Every content type above (News, Events, Faculty, Subjects, Publications, Alumni, Gallery items) is editable through this CMS with no code changes — this is the mechanism, not just the promise, behind "updates completed within minutes" from the original proposal.

---

## Part 3 — Bilingual strategy (English + Sanskrit, confirmed)

Every content type carries English and Devanagari fields side by side in the CMS (not a separate translated site tree, which is how the current site's confusing `?lang=` parameter structure happened). The design system already anticipates this — Noto Serif Devanagari for general Devanagari text, Tiro Devanagari Sanskrit reserved specifically for quoted mūla verses. Default language for international-first pages (Admissions, About) is English, with Devanagari available by toggle — reversing the current site's Sanskrit-default gate that international parents currently hit first.

---

## Part 4 — Technology decision

### Options considered

**Option A — Next.js frontend + Payload CMS (self-hosted, decoupled)**

| Dimension | Assessment |
|---|---|
| Complexity | Medium — two systems to run, but both TypeScript, AI-assisted dev workflows handle this well |
| Cost | Low — open source, self-hosted; fits within the ₹75,000 infra/tools budget |
| Scalability | High — supports every future roadmap phase (student portal, faculty portal, digital library, research repository, alumni network, donation management) without a rebuild |
| Ownership | Full — no vendor lock-in, all data and code owned outright by the institution |
| Bilingual support | Native — Payload's localization API fits the English/Devanagari field model directly |
| Team familiarity | Matches your stated skills (UI/UX, modern web dev, AI-assisted workflows) |
| 20-year risk | Lowest — plain code and an open-source database outlive any single platform's business decisions |

**Pros:** matches the design system exactly (component-based React frontend), auto-generates an admin UI honoring the six roles, scales cleanly through every roadmap phase, cheapest to run long-term, fully owned.
**Cons:** requires ongoing technical stewardship (or a successor developer) rather than being "point and click" for non-technical staff to administer the underlying server — though the content editing itself is as simple as WordPress.

**Option B — WordPress (+ ACF + WPML)**

| Dimension | Assessment |
|---|---|
| Complexity | Low to build, but grows over time (plugin sprawl) |
| Cost | Low upfront, recurring (premium plugins, WPML license, security/maintenance) |
| Scalability | Moderate — struggles with the relational content (Faculty ↔ Publications ↔ Subjects) without heavy plugin dependence |
| Ownership | Nominal — but functionally dependent on plugin ecosystem health over 20 years |
| Bilingual support | Workable via WPML, but adds real licensing cost and complexity |
| Team familiarity | Widest pool of hire-able developers in India if you ever need to delegate |
| 20-year risk | Highest — WordPress core, PHP, and plugin security patching is a permanent tax; abandoned plugins are a known long-term liability |

**Pros:** largest hiring pool if you ever want to hand this to someone else; extremely well understood by Indian dev agencies.
**Cons:** does not naturally express the bespoke design system without heavy custom theme work; ongoing plugin/security maintenance burden; WPML licensing is a recurring cost against a 20-year horizon.

**Option C — No-code (Webflow / Framer) + external forms/CMS**

| Dimension | Assessment |
|---|---|
| Complexity | Lowest to start |
| Cost | Recurring subscription forever, scales up with traffic/features |
| Scalability | Low — cannot express relational content models (Faculty↔Publications) or custom RBAC without external tools bolted on |
| Ownership | Weakest — content and design live inside a proprietary platform |
| Bilingual support | Limited, often requires a paid localization add-on |
| Team familiarity | Fast for a designer to build alone |
| 20-year risk | High — platform pricing/policy changes are outside your control, and migrating out later is painful |

**Pros:** fastest initial build, no code required at all.
**Cons:** wrong instrument for a 20-year institutional asset — you'd be renting the foundation of something meant to outlast you.

### Trade-off analysis

The deciding factor is the 20-year framing itself. Option C is disqualified by definition — an institution planning in decades shouldn't build its digital foundation on a rented, walled platform. Between A and B, the real trade-off is: WordPress buys short-term familiarity and hiring flexibility; Next.js + Payload buys long-term ownership, a direct match to the design system already built, native support for the exact content relationships this site needs (Faculty↔Publications↔Subjects), and the lowest maintenance-tax over 20 years. Given that Prabodhini — the closest sibling institution — has already proven a modern JS-stack, alumni-maintained model works in exactly this context, Option A is the stronger structural fit.

### Recommendation

**Option A: Next.js + Payload CMS**, self-hosted on modest infrastructure (a single VPS is sufficient at this scale, well within the ₹75,000 hosting/infra line item already budgeted).

---

## Consequences

- Content editors get a clean admin interface with real roles — no code access ever required for day-to-day updates.
- The public site can be as fast and as visually refined as the design system demands, because the frontend isn't constrained by a CMS's own templating limits.
- Every future roadmap phase (Online Admissions → Student Portal → Faculty Portal → Digital Library → Research Repository → Alumni Network → Donation Management) is an extension of the same content model, not a rebuild.
- The institution takes on the responsibility of technical stewardship over time — this needs either your continued involvement or a documented handover path (mirroring how Prabodhini's alumni maintain theirs).
- WordPress remains a fallback worth revisiting only if, at some point, the priority shifts from "best 20-year foundation" to "must be handed to a generalist agency immediately."

---

## Action Items (planning only — no build yet)

1. [ ] Finalize the content model field-by-field for each type above (Subject, Faculty, Publication, News, Event, Alumni) as a written schema document
2. [ ] Confirm the six admin roles against real staff names/responsibilities, not just titles
3. [ ] Decide the international-first vs Sanskrit-first default per page (Admissions/About lead English; Guru–Śiṣya Tradition may lead Devanagari)
4. [ ] Reconcile this architecture against the existing rocket.new prototype and the GitHub Pages style guide — confirm both feed into the same design tokens
5. [ ] Only after 1–4 are signed off: move to build planning (hosting setup, repo structure, CMS schema implementation)

---

## Addendum — 18 July 2026: what's changed since the first draft

The core decision stands unchanged: **Next.js + Payload CMS, decoupled, bilingual from day one.** Nothing below reverses that. This addendum consolidates everything learned since, so this document stays the single current picture of the whole site rather than one of several scattered files.

### IA additions (both reuse existing organisms — no new components)

- **Milestone / Convocation Year** — a new content type under About → Legacy, cross-linked from Alumni. Year-by-year graduating class size and photo, reusing the Timeline organism already built for Dinacaryā. Older years may have no photo on file — a "photo available" flag keeps that honest rather than papering over gaps.
- **Award / Honour** — a new content type under About → Awards & Honours, covering both institutional and individual (founder/Acharya) recognitions. Reuses the Universal Card organism. Two real entries already known: the founder's Bhavabhūti Puraskāra and Brahmarṣi Puraskāra.

### Locale decision superseded

The original per-page locale table (Part 3) is superseded by an explicit **80% English / 20% Sanskrit ratio, applied unevenly by design** — concentrated on Guru–Śiṣya Tradition, Academics subject names, and mūla verses; near-zero on transactional pages (Admissions, Contact, Donate). Full detail in VVG-Phase0-Decisions.md, section A.

### Real content now sourced (previously placeholder)

Phase 4 (bilingual content population) is materially de-risked. Real content has been gathered and organized against the schema from: the institution's printed brochure (Vision, Objectives, full syllabus, real trust-stats — 162 completed / 90 enrolled / 30 PhDs / 52+ years — donation tiers, admissions eligibility), the founder's tribute site (full bio for Prof. Ramachandra Bhat Kotemane, plus two real dated upcoming events including his own 75th birthday felicitation on 1 March 2026), and the parent Janaseva Trust's site (confirms 1997 founding year independently, reveals the wider institutional network worth a dedicated About section). Full detail in VVG-Brochure-Content-Extract.md. A handful of facts are flagged ⚠ there and still need a verification pass with management (exact Śaṅkarācārya title, donation account number, current admissions eligibility policy).

### Prototype and reference reconciliation (ADR action item 4 — closed)

The rocket.new prototype was reviewed directly: its section ordering is a reasonable structural sketch, but its color tokens, typography, and — critically — its numbers and testimonials are AI-fabricated and inconsistent with real data now on file. Verdict: structure only, discard tokens and content. Separately, a further-along homepage build was shared (ivory nav, maroon CTA, real campus photography, a distinctive temple-motif logo) that aligns with the token system considerably better than the rocket.new version — this is likely a stronger Phase 1 starting point than either the prototype or a from-scratch design, pending confirmation of font choices and final nav item selection.

### Organism library now exists visually

Beyond the existing atoms/molecules style guide (colour, type, buttons, forms, nav — vishweshawaram.github.io/vvgurukulam.org-V2/), a first visual pass now exists for the page-level organisms the style guide didn't cover: Hero, Trust-stat strip, the Universal Card carrying three different content types on one shape, and the Timeline organism serving both Dinacaryā and Milestone use cases. This should eventually live as a second page alongside the existing style guide rather than staying scattered in chat.

### Content collection now delegated

A six-then-seven-workstream checklist (Acharya profiles, historical/founding photos, infrastructure photos, alumni tracking, daily/monthly/yearly institutional calendars, current student records, and awards/honours) has been handed to the Acharya to distribute across multiple people, tracked via a dashboard spreadsheet with live completion percentages. Content readiness — not just your own 2–3 hrs/day — now co-determines the real Phase 1–4 timeline; the Work Schedule should be revisited once workstream owners report back with realistic timeframes.

### Net effect on phase status

Phase 0 is effectively closed except one line item: the six CMS admin role names (VVG-Phase0-Decisions.md, section B) are still blank. Phase 1 (page design) has informally begun ahead of schedule — via the organism library and the independently-built homepage — even though content collection (which normally gates it) is still in progress. That's fine as parallel work, provided nothing gets designed around placeholder content the way rocket.new was.
