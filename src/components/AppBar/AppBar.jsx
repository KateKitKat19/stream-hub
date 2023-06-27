import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import {
  Box,
  Container,
  Flex,
} from '@chakra-ui/react';
// import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="header" py="2" px="4" bg="blue.100">
      <Container maxW="100vw">
        <Flex justifyContent="flex-end" align-items="center">
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* <IconButton
            marginLeft={4}
            onClick={toggleColorMode}
            aria-label="Toggle dark and light mode"
            size="md"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          ></IconButton> */}
        </Flex>
      </Container>
    </Box>
  );
};
