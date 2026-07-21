# VVG Website — Work Schedule

**Basis:** ADR-001 (architecture) and the Design System Framework are already complete. This schedule covers everything from here to launch.
**Capacity:** ~2–3 hrs/day, solo, alongside your teaching schedule.
**Assumed start:** this week (16 Jul 2026). Adjust dates if you start later — the sequence and durations stay the same.

---

## How the estimate was built

At 2–3 hrs/day, treat a realistic week as **~15 hrs of focused work**, not the 25–30 hrs an agency would assume. Two things offset the slower daily pace: the design system and architecture are already done (that's normally 4–6 weeks of the original proposal's timeline, already banked), and AI-assisted workflows compress the CMS/frontend build meaningfully versus hand-coding.

Target: **launch in ~20 weeks (~5 months)** — mid-December 2026. This is a plan, not a promise; festival season and teaching-heavy weeks will shift it, and that's fine — the schedule has buffer built in at two points.

---

## Phase-by-phase

| Phase | Duration | Weeks | What ships |
|---|---|---|---|
| **0. Close out planning** | 1.5 wks | Wk 1–2 | ADR-001's 4 remaining action items: content schema doc, role sign-off, locale-default decisions, prototype reconciliation |
| **1. Page-level UI design** | 4 wks | Wk 2–6 | All 13 page types designed against the Design System Framework's mapping table (Home, About, Academics, Admissions, Guru–Śiṣya, Campus Life, Faculty, Research, News, Gallery, Alumni, Donate, Contact) |
| **2. CMS build (Payload)** | 3 wks | Wk 6–9 | Collections for Subject, Faculty, Publication, News, Event, Alumni; the six roles wired to real permissions; constrained rich-text editor per the framework's enforcement rule |
| **3. Frontend build (Next.js)** | 8 wks | Wk 9–17 | Universal Card, Hero, Timeline, Trust-stat, Form module, Nav — built once, then every page assembled from them; wired to the CMS |
| **4. Bilingual content population** | *runs parallel to Phase 3, finishes Wk 18* | Wk 10–18 | English + Devanagari content for every section, migrated from the current site plus new writing |
| **5. Testing & QA** | 2 wks | Wk 18–20 | Cross-device, accessibility checklist from the Design Framework, form testing, Devanagari rendering check |
| **6. Soft launch** | 0.5 wk | Wk 20 | Share with Gurukulam management/select students before public cutover |
| **7. Launch** | 0.5 wk | Wk 20–21 | DNS cutover, monitoring, retire the old site |

Total: **~20–21 weeks**, i.e. roughly **mid-December 2026**.

---

## Suggested weekly rhythm

With one person and 2–3 hrs/day, context-switching is the real enemy — not the hours. A fixed rhythm protects focus:

| Days | Focus |
|---|---|
| Mon / Wed / Fri | Build (CMS or frontend, whichever phase is active) |
| Tue / Thu | Design or content (page mockups, bilingual writing) |
| Sat | Review + buffer — catch up, or push ahead if the week went well |
| Sun | Off |

This gives ~5 working days/week × 2.5 hrs ≈ 12.5 hrs/week baseline, with Saturday as flex capacity for the weeks that need it.

---

## Built-in buffer

Two deliberate buffer points, not counted separately above but absorbed into the ranges:

- **End of Phase 3 (frontend build)** — the largest single phase; if it overruns, it eats into Phase 4's parallel content window rather than pushing the whole schedule.
- **Before Phase 6 (soft launch)** — a natural pause to absorb any teaching-season disruption without moving the launch date.

If a festival period or exam season falls inside this window, better to extend Phase 1 or Phase 3 by a week than to compress Testing — QA is the phase most worth protecting.

---

## Milestone checkpoints (report to yourself / management)

- **End of Wk 2:** Planning closed, schema signed off — go/no-go to start design
- **End of Wk 6:** All 13 pages designed — go/no-go to start build
- **End of Wk 9:** CMS live internally, roles working
- **End of Wk 17:** Frontend feature-complete
- **End of Wk 20:** QA passed, soft-launched
- **Wk 21:** Public launch

---

## What this schedule assumes

- No major scope changes mid-build (new page types, new roles) — if VVG management adds something significant, it extends Phase 1 or 3, not the whole timeline silently.
- Content (especially Sanskrit/Devanagari text for Guru–Śiṣya Tradition, Academics, and faculty bios) is the thing most likely to slip, since it depends on others' input, not just your own build time — worth starting that collection in Week 1, ahead of Phase 4's formal start.
