module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        Pt : ["PT-Sans, sans-serif"],
        Open : ["Open Sans, sans-serif"],
      },
      colors: {
        'theme-blue': '#5515ef',
        'theme-blue-dark': '#3c01ca',
        'theme-pink': '#eb589e',
      },
      boxShadow:{
        'theme-1' : '0 0 60px -15px rgba(0, 0, 0, 0.7)',
        'theme-2' : '15px 0 40px -5px rgba(224, 38, 138, 3)',
        'theme-h-1' : '0 0 23px 10px rgba(224, 38, 138, 3)',
        'color-change': 'color-change 5s',
      },
      fontSize: {
        '10xl': '10rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem',
        '16xl': '16rem',
        '17xl': '17rem',
        '18xl': '18rem',
        '19xl': '19rem',
        '20xl': '20rem',
      },
      keyframes: {
          wiggle: {
              '0%, 100%': {
                  transform: 'rotate(-3deg)'
              },
              '50%': {
                  transform: 'rotate(3deg)'
              },
          },
          'color-change': {
            '0%': {
              background: '#000',
            },
            '100%': {
              background: '#fff',
            }
          },
      },
      animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
          'spin-slow-sm': 'spin 10s linear infinite',
          'spin-slow-xs': 'spin 80s linear infinite',
          'color-change': 'color-change 5s',
      },
    },
    borderWidth:{
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '10': '10px',
      '12': '12px',
      '14': '14px',
      '16': '16px',
    }
  },
  variants: {
    extend: {
      scale: ['active', 'group-hover'],
      rotate: ['group-hover'],
      inset: ['hover', 'group-hover'],
      animation: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
