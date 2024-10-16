'use client';
import {createContext} from 'react';

import type {StateContextType} from '@common/types/store';

const StateContext = createContext<StateContextType | undefined>(undefined);

export default StateContext;
