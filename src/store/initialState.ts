import type {WeatherState} from '@common/types/store';

export const initialState: WeatherState = {
  location: '',
  coordinates: {
    latitude: 0,
    longitude: 0,
  },
  unit: 'metric',
  loading: false,
  error: null,
  weatherData: null,
  forecastData: [],
};
