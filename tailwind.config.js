/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'max': {'max': '639px'},
      },
      height: {
        '100': '100vh',
        '40': '40rem',
        '30': '30rem',
        '25': '25rem',
        '17': '4.5em',
        '10': '10em',
        '8': '8em',

      },
      width: {
        '100': '100vw',
        '40': '40rem',
        '35': '35em',
        '30': '30rem',
        '25': '25rem',
        '17': '4.5em',
        '10': '10em',
        '8': '8em',
      },
      borderWidth:{
        '17': '17px',
      },
      boxShadow:{
        'inset1': 'inset 0px -8px 2px 0 rgba(0, 0, 0, 0.3)',
        'inset2': 'inset 0 7px 2px 0 rgba(0, 0, 0, 0.2)',
      },
      colors: {
        'dark-b-100': 'hsl(214, 47%, 23%)',
        'dark-b-200': 'hsl(237, 49%, 15%)',
        'gray-outline':'hsl(217, 16%, 45%)',
        'dark': 'hsl(229, 25%, 31%)',
        'score': 'hsl(229, 64%, 46%)',
        'paper-c1': 'hsl(230, 89%, 65%)',
        'paper-c2': 'hsl(230, 89%, 62%)',
        'Scissor-c1': 'hsl(39, 89%, 49%)',
        'Scissor-c2': 'hsl(40, 84%, 53%)',
        'rock-c1': 'hsl(349, 71%, 52%)',
        'rock-c2': 'hsl(349, 70%, 56%)',
        'black-50' : 'rgba(0, 0, 0, 0.7)',
        },
        backgroundImage: {
          'radial': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        },
        spacing: {
          '45': '11.5rem',
        },
        gridColumn: {
          'span-0': '1 / span 2',
          'none': 'none',
        },
        gridTemplateColumns: {
          'auto': 'repeat(3, auto)',
        },
  fontFamily: {
    sans: ['Barlow Semi Condensed', 'sans-serif'],
  },
  plugins: [],
}
}
}
