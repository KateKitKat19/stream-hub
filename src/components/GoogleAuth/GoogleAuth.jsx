import { Button, Center, Link } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';

export const GoogleAuth = ({ type }) => {
  return (
    <Center mt={6}>
      <Button
        as={Link}
        display={'flex'}
        justifyItems={'center'}
        alignItems={'center'}
        leftIcon={<FcGoogle />}
        _hover={{
          textDecoration:"none",
          shadow: 'md',
          transitionDuration: '250ms',
          transitionTimingFunction: 'ease-in-out',
        }}
        variant={'outline'}
        size="lg"
      >
        {type === 'login' ? 'Sign in with Google' : 'Sign up with Google'}
      </Button>
    </Center>
  );
};
