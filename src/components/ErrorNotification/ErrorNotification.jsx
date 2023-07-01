import { Container, Heading, Stack, Text, Button } from '@chakra-ui/react';

export default function ErrorNotification({ errorMessage }) {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Ooops, something went wrong! <Text as={'span'}>{errorMessage}</Text>
        </Heading>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
            onClick={() => window.location.reload()}
          >
            Try again
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
