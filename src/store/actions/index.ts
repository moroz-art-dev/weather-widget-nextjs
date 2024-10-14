import {
  SET_LOCATION,
  SET_TEMPERATURE,
  SET_LOADING,
  SET_ERROR,
  SET_WEATHER_DATA,
} from '@/store/actions/actionTypes';
import type {WeatherActionTypes, WeatherData} from '@common/types/store';

export const setLocation = (location: string): WeatherActionTypes => ({
  type: SET_LOCATION,
  payload: location,
});

export const setTemperature = (temperature: number): WeatherActionTypes => ({
  type: SET_TEMPERATURE,
  payload: temperature,
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
