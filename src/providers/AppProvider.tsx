import React from 'react';

import StateProvider from '@store/StateProvider';

import ThemeProvider from './ThemeProvider';
import FontProvider from './FontProvider';

const AppProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ThemeProvider>
      <FontProvider>
        <StateProvider>{children}</StateProvider>
      </FontProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
