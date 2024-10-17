'use client';

import React from 'react';
import {Box, Container, Typography, Card, CardContent} from '@mui/material';
import Image from 'next/image';

import useStateContext from '@common/hooks/useStateContext';
import {getWeatherIconUrl} from '@common/utils/weatherUtils';

const WeatherForecast: React.FC = () => {
  const {state} = useStateContext();

  return (
    <Container component='section'>
      <Box sx={{paddingY: 2}}>
        <Typography variant='h6' sx={{marginBottom: 2}}>
          Weather Forecast
        </Typography>

        {state.forecastData && state.forecastData.length > 0 ? (
          <Box
            display='grid'
            gridTemplateColumns={{
              xs: '1fr 1fr',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(5, 1fr)',
            }}
            gap={2}
          >
            {state.forecastData.map((data, index) => (
              <Card key={index} sx={{backgroundColor: 'background.paper'}}>
                <CardContent>
                  <Typography variant='subtitle2' sx={{textAlign: 'center'}}>
                    {data.date}
                  </Typography>
                  <Box sx={{display: 'flex', justifyContent: 'center', my: 1}}>
                    <Image
                      src={getWeatherIconUrl(data.icon)}
                      alt={data.description}
                      width={50}
                      height={50}
                    />
                  </Box>
                  <Typography variant='body2' sx={{textAlign: 'center'}}>
                    {data.minTemperature}°C - {data.maxTemperature}°C
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{textAlign: 'center', marginTop: 1}}
                  >
                    {data.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        ) : (
          <Typography>No forecast available</Typography>
        )}
      </Box>
    </Container>
  );
};

export default WeatherForecast;
