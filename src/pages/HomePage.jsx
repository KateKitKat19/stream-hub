import { useNavigate } from 'react-router-dom';
import { Container, ButtonGroup, Button, Text } from '@chakra-ui/react';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Container centerContent mt="40px" gap="8">
      <Text
        bgGradient="linear(to-b, #00608f, #22c1c3)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        textAlign="center"
        flexWrap="nowrap"
      >
        Welcome to Stream Hub
      </Text>

      <ButtonGroup gap="6">
        <Button
          colorScheme="teal"
          size="lg"
          onClick={() => navigate('/register')}
        >
          Sign Up
        </Button>
        <Button colorScheme="teal" size="lg" onClick={() => navigate('/login')}>
          Sign In
        </Button>
      </ButtonGroup>
    </Container>
  );
}
