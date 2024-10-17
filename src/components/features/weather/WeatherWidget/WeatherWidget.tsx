'use client';

import React from 'react';
import {Box, useMediaQuery, Theme} from '@mui/material';

import WeatherHeader from '../WeatherHeader';
import WeatherMain from '../WeatherMain';
import WeatherForecast from '../WeatherForecast';
import WeatherFooter from '../WeatherFooter';

const WeatherWidget: React.FC = () => {
  const isSmall = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isWide = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: 2,
        backgroundColor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        width: isSmall ? 300 : isWide ? 600 : 600,
        height: isSmall ? 300 : isWide ? 300 : 600,
        margin: 'auto',
      }}
    >
      <WeatherHeader />

      <WeatherMain />

      {isLarge && <WeatherForecast />}

      {isLarge && <WeatherFooter />}
    </Box>
  );
};

export default WeatherWidget;
