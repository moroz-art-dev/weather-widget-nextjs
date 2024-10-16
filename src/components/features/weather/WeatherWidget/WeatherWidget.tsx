import React from 'react';

import WeatherHeader from '../WeatherHeader';
import WeatherMain from '../WeatherMain';
import WeatherForecast from '../WeatherForecast';
import WeatherFooter from '../WeatherFooter';

const WeatherWidget: React.FC = () => {
  return (
    <>
      <WeatherHeader />
      <WeatherMain />
      <WeatherForecast />
      <WeatherFooter />
    </>
  );
};

export default WeatherWidget;
