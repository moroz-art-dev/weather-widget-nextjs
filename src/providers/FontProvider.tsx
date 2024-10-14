import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const FontProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  return <>{children}</>;
};

export default FontProvider;
