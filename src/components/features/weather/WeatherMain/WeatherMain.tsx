'use client';

import React from 'react';
import Image from 'next/image';
import {Box, Typography, Container, useMediaQuery, Theme} from '@mui/material';

import {getWeatherIconUrl} from '@common/utils/weatherUtils';
import useStateContext from '@common/hooks/useStateContext';

const WeatherMain: React.FC = () => {
  const {state} = useStateContext();
  const currentWeather = state.weatherData;
  const isWide = useMediaQuery((theme: Theme) =>
    theme.breakpoints.between('sm', 'md')
  );
  const isLarge = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Container component='main'>
      <Box sx={{paddingY: 2}}>
        {(isWide || isLarge) && (
          <Typography variant='h6' sx={{marginBottom: 2, textAlign: 'center'}}>
            Current Weather
          </Typography>
        )}

        {currentWeather ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: [2, 4],
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flex: 1,
                minWidth: 200,
              }}
            >
              <Image
                src={getWeatherIconUrl(currentWeather.icon)}
                alt={currentWeather.description}
                width={100}
                height={100}
                quality={75}
                priority
              />
              <Typography variant='h4'>
                {currentWeather.temperature}°C
              </Typography>
            </Box>

            <Box sx={{flex: 1, minWidth: 200}}>
              <Typography variant='body1'>
                Description: {currentWeather.description}
              </Typography>
              <Typography variant='body1'>
                Humidity: {currentWeather.humidity}%
              </Typography>

              {(isWide || isLarge) && (
                <>
                  <Typography variant='body1'>
                    Wind: {currentWeather.windSpeed} m/s,{' '}
                    {currentWeather.windDirection}
                  </Typography>
                  <Typography variant='body1'>
                    Pressure: {currentWeather.pressure} hPa
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        ) : (
          <Typography variant='body1'>No weather data available</Typography>
        )}
      </Box>
    </Container>
  );
};

export default WeatherMain;
