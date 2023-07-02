import { useEffect, useRef } from 'react';
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { register, logIn } from 'redux/auth/operations';
import { Button, Center, Link } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export const GoogleAuth = ({ type }) => {
  return (
    <Center mt={6}>
      <Link
        href="https://stream-hub-back-v1.onrender.com/api/auth/google"
        // variant="ghost"
        // leftIcon={<FcGoogle />}
        _hover={{ bg: 'transparent' }}
      >
        {type === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
      </Link>
    </Center>
  );
};
