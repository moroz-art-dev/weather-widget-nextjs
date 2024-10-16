'use client';

import React from 'react';
import {Box, Typography, Container} from '@mui/material';

import useStateContext from '@common/hooks/useStateContext';

const WeatherMain: React.FC = () => {
  const {state} = useStateContext();

  const currentWeather = state.weatherData;

  return (
    <Container component='main' sx={{backgroundColor: 'background.paper'}}>
      <Box sx={{paddingY: 2}}>
        <Typography variant='h6'>Current Weather</Typography>
        <Typography variant='body1'>Location: {state.location}</Typography>
        {currentWeather ? (
          <>
            <Typography variant='body1'>
              Temperature: {currentWeather.temperature}°C
            </Typography>
            <Typography variant='body1'>
              Description: {currentWeather.description}
            </Typography>
            <Typography variant='body1'>
              Humidity: {currentWeather.humidity}%
            </Typography>
            <Typography variant='body1'>
              Wind: {currentWeather.windSpeed} m/s,{' '}
              {currentWeather.windDirection}
            </Typography>
            <Typography variant='body1'>
              Pressure: {currentWeather.pressure} hPa
            </Typography>
          </>
        ) : (
          <Typography variant='body1'>No weather data available</Typography>
        )}
      </Box>
    </Container>
  );
};

export default WeatherMain;
