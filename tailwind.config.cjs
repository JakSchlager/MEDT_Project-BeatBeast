/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
          '82': '22rem',
          '84': '22.4rem',
          '85': '24.8rem',
          '86': '26rem',
          '98': '28rem',
          '100': '32rem',
          '101': '34rem',
          '102': '36rem',
          '104': '40rem',
          '105': '42.5rem',
          '106': '46rem',
          '107': '47.5rem',
          '108': '50rem',
          '110': '54rem',
          '112': '56rem',
          '113': '58rem',
          '114': '61rem',
          '116': '62rem',
          '118': '64rem',
          '120': '66rem',
          '122': '68rem',
          '124': '70rem',
          '135': '100rem'        
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
      },

      colors: {
        '825': '#2E2E2E',
        '850': '#202020'
      }

    },
  },
  plugins: [
    function ({addUtilities}) {
      const extendUnderline = {
          '.underline': {
              'textDecoration': 'underline',
              'text-decoration-color': 'red',
          },
      }
      addUtilities(extendUnderline)
  }
  ],
}
