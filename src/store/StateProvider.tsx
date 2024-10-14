'use client';
import React, {useReducer} from 'react';

import type {WeatherState, WeatherActionTypes} from '@common/types/store';

import StateContext from './StateContext';
import reducer from './reducers';
import {initialState} from './initialState';

const StateProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer<
    (state: WeatherState, action: WeatherActionTypes) => WeatherState
  >(reducer, initialState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
