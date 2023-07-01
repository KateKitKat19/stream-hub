import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { selectLoginError, selectRefreshing } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import ErrorNotification from 'components/ErrorNotification/ErrorNotification';

export default function Register() {
  const refreshing = useSelector(selectRefreshing);
  const error = useSelector(selectLoginError);

  return (
    <>
      {!refreshing && error && <ErrorNotification errorMessage={error} />}
      {!refreshing && !error && (
        <>
          <div>
            <RegisterForm />
          </div>
        </>
      )}
    </>
  );
}
