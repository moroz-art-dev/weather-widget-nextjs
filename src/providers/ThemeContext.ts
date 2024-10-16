'use client';
import {createContext} from 'react';

export interface ThemeContextType {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
