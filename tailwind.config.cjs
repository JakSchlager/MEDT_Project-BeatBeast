/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
          '100': '32rem',
          '102': '36rem',
          '104': '40rem',
          '106': '46rem',
          '107': '47.5rem',
          '108': '50rem',
          '110': '54rem',
          '112': '56rem',
          '113': '58rem'
          
      },
    },
  },
  plugins: [],
}
