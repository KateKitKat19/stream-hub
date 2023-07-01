import { Button, Flex, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Flex
      mt={8}
      display={'flex'}
      gap={8}
      justify={'center'}
      align={'center'}
      flexDirection={'column'}
    >
      <Heading fontSize={'38px'} color={'red.600'}>
        Error 404. Page is not found!
      </Heading>
      <Button
        type="button"
        bg={'teal.400'}
        color={'white'}
        onClick={() => navigate('/')}
        _hover={{
          bg: 'teal.500',
        }}
      >
        Back home
      </Button>
    </Flex>
  );
}
