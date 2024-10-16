'use client';

import {useState} from 'react';

import {
  setLocationByCity,
  setLoading,
  setLocationByCoordinates,
  setWeatherData,
  setForecastData,
} from '@store/actions';
import useStateContext from '@common/hooks/useStateContext';
import {
  getCurrentWeather,
  getWeatherForecast,
} from '@common/services/openWeatherMapService';
import {fetchCityByCoordinates} from '@common/services/geoNamesService';
import type {Coordinates} from '@common/types/location';

interface UseWeatherData {
  fetchWeatherData: (coordinates: Coordinates) => Promise<void>;
  fetchCityAndWeather: (coordinates: Coordinates) => Promise<void>;
  error: string | null;
}

export const useWeatherData = (): UseWeatherData => {
  const {dispatch} = useStateContext();
  const [error, setError] = useState<string | null>(null);

  const fetchWeatherData = async (coordinates: Coordinates) => {
    dispatch(setLoading(true));

    try {
      const {latitude, longitude} = coordinates;

      const weatherData = await getCurrentWeather({latitude, longitude});
      const forecastData = await getWeatherForecast({latitude, longitude});

      dispatch(setWeatherData(weatherData));
      dispatch(setForecastData(forecastData));

      setError(null);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather data');
    } finally {
      dispatch(setLoading(false));
    }
  };

  const fetchCityAndWeather = async (coordinates: Coordinates) => {
    const {latitude, longitude} = coordinates;

    try {
      const city = await fetchCityByCoordinates(latitude, longitude);

      if (city) {
        dispatch(setLocationByCity(city.name));
        dispatch(setLocationByCoordinates(coordinates));
        await fetchWeatherData(coordinates);
      } else {
        setError('City not found for the given coordinates');
      }
    } catch (err) {
      console.error(err);
      setError('Failed to fetch city by coordinates');
    }
  };

  return {
    fetchWeatherData,
    fetchCityAndWeather,
    error,
  };
};
