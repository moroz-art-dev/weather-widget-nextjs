import {
  OPENWEATHERMAP_API_KEY,
  OPENWEATHERMAP_BASE_URL,
} from '@common/config/apiConfig';
import type {Coordinates} from '@common/types/location';
import type {
  WeatherData,
  ForecastData,
  OpenWeatherMapResponse,
  OpenWeatherMapForecastResponse,
} from '@common/types/weatherData';
import {getWindDirection} from '@common/utils/weatherUtils';

export const getCurrentWeather = async ({
  latitude,
  longitude,
}: Coordinates): Promise<WeatherData> => {
  if (!OPENWEATHERMAP_API_KEY) {
    throw new Error('Missing OpenWeatherMap API Key');
  }

  const response = await fetch(
    `${OPENWEATHERMAP_BASE_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch current weather data');
  }

  const data: OpenWeatherMapResponse = await response.json();

  return {
    temperature: data.main.temp,
    description: data.weather[0].description,
    icon: data.weather[0].icon,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    windDirection: getWindDirection(data.wind.deg),
    pressure: data.main.pressure,
  };
};

export const getWeatherForecast = async ({
  latitude,
  longitude,
}: Coordinates): Promise<ForecastData[]> => {
  if (!OPENWEATHERMAP_API_KEY) {
    throw new Error('Missing OpenWeatherMap API Key');
  }

  const response = await fetch(
    `${OPENWEATHERMAP_BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch weather forecast');
  }

  const data: OpenWeatherMapForecastResponse = await response.json();

  return data.list.slice(0, 5).map(item => ({
    date: item.dt_txt.split(' ')[0],
    minTemperature: item.main.temp_min,
    maxTemperature: item.main.temp_max,
    description: item.weather[0].description,
    icon: item.weather[0].icon,
    precipitationProbability: item.pop * 100,
  }));
};
