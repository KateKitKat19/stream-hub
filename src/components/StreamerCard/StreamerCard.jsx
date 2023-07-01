import { Image } from '@chakra-ui/react';
import { Flex, Box, Text, VStack, Spacer } from '@chakra-ui/react';

export const StreamerCard = ({ streamer }) => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      rounded={'md'}
      flexDir={'column'}
      bg={'#4EA699'}
      p={6}
      boxShadow="base"
      flexGrow={1}
      height={'100%'}
    >
      <Box
        color={'white'}
        p={'4'}
        display="flex"
        alignItems={'center'}
        flexDir={'column'}
        maxW={'300px'}
        flexGrow={1}
      >
        <Image
          borderRadius="full"
          boxSize="200px"
          objectFit="cover"
          boxShadow="xs"
          src={streamer.image}
          alt={streamer.name}
          fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/1280px-Placeholder_view_vector.svg.png"
        />
        <VStack flexGrow={1}>
          <Text fontSize="2xl" mt={2}>
            {streamer.name}
          </Text>

          <Text minW={'150px'} textAlign={'center'}>
            {streamer.description}
          </Text>
          <Spacer></Spacer>
          <Text
            bg={'teal.300'}
            w={'100%'}
            rounded={'full'}
            fontSize="xl"
            mt={2}
            textAlign={'center'}
            p={2}
          >
            {streamer.platform}
          </Text>
        </VStack>
      </Box>
      <Box color={'white'} textAlign={'center'}>
        <Text>
          Upvoted by{' '}
          <Box as={'span'} fontWeight={600}>
            {' '}
            {streamer.upvotes}{' '}
          </Box>
          {streamer.upvotes === 1 ? 'user' : 'users'}
        </Text>
        <Text mt={2}>
          {' '}
          Downvoted by{' '}
          <Box as={'span'} fontWeight={600}>
            {' '}
            {streamer.downvotes}{' '}
          </Box>
          {streamer.downvotes === 1 ? 'user' : 'users'}
        </Text>
      </Box>
    </Flex>
  );
};
