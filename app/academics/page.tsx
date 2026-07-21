// Academics page - built from VVG-Brochure-Content-Extract.md ("Academics page"
// section) and VVG-Content-Schema.md section 1 "Subject". Reuses the same
// vvg-card component and tokens as Home and About - see
// VVG-Design-System-Framework.md, "Academics / Subjects" row.

const pillars = [
  { name: 'Veda', desc: 'Complete oral chanting of one Veda-sakha and guidance for understanding the meaning.' },
  { name: 'Vijnana', desc: 'Sastras - Purvamimamsa, Uttaramimamsa (Vedanta), Vyakarana, Sankhya-yoga, Nyaya-vaisesika, Ayurveda, Sahitya.' },
  { name: 'Yoga', desc: 'Yoga-asana, Pranayama, Kriya - practical training alongside academic study.' },
  { name: 'Krsi', desc: 'Agriculture - practical, hands-on cultivation as part of daily life and curriculum.' },
  { name: 'Kala', desc: 'Basic self-defence techniques, Yajna-vidhi, and traditional arts.' },
]

const theoreticalSyllabus = [
  'Vedas - complete oral chanting of one Veda-sakha and guidance for understanding the meaning',
  'Sastras - Purvamimamsa, Uttaramimamsa (Vedanta), Vyakarana, Basic Sankhya-yoga, Nyaya-vaisesika, Ayurveda, Sahitya',
  'Basic English and Computers',
]

const practicalSyllabus = [
  'Yoga-asana, Pranayama, Kriya',
  'Agriculture',
  'Basic self-defence techniques',
  'Yajna-vidhi',
]

export default function AcademicsPage() {
  return (
    <main className="bg-ivory-base">
      <section className="px-8 py-16 max-w-2xl mx-auto text-center">
        <h1 className="font-display font-semibold text-3xl text-maroon-primary mb-4">
          A five-faceted education
        </h1>
        <p className="font-reading text-charcoal-text leading-relaxed">
          The medium of instruction and communication is Samskrtam. Competence is examined
          through Sabhas - Ganapati-sabha, Vijaya-sabha, Sankranti-sabha, and Yugadi-sabha -
          adopting Pravacana and Salaka systems.
        </p>
      </section>

      <section className="px-8 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
        {pillars.map((p) => (
          <div key={p.name} className="vvg-card">
            <h3 className="font-display font-semibold text-base text-maroon-primary mb-2">
              {p.name}
            </h3>
            <p className="font-ui text-xs text-earth-grey leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </section>

      <section className="bg-parchment px-8 py-16">
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display font-semibold text-xl text-maroon-primary mb-4">
              Theoretical syllabus
            </h2>
            <ol className="space-y-2">
              {theoreticalSyllabus.map((item, i) => (
                <li key={i} className="font-ui text-sm text-charcoal-text flex gap-3">
                  <span className="text-gold-interactive font-bold">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="font-display font-semibold text-xl text-maroon-primary mb-4">
              Practical syllabus
            </h2>
            <ol className="space-y-2">
              {practicalSyllabus.map((item, i) => (
                <li key={i} className="font-ui text-sm text-charcoal-text flex gap-3">
                  <span className="text-gold-interactive font-bold">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 max-w-2xl mx-auto">
        <h2 className="font-display font-semibold text-2xl text-maroon-primary mb-6 text-center">
          Core subjects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="vvg-card">
            <h3 className="font-display font-semibold text-base text-maroon-primary mb-1">Veda Adhyayana</h3>
            <p className="font-ui text-xs text-earth-grey leading-relaxed">
              Traditional Vedic recitation and study, preserved in oral transmission exactly as handed down.
            </p>
          </div>
          <div className="vvg-card">
            <h3 className="font-display font-semibold text-base text-maroon-primary mb-1">Sanskrit</h3>
            <p className="font-ui text-xs text-earth-grey leading-relaxed">
              The language as living instrument - grammar, composition, and fluency, not merely translation.
            </p>
          </div>
          <div className="vvg-card">
            <h3 className="font-display font-semibold text-base text-maroon-primary mb-1">Vedanta</h3>
            <p className="font-ui text-xs text-earth-grey leading-relaxed">
              Sankara Bhasya, Brahmasutra, and Upanisadic study under sustained traditional guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
