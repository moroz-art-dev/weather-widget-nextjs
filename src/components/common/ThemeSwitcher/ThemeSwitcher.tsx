import React from 'react';
import {Switch, FormControlLabel} from '@mui/material';

import {useThemeContext} from '@common/hooks/useThemeContext';

const ThemeSwitcher: React.FC = () => {
  const {toggleTheme, mode} = useThemeContext();

  return (
    <FormControlLabel
      control={<Switch checked={mode === 'dark'} onChange={toggleTheme} />}
      label={mode === 'dark' ? 'Dark theme' : 'Light theme'}
    />
  );
};

export default ThemeSwitcher;
