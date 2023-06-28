import React from 'react';
import { Circles } from 'react-loader-spinner';

export const Loader = () => (
   <Circles
    height="100"
    width="100"
    color="#8BAA36"
    ariaLabel="circles-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      backgroundColor: 'white',
    }}
  />
);
