import { useDispatch } from 'react-redux';
import { upvoteStreamer, downvoteStreamer } from 'redux/streamers/operations';
import {
  Center,
  Box,
  Image,
  Flex,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { BiLike, BiDislike } from 'react-icons/bi';

export const DetailedInfo = ({ streamerInfo }) => {
  const dispatch = useDispatch();

  const { image, name, description, platform, _id, upvotes, downvotes } =
    streamerInfo;
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      w={'100%'}
      alignItems="stretch"
      justifyContent="center"
      p={6}
      mt={8}
    >
      <Image
        boxSize={'100%'}
        borderRadius={'2xl'}
        src={image}
        alt={name}
        objectFit="contain"
        boxShadow="xs"
        fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1280px-Placeholder_view_vector.svg.png"
      ></Image>

      <Flex
        flexDir={'column'}
        gap={6}
        p={'10'}
        width={'100%'}
        fontFamily={'Lora'}
      >
        <Heading color={'blue.700'}>{name}</Heading>
        <Box>
          <Text fontSize={18}>Streams on</Text>
          <Heading fontSize={32} color={'blue.700'}>
            {' '}
            {platform}
          </Heading>
        </Box>
        <Box flexGrow={1} maxW={'600px'}>
          <Text fontSize={'lg'}>{description}</Text>
        </Box>

        <Center w={'100%'} justifyContent={'space-around'} gap={4} alignItems={"flex-start"}>
          <Box display={'flex'} gap={4} flexDir={'column'}>
            <Button
              size={'lg'}
              variant={'solid'}
              bg={'green.300'}
              rightIcon={<BiLike />}
              type="button"
              onClick={() => dispatch(upvoteStreamer(_id))}
              _hover={{
                bg: 'green.500',
                shadow: 'md',
                color: 'white',
              }}
            >
              Upvote
            </Button>
            <Text fontSize={16}>
              Upvoted by{' '}
              <Box as={'span'} fontWeight={600}>
                {' '}
                {upvotes}{' '}
              </Box>
              {upvotes === 1 ? 'user' : 'users'}
            </Text>
          </Box>
          <Box display={'flex'} gap={4} flexDir={'column'}>
            <Button
              size={'lg'}
              variant={'solid'}
              bg={'red.300'}
              leftIcon={<BiDislike />}
              type="button"
              onClick={() => dispatch(downvoteStreamer(_id))}
              _hover={{
                bg: 'red.500',
                shadow: 'md',
                color: 'white',
              }}
            >
              Downvote
            </Button>
            <Text fontSize={16}>
              {' '}
              Downvoted by{' '}
              <Box as={'span'} fontWeight={600}>
                {' '}
                {downvotes}{' '}
              </Box>
              {downvotes === 1 ? 'user' : 'users'}
            </Text>
          </Box>
        </Center>
      </Flex>
    </Flex>
  );
};
