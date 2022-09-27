/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.js',
    './components/**/*.js',
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
