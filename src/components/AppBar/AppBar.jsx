import { UserMenu } from '../UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import {
  Box,
  Container,
  Flex,
} from '@chakra-ui/react';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="header">
      <Container maxW="100vw">
        <Flex justifyContent="flex-end" align-items="center">
          {isLoggedIn && <UserMenu />}
         
        </Flex>
      </Container>
    </Box>
  );
};
