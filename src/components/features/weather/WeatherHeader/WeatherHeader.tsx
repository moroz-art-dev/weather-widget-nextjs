'use client';
import React from 'react';
import {Box, Container} from '@mui/material';

import LocationSelector from '@components/features/location/LocationSelector';
import ThemeSwitcher from '@components/common/ThemeSwitcher';

const WeatherHeader: React.FC = () => {
  return (
    <Container component='header' sx={{backgroundColor: 'background.paper'}}>
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
        <ThemeSwitcher />
      </Box>
    </Container>
  );
};

export default WeatherHeader;
