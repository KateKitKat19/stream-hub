import { useEffect } from 'react';

import { StreamerCard } from 'components/StreamerCard/StreamerCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStreamers } from 'redux/streamers/operations';
import { selectAllStreamers } from 'redux/streamers/selectors';

export const StreamersList = () => {
  const dispatch = useDispatch();
  const streamersList = useSelector(selectAllStreamers);

  useEffect(() => {
    dispatch(fetchAllStreamers());
  }, [dispatch]);

  return (
    streamersList &&
    streamersList.length > 0 && (
      <ul>
        {streamersList.map(streamer => {
          return (
            <li key={streamer._id}>
              <StreamerCard streamer={streamer}></StreamerCard>
            </li>
          );
        })}
      </ul>
    )
  );
};
