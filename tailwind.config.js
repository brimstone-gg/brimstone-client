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
        'navbar-50': 'rgba(14, 23, 38, 0.5)',
        'nav-text': '#89a0b5',
        'nav-text-hover': '#bbc9e0',
        'nav-text-active': '#d7e1ef',
        'general-background': '#151e32',
        'ice-white': '#ece8e1',
        'cyan-blue': '#0f1923',
        'overlay-red': '#ff4655',
        'twitch-purple': '#9146FF',
        'main-text': '#d7e1ef',
        lime: '#00ff00',
        'badge-admin': '#800000',
        'badge-mod': '#006580',
        'badge-support': '#26a726',
        'badge-user': '#928989',
        'search-nav-border': '#222c3c',
        'card-border': '#233146'
      },
      spacing: {
        '015': '0.15rem',
        '0175': '0.175rem',
        '02': '0.2rem',
        '03': '0.3rem',
        '0375': '0.375rem',
        '04': '0.4rem',
        '1125': '1.125rem',
        '14': '1.4rem',
        '70p': '70%'
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
      },
      inset: {
        '20': '20%'
      },
      borderWidth: {
        '1': '1px',
        '3': '3px'
      }
    }
  }
}
