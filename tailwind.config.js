/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "lato": 'Lato, sans-serif',
      },
      colors: {
        // primary
        bkg: '#0a0510',
        primary: '#00df9a',
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
