import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { GoogleLogin } from '@react-oauth/google';

export default function Register() {
  function success(args) {
    console.log('args in success:', args);
  }

  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
      <GoogleLogin
        onSuccess={data => success(data)}
        onError={error => console.log(error)}
      />
    </div>
  );
}
