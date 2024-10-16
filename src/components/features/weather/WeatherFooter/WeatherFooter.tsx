import React from 'react';
import {Box, Typography, Container} from '@mui/material';

const WeatherFooter: React.FC = () => {
  return (
    <Container component='footer' sx={{backgroundColor: 'background.paper'}}>
      <Box sx={{borderTop: '1px solid', borderColor: 'divider', paddingY: 2}}>
        <Typography variant='body2' color='textSecondary'>
          Powered by OpenWeatherMap API
        </Typography>
      </Box>
    </Container>
  );
};

export default WeatherFooter;
