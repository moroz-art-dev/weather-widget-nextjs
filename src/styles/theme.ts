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
    components: {},
  });
};

export default theme;
