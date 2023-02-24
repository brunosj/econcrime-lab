/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        xxs: '0.5rem',
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      colors: {
        mblack: {
          100: '#d1d2d3',
          200: '#a4a5a7',
          300: '#76787b',
          400: '#494b4f',
          500: '#1b1e23',
          600: '#16181c',
          700: '#101215',
          800: '#0b0c0e',
          900: '#050607',
        },
        mpurple: {
          100: '#ece7ed',
          200: '#d9cfdb',
          300: '#c7b8ca',
          400: '#b4a0b8',
          500: '#a188a6',
          600: '#816d85',
          700: '#615264',
          800: '#403642',
          900: '#201b21',
        },
        myellow: {
          100: '#fefcec',
          200: '#fdfad9',
          300: '#fcf7c7',
          400: '#fbf5b4',
          500: '#faf2a1',
          600: '#c8c281',
          700: '#969161',
          800: '#646140',
          900: '#323020',
        },
        morange: {
          100: '#f8e9dc',
          200: '#f2d3b9',
          300: '#ebbd97',
          400: '#e5a774',
          500: '#de9151',
          600: '#b27441',
          700: '#855731',
          800: '#593a20',
          900: '#2c1d10',
        },
        mblue: {
          100: '#ddebef',
          200: '#bbd7de',
          300: '#99c4ce',
          400: '#77b0bd',
          500: '#559cad',
          600: '#447d8a',
          700: '#335e68',
          800: '#223e45',
          900: '#111f23',
        },
        mgray: {
          100: '#fbfbfb',
          200: '#f7f7f7',
          300: '#f3f3f4',
          400: '#efeff0',
          500: '#ebebec',
          600: '#bcbcbd',
          700: '#8d8d8e',
          800: '#5e5e5e',
          900: '#2f2f2f',
        },
        mturquoise: {
          100: '#e6f8f5',
          200: '#cef1ec',
          300: '#b5eae2',
          400: '#9de3d9',
          500: '#84dccf',
          600: '#6ab0a6',
          700: '#4f847c',
          800: '#355853',
          900: '#1a2c29',
        },
      },
      fontFamily: {
        mono: ['mono'],
        sans: ['sans'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
