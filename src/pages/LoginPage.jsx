import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { GoogleLogin } from '@react-oauth/google';

export default function Login() {
  function success(args) {
    console.log('args in success:', args);
  }

  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <GoogleLogin
        onSuccess={data => success(data)}
        onError={error => console.log(error)}
      />
    </div>
  );
}
