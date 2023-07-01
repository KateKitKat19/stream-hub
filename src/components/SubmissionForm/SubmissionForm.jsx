import { useDispatch } from 'react-redux';
import { addStreamer } from 'redux/streamers/operations';
import { validateSubmission } from 'helpers/yupValidation';
import { Formik, Field, ErrorMessage } from 'formik';

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  Text,
  Select,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    description: '',
    platform: '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    dispatch(
      addStreamer({
        name: values.name,
        description: values.description,
        platform: values.platform ? values.platform : 'Twitch',
      })
    )
      .unwrap()
      .then(setSubmitting(false))
      .then(navigate('/streamers'));
    resetForm();
  };

  return (
    <Flex minH={'200px'} align={'center'} justify={'center'} borderRadius={'4'}>
      <Stack spacing={4} mx={'auto'} maxW={'lg'} py={6} px={6} align={'center'}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'} color={'#183642'}>
            Fill in the form add streamer
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={'white'}
          boxShadow={'lg'}
          p={4}
          w={'400px'}
          mt={6}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validateSubmission}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={4}>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name: </FormLabel>
                    <Field name="name" as={Input} type="text" />
                    <ErrorMessage
                      name="name"
                      component={Text}
                      color="red.500"
                    />
                  </FormControl>
                  <FormControl id="description" isRequired>
                    <FormLabel>Description: </FormLabel>
                    <Field
                      name="description"
                      as={Textarea}
                      type="text"
                      placeholder="Tell us about this person"
                    />
                    <ErrorMessage
                      name="description"
                      component={Text}
                      color="red.500"
                    />
                  </FormControl>
                  <FormControl id="platform">
                    <Field as={Select} name="platform" size="md">
                      <option value="Twitch">Twitch</option>
                      <option value="YouTube">YouTube</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Kick">Kick</option>
                      <option value="Rumble">Rumble</option>
                    </Field>
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
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </Stack>
                </Stack>
              </form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Flex>
  );
};
