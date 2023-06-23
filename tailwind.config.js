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
      'blue-1': '#9bc5cc',
      'blue-2': '#9db4c0',
      'blue-3': '#92a6ab',
      'red-1': '#ee6c62',
      'red-2': '#bc2f83',
      'red-3': '#e82064',
      'gray-1': '#c8d3c5',
      'gray-2': '#d9d8d8',
      'gray-3': '#f1f2f0',
      accent: '#feea63',
      light: '#F5F5F5',
      foreground: '#231f20',
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {},
    fontFamily: {
      source: 'var(--font-source), Arial, sans-serif',
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
      cta: ['16px', { lineHeight: '25px' }],
    },
  },
  plugins: [],
}
