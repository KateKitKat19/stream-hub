import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Button, HStack } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
// import { selectError } from 'redux/auth/selectors';
// import { useSelector } from "react-redux";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const isAddStreamerPageCurrent = location.pathname.includes('/join');

  return (
    <HStack alignItems={'space-between'} spacing={4}>
      <Button
        type="button"
        onClick={() =>
          navigate(isAddStreamerPageCurrent ? '/streamers' : '/join')
        }
        size="md"
        bg={'teal.400'}
        color={'white'}
        _hover={{
          bg: 'teal.500',
        }}
      >
        {isAddStreamerPageCurrent ? 'Back to streamers' : 'Add streamer'}
      </Button>
      <Button
        type="button"
        onClick={() => dispatch(logOut()).unwrap().then(navigate('/'))}
        size="md"
        bg={'red.400'}
        color={'white'}
        _hover={{
          bg: 'red.500',
        }}
      >
        Logout
      </Button>
    </HStack>
  );
};
