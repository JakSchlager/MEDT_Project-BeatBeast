/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
          '98': '28rem',
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

      fontSize: {
        '10xl': '10rem', 
        '12xl': '12rem',
        '14xl': '14rem',
        '16xl': '16rem',
        '18xl': '18rem',
        '20xl': '20rem'
      },

      backgroundImage: {
        'manOnMobileApp': "url('/img/manOnBeatBeast.png')"
      }

    },
  },
  plugins: [],
}
