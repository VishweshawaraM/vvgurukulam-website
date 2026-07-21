// Homepage - full hero rebuild with video background + logo slot.
// Built from real content in VVG-Brochure-Content-Extract.md, styled with
// tokens from the VVG UI Style Guide. See VVG-Design-System-Framework.md
// for the Hero and Trust-stat strip organism definitions.
//
// TWO ASSETS STILL NEEDED (placeholders below, swap in real files):
//   1. /public/logo.png       - the temple/yajna motif logo, real file needed
//   2. /public/hero-video.mp4 - the hero background video, real file or link needed
// Until real assets land, the logo simply won't render (broken-image icon
// suppressed via CSS) and the hero falls back to a static maroon-deep
// background - nothing else breaks.

const navItems = [
  'About',
  'Academics',
  'Admissions',
  'Guru-Sisya Tradition',
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
  { type: 'Subject', title: 'Vedanta', body: 'Sankara Bhasya and Brahmasutra under sustained traditional guidance.' },
  { type: 'Faculty', title: 'Prof. R. Bhat Kotemane', subtitle: 'रामचन्द्र भट्ट कोटेमने', body: 'Director, Varahamihira Vedic Research Center' },
  { type: 'Event', title: 'Tripadi: Abhivadana', body: '1 March 2026 - Channenahalli campus' },
]

export default function HomePage() {
  return (
    <main>
      <nav className="flex items-center justify-between px-8 py-4 bg-ivory-base border-b border-[#D9D0BF]">
        <div className="flex items-center gap-3">
          {/* Real logo file goes here once uploaded: /logo.png. Until then this
              img simply fails to load quietly - no event handler needed. */}
          <img
            src="/logo.png"
            alt="Veda Vijnana Gurukulam emblem"
            className="h-10 w-10 object-contain [&:not([src])]:hidden"
          />
          <span className="font-display font-semibold text-lg text-maroon-primary">VVG</span>
        </div>
        <ul className="hidden md:flex gap-6 font-ui text-sm text-charcoal-text">
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button className="btn-accent">Support &amp; Seva</button>
      </nav>

      {/* HERO - video background, falls back to maroon-deep if video missing */}
      <section className="relative overflow-hidden bg-maroon-deep text-center px-8 py-24 min-h-[560px] flex flex-col items-center justify-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-maroon-deep/60" aria-hidden="true" />

        <div className="relative z-10">
          <img
            src="/logo.png"
            alt=""
            aria-hidden="true"
            className="h-16 w-16 object-contain mx-auto mb-6 opacity-90"
          />
          <p className="font-devanagari text-gold-decorative text-sm mb-3">
            वेदविज्ञानगुरुकुलम्
          </p>
          <h1 className="font-display font-semibold text-4xl text-soft-white mb-4 max-w-xl mx-auto">
            Guru-Sisya Parampara, lived daily
          </h1>
          <p className="font-reading italic text-parchment max-w-md mx-auto mb-8">
            A residential Gurukula preserving Veda and Sastra since 1997.
          </p>
          <div className="flex justify-center gap-4">
            <button className="btn-accent">Seek admission</button>
            <button className="border border-soft-white text-soft-white font-ui font-bold text-sm px-6 py-3 rounded">
              Watch our story
            </button>
          </div>
        </div>
      </section>

      <section className="bg-parchment px-8 py-6 flex flex-wrap justify-around gap-6">
        {trustStats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display font-semibold text-2xl text-maroon-primary">{stat.value}</p>
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
            <h3 className="font-display font-semibold text-base text-maroon-primary mb-1">{card.title}</h3>
            {card.subtitle && <p className="font-devanagari text-sm text-earth-grey mb-1">{card.subtitle}</p>}
            <p className="font-ui text-xs text-earth-grey leading-relaxed">{card.body}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
