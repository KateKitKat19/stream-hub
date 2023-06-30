import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Loader } from 'components/Loader/Loader';
import { selectLoginError, selectRefreshing } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Stack, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const refreshing = useSelector(selectRefreshing);
  const error = useSelector(selectLoginError);
  const navigate = useNavigate();

  return (
    <>
      {refreshing && !error && <Loader></Loader>}
      {!refreshing && !error && (
        <>
          <div>
            <RegisterForm />
          </div>
        </>
      )}

      {!refreshing && error && (
        <Stack spacing={10} pt={2} align={'center'} mt={6}>
          <Text align={'center'} fontSize={20}>
            {`Ooops, something went wrong!  ${error} `}
          </Text>
          <Button
            maxW={'200px'}
            type="button"
            size="md"
            bg={'teal.400'}
            color={'white'}
            _hover={{
              bg: 'teal.500',
            }}
            onClick={() => navigate('/')}
          >
            Back home
          </Button>
        </Stack>
      )}
    </>
  );
}
