module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: 'Montserrat'
      },
      colors: {
        'accent-1': '#333',
        yolk: "#fed531"
      },
      inset: {
        '-1': '-0.25rem',
        '-2': '-0.5rem',
        '-3': '-0.75rem',
        '-4': '-1rem',
        '-5': '-1.25rem',
        '-6': '-1.5rem',
        '-8': '-2rem',
        '-10': '-2.5rem',
        '-12': '-3rem',
        '-14': '-3.5rem',
        '-16': '-4rem',
        '-20': '-5rem',
        '-24': '-6rem',
        '-28': '-7rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem',
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
        '20': '5rem',
        '24': '6rem',
        '28': '7rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
