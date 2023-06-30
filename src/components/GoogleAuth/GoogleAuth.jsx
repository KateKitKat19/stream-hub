import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/operations';
import { Button, Center, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export const GoogleAuth = ({ type }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleLoginSuccess(res) {
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
      client_id:
        '678634402419-djp8c1atoej0ssbmb7sosa28mspt0kpt.apps.googleusercontent.com',
      callback: handleLoginSuccess,
    });

    google.accounts.id.renderButton(document.getElementById('signinButton'));
  }, [dispatch, type]);

  return (
    <Center mt={6}>
      <Button
        id="signinButton"
        w={'full'}
        size="lg"
        variant={'outline'}
        leftIcon={<FcGoogle />}
      >
        <Center>
          <Text>
            {' '}
            {type === 'login' ? 'Sign in with Google' : ' Sign up with Google'}
          </Text>
        </Center>
      </Button>
    </Center>
  );
};
