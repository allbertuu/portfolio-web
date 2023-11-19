/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    colors: {
      accent: '#fe355c',
      primary: '#041a27',
      secondary: '#e2e8f0',
      blue: {
        light: '#0ea5e9',
        DEFAULT: '#0284c7',
      },
      black: '#000',
      white: '#FFF',
      muted: '#e2e8f080',
      transparent: 'transparent',
    },

    extend: {
      backgroundImage: {
        'red-gradient': 'linear-gradient(70deg, #611d2c, #da0941)',
        'slate-gradient': 'linear-gradient(240deg, #041722, #041a27)',
      },
      dropShadow: {
        xl: '0 40px 70px rgb(218 9 65 / 0.5)',
      },
    },
  },
  plugins: [],
};
