import type {Coordinates} from './location';
import type {WeatherData, ForecastData} from './weatherData';
import type {WeatherActionTypes} from './actions';

export interface WeatherState {
  location: string;
  coordinates: Coordinates;
  unit: 'metric' | 'imperial';
  loading: boolean;
  error: string | null;
  weatherData: WeatherData | null;
  forecastData: ForecastData[] | null;
}

export type StateContextType = {
  state: WeatherState;
  dispatch: React.Dispatch<WeatherActionTypes>;
};
