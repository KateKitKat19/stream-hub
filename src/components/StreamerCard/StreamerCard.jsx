import { useDispatch } from 'react-redux';
import { upvoteStreamer, downvoteStreamer } from 'redux/streamers/operations';
export const StreamerCard = ({ streamer }) => {

  const dispatch = useDispatch();

  return (
    <>
      <div>
        <img
          src={streamer.image}
          alt={streamer.name}
          width="100"
          height="100"
        ></img>
        <h3>Name: {streamer.name}</h3>
        <p> About: {streamer.description}</p>
        <p> Where to watch: {streamer.platform}</p>
      </div>
      <div>
        <span>Upvoted by {streamer.upvotes} users</span>
        <span> Downvoted by {streamer.downvotes} users</span>
      </div>
      <div>
        <button
          type="button"
          aria-label="upvote"
          onClick={() => dispatch(upvoteStreamer(streamer._id))}
        >
          Upvote
        </button>
        <button
          type="button"
          aria-label="downvote"
          onClick={() => dispatch(downvoteStreamer(streamer._id))}
        >
          Downvote
        </button>
      </div>
    </>
  );
};
