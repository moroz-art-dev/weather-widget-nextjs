import React from 'react';
import {Box, Container} from '@mui/material';

const WeatherFooter: React.FC = () => {
  return (
    <Container component='footer'>
      <Box
        sx={{borderTop: '1px solid', borderColor: 'divider', paddingY: 2}}
      ></Box>
    </Container>
  );
};

export default WeatherFooter;
