import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { PrivateRoute } from './routes/PrivateRoute';
import { RestrictedRoute } from './routes/RestrictedRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectRefreshing } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const StreamersPage = lazy(() => import('./pages/StreamersPage'));
const Streamer = lazy(() => import('./pages/Streamer'));
const AddStreamerPage = lazy(() => import('./pages/AddStreamerPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectRefreshing);

  return isRefreshing ? (
    <Loader></Loader>
  ) : (
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
        <Route
          path="/streamers/:streamerId"
          element={
            <PrivateRoute redirectTo="/login" component={<Streamer />} />
          }
        />
        <Route
          path="/join"
          element={
            <PrivateRoute redirectTo="/login" component={<AddStreamerPage />} />
          }
        />
        <Route path="*" element={<NotFoundPage />}></Route>
      </Route>
    </Routes>
  );
};
