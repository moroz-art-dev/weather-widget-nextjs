import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingIndicatorProps {
  loading: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({loading}) => (
  <>{loading ? <CircularProgress color='inherit' size={20} /> : null}</>
);

export default LoadingIndicator;
