/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['DM Serif Display', 'serif'],
    },
    colors: {
      accent: {
        light: '#fa3c61',
        DEFAULT: '#fe355c',
      },
      primary: '#041a27',
      secondary: '#e2e8f0',
      blue: {
        light: '#0793db',
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
        DEFAULT: '10px 10px 25px #041a2790',
      },
    },
  },
  plugins: [],
};
