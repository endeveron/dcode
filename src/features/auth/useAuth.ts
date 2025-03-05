import { useNavigate } from 'react-router-dom';

import { clearStore, IAuthResData, storeAuthData } from 'features/auth';
import { useAppDispatch } from 'store';

const useAuth = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const storeData = (data: IAuthResData) => {
    const token = data?.token;
    const user = data?.user;
    token && user && dispatch(storeAuthData(data));
  };

  const signIn = (data: IAuthResData, cb: () => void) => {
    if (!data) return;
    storeData(data);
    cb();
  };

  const signOut = () => {
    dispatch(clearStore());
    navigate('/');
  };

  return { signIn, signOut };
};

export { useAuth };
