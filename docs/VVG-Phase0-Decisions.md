# Phase 0 — Remaining Decisions

Covers ADR-001 action items 2 and 3. Item 3 is finalized below; item 2 needs your input — fill in the names.

---

## A. Locale-default matrix (action item 3) — **updated per your direction: 80% English / 20% Sanskrit site-wide**

You've set the global ratio: 80% English, 20% Sanskrit across the whole site. That ratio is applied per page below, rather than flipping entire pages to Sanskrit-first — it holds the international-first requirement (Admissions, About) while keeping the tradition visibly, authentically present everywhere, not confined to one page.

| Page | English content | Sanskrit (Devanagari) content | How the 20% shows up |
|---|---|---|---|
| Home | Full body copy, nav, CTAs | Site title, motto, section labels | Devanagari header/motto treatment, mūla quote in hero |
| About | Vision, Mission, History, Leadership bios | Institution name, key terms (Guru–Śiṣya Paramparā, Sāstra-paramparā) set in Devanagari | Sanskrit terms kept untranslated and styled, not footnoted |
| Academics | Full syllabus descriptions | Subject names (Vedāḥ, Śāstrāṇi, Yogaḥ etc.), verse citations | Subject titles bilingual per the schema's EN/SA field |
| Admissions | Full process, eligibility, forms | — | English-only is correct here; this is the one page closest to 100% English, which the 80/20 average absorbs |
| **Guru–Śiṣya Tradition** | Explanatory body text | Mūla verses (Tiro Devanagari Sanskrit), key philosophical terms | This page carries a larger share of the 20% — mūla quotes belong here, not diluted elsewhere |
| Campus Life | Full descriptions | Sanskrit names for daily practices (Dinacaryā, Sevā) | |
| Faculty | Credentials, bios | Name always shown in Devanagari alongside English | |
| Research & Publications | Full English (SEO/AEO priority) | Manuscript/verse titles where applicable | |
| News & Events, Gallery, Alumni, Donate, Contact | Full English | Institution name/motto only | These stay close to 100% English by design — they're utility pages, not where the 20% should live |

**Rule of thumb:** the 20% Sanskrit isn't spread evenly — it concentrates where the content's authority comes from being in Sanskrit (Guru–Śiṣya Tradition, Academics subject names, mūla verses, the institution's own name/motto everywhere) and stays near-zero on purely transactional pages (Admissions forms, Contact, Donate). This still reverses the current live site's Sanskrit-default navigation, which was the biggest barrier flagged in the original audit — English leads structurally, Sanskrit is present with dignity throughout rather than gating the front door.

---

## B. Role sign-off template (action item 2)

**Rollout decision:** launch with a single admin (you) holding Super Administrator access — one login, full control, social-media-simple posting for News/Events/Gallery/Announcements. The other five roles below are ready whenever you choose to delegate; nothing about the CMS build changes either way, since Payload supports adding roles/users at any time after launch, not just at setup.

Fill in real names/emails against each role you're ready to activate now — leave the rest blank until you delegate them.

| Role | Name | Contact | Scope reminder |
|---|---|---|---|
| Super Administrator | _____________ | _____________ | Everything, incl. user roles & site settings |
| Principal | _____________ | _____________ | All content, approval/publish rights |
| Office Staff | _____________ | _____________ | Admissions, Contact Messages, Announcements |
| Faculty (may be multiple people) | _____________ | _____________ | Own profile, own publications |
| Media Team | _____________ | _____________ | Photo Gallery, Video Gallery, Homepage media |
| Research Team | _____________ | _____________ | Research & Publications only |

If any role has more than one person, list all of them — Payload CMS supports multiple users per role.

---

## C. Prototype reconciliation (action item 4) — done

Reviewed the rocket.new homepage and About page directly.

**Structure — keep.** Nav (Home/About/Academics/Admissions/Student Life/Gallery + Contact CTA), hero + trust-stat strip, philosophy/academic/admission card row, testimonial block, events list, closing CTA — this is a reasonable structural sketch and broadly validates the organism list in the Design System Framework (Hero, Trust-stat strip, Universal Card, Form module).

**Tokens — do not keep.** It's built on a generic orange/rust palette and unlabeled serif/sans fonts, not the approved maroon-primary / gold-decorative / gold-interactive / ivory-base tokens or the Fraunces / Source Serif 4 / Manrope / Noto Serif Devanagari type system. None of it carries over directly — Phase 1 designs from the actual token set, using this only as a rough wireframe reference.

**Content — do not keep, and don't reuse any of the numbers.** The stats and testimonial are AI-generated placeholders, not real data, and they're internally inconsistent with each other and with what we now know:
- Homepage says "40+ Years of Tradition"; the About page says "over three decades" — these don't even agree with each other, let alone with the real founding year (1997, ≈29 years).
- "500+ Students Transformed" doesn't match the real, better numbers already gathered: 162 completed, 90 currently enrolled.
- The testimonial ("Rajesh Kumar... 8th Grade Student") and the "grades 5–12" admissions framing describe a conventional coed day-school model — this doesn't match VVG's actual structure (age 14–16 entry after 7th/10th standard, seven-year residential program, per the brochure).
- The listed events (Sanskar Utsav, a generic recitation competition) are invented and don't include the two real, significant dated events already found — including the founder's own 75th birthday felicitation on 1 March 2026.
- The contact number shown doesn't match either number on file for Janaseva Trust.

**Verdict:** treat rocket.new as a throwaway layout sketch, not a content or brand source. Nothing from it should be copied forward except the general page-section ordering. This is a good reason Phase 1 needs to start from the real content already assembled (brochure extract, founder bio, ADR schema) rather than editing this prototype in place.

---

## Status

- [x] Action item 3 — locale defaults: **decided**
- [ ] Action item 2 — role names: **still blank in the table above — needs your input**
- [x] Action item 4 — prototype reconciliation: **done, see C above**

One item left to fully close Phase 0: the six role names in section B.
