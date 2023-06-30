import { LoginForm } from 'components/LoginForm/LoginForm';
import { Loader } from 'components/Loader/Loader';
import { selectLoginError, selectRefreshing } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export default function Login() {
  const refreshing = useSelector(selectRefreshing);
  const error = useSelector(selectLoginError);

  return (
    <>
      {refreshing && !error && <Loader></Loader>}
      {!refreshing && (
        <>
          <LoginForm />
        </>
      )}
      {!refreshing && error && (
        <div>
          Ooops, something went wrong! <span>{error}</span>
        </div>
      )}
    </>
  );
}
