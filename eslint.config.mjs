export default {
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended'],
  plugins: ['tailwindcss', 'unused-imports'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
  },
}
