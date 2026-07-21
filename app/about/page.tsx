// About page - built from VVG-Brochure-Content-Extract.md (Vision, Objectives,
// Corner-stones, Founder, Institutional Network) and VVG-Content-Schema.md
// section 7b/8 (Award, Leadership). Reuses the same nav/card/organism
// components as the homepage - see VVG-Design-System-Framework.md.

const objectives = [
  'To preserve the tradition of the Vedas, the Sastras and Yoga in their original form.',
  'To perpetuate the Gurukula tradition in the modern world.',
  'To cultivate a social outlook, spiritual insight in the youth, and scholarship.',
  'To teach the Sastras through the right medium, i.e. samskrtam.',
  'To develop scholars who can converse with modern Indic scholarship and contribute to contemporary discourses.',
  'To protect branches of traditional knowledge that are on the verge of extinction.',
]

const awards = [
  { name: 'Brahmarsi Puraskara', recipient: 'Founder', body: 'Prof. Ramachandra Bhat Kotemane' },
  { name: 'Bhavabhuti Puraskara', recipient: 'Founder', body: 'Prof. Ramachandra Bhat Kotemane' },
]

const network = [
  { name: 'Janaseva Trust', year: '1972', desc: 'Parent trust; runs Janaseva Vidya Kendra residential school' },
  { name: 'Veda Vijnana Gurukulam', year: '1997', desc: 'This institution' },
  { name: 'Veda Vijnana Shodha Samsthana', year: '', desc: 'Affiliated research institute' },
  { name: 'Maitreyi Gurukulam', year: '1994', desc: "Sister institution, women's Vedic education" },
  { name: 'Prabodhini Gurukula', year: '1979', desc: 'Sibling institution, Hariharapura' },
  { name: 'S-VYASA University', year: '', desc: 'Deemed University for Yoga research' },
]

export default function AboutPage() {
  return (
    <main className="bg-ivory-base">
      <section className="px-8 py-16 max-w-2xl mx-auto">
        <h1 className="font-display font-semibold text-3xl text-maroon-primary mb-6">
          Our vision
        </h1>
        <p className="font-reading text-charcoal-text leading-relaxed mb-4">
          Bharata, also known as India, has a proud history of being the birthplace of some
          of the most ancient and rich knowledge systems in the world. It is our sacred duty
          and responsibility to ensure that this vast treasure of Vedic knowledge is
          preserved and passed on to our future generations.
        </p>
        <p className="font-reading text-charcoal-text leading-relaxed">
          Established in 1997, on the auspicious occasion of Janaseva Trust's silver
          jubilee celebrations, Janaseva Trust itself founded in 1972.
        </p>
      </section>

      <section className="bg-parchment px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-semibold text-2xl text-maroon-primary mb-6">
            Objectives of the Gurukulam
          </h2>
          <ol className="space-y-3">
            {objectives.map((obj, i) => (
              <li key={i} className="font-ui text-sm text-charcoal-text flex gap-3">
                <span className="text-gold-interactive font-bold">{i + 1}.</span>
                <span>{obj}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-8 py-16 max-w-2xl mx-auto">
        <h2 className="font-display font-semibold text-2xl text-maroon-primary mb-4">
          Founder
        </h2>
        <h3 className="font-display font-semibold text-lg text-charcoal-text mb-1">
          Prof. Acharya Ramachandra Bhat Kotemane
        </h3>
        <p className="font-devanagari text-sm text-earth-grey mb-4">रामचन्द्र भट्ट कोटेमने</p>
        <p className="font-reading text-charcoal-text leading-relaxed mb-4">
          For over 50 years he has made the Janaseva Parisara his tapobhumi, guiding
          thousands of students academically and personally. A senior Karyakarta of the
          RSS, prime mover of the Karnataka Gurukula Prakalpa, and Director of the
          Varahamihira Vedic Research Center.
        </p>
        <blockquote className="border-l-4 border-gold-decorative pl-4 font-reading italic text-earth-grey">
          "The Gurukula system of education is the best to inculcate a good value
          system in young minds and also for physical and mental development."
        </blockquote>
      </section>

      <section className="bg-maroon-deep px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-semibold text-2xl text-soft-white mb-6">
            Awards &amp; honours
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((a) => (
              <div key={a.name} className="vvg-card !bg-transparent border-gold-decorative">
                <span className="inline-block text-gold-decorative font-ui font-bold text-[10px] mb-2">
                  {a.recipient.toUpperCase()}
                </span>
                <h3 className="font-display font-semibold text-base text-soft-white mb-1">
                  {a.name}
                </h3>
                <p className="font-ui text-xs text-parchment">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-2xl mx-auto">
        <h2 className="font-display font-semibold text-2xl text-maroon-primary mb-2">
          Part of a larger tradition
        </h2>
        <p className="font-ui text-sm text-earth-grey mb-6">
          VVG sits inside a family of institutions under Janaseva Trust and the wider
          Karnataka Gurukula Prakalpa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {network.map((n) => (
            <div key={n.name} className="vvg-card">
              <h3 className="font-display font-semibold text-sm text-maroon-primary mb-1">
                {n.name} {n.year && <span className="text-earth-grey font-ui text-xs">({n.year})</span>}
              </h3>
              <p className="font-ui text-xs text-earth-grey">{n.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
