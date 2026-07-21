# VVG Content Schema

**Purpose:** Field-by-field CMS schema for every content type, per ADR-001 action item 1. This is what gets built as Payload CMS collections in Phase 2 of the work schedule.
**Convention:** Every text field marked "EN/SA" carries both an English and a Sanskrit (Devanagari) value — per the bilingual strategy in ADR-001, these are fields on one record, not separate translated pages.

---

## 1. Subject (Academics)

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Title | Text | EN/SA | Yes | e.g. "Vedānta" / वेदान्तः |
| Slug | Text | — | Yes | URL segment, auto-generated from EN title |
| Summary | Rich text (constrained) | EN/SA | Yes | Card-level description, ~2–3 sentences |
| Full description | Rich text (constrained) | EN/SA | No | Long-form, for the subject's own page |
| Related faculty | Relation → Faculty | — | No | Multi-select |
| Related publications | Relation → Publication | — | No | Multi-select |
| Order | Number | — | Yes | Controls display order in the Academics grid |
| Cover image | Media | — | No | 3:2 ratio per design system |

## 2. Faculty

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Name | Text | EN/SA | Yes | Noto Serif Devanagari renders the SA value |
| Photo | Media | — | Yes | Square crop |
| Credentials | Text | EN/SA | Yes | e.g. "M.A. Sanskrit, Krishna Yajur Veda" |
| Bio | Rich text (constrained) | EN/SA | No | |
| Subjects taught | Relation → Subject | — | No | Multi-select, renders as Tags |
| Publications | Relation → Publication | — | No | Auto-populated via reverse lookup |
| Contact (internal only) | Email/Phone | — | No | Not shown publicly, used for CMS notifications |
| Active | Boolean | — | Yes | Hides departed faculty without deleting records |

## 3. Publication (Research & Publications)

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Title | Text | EN/SA | Yes | |
| Type | Select | — | Yes | Book / Article / Conference paper / Manuscript / Digital resource |
| Author(s) | Relation → Faculty | — | Yes | Multi-select |
| Abstract | Rich text | EN/SA | No | |
| File | Media (PDF) | — | No | Downloadable |
| External link | URL | — | No | If hosted elsewhere (journal, DOI) |
| Publish date | Date | — | Yes | |
| Tag | Select | — | Yes | Drives the Tag component styling |

## 4. News

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Headline | Text | EN/SA | Yes | |
| Body | Rich text (constrained) | EN/SA | Yes | |
| Cover image | Media | — | No | |
| Category tag | Select | — | Yes | News (per Tags & States) |
| Status | Select | — | Yes | Draft / Published — Draft never renders publicly |
| Publish date | Date | — | Yes | Can be scheduled forward |
| Author (internal) | Relation → User | — | Yes | Tracks which role posted it |

## 5. Event

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Title | Text | EN/SA | Yes | |
| Description | Rich text | EN/SA | No | |
| Start date/time | DateTime | — | Yes | Drives auto-expiry — this is the fix for the current site's stale-event problem |
| End date/time | DateTime | — | No | |
| Venue | Text | EN/SA | Yes | |
| Cover image | Media | — | No | |
| Registration link/form | URL or Relation → Form | — | No | |
| Status | Select | — | Yes | Draft / Published / Archived (auto-archives after end date) |

## 6. Alumni

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Name | Text | EN/SA | Yes | |
| Photo | Media | — | No | |
| Batch year | Number | — | Yes | |
| Current role | Text | EN | Yes | |
| Current organization | Text | EN | No | |
| Quote | Rich text | EN | No | Testimonial-style, per Prabodhini reference pattern |
| Featured | Boolean | — | Yes | Controls homepage/Alumni-page prominence |

## 7. Milestone / Convocation Year (About → Legacy, cross-linked from Alumni)

**New — your idea, added 2026.** Year-by-year institutional record: how many students graduated each year, convocation photos where available. Reuses the Timeline organism already built for Dinacharya — no new component needed.

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Year | Number | — | Yes | e.g. 2019 |
| Convocation date | Date | — | No | Exact ceremony date, if known |
| Graduating batch size | Number | — | Yes | Count of students who completed that year |
| Group/convocation photo | Media | — | No | Optional — older years may not have one |
| Highlights | Rich text | EN/SA | No | Notable achievements that batch/year, guest of honour, etc. |
| Notable alumni | Relation → Alumni | — | No | Links this year to specific Alumni records |
| Photo available | Boolean | — | Yes | Drives whether the Timeline organism shows an image or a count-only entry — keeps the page honest about older years with thin records |

## 8. Leadership / Founder (About)

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Name | Text | EN/SA | Yes | |
| Role/title | Text | EN/SA | Yes | e.g. Guru, Principal, Trustee |
| Photo | Media | — | No | |
| Bio | Rich text | EN/SA | No | |
| Order | Number | — | Yes | Manual display order (seniority, not alphabetical) |

## 8b. Award / Honour (About → Awards & Honours — new, your idea)

Covers both institutional awards and individual honours (founder, Acharyas). Same pattern as Amma.org's "Awards & Honours" section.

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Award name | Text | EN/SA | Yes | e.g. "Brahmarṣi Puraskāra" |
| Recipient type | Select | — | Yes | Institution / Founder / Acharya / Student |
| Recipient | Relation → Faculty | — | No | Only if an individual, not the institution |
| Awarding body | Text | EN | Yes | Who conferred it |
| Year | Number | — | Yes | |
| Description/citation | Rich text | EN/SA | No | What it was awarded for |
| Certificate/photo | Media | — | No | Scan or ceremony photo |
| Category | Select | — | No | Academic Excellence / Spiritual & Cultural / Research / Service |

**Known real entries to seed immediately:**
- Bhavabhūti Puraskāra — Founder (Prof. Ramachandra Bhat Kotemane)
- Brahmarṣi Puraskāra — Founder
- State-level Academic Excellence competition award — Institution, held 4 consecutive years ⚠ (exact years and awarding body need confirming with your Acharya — good candidate for Workstream G below)

## 9. Gallery item

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Media | Image or video | — | Yes | |
| Caption | Text | EN/SA | No | |
| Category | Select | — | Yes | Campus / Festivals / Students / Events / Videos |
| Related event | Relation → Event | — | No | Optional link back |

## 10. Admissions Application (form submission)

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Student name | Text | — | Yes | |
| Parent/guardian contact | Text/Email/Phone | — | Yes | |
| Country/location | Text | — | Yes | Drives India vs. international routing |
| Age/grade | Text | — | Yes | |
| Message | Textarea | — | No | |
| Status | Select | — | Yes | New / In review / Contacted / Closed — visible to Office Staff role only |
| Submitted date | DateTime | — | Yes | Auto-set |

## 11. Contact Inquiry (form submission)

| Field | Type | Locale | Required | Notes |
|---|---|---|---|---|
| Name | Text | — | Yes | |
| Email | Email | — | Yes | |
| Inquiry type | Select | — | Yes | General / Admissions / Press / Donor — routes to the right role's inbox view |
| Message | Textarea | — | Yes | |
| Status | Select | — | Yes | New / Responded / Closed |

---

## Global settings (site-wide, not a repeatable content type)

| Field | Type | Locale | Notes |
|---|---|---|---|
| Site title | Text | EN/SA | |
| Trust-stat numbers | Repeatable (label + number) | EN/SA | Powers the homepage Trust-stat strip |
| Homepage hero media | Media | — | |
| Donation fund designations | Repeatable (label + description) | EN/SA | Powers Donate & Support page |
| Footer contact details | Text/Address | EN/SA | |

---

## Next step

This schema is what Phase 2 (CMS build) implements as Payload collections. No changes needed before Phase 1 (page design) starts — page design can proceed against this schema as-is.
