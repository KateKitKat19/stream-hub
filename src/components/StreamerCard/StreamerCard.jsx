import { Image } from '@chakra-ui/react';
import { Flex, Box, Text, VStack, Spacer } from '@chakra-ui/react';

export const StreamerCard = ({ streamer }) => {
  return (
    <Flex
      align={'center'}
      justify={'center'}
      rounded={'md'}
      flexDir={'column'}
      bg={'#023C40'}
      p={6}
      boxShadow="base"
      flexGrow={1}
      height={'100%'}
      _hover={{
        shadow: 'md',
        transform: 'translateY(-8px)',
        transitionDuration: '0.25s',
        transitionTimingFunction: 'ease-in-out',
      }}
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

          <Text minW={'150px'} textAlign={'center'} maxW={'300px'}>
            {streamer.description}
          </Text>
          <Spacer></Spacer>
          <Text
            bg={'#4EA699'}
            rounded={'full'}
            fontSize="xl"
            mt={2}
            textAlign={'center'}
            p={'8px 18px'}
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
