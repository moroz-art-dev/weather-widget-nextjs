import type {WeatherState} from '@common/types/store';

export const initialState: WeatherState = {
  location: '',
  temperature: 0,
  unit: 'metric',
  loading: false,
  error: null,
  weatherData: [],
};
