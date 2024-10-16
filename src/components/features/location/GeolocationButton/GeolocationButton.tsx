'use client';

import React from 'react';
import IconButton from '@mui/material/IconButton';
import MyLocationIcon from '@mui/icons-material/MyLocation';

import {useWeatherData} from '@common/hooks/useWeatherData';
import useStateContext from '@common/hooks/useStateContext';
import {getUserLocation} from '@common/services/geolocationService';

const GeolocationButton: React.FC = () => {
  const {state} = useStateContext();
  const {fetchCityAndWeather} = useWeatherData();

  const handleGeolocation = async () => {
    try {
      const position = await getUserLocation();
      const {latitude, longitude} = position.coords;

      if (
        state.coordinates.latitude !== latitude ||
        state.coordinates.longitude !== longitude
      ) {
        await fetchCityAndWeather({latitude, longitude});
      }
    } catch (error) {
      console.error('Failed to get location', error);
    }
  };

  return (
    <IconButton
      onClick={handleGeolocation}
      color='primary'
      aria-label='Use my location'
    >
      <MyLocationIcon />
    </IconButton>
  );
};

export default GeolocationButton;
