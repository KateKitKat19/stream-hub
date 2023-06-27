import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { GoogleAuth } from 'components/GoogleAuth/GoogleAuth';
export default function Register() {
  return (
    <>
      <div>
        <RegisterForm />
      </div>
      <GoogleAuth></GoogleAuth>
    </>
  );
}
