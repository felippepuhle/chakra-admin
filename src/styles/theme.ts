import { theme as defaultTheme } from '@chakra-ui/core';

const THEME = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    main: {
      50: '#E6FFFA',
      100: '#B2F5EA',
      200: '#81E6D9',
      300: '#4FD1C5',
      400: '#38B2AC',
      500: '#319795',
      600: '#2C7A7B',
      700: '#285E61',
      800: '#234E52',
      900: '#1D4044',
    },
  },
};

export default THEME;
