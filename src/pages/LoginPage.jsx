import { LoginForm } from 'components/LoginForm/LoginForm';
import { selectLoginError, selectRefreshing } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import ErrorNotification from 'components/ErrorNotification/ErrorNotification';

export default function Login() {
  const refreshing = useSelector(selectRefreshing);
  const error = useSelector(selectLoginError);

  return (
    <>
      {!refreshing && error && <ErrorNotification errorMessage={error} />}
      {!refreshing && !error && (
        <>
          <LoginForm />
        </>
      )}
    </>
  );
}
