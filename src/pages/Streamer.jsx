import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchOneStreamer } from 'redux/streamers/operations';
import { useDispatch, useSelector } from 'react-redux';
import { upvoteStreamer, downvoteStreamer } from 'redux/streamers/operations';
import {
  selectLoading,
  selectError,
  selectOneStreamer,
} from 'redux/streamers/selectors';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';

const Streamer = () => {
  const { streamerId } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const streamerInfo = useSelector(selectOneStreamer);

  useEffect(() => {
    dispatch(fetchOneStreamer(streamerId));
  }, [dispatch, streamerId]);

  return (
    <>
      {loading && !error && <Loader></Loader>}
      <div>
        {streamerInfo && !loading && !error && (
          <>
            <Link to="/streamers">Back to list</Link>
            <img
              src={streamerInfo.image}
              alt={streamerInfo.name}
              width="300"
              height="300"
            ></img>
            <h3>{streamerInfo.name}</h3>
            <p>{streamerInfo.description}</p>
            <p>{streamerInfo.platform}</p>
            <div>
              <span>Upvoted by {streamerInfo.upvotes} users</span>
              <span> Downvoted by {streamerInfo.downvotes} users</span>
            </div>
            <div>
              <button
                type="button"
                aria-label="upvote"
                onClick={() => dispatch(upvoteStreamer(streamerInfo._id))}
              >
                Upvote
              </button>
              <button
                type="button"
                aria-label="downvote"
                onClick={() => dispatch(downvoteStreamer(streamerInfo._id))}
              >
                Downvote
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Streamer;
