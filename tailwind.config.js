/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      'shadow-1': '0px 5px 30px -30px rgba(31, 31, 31, 0.25)',
      'shadow-2': '0px 4px 14px -1px rgba(0, 0, 0, 0.15)',
    },
    colors: {
      'blue-1': '#001E55',
      'blue-2': '#305A83',
      'blue-3': '#6685A3',
      'green-1': '#91C319',
      'green-2': '#AED736',
      'green-3': '#CBEE66',
      'gray-1': '#706F6F',
      'gray-2': '#A5A5A4',
      'gray-3': '#EDEDED',
      accent: '#E98600',
      light: '#F5F5F5',
      foreground: '#535353',
      white: '#FFFFFF',
    },
    extend: {},
    fontFamily: {
      source: ['var(--font-source), Arial, sans-serif'],
    },
    fontSize: {
      h1: ['42px', { lineHeight: '42px' }],
      h2: ['36px', { lineHeight: '40px' }],
      h3: ['22px', { lineHeight: '29px' }],
      h4: ['32px', { lineHeight: '35px' }],
      h5: ['18px', { lineHeight: '25px' }],
      bold: ['15px', { lineHeight: '25px' }],
      regular: ['15px', { lineHeight: '25px' }],
      small: ['13px', { lineHeight: '22px' }],
      cta: ['14px', { lineHeight: '14px' }],
    },
  },
  plugins: [],
}

// gradient-1 -> background: linear-gradient(180deg, #99CC00 0%, #71A600 100%);
// gradient-2 -> background: linear-gradient(143.55deg, rgba(153, 204, 0, 0.7) 16.65%, rgba(91, 148, 0, 0.9) 69.35%);
