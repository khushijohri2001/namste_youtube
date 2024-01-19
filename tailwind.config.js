/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,js}"
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}

