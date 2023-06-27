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
      'primary-1': '#9bc5cc',
      'primary-2': '#9db4c0',
      'primary-3': '#92a6ab',
      'secondary-1': '#ee6c62',
      'secondary-2': '#e82064',
      'secondary-3': '#bc2f83',
      'gray-1': '#c8d3c5',
      'gray-2': '#d9d8d8',
      'gray-3': '#f1f2f0',
      accent: '#feea63',
      light: '#edede5',
      dark: '#231f20',
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {},
    fontFamily: {
      source: 'var(--font-source), Arial, sans-serif',
    },
  },
  plugins: [],
}
