/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Titillium Web', 'sans-serif'],
        },
        extend: {
            colors: {
                red: {
                    500: '#da0941',
                    600: '#b80c3a',
                    800: '#a10831d0',
                },
                slate: {
                    600: '#041a27',
                    700: '#041722',
                    800: '#04131c',
                },
                white: '#FFF',
            },
            backgroundImage: {
                'red-gradient': 'linear-gradient(70deg, #611d2c, #da0941)',
                'slate-gradient': 'linear-gradient(240deg, #041722, #041a27)',
            },
        },
    },
    plugins: [],
};
