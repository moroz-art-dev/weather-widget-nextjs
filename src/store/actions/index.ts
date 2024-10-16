import {
  SET_LOCATION_BY_CITY,
  SET_LOCATION_BY_COORDINATES,
  SET_LOADING,
  SET_ERROR,
  SET_WEATHER_DATA,
  SET_FORECAST_DATA,
} from '@/store/actions/actionTypes';
import type {WeatherActionTypes} from '@common/types/actions';
import type {WeatherData, ForecastData} from '@common/types/weatherData';

export const setLocationByCity = (city: string): WeatherActionTypes => ({
  type: SET_LOCATION_BY_CITY,
  payload: city,
});

export const setLocationByCoordinates = (coordinates: {
  latitude: number;
  longitude: number;
}): WeatherActionTypes => ({
  type: SET_LOCATION_BY_COORDINATES,
  payload: coordinates,
});

export const setLoading = (loading: boolean): WeatherActionTypes => ({
  type: SET_LOADING,
  payload: loading,
});

export const setError = (error: string | null): WeatherActionTypes => ({
  type: SET_ERROR,
  payload: error,
});

export const setWeatherData = (data: WeatherData): WeatherActionTypes => ({
  type: SET_WEATHER_DATA,
  payload: data,
});

export const setForecastData = (data: ForecastData[]): WeatherActionTypes => ({
  type: SET_FORECAST_DATA,
  payload: data,
});
