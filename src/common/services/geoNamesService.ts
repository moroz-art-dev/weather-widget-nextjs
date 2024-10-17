import {GEONAMES_PROXY_BASE_URL} from '@common/config/apiConfig';
import type {Coordinates, CityResponse} from '@common/types/location';

const fetchCities = async (
  query: string,
  maxRows: number
): Promise<CityResponse[]> => {
  const response = await fetch(
    `${GEONAMES_PROXY_BASE_URL}searchJSON?q=${query}&maxRows=${maxRows}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch city data');
  }

  const data = await response.json();

  return data.geonames.map((city: CityResponse) => ({
    name: city.name,
    countryName: city.countryName,
    geonameId: city.geonameId,
  }));
};

export const fetchCitiesByName = (
  cityName: string
): Promise<CityResponse[]> => {
  return fetchCities(cityName, 10);
};

export const fetchAllCities = (): Promise<CityResponse[]> => {
  return fetchCities('', 1000);
};

export const fetchCityByCoordinates = async (
  latitude: number,
  longitude: number
): Promise<CityResponse | null> => {
  const response = await fetch(
    `${GEONAMES_PROXY_BASE_URL}findNearbyPlaceNameJSON?lat=${latitude}&lng=${longitude}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch city data by coordinates');
  }

  const data = await response.json();

  if (data.geonames && data.geonames.length > 0) {
    const city = data.geonames[0];

    return {
      geonameId: city.geonameId,
      name: city.name,
      countryName: city.countryName,
    };
  }

  return null;
};

export const fetchCoordinatesByCity = async (
  geonameId: number
): Promise<Coordinates | null> => {
  const response = await fetch(
    `${GEONAMES_PROXY_BASE_URL}get?geonameId=${geonameId}`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates by city');
  }

  const data = await response.json();

  if (data) {
    return {
      latitude: data.lat,
      longitude: data.lng,
    };
  }

  return null;
};

export const fetchCoordinatesByCityName = async (
  cityName: string
): Promise<Coordinates | null> => {
  const response = await fetch(
    `${GEONAMES_PROXY_BASE_URL}searchJSON?q=${cityName}&maxRows=1&featureClass=P`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch coordinates by city name');
  }

  const data = await response.json();

  if (data.geonames && data.geonames.length > 0) {
    const city = data.geonames[0];
    return {
      latitude: city.lat,
      longitude: city.lng,
    };
  }

  return null;
};
