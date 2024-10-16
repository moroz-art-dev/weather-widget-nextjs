'use client';

import React from 'react';
import {Box, Typography, InputAdornment} from '@mui/material';

import {useWeatherData} from '@common/hooks/useWeatherData';

import LocationInput from '../LocationInput';
import GeolocationButton from '../GeolocationButton';

const LocationSelector: React.FC = () => {
  const {error} = useWeatherData();

  return (
    <Box display='flex' alignItems='center' sx={{gap: 1}}>
      <InputAdornment position='start'>
        <GeolocationButton />
      </InputAdornment>
      <LocationInput />
      {error && (
        <Typography variant='body2' color='error' sx={{marginTop: 1}}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default LocationSelector;
