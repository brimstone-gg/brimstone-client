const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [ './src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}' ],
  theme: {
    zIndex: {
      '1': 1,
      '10': 10
    },
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          '500': '#bdc2ca'
        },
        navbar: '#0e1726',
        'nav-text': '#89a0b5',
        'nav-text-hover': '#bbc9e0',
        'nav-text-active': '#d7e1ef',
        'general-background': '#151e32',
        'ice-white': '#ece8e1',
        'cyan-blue': '#0f1923',
        'overlay-red': '#ff4655',
        'twitch-purple': '#9146FF',
        'main-text': '#bbc9e0',
        lime: '#00ff00',
        'badge-admin': '#800000',
        'badge-mod': '#006580',
        'badge-support': '#26a726',
        'badge-user': '#928989'
      },
      spacing: {
        '015': '0.15rem',
        '0175': '0.175rem',
        '02': '0.2rem',
        '03': '0.3rem',
        '0375': '0.375rem',
        '04': '0.4rem',
        '14': '1.4rem'
      },
      height: {
        '14': '3.5rem'
      },
      maxWidth: {
        '10': '10rem'
      },
      minWidth: {
        '10': '10rem'
      },
      borderRadius: {
        '4': '1rem'
      },
      screens: {
        xs: { max: '512px' }
      }
    }
  }
}
