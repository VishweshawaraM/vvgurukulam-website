// Homepage - built from real content in VVG-Brochure-Content-Extract.md
// and VVG-Design-System-Framework.md's organism mapping for the Home page.
// NOTE: nav items below follow ADR-001's planned IA (About / Academics /
// Admissions / Guru-Sisya Tradition / Campus Life / Research / News + one CTA).
// This still needs to be reconciled against the separately-built homepage
// screenshot shared in chat, which used a different nav set - see ADR-001
// addendum, "Prototype and reference reconciliation".

const navItems = [
  'About',
  'Academics',
  'Admissions',
  'Guru–Śiṣya Tradition',
  'Campus Life',
  'Research & Publications',
  'News & Events',
]

const trustStats = [
  { value: '162', label: 'Students completed' },
  { value: '90', label: 'Currently enrolled' },
  { value: '30', label: 'PhDs completed' },
  { value: '52+', label: 'Years, parent Trust' },
]

const cards = [
  {
    type: 'Subject',
    title: 'Vedānta',
    body: 'Śaṅkara Bhāṣya and Brahmasūtra under sustained traditional guidance.',
  },
  {
    type: 'Faculty',
    title: 'Prof. R. Bhat Kotemane',
    subtitle: 'रामचन्द्र भट्ट कोटेमने',
    body: 'Director, Varāhamihira Vedic Research Center',
  },
  {
    type: 'Event',
    title: 'Tripadi: Abhivadana',
    body: '1 March 2026 · Channenahalli campus',
  },
]

export default function HomePage() {
  return (
    <main>
      <nav className="flex items-center justify-between px-8 py-4 bg-ivory-base border-b border-[#D9D0BF]">
        <span className="font-display font-semibold text-lg text-maroon-primary">VVG</span>
        <ul className="hidden md:flex gap-6 font-ui text-sm text-charcoal-text">
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button className="btn-accent">Support &amp; Seva</button>
      </nav>

      <section className="bg-maroon-deep text-center px-8 py-16">
        <p className="font-devanagari text-gold-decorative text-sm mb-3">
          वेदविज्ञानगुरुकुलम्
        </p>
        <h1 className="font-display font-semibold text-3xl text-soft-white mb-4 max-w-xl mx-auto">
          Guru–Śiṣya Paramparā, lived daily
        </h1>
        <p className="font-reading italic text-parchment max-w-md mx-auto mb-8">
          A residential Gurukula preserving Veda and Śāstra since 1997.
        </p>
        <div className="flex justify-center gap-4">
          <button className="btn-accent">Seek admission</button>
          <button className="border border-soft-white text-soft-white font-ui font-bold text-sm px-6 py-3 rounded">
            Learn our philosophy
          </button>
        </div>
      </section>

      <section className="bg-parchment px-8 py-6 flex flex-wrap justify-around gap-6">
        {trustStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display font-semibold text-2xl text-maroon-primary">
              {stat.value}
            </p>
            <p className="font-ui text-xs text-earth-grey">{stat.label}</p>
          </div>
        ))}
      </section>

      <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <div key={card.title} className="vvg-card">
            <span className="inline-block bg-ivory-base text-gold-interactive font-ui font-bold text-[10px] px-2 py-1 rounded mb-3">
              {card.type.toUpperCase()}
            </span>
            <h3 className="font-display font-semibold text-base text-maroon-primary mb-1">
              {card.title}
            </h3>
            {card.subtitle && (
              <p className="font-devanagari text-sm text-earth-grey mb-1">{card.subtitle}</p>
            )}
            <p className="font-ui text-xs text-earth-grey leading-relaxed">{card.body}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
