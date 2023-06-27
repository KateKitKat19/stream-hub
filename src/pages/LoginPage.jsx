import { LoginForm } from 'components/LoginForm/LoginForm';
import { GoogleAuth } from 'components/GoogleAuth/GoogleAuth';
export default function Login() {
  return (
    <>
      <div>
        <LoginForm />
      </div>
      <GoogleAuth></GoogleAuth>
    </>
  );
}
