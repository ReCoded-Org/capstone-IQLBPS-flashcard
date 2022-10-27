// eslint-disable-next-line import/no-extraneous-dependencies
import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
  darkMode: 'class',
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
      sans: ['Inter', ..._fontFamily.sans],
    },
  },
};
export const plugins = [];
