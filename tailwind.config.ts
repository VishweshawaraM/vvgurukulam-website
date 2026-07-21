import type { Config } from 'tailwindcss'

// Tokens transcribed 1:1 from the VVG UI Style Guide
// (vishweshawaram.github.io/vvgurukulam.org-V2/) and VVG-Design-System-Framework.md.
// Do not add new colors here without updating that style guide first -
// see the Framework's "governance" section.
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'maroon-primary': '#6B1F2A',
        'maroon-deep': '#3D1118',
        'gold-decorative': '#B68A3A',
        'gold-interactive': '#8A5A1E',
        'ivory-base': '#F7F1E5',
        'parchment': '#EDE1CC',
        'charcoal-text': '#211D19',
        'earth-grey': '#6B6258',
        'grove-green': '#44563C',
        'soft-white': '#FFFDF8',
        'state-success': '#44563C',
        'state-warning': '#9C6B1F',
        'state-error': '#8C2F2F',
        'state-info': '#3D5A66',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        reading: ['"Source Serif 4"', 'serif'],
        ui: ['Manrope', 'sans-serif'],
        devanagari: ['"Noto Serif Devanagari"', 'serif'],
        'devanagari-verse': ['"Tiro Devanagari Sanskrit"', 'serif'],
      },
      spacing: {
        // 8px base unit scale, per the Framework's cross-page consistency rules
        '2': '8px', '4': '16px', '6': '24px', '8': '32px', '12': '48px', '16': '64px', '24': '96px',
      },
      borderRadius: {
        DEFAULT: '8px',
        card: '12px',
      },
    },
  },
  plugins: [],
} satisfies Config
