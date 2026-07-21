# Brief for Antigravity — Veda Vijnana Gurukulam website

Read this file first, then `/docs` for full detail. This project already has real decisions made and real content gathered — do not re-derive architecture or invent placeholder content. Extend what's here.

## What this project is

A 20-year digital foundation for Veda Vijnana Gurukulam (VVG), a residential Vedic Gurukula in Karnataka, India, founded 1997. Not a redesign — a from-scratch rebuild with a real content management system so non-technical staff can update the site themselves.

## Tech decision (already made — see /docs/ADR-001-VVG-Website-Architecture.md)

Next.js (App Router) frontend, decoupled from a self-hosted Payload CMS backend, Postgres database. Bilingual: every content type carries English and Devanagari (Sanskrit) fields side by side. This was chosen over WordPress and no-code builders specifically because the institution wants full 20-year ownership with no vendor lock-in — do not suggest switching stacks.

## What already exists in this repo

- `tailwind.config.ts` — the full brand token system (colors, fonts) transcribed from the canonical style guide at vishweshawaram.github.io/vvgurukulam.org-V2/. Do not add new colors or fonts without updating that style guide first.
- `collections/*.ts` — every Payload CMS content type, matching `/docs/VVG-Content-Schema.md` field-for-field. If you need a new field, update the schema doc too.
- `app/page.tsx` — homepage, built from real content.
- `app/about/page.tsx` — About page (Vision, Objectives, Founder bio, Awards, Institutional Network), built from real content.
- `app/globals.css` — the Universal Card, button, and other shared component classes. Reuse these; do not create parallel one-off card/button styles per page.

## Non-negotiable design rules (see /docs/VVG-Design-System-Framework.md for full detail)

1. One accent-gold (`gold-decorative` fill) call-to-action maximum per page.
2. Every card on the site is the Universal Card pattern (`.vvg-card` in globals.css) — new content types get new fields inside that card, not a new card design.
3. `Tiro Devanagari Sanskrit` font is reserved for quoted mūla verse text only. `Noto Serif Devanagari` is for every other Devanagari instance. Never interchange them.
4. Fraunces only at 20px and above — never body text or labels.
5. Navigation stays at 7 primary items + 1 CTA, site-wide.
6. 8px spacing scale, no arbitrary values.
7. Locale ratio target: 80% English / 20% Sanskrit sitewide, concentrated on the Guru–Śiṣya Tradition page and Academics subject names — not spread evenly. See `/docs/VVG-Phase0-Decisions.md` section A for the full per-page breakdown.

## Remaining pages to build (in priority order)

Each should follow the same pattern as `app/about/page.tsx`: real content pulled from `/docs/VVG-Brochure-Content-Extract.md`, styled with existing Tailwind tokens and the `.vvg-card` component, no new design patterns invented.

1. **Academics** (`app/academics/page.tsx`) — Theoretical + Practical Syllabus, the five-pillar system (Veda/Vijñāna/Yoga/Kṛṣi/Kalā), Subject cards. Content: Brochure Content Extract, "Academics page" section.
2. **Admissions** (`app/admissions/page.tsx`) — eligibility, process steps, a real application form wired to the `admissions-applications` collection. Content: same doc, "Admissions page" section. Note the ⚠ flag there about confirming current eligibility policy with management before publishing.
3. **Guru–Śiṣya Tradition** (`app/guru-shishya-tradition/page.tsx`) — editorial page, this is the page that should carry the largest share of the Sanskrit-language content per the locale rule above.
4. **Campus Life** (`app/campus-life/page.tsx`) — Dinacaryā (daily routine) as a Timeline component (see the organism examples already discussed — same shape used for the Milestone page), Facilities list.
5. **Faculty** (`app/faculty/page.tsx`) — grid of Faculty cards, pulling from the `faculty` collection.
6. **Research & Publications** (`app/research/page.tsx`) — list view of the `publications` collection.
7. **News & Events** (`app/news/page.tsx`) — the two real dated events already known (Yuga Dharma seminar 27–28 Feb 2026, Tripadi ceremony 1 Mar 2026) should seed the `events` collection as launch content, not placeholders.
8. **Gallery** (`app/gallery/page.tsx`) — media grid from `gallery-items` collection.
9. **Alumni** (`app/alumni/page.tsx`) — Alumni cards; respect the `consentObtained` field before rendering any record publicly.
10. **Milestone/Legacy** (`app/about/legacy/page.tsx`) — year-by-year convocation Timeline, cross-linked from Alumni.
11. **Awards & Honours** (`app/about/awards/page.tsx`) — reuses Award collection; two real entries already known (Bhavabhūti Puraskāra, Brahmarṣi Puraskāra).
12. **Donate & Support** (`app/donate/page.tsx`) — the real sponsorship tier table is in the Brochure Content Extract; verify the bank account number with management before publishing (flagged ⚠ there).
13. **Contact** (`app/contact/page.tsx`) — routed inquiry form wired to `contact-inquiries` collection.

## Open decision, not yet resolved

The nav in `app/page.tsx` follows this project's planned IA (About / Academics / Admissions / Guru–Śiṣya Tradition / Campus Life / Research / News + Support & Seva CTA). A separately-built homepage mockup used a different nav set (Home / About / Academics / Admissions / Campus life / Support / Gallery + Contact Us). Ask the project owner (Vishweshwara) which is final before finalizing the nav component sitewide — don't guess.

## Privacy note

Current student records (names, photos) should stay internal to the CMS admin panel, not public. See `/docs/VVG-Content-Collection-Checklist.md`, Workstream F, for the full reasoning — these are minors in a residential institution.

## Everything else

Full context, including the printed brochure content, founder biography, donation tiers, real trust-stat numbers, and the content-collection workflow currently running with the Acharyas, is in `/docs`. Read `/docs/ADR-001-VVG-Website-Architecture.md` end to end (including its Addendum section) before making any architectural changes — it explains what was tried and rejected (an earlier AI-generated prototype on rocket.new, discarded for fabricated content and off-brand tokens) so the same mistakes aren't repeated.
