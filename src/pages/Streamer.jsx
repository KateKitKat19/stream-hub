import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOneStreamer } from 'redux/streamers/operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectLoading,
  selectError,
  selectOneStreamer,
} from 'redux/streamers/selectors';
import { Loader } from 'components/Loader/Loader';
import { Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { DetailedInfo } from 'components/DetailedInfo/DetailedInfo';

export default function Streamer() {
  const { streamerId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const navigate = useNavigate();
  const streamerInfo = useSelector(selectOneStreamer);

  useEffect(() => {
    dispatch(fetchOneStreamer(streamerId));
  }, [dispatch, streamerId]);

  return (
    <>
      {loading && !error && <Loader></Loader>}
      {streamerInfo && !loading && !error && (
        <>
          <Button
            type="button"
            variant={'ghost'}
            size="lg"
            onClick={() => {
              navigate('/streamers');
            }}
            leftIcon={<ArrowBackIcon></ArrowBackIcon>}
          >
            Back to list
          </Button>
          <DetailedInfo streamerInfo={streamerInfo}></DetailedInfo>
        </>
      )}
    </>
  );
}
