'use client';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useState} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import theme from '../styles/theme';

import {ThemeContext} from './ThemeContext';

const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<'light' | 'dark'>(
    prefersDarkMode ? 'dark' : 'light'
  );

  const toggleTheme = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const appliedTheme = theme(mode);

  return (
    <ThemeContext.Provider value={{toggleTheme, mode}}>
      <MuiThemeProvider theme={appliedTheme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
