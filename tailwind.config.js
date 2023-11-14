/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      elements: 'var(--border-radius-elements)',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    boxShadow: {
      1: '0px 0px 30px -8px rgba(31, 31, 31, .25)',
      2: '0px 3px 5px -1px rgba(0, 0, 0, 0.1);',
      '2-hover': '0px 4px 14px -1px rgba(0, 0, 0, 0.15);',
    },
    colors: {
      'primary-1': 'var(--primary-1)',
      'primary-2': 'var(--primary-2)',
      'primary-3': 'var(--primary-3)',
      'primary-text': 'var(--primary-text)',
      'secondary-1': 'var(--secondary-1)',
      'secondary-2': 'var(--secondary-2)',
      'secondary-3': 'var(--secondary-3)',
      'secondary-text': 'var(--secondary-text)',
      'tertiary-1': 'var(--tertiary-1)',
      'tertiary-2': 'var(--tertiary-2)',
      'tertiary-3': 'var(--tertiary-3)',
      'tertiary-text': 'var(--tertiary-text)',
      dark: 'var(--dark)',
      light: 'var(--light)',
      accent: 'var(--accent)',
      black: '#000000',
      white: '#FFFFFF',
    },
    fontFamily: {
      source: 'var(--font-source), Arial, sans-serif',
    },
  },
  plugins: [],
}
