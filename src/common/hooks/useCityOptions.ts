'use client';
import {useState, useEffect} from 'react';

import {fetchCitiesByName} from '@common/services/geoNamesService';
import type {City} from '@common/types/location';

export const useCityOptions = (inputValue: string) => {
  const [options, setOptions] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!inputValue) {
      setOptions([]);
      return;
    }

    setLoading(true);
    const fetchCities = async () => {
      try {
        const cities = await fetchCitiesByName(inputValue);
        setOptions(cities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, [inputValue]);

  return {options, loading};
};
