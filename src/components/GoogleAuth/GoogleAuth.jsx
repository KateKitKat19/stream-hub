import { useEffect, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/operations';
import { Button, Center } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

// const CLIENT_ID =
//   '678634402419-djp8c1atoej0ssbmb7sosa28mspt0kpt.apps.googleusercontent.com';

export const GoogleAuth = ({ type }) => {
  const dispatch = useDispatch();
  const signinButtonRef = useRef(null);

  useEffect(() => {
    function handleAuthSuccess(res) {
      const userData = jwt_decode(res.credential);
      if (type === 'register') {
        dispatch(
          register({
            name: userData.name,
            email: userData.email,
            password: userData.sub,
          })
        );
      } else if (type === 'login') {
        dispatch(
          logIn({
            email: userData.email,
            password: userData.sub,
          })
        );
      }
    }
    /*global google*/
    google.accounts.id.initialize({
      client_id: process.env.CLIENT_ID,
      callback: handleAuthSuccess,
    });

    google.accounts.id.renderButton(signinButtonRef.current, {
      theme: 'transparent',
      size: 'large',
      text: type === 'login' ? 'Sign in with Google' : 'Sign up with Google',
    });
  }, [dispatch, type]);

  return (
    <Center mt={6}>
      <Button
        ref={signinButtonRef}
        variant="ghost"
        leftIcon={<FcGoogle />}
        _hover={{ bg: 'transparent' }}
      ></Button>
    </Center>
  );
};
