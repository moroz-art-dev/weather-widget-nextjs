'use client';

import React, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

import {useCityOptions} from '@common/hooks/useCityOptions';
import useStateContext from '@common/hooks/useStateContext';
import {setLocationByCity, setLocationByCoordinates} from '@store/actions';
import {fetchCoordinatesByCityName} from '@common/services/geoNamesService';
import {useWeatherData} from '@common/hooks/useWeatherData';
import type {City} from '@common/types/location';

const DEBOUNCE_DELAY = 300;

const LocationInput: React.FC = () => {
  const {state, dispatch} = useStateContext();
  const {fetchCityAndWeather} = useWeatherData();
  const [inputValue, setInputValue] = useState(state.location || '');
  const [debouncedInputValue, setDebouncedInputValue] = useState(inputValue);
  const {options, loading} = useCityOptions(debouncedInputValue);

  useEffect(() => {
    if (state.location) {
      setInputValue(state.location);
    }
  }, [state.location]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, DEBOUNCE_DELAY);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  const handleCitySelect = async (selectedCity: City | null) => {
    if (selectedCity) {
      dispatch(setLocationByCity(selectedCity.name));

      try {
        const coordinates = await fetchCoordinatesByCityName(selectedCity.name);

        if (coordinates) {
          dispatch(setLocationByCoordinates(coordinates));

          await fetchCityAndWeather(coordinates);
        }
      } catch (error) {
        console.error('Failed to fetch coordinates for the city:', error);
      }
    }
  };

  return (
    <Autocomplete
      value={options.find(option => option.name === state.location) || null}
      inputValue={inputValue}
      options={options}
      getOptionLabel={option => `${option.name}`}
      onInputChange={(_, value) => setInputValue(value)}
      onChange={(_, selectedCity) => handleCitySelect(selectedCity)}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label='Enter a city'
          variant='outlined'
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default LocationInput;
