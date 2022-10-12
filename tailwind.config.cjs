/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontFamily: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 34,
      '3xl': 42,
      '4xl': 50,
      '5xl': 58,
    },
    colors: {
      
      transparent: 'transparent',
      black: '#000',
      white: '#fff',

      gray: {
        800: '#E1E1E6',
        500: '#7C7C8A',
        200: '#202024',
        100: '#121214',
      
      },
      violet: {
        700: '#C292FF',
        500: '#9C5EEA',
      },

    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
