import {createTheme} from '@mui/material/styles';

import {colors} from './colors';
import {sizes} from './sizes';
import {typography} from './typography';

const theme = (mode: 'light' | 'dark') => {
  const palette = mode === 'light' ? colors.light : colors.dark;

  return createTheme({
    palette: {
      mode,
      primary: {
        main: palette.primary,
      },
      secondary: {
        main: palette.secondary,
      },
      background: {
        default: palette.background,
        paper: palette.background,
      },
      text: {
        primary: palette.text,
      },
    },
    breakpoints: {
      values: sizes.breakpoints,
    },
    typography: typography,
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          ':root': {
            '--primary-color': palette.primary,
            '--secondary-color': palette.secondary,
            '--background-color': palette.background,
            '--text-color': palette.text,
            '--border-color': palette.border,
            '--button-background': palette.button.background,
            '--button-text': palette.button.text,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: 'var(--button-background)',
            color: 'var(--button-text)',
            '&:hover': {
              backgroundColor: 'var(--primary-color)',
            },
          },
        },
      },
    },
  });
};

export default theme;
