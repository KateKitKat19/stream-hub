import { StreamersList } from 'components/StreamersList/StreamersList';
import { Text, Box } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectLoading, selectError } from 'redux/streamers/selectors';
import { Loader } from 'components/Loader/Loader';

export default function StreamersPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <>
      {loading && !error && <Loader></Loader>}

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
    </>
  );
}
