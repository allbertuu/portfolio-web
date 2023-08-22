/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Titillium Web", "sans-serif"],
    },
    colors: {
      red: {
        50: "#fff0f1",
        100: "#ffe2e6",
        200: "#ffcad2",
        300: "#ff9fad",
        400: "#ff6983",
        500: "#fe355c",
        600: "#ec1247",
        700: "#da0941",
        800: "#a70a39",
      },
      slate: {
        50: "#f8fafc",
        600: "#041a27",
        700: "#041722",
        800: "#04131c",
      },
      sky: {
        500: "#0ea5e9",
        600: "#0284c7",
      },
      white: "#FFF",
      black: "#000",
      muted: "#d1d5db",
    },

    extend: {
      backgroundImage: {
        "red-gradient": "linear-gradient(70deg, #611d2c, #da0941)",
        "slate-gradient": "linear-gradient(240deg, #041722, #041a27)",
      },
      dropShadow: {
        xl: "0 40px 70px rgb(218 9 65 / 0.5)",
      },
    },
  },
  plugins: [],
};
