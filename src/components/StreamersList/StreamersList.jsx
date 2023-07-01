import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { StreamerCard } from 'components/StreamerCard/StreamerCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStreamers } from 'redux/streamers/operations';
import { selectAllStreamers } from 'redux/streamers/selectors';
import { Box, SimpleGrid } from '@chakra-ui/react';

export const StreamersList = () => {
  const dispatch = useDispatch();
  const streamersList = useSelector(selectAllStreamers);

  useEffect(() => {
    dispatch(fetchAllStreamers());
  }, [dispatch]);

  return (
    streamersList &&
    streamersList.length > 0 && (
      <SimpleGrid
        minChildWidth="300px"
        spacing="40px"
        mt={8}
        gridTemplateRows="1fr"
      >
        {streamersList.map(streamer => {
          return (
            <Box key={streamer._id} height={'100%'}>
              <Link to={`/streamers/${streamer._id}`}>
                <StreamerCard streamer={streamer}></StreamerCard>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    )
  );
};
