import { Image } from '@chakra-ui/react';

export const StreamerCard = ({ streamer }) => {
  return (
    <>
      <div>
        <Image
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
          src={streamer.image}
          alt={streamer.name}
          fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1280px-Placeholder_view_vector.svg.png"
        />
        <h3>Name: {streamer.name}</h3>
        <p> About: {streamer.description}</p>
        <p> Where to watch: {streamer.platform}</p>
      </div>
      <div>
        <span>Upvoted by {streamer.upvotes} users</span>
        <span> Downvoted by {streamer.downvotes} users</span>
      </div>
    </>
  );
};
