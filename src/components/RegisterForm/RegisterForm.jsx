import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik, Field, ErrorMessage } from 'formik';

import { validateRegistration } from 'helpers/yupValidation';
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

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {

    dispatch(
      register({
        name: values.firstName + ' ' + values.lastName,
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
            Sign up
          </Heading>
        </Stack>
        <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
          <Formik
            initialValues={initialValues}
            validationSchema={validateRegistration}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <Stack direction={['column', 'row']} spacing={4}>
                    <Box flex={1}>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Field name="firstName" as={Input} type="text" />
                        <ErrorMessage
                          name="firstName"
                          component={Text}
                          color="red.500"
                        />
                      </FormControl>
                    </Box>
                    <Box flex={1}>
                      <FormControl id="lastName">
                        <FormLabel>Last Name</FormLabel>
                        <Field name="lastName" as={Input} type="text" />
                        <ErrorMessage
                          name="lastName"
                          component={Text}
                          color="red.500"
                        />
                      </FormControl>
                    </Box>
                  </Stack>
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
                      Sign up
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </Formik>
          <GoogleAuth type="register" />
          <Stack pt={6}>
            <Text align={'center'}>
              Already a user?{' '}
              <Link color={'blue.500'} onClick={() => navigate('/login')}>
                Login
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};
