# Veda Vijnana Gurukulam - website starter

This is the Phase 2-3 starting scaffold from ADR-001 (Next.js + Payload CMS,
decoupled, bilingual). It is a real starting point, not a finished site -
see the Work Schedule (VVG-Work-Schedule.md) for what's still ahead.

## What's here

- `app/` - the public Next.js frontend. `app/page.tsx` is the homepage,
  built from real content (see VVG-Brochure-Content-Extract.md), styled
  with the exact tokens from the VVG UI Style Guide
  (vishweshawaram.github.io/vvgurukulam.org-V2/), wired up via
  `tailwind.config.ts`.
- `collections/` - every Payload CMS content type, matching
  VVG-Content-Schema.md field-for-field. If the schema doc changes,
  update these files too (and vice versa).
- `payload.config.ts` - ties all collections together and sets up the
  six-role admin system from VVG-Phase0-Decisions.md.

## What this does NOT include yet

- The other 12 page templates beyond the homepage (About, Academics,
  Admissions, Guru-Sisya Tradition, Campus Life, Faculty, Research,
  News, Gallery, Alumni, Donate, Contact) - build these the same way,
  one at a time, against real content as workstreams report back.
- A running database or deployment - see Setup below.
- Real media files - upload these once Content Collection Checklist
  workstreams (A-G) come back with real photos.

## Setup (do this on your own machine, not in a chat sandbox)

1. `npm install`
2. Copy `.env.example` to `.env` and fill in a real Postgres connection
   string and a random secret.
3. `npm run dev` - runs the site at localhost:3000, admin panel at
   localhost:3000/admin.
4. First admin user you create becomes Super Administrator - that's
   the "single person" rollout from VVG-Phase0-Decisions.md, section B.

## Open decision before building further

The nav in `app/page.tsx` follows ADR-001's planned IA. A separately-built
homepage screenshot (shared in chat) used a different nav set. Reconcile
which one is final before building the remaining page templates - see
the ADR-001 addendum, "Prototype and reference reconciliation".
