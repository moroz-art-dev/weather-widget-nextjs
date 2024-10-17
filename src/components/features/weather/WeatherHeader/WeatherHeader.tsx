'use client';
import React from 'react';
import {Box, Container, useMediaQuery, Theme} from '@mui/material';

import LocationSelector from '@components/features/location/LocationSelector';
import ThemeSwitcher from '@components/common/ThemeSwitcher';

const WeatherHeader: React.FC = () => {
  const isWide = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));
  return (
    <Container component='header'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid',
          borderColor: 'divider',
          paddingY: 2,
        }}
      >
        <LocationSelector />
        {(isWide || isLarge) && <ThemeSwitcher />}
      </Box>
    </Container>
  );
};

export default WeatherHeader;
