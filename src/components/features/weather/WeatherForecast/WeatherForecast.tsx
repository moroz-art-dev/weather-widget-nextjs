'use client';

import React from 'react';
import {Box, Container, Typography} from '@mui/material';

import useStateContext from '@common/hooks/useStateContext';

const WeatherForecast: React.FC = () => {
  const {state} = useStateContext();

  return (
    <Container component='section' sx={{backgroundColor: 'background.paper'}}>
      <Box sx={{paddingY: 2}}>
        <Typography variant='h6'>Weather Forecast</Typography>

        {state.forecastData && state.forecastData.length > 0 ? (
          state.forecastData.map((data, index) => (
            <Box key={index} sx={{marginBottom: 1}}>
              <Typography>
                {data.date}: {data.minTemperature}°C - {data.maxTemperature}°C,{' '}
                {data.description}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No forecast available</Typography>
        )}
      </Box>
    </Container>
  );
};

export default WeatherForecast;
