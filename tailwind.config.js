/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EDF6FD',
          100: '#DFEFFB',
          200: '#BBDDF7',
          300: '#9BCDF3',
          400: '#7BBDEF',
          500: '#58ABEB',
          600: '#208FE4',
          700: '#156BAD',
          800: '#0E4672',
          900: '#07253B',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
