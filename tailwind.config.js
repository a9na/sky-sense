module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'cold': "url('./assets/cold-bg.jpeg')",
        'warm': "url('./assets/warm-bg.jpeg')",
      },
      textShadow: {
        'default': '1px 3px rgba(0, 0, 0, 0.25)',
        'large': '3px 6px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        'default': '0px 0px 8px rgba(0, 0, 0, 0.25)',
        'large': '3px 6px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'xl': '16px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
