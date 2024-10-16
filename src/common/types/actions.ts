import {
  SET_LOCATION_BY_CITY,
  SET_LOCATION_BY_COORDINATES,
  SET_LOADING,
  SET_ERROR,
  SET_WEATHER_DATA,
  SET_FORECAST_DATA,
} from '@/store/actions/actionTypes';

import type {Coordinates} from './location';
import type {WeatherData, ForecastData} from './weatherData';

export interface SetLocationByCityAction {
  type: typeof SET_LOCATION_BY_CITY;
  payload: string;
}

export interface SetLocationByCoordinatesAction {
  type: typeof SET_LOCATION_BY_COORDINATES;
  payload: Coordinates;
}

export interface SetLoadingAction {
  type: typeof SET_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
  payload: string | null;
}

export interface SetWeatherDataAction {
  type: typeof SET_WEATHER_DATA;
  payload: WeatherData;
}

export interface SetForecastDataAction {
  type: typeof SET_FORECAST_DATA;
  payload: ForecastData[];
}

export type WeatherActionTypes =
  | SetLocationByCityAction
  | SetLocationByCoordinatesAction
  | SetLoadingAction
  | SetErrorAction
  | SetWeatherDataAction
  | SetForecastDataAction;
