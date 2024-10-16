import type {WeatherState} from '@common/types/store';
import type {WeatherActionTypes} from '@common/types/actions';

import {
  SET_LOCATION_BY_CITY,
  SET_LOCATION_BY_COORDINATES,
  SET_LOADING,
  SET_ERROR,
  SET_WEATHER_DATA,
  SET_FORECAST_DATA,
} from '../actions/actionTypes';
import {initialState} from '../initialState';

const reducer = (
  state: WeatherState = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case SET_LOCATION_BY_CITY:
      return {
        ...state,
        location: action.payload,
      };
    case SET_LOCATION_BY_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
      };
    case SET_FORECAST_DATA:
      return {
        ...state,
        forecastData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
