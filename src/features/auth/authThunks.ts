import { Dispatch } from 'react';

import { persistor } from 'store';
import { resetAuthState } from './authSlice';
import { IUser, resetUserState, setUser } from 'features/user';
import { IAuthResData, setAuthData } from 'features/auth';
import { resetCodeState } from 'features/code';

interface IStoreAuthDataAction {
  payload: string | IUser;
  type: string;
}
export const storeAuthData =
  ({ token, user }: IAuthResData) =>
  async (dispatch: Dispatch<IStoreAuthDataAction>) => {
    dispatch(setAuthData(token));
    dispatch(setUser(user));
  };

export const clearStore =
  () =>
  async (
    dispatch: Dispatch<{
      payload: undefined;
      type: string;
    }>
  ) => {
    await persistor.purge();
    dispatch(resetAuthState());
    dispatch(resetCodeState());
    dispatch(resetUserState());
  };
