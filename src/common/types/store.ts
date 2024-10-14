import {
  SET_LOCATION,
  SET_TEMPERATURE,
  SET_LOADING,
  SET_ERROR,
  SET_WEATHER_DATA,
} from '@/store/actions/actionTypes';

interface SetLocationAction {
  type: typeof SET_LOCATION;
  payload: string;
}

interface SetTemperatureAction {
  type: typeof SET_TEMPERATURE;
  payload: number;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string | null;
}

export interface WeatherData {
  temperature: number;
  description: string;
}

interface SetWeatherDataAction {
  type: typeof SET_WEATHER_DATA;
  payload: WeatherData[];
}

export type WeatherActionTypes =
  | SetLocationAction
  | SetTemperatureAction
  | SetLoadingAction
  | SetErrorAction
  | SetWeatherDataAction;

export interface WeatherState {
  location: string;
  temperature: number;
  unit: 'metric' | 'imperial';
  loading: boolean;
  error: string | null;
  weatherData: WeatherData[] | null;
}

export type StateContextType = {
  state: WeatherState;
  dispatch: React.Dispatch<WeatherActionTypes>;
};
