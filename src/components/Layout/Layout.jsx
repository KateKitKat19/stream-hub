import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Box } from '@chakra-ui/react';

export const Layout = () => {

  return (
    <Box maxWidth="1160px" margin="0 auto" padding="30px 16px">
      <AppBar />
     
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
