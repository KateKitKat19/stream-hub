import { StreamersList } from 'components/StreamersList/StreamersList';
import { Text, Box } from '@chakra-ui/react';

export default function StreamersPage() {
  return (
    <Box mt={6}>
      <Text
        color={'#0E7C7B'}
        fontSize="3xl"
        fontWeight="extrabold"
        textAlign="center"
        flexWrap="nowrap"
      >
        Welcome to Stream Hub{' '}
      </Text>
      <StreamersList></StreamersList>
    </Box>
  );
}
