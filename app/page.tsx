// Homepage - hero rebuilt using the layout structure of the rocket.new
// reference prototype (left-aligned eyebrow -> headline -> subhead -> inline
// stat row -> two CTAs), but with VVG's own approved tokens and 100% real
// content. The reference's stats, testimonial, and events are fabricated
// (documented in VVG-Phase0-Decisions.md, section C) and are NOT reused here.
//
// Button press feedback follows the design-eng review standard: scale(0.97)
// on :active with a fast ease-out transition, so CTAs feel responsive.
//
// TWO ASSETS STILL NEEDED (placeholders below, swap in real files):
//   1. /public/logo.png       - the temple/yajna motif logo, real file needed
//   2. /public/hero-video.mp4 - the hero background video, real file or link needed
// Until real assets land, the logo simply won't render and the hero falls
// back to a static maroon-deep background - nothing else breaks.

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

const exploreLinks = [
  { title: 'Guru-Sisya Tradition', body: 'Our approach to holistic education rooted in the living Vedic tradition.' },
  { title: 'Academics', body: 'A curriculum blending Veda, Sastra and Sanskrit with modern scholarship.' },
  { title: 'Admissions', body: 'Eligibility, process, and how the seven-year residential program works.' },
  { title: 'Campus Life', body: 'Dinacarya, Seva, and daily residential life at the Gurukulam.' },
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
          {/* Real logo file goes here once uploaded: /logo.png */}
          <img
            src="/logo.png"
            alt="Veda Vijnana Gurukulam emblem"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display font-semibold text-lg text-maroon-primary">VVG</span>
        </div>
        <ul className="hidden md:flex gap-6 font-ui text-sm text-charcoal-text">
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button className="bg-gold-interactive text-soft-white font-ui font-bold text-sm px-5 py-2.5 rounded transition-transform duration-150 ease-out active:scale-[0.97]">
          Support &amp; Seva
        </button>
      </nav>

      {/* HERO - left-aligned per reference structure, video background,
          falls back to maroon-deep if video missing */}
      <section className="relative overflow-hidden bg-maroon-deep px-8 py-24 min-h-[620px] flex items-center">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Stronger overlay on the left where the text sits, lighter toward
            the right so the video reads through */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-maroon-deep via-maroon-deep/80 to-maroon-deep/40"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-xl">
          <p className="font-devanagari text-gold-decorative text-4xl mb-2">
            स्वागतम्
          </p>
          <p className="font-ui text-sm tracking-wide text-parchment uppercase mb-6">
            Welcome to Veda Vijnana Gurukulam
          </p>
          <h1 className="font-display font-semibold text-4xl text-soft-white mb-4">
            Guru-Sisya Parampara, lived daily
          </h1>
          <p className="font-reading text-parchment leading-relaxed mb-8 max-w-md">
            A residential Gurukula preserving Veda, Sastra and Sanskrit since 1997 -
            where ancient knowledge is transmitted the way it always has been,
            through daily life with a Guru, not a syllabus alone.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-10">
            {trustStats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display font-semibold text-xl text-gold-decorative">
                  {stat.value}
                </p>
                <p className="font-ui text-xs text-parchment">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="bg-gold-interactive text-soft-white font-ui font-bold text-sm px-6 py-3 rounded transition-transform duration-150 ease-out active:scale-[0.97]">
              Seek admission
            </button>
            <button className="border border-soft-white text-soft-white font-ui font-bold text-sm px-6 py-3 rounded transition-transform duration-150 ease-out active:scale-[0.97]">
              Watch our story
            </button>
          </div>
        </div>
      </section>

      {/* Explore row - maps directly to real nav items, no invented content */}
      <section className="px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-4 bg-parchment">
        {exploreLinks.map((link) => (
          <div key={link.title} className="vvg-card">
            <h3 className="font-display font-semibold text-base text-maroon-primary mb-2">
              {link.title}
            </h3>
            <p className="font-ui text-xs text-earth-grey leading-relaxed">{link.body}</p>
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
