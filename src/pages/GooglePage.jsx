import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { setGoogleData } from 'redux/auth/slice';
import { refreshUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { Loader } from 'components/Loader/Loader';

export default function GooglePage() {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const userSavedData = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!params) return;
    (async () => {
      await dispatch(setGoogleData(params));
      if (userSavedData) {
        await dispatch(refreshUser(userSavedData));
      }
    })();
  }, [params, dispatch, userSavedData]);

  return <Loader></Loader>;
}
