import type {WeatherActionTypes, WeatherState} from '@common/types/store';

import {
  SET_LOCATION,
  SET_TEMPERATURE,
  SET_LOADING,
  SET_ERROR,
  SET_WEATHER_DATA,
} from '../actions/actionTypes';
import {initialState} from '../initialState';

const reducer = (
  state: WeatherState = initialState,
  action: WeatherActionTypes
) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    case SET_TEMPERATURE:
      return {
        ...state,
        temperature: action.payload,
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
    default:
      return state;
  }
};

export default reducer;
