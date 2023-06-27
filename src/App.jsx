import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './routes/PrivateRoute';
import { RestrictedRoute } from './routes/RestrictedRoute';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const StreamersPage = lazy(() => import('./pages/StreamersPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/streamers"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectTo="/streamers"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/streamers"
          element={
            <PrivateRoute redirectTo="/login" component={<StreamersPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
