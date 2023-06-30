import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { validateLogin } from 'helpers/yupValidation';
import { Formik, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { GoogleAuth } from 'components/GoogleAuth/GoogleAuth';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(setSubmitting(false));
  };

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'}>
      <Stack
        spacing={8}
        mx={'auto'}
        maxW={'lg'}
        py={12}
        px={6}
        align={'center'}
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign in
          </Heading>
        </Stack>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8} w={"400px"}>
          <Formik
            initialValues={initialValues}
            validationSchema={validateLogin}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Field name="email" as={Input} type="email" />
                    <ErrorMessage
                      name="email"
                      component={Text}
                      color="red.500"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                      <Field name="password">
                        {({ field }) => <Input {...field} type="password" />}
                      </Field>
                      <InputRightElement h={'full'}>
                        <Button
                          variant={'ghost'}
                          onClick={() =>
                            setShowPassword(showPassword => !showPassword)
                          }
                        >
                          {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <ErrorMessage
                      name="password"
                      component={Text}
                      color="red.500"
                    />
                  </FormControl>
                  <Stack spacing={10} pt={2}>
                    <Button
                      type="submit"
                      isLoading={isSubmitting}
                      loadingText="Submitting"
                      size="lg"
                      bg={'teal.400'}
                      color={'white'}
                      _hover={{
                        bg: 'teal.500',
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </Formik>
          <GoogleAuth type="login" />
          <Stack pt={6}>
            <Text align={'center'}>
              Not registered?{' '}
              <Link color={'blue.500'} onClick={() => navigate('/register')}>
                Sign up
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
